'use client'; // Important for Next.js 13+ app directory

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Stats from 'three/examples/jsm/libs/stats.module';

const ThreeJSHorse = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const mixerRef = useRef(null);
  const animationIdRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.y = 300;
    cameraRef.current = camera;
    
    // Lighting
    const light1 = new THREE.DirectionalLight(0xefefff, 5);
    light1.position.set(1, 1, 1).normalize();
    scene.add(light1);
    
    const light2 = new THREE.DirectionalLight(0xffefef, 5);
    light2.position.set(-1, -1, -1).normalize();
    scene.add(light2);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Stats
    const stats = new Stats();
    containerRef.current.appendChild(stats.dom);
    statsRef.current = stats;
    
    // Load model
    const loader = new GLTFLoader();
    loader.load('/horse.glb', (gltf) => {
      const mesh = gltf.scene.children[0];
      mesh.scale.set(1.5, 1.5, 1.5);
      scene.add(mesh);
      
      const mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(gltf.animations[0]).setDuration(1).play();
      mixerRef.current = mixer;
    });
    
    // Variables for animation
    let theta = 0;
    const radius = 600;
    let prevTime = Date.now();
    
    // Animation loop
    const animate = () => {
      // Rotate camera
      theta += 0.1;
      camera.position.x = radius * Math.sin(THREE.MathUtils.degToRad(theta));
      camera.position.z = radius * Math.cos(THREE.MathUtils.degToRad(theta));
      camera.lookAt(0, 150, 0);
      
      // Update animation mixer
      if (mixerRef.current) {
        const time = Date.now();
        mixerRef.current.update((time - prevTime) * 0.001);
        prevTime = time;
      }
      
      // Render scene
      renderer.render(scene, camera);
      stats.update();
      
      // Continue animation loop
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (statsRef.current && statsRef.current.dom && containerRef.current) {
        containerRef.current.removeChild(statsRef.current.dom);
      }
    };
  }, []);
  
  return (
    <div>
      <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0 }}></div>
    </div>
  );
};

export default ThreeJSHorse;