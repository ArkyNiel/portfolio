let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.classList.add('hidden');
    } else {
        // Scroll up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Add click event listeners to project screenshots
document.querySelectorAll('.project-screenshots img').forEach(img => {
    img.addEventListener('click', function() {
        // Create full-size image container
        const fullSizeContainer = document.createElement('div');
        fullSizeContainer.className = 'full-size-image';
        
        // Create image element
        const fullSizeImg = document.createElement('img');
        fullSizeImg.src = this.src;
        
        // Add image to container
        fullSizeContainer.appendChild(fullSizeImg);
        
        // Add container to body
        document.body.appendChild(fullSizeContainer);
        
        // Prevent scrolling when full-size image is shown
        document.body.style.overflow = 'hidden';
        
        // Close full-size image when clicked
        fullSizeContainer.addEventListener('click', function() {
            document.body.removeChild(this);
            document.body.style.overflow = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeContact = document.getElementById('closeContact');

    contactBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeContact.addEventListener('click', function() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modal when clicking outside
    contactModal.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && contactModal.classList.contains('active')) {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});