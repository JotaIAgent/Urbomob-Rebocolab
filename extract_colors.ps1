$products = @(
  "banco-quest-wood", "banco-quest", "banco-quest-low",
  "banco-nexo-wood", "banco-nexo", "banco-nexo-low",
  "banco-flow-r", "banco-flow-c", "banco-flow-l",
  "banco-orio", "banco-orio-wood",
  "banco-rise", "banco-bloc", "banco-zen",
  "lixeira-nook", "lixeira-sync", "lixeira-sync-low",
  "lixeira-serini", "lixeira-trama", "lixeira-versa", "lixeira-radi",
  "mesa-orio", "mesa-quest",
  "paraciclo-beam", "paraciclo-plex", "paraciclo-pod"
)

# We already have the banco-quest-wood raw HTML cached in step 102
# Let's just search for GridShape colors in each product's raw HTML section
# Since the entire site data is embedded in each page via the pageData prop,
# we can extract from the quest-wood page - it contains ALL product data!

$file = "C:\Users\joaop\.gemini\antigravity\brain\f0a7529f-8542-43a1-ae2f-3f659746a066\.system_generated\steps\102\output.txt"
$content = Get-Content $file -Raw

# Find all GridShape elements with their colors
$pattern = '"type":\[0,"GridShape"\].*?"color":\[0,"(rgb\(\d+,\s*\d+,\s*\d+\))"\]'
$matches = [regex]::Matches($content, $pattern)

Write-Output "=== ALL GridShape colors found ==="
foreach($m in $matches) {
    Write-Output "Color: $($m.Groups[1].Value)"
}
