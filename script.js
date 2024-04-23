window.onload = function() {
    var container = document.querySelector('.container');
    TweenMax.to(container, {
        opacity: 1, // Fade in the container
        duration: 2, // Adjust the duration to your preference
        onStart: function() {
            startCloudAnimation(); // Start the cloud animation after the container has faded in
            startRiceAnimation(); // Start the rice animation after the container has faded in
        },
    });
}

function startRiceAnimation() {
    const elements = document.querySelectorAll('.rice'); // Select only rice
    elements.forEach((element, index) => {
        // Set initial position
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        const initialX = (Math.random() - 0.5) * (window.innerWidth - elementWidth);
        const initialY = (Math.random() - 0.5) * (window.innerHeight - elementHeight);
        element.style.left = `${initialX}px`;
        element.style.top = `${initialY}px`;

        // Fade in the element and then animate to random position
        const variance = 100; // Adjust this to change how far the elements can go
        const finalX = initialX + (Math.random() - 0.5) * variance;
        const finalY = initialY + (Math.random() - 0.5) * variance;
        TweenMax.to(element, {
            opacity: 1, // Fade in the element
            duration: 2, // Adjust the duration to your preference
            delay: index * 0.5, // Delay each animation to create a staggered effect
            onComplete: function() {
                // Animate the element to the final position after it has faded in
                TweenMax.to(element, {
                    x: finalX,
                    y: finalY,
                    duration: 20, // Increase the duration to slow down the animation
                });
            },
        });
    });
}

function startCloudAnimation() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
        // Set initial position
        const cloudWidth = cloud.offsetWidth;
        const cloudHeight = cloud.offsetHeight;
        const initialX = (Math.random() - 0.5) * (window.innerWidth - cloudWidth);
        const initialY = (Math.random() - 0.5) * (window.innerHeight - cloudHeight);
        cloud.style.left = `${initialX}px`;
        cloud.style.top = `${initialY}px`;

        // Fade in the cloud and then animate to random position around the center of the container
        const variance = 100; // Adjust this to change how far from the center the clouds can go
        const finalX = containerCenterX + (Math.random() - 0.5) * variance;
        const finalY = containerCenterY + (Math.random() - 0.5) * variance;
        TweenMax.to(cloud, {
            opacity: 1, // Fade in the cloud
            duration: 2, // Adjust the duration to your preference
            delay: 0, // Delay each animation to create a staggered effect
            onComplete: function() {
                // Animate the cloud to the final position after it has faded in
                TweenMax.to(cloud, {
                    x: finalX,
                    y: finalY,
                    duration: 20, // Increase the duration to slow down the animation
                });
            },
        });
    });
}