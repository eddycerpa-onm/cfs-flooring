# Audit script to check for arbitrary Tailwind CSS values (e.g. w-[300px], text-[12px], h-[500px])
# Ignores [var(--...)] CSS variables.

$srcPath = Join-Path $PSScriptRoot "..\src"
$arbitraryMatches = Get-ChildItem -Path $srcPath -Recurse -Include *.astro, *.jsx, *.tsx, *.vue, *.css | 
    Select-String -Pattern '\b[a-z]+-\[[^\]]+\]' | 
    Where-Object { 
        $_.Line -notmatch 'var\(--' -and 
        $_.Line -notmatch 'x-data|x-show|x-transition|@import|url\(|clamp\(|calc\(' 
    }

if ($arbitraryMatches) {
    Write-Host "❌ ALERT: Found non-variable arbitrary Tailwind CSS values:" -ForegroundColor Red
    $arbitraryMatches | ForEach-Object { Write-Host "$($_.Filename):$($_.LineNumber): $($_.Line.Trim())" }
    exit 1
} else {
    Write-Host "✅ PASSED: No arbitrary hardcoded Tailwind CSS values detected in src/" -ForegroundColor Green
    exit 0
}
