param(
  [string]$Destination = ".\\export-ready"
)

$ErrorActionPreference = "Stop"

$source = Split-Path -Parent $PSScriptRoot
$target = Resolve-Path -LiteralPath $source
$destinationPath = Join-Path $target $Destination

if (Test-Path -LiteralPath $destinationPath) {
  Remove-Item -LiteralPath $destinationPath -Recurse -Force
}

New-Item -ItemType Directory -Path $destinationPath | Out-Null

$excludeDirs = @(".next", "node_modules", ".vercel", "export-ready")
$excludeFiles = @("*.log", "build-output*.txt", ".env.local", ".env")

$robocopyArgs = @(
  $source,
  $destinationPath,
  "/E",
  "/NFL",
  "/NDL",
  "/NJH",
  "/NJS",
  "/NC",
  "/NS",
  "/XD"
) + $excludeDirs + @("/XF") + $excludeFiles

& robocopy @robocopyArgs | Out-Null
$exitCode = $LASTEXITCODE

if ($exitCode -ge 8) {
  throw "robocopy failed with exit code $exitCode"
}

Write-Host "Prepared clean export at $destinationPath"
