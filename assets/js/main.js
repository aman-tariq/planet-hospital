    document.querySelectorAll('.image-text-section img').forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.animation = 'none'; // Stop the infinite animation on hover
            image.style.transform = 'translateY(-10px)'; // Move the image up on hover
        });

        image.addEventListener('mouseleave', () => {
            image.style.animation = 'upDown 3s ease-in-out infinite'; // Restart the animation
            image.style.transform = 'translateY(0)'; // Reset the position
        });
    });
