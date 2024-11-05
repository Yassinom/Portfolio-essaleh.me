import React, { useEffect } from 'react';

const StarryBackground = () => {
    useEffect(() => {
        const canvas = document.getElementById('starry-background');
        const context = canvas.getContext('2d');
        const stars = [];

        // Resize canvas to fit the screen
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Create random stars
        function createStars() {
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2,   // Same radius for all stars
                    speed: Math.random() * 0.2 + 0.2,
                    opacity: Math.random() * 0.4 + 0.2  // Add random opacity between 0.3 and 0.8
                });
            }
        }

        // Draw stars on canvas
        function drawStars() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                context.globalAlpha = star.opacity; // Set opacity for each star
                context.fillStyle = 'white';
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                context.fill();
                
                // Move star
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0; // Reset to the top
                }
            });

            requestAnimationFrame(drawStars);
        }

        // Initialize
        resizeCanvas();
        createStars();
        drawStars();

        // Resize the canvas when the window is resized
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas id="starry-background" className="fixed top-0 left-0 z-[-1]" />;
};

export default StarryBackground;
