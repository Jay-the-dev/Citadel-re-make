// Stats JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Stats section functionality
});
// Select all stats items
    const statsItems = document.querySelectorAll('.stats-item');
    
    // Add hover effects or animations if needed
    statsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease-in-out';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Optional: Add intersection observer for animations on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        statsItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(item);
        });
    }
 
 // Header JavaScript
// document.addEventListener('DOMContentLoaded', function() {
// // Add click events to navigation items
// });
// const navItems = document.querySelectorAll('nav ul li');
// navItems.forEach(item => {
//     item.addEventListener('click', function() {
//         console.log('Navigation item clicked:', this.textContent);
//         // Add your navigation logic here
//     });
// });

// // Add click event to client login button
// const clientLoginBtn = document.querySelector('.client-login button');
// if (clientLoginBtn) {
//     clientLoginBtn.addEventListener('click', function() {
//         console.log('Client login button clicked');
//         // Add your login logic here
//     });
// }

// Handle dropdown clicks
// const dropdownLinks = document.querySelectorAll('.dropdown a');
// dropdownLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         console.log('Dropdown link clicked:', this.textContent);
//         // Add your dropdown navigation logic here
//     });
// });

// // Close dropdown when clicking outside
// document.addEventListener('click', function(e) {
//     const dropdowns = document.querySelectorAll('.dropdown');
//     dropdowns.forEach(dropdown => {
//         if (!dropdown.contains(e.target)) {
//             const dropdownContent = dropdown.querySelector('.dropdown-content');
//             if (dropdownContent) {
//                 dropdownContent.style.display = 'none';
//             }
//         }
//     });
// });

// Add any JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Ensure video plays properly on all browsers
    const video = document.querySelector('video');
    if (video) {
        video.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
        });
    }

    // Add click event to explore button
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your navigation logic here
            console.log('Explore button clicked');
        });
    }
});