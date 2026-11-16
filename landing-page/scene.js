const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const canvas = document.querySelector("#system-scene");

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

if (!canvas || reducedMotion || !("WebGLRenderingContext" in window)) {
  document.documentElement.classList.add("scene-fallback-active");
} else {
  try {
    const THREE =
      await import("https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const assembly = new THREE.Group();
    scene.add(assembly);
    scene.add(new THREE.AmbientLight(0xffffff, 1.7));

    const limeLight = new THREE.PointLight(0xd8ff68, 34, 12);
    limeLight.position.set(2.6, 2.8, 3.5);
    scene.add(limeLight);
    const coralLight = new THREE.PointLight(0xff735b, 23, 10);
    coralLight.position.set(-3, -1.5, 2);
    scene.add(coralLight);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x18221b,
      metalness: 0.78,
      roughness: 0.24,
      emissive: 0x17220c,
      emissiveIntensity: 0.48,
    });
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 2),
      coreMaterial,
    );
    assembly.add(core);

    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.16, 1),
      new THREE.MeshBasicMaterial({
        color: 0xd8ff68,
        wireframe: true,
        transparent: true,
        opacity: 0.42,
      }),
    );
    assembly.add(wireframe);

    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xff735b,
      transparent: true,
      opacity: 0.72,
    });
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(1.72, 0.008, 5, 160),
      orbitMaterial,
    );
    orbit.rotation.set(1.08, 0.3, -0.2);
    assembly.add(orbit);

    const orbitTwo = new THREE.Mesh(
      new THREE.TorusGeometry(2.04, 0.006, 5, 160),
      new THREE.MeshBasicMaterial({
        color: 0x8dd3ff,
        transparent: true,
        opacity: 0.56,
      }),
    );
    orbitTwo.rotation.set(0.65, -0.4, 0.75);
    assembly.add(orbitTwo);

    const nodeGeometry = new THREE.SphereGeometry(0.075, 20, 20);
    const nodePositions = [
      [1.32, 1.02, 0.55, 0xd8ff68],
      [-1.6, 0.35, 0.7, 0xff735b],
      [0.35, -1.7, -0.1, 0x8dd3ff],
      [-0.8, -0.8, 1.4, 0xd8ff68],
      [1.84, -0.56, -0.35, 0xff735b],
    ];
    nodePositions.forEach(([x, y, z, color]) => {
      const node = new THREE.Mesh(
        nodeGeometry,
        new THREE.MeshBasicMaterial({ color }),
      );
      node.position.set(x, y, z);
      assembly.add(node);
    });

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const width = Math.max(bounds.width, 1);
      const height = Math.max(bounds.height, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);
    resize();

    let frame = 0;
    const animate = () => {
      assembly.rotation.y += 0.0025;
      assembly.rotation.x = Math.sin(performance.now() * 0.00028) * 0.08;
      wireframe.rotation.y = -assembly.rotation.y * 1.35;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();
    document.documentElement.classList.add("scene-ready");

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else animate();
    });
  } catch (error) {
    document.documentElement.classList.add("scene-fallback-active");
    console.warn(
      "A cena 3D não carregou; mantendo a composição estática.",
      error,
    );
  }
}
