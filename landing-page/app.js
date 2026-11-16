// Camada de animação e interação. Usa GSAP, ScrollTrigger, Lenis e Lucide
// carregados por CDN no index.html. Se alguma biblioteca não carregar, a
// página segue funcionando com o conteúdo estático.
(() => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Ícones Lucide (cada <i data-lucide="..."> vira um SVG).
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Botões de copiar prompt.
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const original = button.textContent;
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        button.textContent = "Copiado ✓";
      } catch (error) {
        button.textContent = "Selecione e copie";
      }
      setTimeout(() => {
        button.textContent = original;
      }, 1800);
    });
  });

  // Animações só com movimento permitido e GSAP carregado.
  if (reducedMotion || !window.gsap) return;

  let lenis = null;
  if (window.Lenis) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    // Lenis roda no mesmo relógio do GSAP, evitando dois loops de animação.
    window.gsap.ticker.add((time) => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
  }

  if (window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    if (lenis) {
      lenis.on("scroll", window.ScrollTrigger.update);
    }

    // Cards de módulo entram em cascata ao rolar.
    window.gsap.from(".module-card", {
      y: 48,
      opacity: 0,
      rotateX: -8,
      transformPerspective: 900,
      duration: 0.9,
      ease: "power3.out",
      stagger: { each: 0.07, from: "start" },
      scrollTrigger: {
        trigger: ".module-grid",
        start: "top 82%",
      },
    });

    // Passos de uso e de método.
    window.gsap.from(".usage-steps li", {
      x: -24,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: { trigger: ".usage-steps", start: "top 85%" },
    });

    window.gsap.from(".method-step", {
      y: 32,
      opacity: 0,
      duration: 0.75,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: { trigger: ".method-track", start: "top 85%" },
    });

    // Paralaxe leve no bloco de 3D.
    window.gsap.to(".hero-art", {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // Efeito de brilho que segue o cursor nos cards (sem JS pesado, só variáveis CSS).
  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
})();
