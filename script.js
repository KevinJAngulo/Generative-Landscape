window.addEventListener('deviceorientation', function(event) {
    var alpha = event.alpha; // Rotation around the z-axis
    var beta = event.beta;  // Front-to-back tilt
    var gamma = event.gamma; // Left-to-right tilt
  
    // Example: Change background color based on tilt
    var landscape = document.getElementById('landscape');
    var hue = Math.abs(gamma) * 3; // Scale gamma for hue rotation
    landscape.style.backgroundColor = 'hsl(' + hue + ', 100%, 50%)';
    
    // Advanced: Adjust a Three.js scene based on alpha, beta, gamma
    // This part requires integrating with Three.js for 3D graphics
  });
  