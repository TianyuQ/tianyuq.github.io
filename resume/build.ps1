$ErrorActionPreference = 'Stop'
$builder = Join-Path $PSScriptRoot 'build.mjs'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue

if ($nodeCommand) {
    & $nodeCommand.Source $builder
    if ($LASTEXITCODE -ne 0) { throw "HTML build failed: $LASTEXITCODE" }
} else {
    $codeExecutable = Join-Path $env:LOCALAPPDATA 'Programs\Microsoft VS Code\Code.exe'
    if (-not (Test-Path -LiteralPath $codeExecutable)) {
        throw 'Node.js was not found. Install Node.js, then run: node resume/build.mjs'
    }
    $previousElectronMode = $env:ELECTRON_RUN_AS_NODE
    try {
        $env:ELECTRON_RUN_AS_NODE = '1'
        & $codeExecutable $builder | Out-Host
        if ($LASTEXITCODE -ne 0) { throw "HTML build failed: $LASTEXITCODE" }
    } finally {
        $env:ELECTRON_RUN_AS_NODE = $previousElectronMode
    }
}
