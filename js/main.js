import as THREE from/node_modules/three/build/three.module.js'; 
// Настройки сцены 
const scene = new THREE.Scene(); 
const spaceTexture = new THREE. TextureLoader().load('images/space.jpg'); 
scene.background spaceTexture; 
// Настройка камеры 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
// Настройка renderers 
const renderer = new THREE.WebGL Renderer(); 
renderer.setSize(window.innerWidth, window.innerHeight); 
renderer.setClearColor (0xffffff, 0); 
document.body.appendChild(renderer.domElement); 
// Глобальное освещение 
const ambientLight = new THREE.AmbientLight(0xffffff); 
scene.add(ambientLight); 
// Настройки куба 
const cubeTexture = new THREE.TextureLoader().load('images/cube.jpg'); 
const cube new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map: cubeTexture })); 
cube.position.z = -2; 
cube.rotation.y = 10; 
cube.rotation.x = 10; 
scene.add(cube); 
// Анимация | каждый кадр 
function animate() { 
requestAnimation Frame (animate); 
renderer.render(scene, camera); 
} 
// Запуск анимации 
animate();