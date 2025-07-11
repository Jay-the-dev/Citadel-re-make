  // DOM elements
    const expandBtn = document.getElementById('expandBtn');
    const panel = document.getElementById('panel');
    const icon = document.getElementById('icon');
    const placeName = document.getElementById('placeName');
    const placeDescription = document.getElementById('placeDescription');
    const placeImage = document.getElementById('placeImage');
    const placeButtons = document.querySelectorAll('.place-btn');

    // Panel expand/collapse functionality
    expandBtn.addEventListener('click', function() {
        const isExpanded = panel.classList.contains('expanded');
        
        if (isExpanded) {
            // Collapse panel
            panel.classList.remove('expanded');
            icon.textContent = '+';
            icon.classList.remove('rotate');
        } else {
            // Expand panel
            panel.classList.add('expanded');
            icon.textContent = '−';
            icon.classList.add('rotate');
        }
    });

    // Place selection functionality
    placeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedPlace = this.getAttribute('data-place');
            const placeData = places[selectedPlace];
            
            // Update active button
            placeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update place name immediately
            placeName.textContent = placeData.name;
            
            // Fade out description and image
            placeDescription.classList.remove('fade-in');
            placeImage.classList.remove('fade-in');
            
            // Update content and fade in after a short delay
            setTimeout(() => {
                placeDescription.textContent = placeData.description;
                placeImage.src = placeData.image;
                placeImage.alt = placeData.name;
                
                // Fade in new content
                placeDescription.classList.add('fade-in');
                placeImage.classList.add('fade-in');
            }, 100);
        });
    });