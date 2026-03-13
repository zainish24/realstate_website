# PowerShell script to download images from X and Y Property website

$baseUrl = "https://xandyproperty.com/wp-content/uploads/2025/10/"
$outputDir = "c:\Users\ADMIN\OneDrive\Studies\Backend\github_uploads\realstate_website\public\images"

# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "$outputDir\developers"
New-Item -ItemType Directory -Force -Path "$outputDir\testimonials"

# Developer logos
$developerImages = @(
    "1-4.png",
    "2-2.png",
    "3.png",
    "4.png",
    "modon-logo-removebg-preview.png",
    "Belsio-Client-SAAS-Properties.webp",
    "BARAKA-Black-300x252-1.png",
    "sobha-ZMhITtfQCc.png",
    "ej2s9sVXYab6tQFxgMuzNZNHjQz7o0qtiT69orkp-removebg-preview.png"
)

# Main images
$mainImages = @(
    "buy-and-rent-in-abu-dhabi.png",
    "ThinkstockPhotos-158519569_1.jpg",
    "Captureyas.png",
    "modern-bedroom-interior-in-earth-tones-3d-rendering.jpg",
    "modern-scandianvian-living-room-interior-with-design-sofa-.jpg",
    "young-couple-holding-tablet-with-advertisement-of-real-estate-on-sale.jpg",
    "real-estate-agent.jpg",
    "real-estate-sale-and-happy-family-outside-of-new-house-excited-and-smiling-in-a-garden-property-.jpg",
    "two-business-women-meeting-at-cafe-table.jpg"
)

# Testimonial images
$testimonialImages = @(
    "1.jpg",
    "5.jpg",
    "14.jpg"
)

Write-Host "Downloading developer logos..." -ForegroundColor Green
foreach ($image in $developerImages) {
    $url = $baseUrl + $image
    $output = "$outputDir\developers\$image"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
        Write-Host "Downloaded: $image" -ForegroundColor Cyan
    } catch {
        Write-Host "Failed to download: $image" -ForegroundColor Red
    }
}

Write-Host "`nDownloading main images..." -ForegroundColor Green
foreach ($image in $mainImages) {
    $url = $baseUrl + $image
    $output = "$outputDir\$image"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
        Write-Host "Downloaded: $image" -ForegroundColor Cyan
    } catch {
        Write-Host "Failed to download: $image" -ForegroundColor Red
    }
}

Write-Host "`nDownloading testimonial images..." -ForegroundColor Green
foreach ($image in $testimonialImages) {
    $url = $baseUrl + $image
    $output = "$outputDir\testimonials\$image"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
        Write-Host "Downloaded: $image" -ForegroundColor Cyan
    } catch {
        Write-Host "Failed to download: $image" -ForegroundColor Red
    }
}

Write-Host "`nDownload complete!" -ForegroundColor Green
Write-Host "Images saved to: $outputDir" -ForegroundColor Yellow
