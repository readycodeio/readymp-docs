$docsSource = "./api"
$docsTarget = "../../docs/wukongmp-api-reference"

# purge the source folder completely
Remove-Item -Path $docsSource\* -Recurse -Force

docfx metadata

# purge all .md files in the target directory recursively
Get-ChildItem -Path $docsTarget -Filter *.md -Recurse | Remove-Item -Force

# remove all empty directories in the target directory recursively
Get-ChildItem -Path $docsTarget -Directory -Recurse | Where-Object {
    @(Get-ChildItem -Path $_.FullName -Recurse).Count -eq 0
} | Remove-Item -Force

# Copy all .md files from source to target, but rewrite the first line of each in such a way:
# The first line of each files is a title like so: "# <a id="WukongMp_Sdk"></a> Namespace WukongMp.Sdk"
# We need to remove the <a> tag and the id attribute, so that it becomes: "# Namespace WukongMp.Sdk"
Get-ChildItem -Path $docsSource -Filter *.md | ForEach-Object {
    Write-Host "Processing file: $($_.Name)"
    
    $content = Get-Content $_.FullName
    $firstLine = $content[0]
    $newFirstLine = $firstLine -replace '<a id="[^"]+"></a>', ''
    $newFirstLine = $newFirstLine -replace '\\>', '>'
    $content[0] = $newFirstLine
    $newContent = $content -join "`n"
    
    # extract namespace from the file, which is the 3rd line of it.
    # format: "Namespace: [WukongMp.Sdk.Entities](WukongMp.Sdk.Entities.md)"
    # create the target directory if it doesn't exist
    # place the .md file in that directory
    
    # if the 3rd line doesn't match the expected format, log a warning and skip the file
    if ($content[2] -notmatch 'Namespace: .+') {
        return
    }
    
    $namespace = $content[2] -replace 'Namespace: \[(.+?)\].+', '$1'
    $targetDir = Join-Path $docsTarget $namespace
    $targetPath = "$targetDir\$($_.Name)"
    
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir | Out-Null
    }

    Set-Content -Path $targetPath -Value $newContent
}