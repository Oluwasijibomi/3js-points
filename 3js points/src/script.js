import "./style.css";
import * as THREE from "three";

import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

/**
 * Base
 */

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(10, sizes.width / sizes.height);
scene.add(camera);

/**
 * Models
 */

const loader = new PLYLoader();
console.log(loader);

let mesh;

loader.load("./models/eye.ply", function (points) {
  const material = new THREE.PointsMaterial({
    color: 0x888888,
    vertexColors: true,
    size: 0.01,
    transparent: true,
    opacity: 0.8,
  });
  mesh = new THREE.Points(points, material);
  console.log(mesh);
  scene.add(mesh);
  console.log(points);
});

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.render(scene, camera);
