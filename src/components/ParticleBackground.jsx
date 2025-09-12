import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !webglSupported) return;

    let scene, camera, renderer, particles, particleMaterial, particleGeometry;
    let mouseX = 0, mouseY = 0;

    const init = () => {
      try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);

        particleGeometry = new THREE.BufferGeometry();
        const vertices = [];
        const particleCount = 1000;

        for (let i = 0; i < particleCount; i++) {
          const x = (Math.random() - 0.5) * 20;
          const y = (Math.random() - 0.5) * 20;
          const z = (Math.random() - 0.5) * 20;
          vertices.push(x, y, z);
        }
        particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        particleMaterial = new THREE.PointsMaterial({
          color: 0xADD8E6,
          size: 0.05,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending,
        });

        particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
        return true;
      } catch (error) {
        setWebglSupported(false);
        return false;
      }
    };

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onWindowResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const animate = () => {
      if (!webglSupported) return;
      animationFrameId.current = requestAnimationFrame(animate);

      if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0008;
      }

      if (camera && scene) {
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.01;
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.01;
        camera.lookAt(scene.position);
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    if (init()) {
      animate();
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (renderer) {
        renderer.dispose();
      }
      if (particleGeometry) {
        particleGeometry.dispose();
      }
      if (particleMaterial) {
        particleMaterial.dispose();
      }
    };
  }, [webglSupported]);

  if (!webglSupported) {
    return (
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.1
        }}
      />
    );
  }

  return <canvas id="particle-canvas" ref={canvasRef} className="fixed inset-0 -z-10"></canvas>;
};

export default ParticleBackground;