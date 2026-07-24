$docsSource = "./api"
$docsTarget = "../../oblivion-mp/api-reference"

# purge the source folder completely
Remove-Item -Path "$docsSource\*" -Recurse -Force -ErrorAction SilentlyContinue

docfx metadata

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
    if ($content[2] -notmatch '^Namespace:\s+\[(.+?)\]\([^)]+\)') {
        # this is the namespace file, which just links to its members
        $namespace = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)

        # the first line matches "# Namespace NamespaceName", we need to remove the word "Namespace" in there
        $content[0] = $content[0] -replace '^# Namespace (.+)$', '# $1'
    }

    $namespace = $matches[1]
    $fileNamespaceMap[$_.Name] = $namespace

    $targetDir = Join-Path $docsTarget $namespace
    $targetPath = Join-Path $targetDir $_.Name

    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    Set-Content -Path $targetPath -Value $content -Encoding UTF8
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