document.addEventListener('DOMContentLoaded', () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    var plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    plane.rotation.x = -Math.PI / 2; // Rotate the plane to lay flat

    // Adjust vertices to create mountains
    geometry.vertices.map(v => {
        v.z = Math.random() * 10; // Randomize vertex height
    });

    camera.position.z = 50;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha;
        camera.position.x = alpha * 0.1;
        camera.lookAt(scene.position);
    });
});
