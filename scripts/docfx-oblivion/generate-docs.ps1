$docsSource = "./api"
$docsTarget = "../../oblivion-mp/api-reference"

# purge the source folder completely
Remove-Item -Path "$docsSource\*" -Recurse -Force -ErrorAction SilentlyContinue

# The SDK writes its doc comments without <summary> tags, and docfx only reads <summary>: stage the assemblies with
# their XML and wrap each member's untagged text in a <summary> first, then point docfx at the staged copy
$staging = Join-Path $PSScriptRoot "_staging"
Remove-Item -Path $staging -Recurse -Force -ErrorAction SilentlyContinue

$blockTags = @('summary', 'remarks', 'param', 'typeparam', 'returns', 'exception', 'example', 'value', 'exclude',
    'inheritdoc', 'seealso', 'include', 'permission')

function Add-MissingSummaries([string] $path) {
    $doc = New-Object System.Xml.XmlDocument
    $doc.Load($path)

    foreach ($member in $doc.SelectNodes('//member')) {
        if ($member.SelectSingleNode('summary')) {
            continue
        }

        $loose = @($member.ChildNodes | Where-Object {
            ($_.NodeType -eq 'Text') -or (($_.NodeType -eq 'Element') -and ($blockTags -notcontains $_.LocalName))
        })

        $hasContent = @($loose | Where-Object { ($_.NodeType -eq 'Element') -or ($_.Value.Trim().Length -gt 0) }).Count -gt 0
        if (-not $hasContent) {
            continue
        }

        $summary = $doc.CreateElement('summary')
        foreach ($node in $loose) {
            [void]$summary.AppendChild($node)
        }

        [void]$member.PrependChild($summary)
    }

    $doc.Save($path)
}

$config = Get-Content -Path "docfx.json" -Raw | ConvertFrom-Json
$index = 0
foreach ($source in $config.metadata[0].src) {
    $target = Join-Path $staging "src$index"
    New-Item -ItemType Directory -Path $target -Force | Out-Null

    foreach ($file in $source.files) {
        $dll = Join-Path $source.src $file
        Copy-Item -Path $dll -Destination $target
        $xml = [System.IO.Path]::ChangeExtension($dll, ".xml")
        if (Test-Path $xml) {
            Copy-Item -Path $xml -Destination $target
            Add-MissingSummaries (Join-Path $target (Split-Path $xml -Leaf))
        }
    }

    # every other assembly beside them goes along too, unlisted, so docfx can resolve what the listed ones
    # reference; left unresolved, a value type reads as a class and every type argument comes out nullable
    Get-ChildItem -Path $source.src -Filter *.dll -File |
        Where-Object { $source.files -notcontains $_.Name } |
        Copy-Item -Destination $target

    $source.src = $target
    $index++
}

$stagedConfig = Join-Path $staging "docfx.json"
$config.metadata[0].output = (Resolve-Path ".").Path + "/api"
$config.metadata[0].filter = (Resolve-Path "filter.yml").Path
$config | ConvertTo-Json -Depth 20 | Set-Content -Path $stagedConfig -Encoding UTF8

docfx metadata $stagedConfig

# purge all .md files in the target directory recursively
Get-ChildItem -Path $docsTarget -Filter *.md -Recurse -File | Remove-Item -Force

# remove all empty directories in the target directory recursively
Get-ChildItem -Path $docsTarget -Directory -Recurse |
    Sort-Object FullName -Descending |
    Where-Object { @(Get-ChildItem -Path $_.FullName -Force).Count -eq 0 } |
    Remove-Item -Force

# build an index of source files -> namespace
$fileNamespaceMap = @{}

# copy all .md files from source to target, fixing title line and splitting by namespace
Get-ChildItem -Path $docsSource -Filter *.md -File | ForEach-Object {
    Write-Host "Processing file: $($_.Name)"

    $content = Get-Content -Path $_.FullName -Encoding UTF8
    if ($content.Count -lt 3) {
        Write-Warning "File too short, skipping: $($_.FullName)"
        return
    }

    # fix title line
    $content[0] = $content[0] -replace '<a id="[^"]+"></a>\s*', ''
    $content[0] = $content[0] -replace '\\>', '>'

    # replace \- with - in all lines to fix escaped dashes in links
    for ($i = 0; $i -lt $content.Count; $i++) {
        $content[$i] = $content[$i] -replace '\\-(\d)', '-$1'
    }

    # extract namespace from 3rd line
    if ($content[2] -match '^Namespace:\s+\[(.+?)\]\([^)]+\)') {
        $namespace = $matches[1]
    }
    else {
        # this is the namespace file, which just links to its members. A non-match leaves
        # $matches holding the previous file's groups, so the name has to come from the file.
        $namespace = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)

        # the first line matches "# Namespace NamespaceName", we need to remove the word "Namespace" in there
        $content[0] = $content[0] -replace '^# Namespace (.+)$', '# $1'
    }

    $fileNamespaceMap[$_.Name] = $namespace

    $targetDir = Join-Path $docsTarget $namespace
    $targetPath = Join-Path $targetDir $_.Name

    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    Set-Content -Path $targetPath -Value $content -Encoding UTF8
}

# the item catalogs hold over a thousand fields each, all FormIds with no description; a table of name and form id
# reads far better than a section per field, and the values come straight from the generated catalog sources
$catalogSources = "../../../../oblivion-mod/readym-gameserver/src/ReadyM.Relay.Common.Oblivion/Items"
$catalogPages = Join-Path $docsTarget "ReadyM.Relay.Common.Oblivion.Items"

Get-ChildItem -Path $catalogPages -Filter "ReadyM.Relay.Common.Oblivion.Items.Items.*.md" -File -ErrorAction SilentlyContinue | ForEach-Object {
    $catalog = $_.BaseName.Substring("ReadyM.Relay.Common.Oblivion.Items.Items.".Length)
    $source = Join-Path $catalogSources "$($catalog)_Generated.cs"

    if (-not (Test-Path $source)) {
        Write-Warning "No catalog source for $catalog, leaving its page as generated"
        return
    }

    $rows = Select-String -Path $source -Pattern 'public static readonly FormId (\w+) = new\((0x[0-9A-Fa-f]+)\);' |
        ForEach-Object { "| ``$($_.Matches[0].Groups[1].Value)`` | ``$($_.Matches[0].Groups[2].Value)`` |" }

    $content = Get-Content -Path $_.FullName -Raw
    $fieldsAt = $content.IndexOf("## Fields")
    if ($fieldsAt -lt 0) {
        return
    }

    $table = @(
        "## Items",
        "",
        "Every entry of ``Items.$catalog``, with its form id. Use your browser's find to look one up.",
        "",
        "| Name | Form id |",
        "| --- | --- |"
    ) + $rows

    Set-Content -Path $_.FullName -Value ($content.Substring(0, $fieldsAt) + ($table -join "`n") + "`n") -Encoding UTF8
    Write-Host "Catalog $catalog as a table of $($rows.Count) items"
}

# rewrite links after files have been moved into namespace folders
Get-ChildItem -Path $docsTarget -Filter *.md -Recurse -File | ForEach-Object {
    Write-Host "Rewriting links in file: $($_.FullName)"

    $filePath = $_.FullName
    $fileDir  = $_.DirectoryName
    $content  = Get-Content -Path $filePath -Raw

    # replace all <xref href="ReadyM.Api.Idents.PlayerId" data-throw-if-not-resolved="false"></xref> with [PlayerId](ReadyM.Api.Idents.PlayerId.md)
    $newContent = [regex]::Replace($content, '<xref\s+href="([^"]+)"[^>]*></xref>', {
        param($match)

        $target = $match.Groups[1].Value
        # split by dot and take the last part as link text
        $text = $target.Split('.')[-1]
        return "**$text**" # bold the link text to make it stand out, since these are usually types or members
    })

    $newerContent = [regex]::Replace(
        $newContent,
        '\[([^\]]+)\]\(([^)]+)\)',
        {
            param($match)

            $text = $match.Groups[1].Value
            $link = $match.Groups[2].Value

            # docfx escapes the anchor separator as "\#", which would hide the ".md#" shape
            # from the checks below and leave the link pointing at the wrong folder
            $link = $link -replace '\\#', '#'

            # leave absolute URLs, anchors, mailto, and non-md links unchanged
            if ($link -match '^(https?://|mailto:|#)' -or $link -notmatch '\.md($|#)') {
                return $match.Value
            }

            # split file and anchor, if any
            $parts = $link -split '#', 2
            $linkFile = [System.IO.Path]::GetFileName($parts[0])
            $anchor = if ($parts.Count -gt 1) { "#" + $parts[1] } else { "" }

            if (-not $fileNamespaceMap.ContainsKey($linkFile)) {
                Write-Warning "Target file not found in namespace map: $linkFile (from $filePath)"
                return $match.Value
            }

            $targetNamespace = $fileNamespaceMap[$linkFile]
            $targetRelativePath = Join-Path $targetNamespace $linkFile

            # path is always ../namespace/file.md
            $relativePath = Join-Path ".." $targetRelativePath
            $relativePath = $relativePath -replace '\\', '/' # ensure URL format
            $relativePath = $relativePath -replace '\\-', '-' # - is not escaped

            return "[$text]($relativePath$anchor)"
        }
    )

    Set-Content -Path $filePath -Value $newerContent -Encoding UTF8
}

# a title and description in each page's front matter, for search, link previews and the llms.txt files
& (Join-Path $PSScriptRoot "../Add-ApiFrontMatter.ps1") -Path $docsTarget
