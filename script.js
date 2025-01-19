// Function to display fullscreen image on button click
function showFullscreen(subject, type) {
    const fullscreenView = document.getElementById('fullscreen-view');
    const fullscreenTitle = document.getElementById('fullscreen-title');
    const fullscreenImage = document.getElementById('fullscreen-image');

    fullscreenTitle.textContent = `${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${type.toUpperCase()}`;
    fullscreenImage.src = `C:\\Users\\talel\\OneDrive\\Bureau\\histograms WHOLE YEAR\\static\\${subject}.${type}.png`;  // Adjust path as needed
    fullscreenView.style.display = 'flex';
}

// Function to close fullscreen view and go back to the main page
function goBack() {
    const fullscreenView = document.getElementById('fullscreen-view');
    fullscreenView.style.display = 'none';
}

// Tooltip functionality - appears when hovering over the fullscreen image
const tooltip = document.getElementById('tooltip');
const img = document.getElementById('fullscreen-image');

// Event listener to show the tooltip when the image is hovered
img.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    tooltip.style.left = `${x + 10}px`;
    tooltip.style.top = `${y + 10}px`;

    // Update tooltip content with cursor position
    tooltip.textContent = `X: ${Math.floor(x)}, Y: ${Math.floor(y)}`;
    tooltip.style.display = 'block';
});

// Hide tooltip when mouse leaves the image
img.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});
