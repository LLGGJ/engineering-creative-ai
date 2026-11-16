// Camada cinematográfica: menu, intro, scroll com GSAP/ScrollTrigger, Lenis e ícones.
// Todas as bibliotecas vêm de CDN. Sem elas, a página segue legível e estática.
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll suave (Lenis). Criado já aqui para o menu poder pausá-lo.
  let lenis = null;
  if (window.Lenis && !reduced) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
  }

  // Ícones Lucide.
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Menu em tela cheia (único controlador do hambúrguer).
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    nav.setAttribute("aria-hidden", String(!open));
    if (lenis) (open ? lenis.stop() : lenis.start());
  };
  setMenu(false);
  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  // Copiar prompt.
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.textContent;
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        button.textContent = "Copiado ✓";
      } catch (error) {
        button.textContent = "Selecione e copie";
      }
      setTimeout(() => (button.textContent = label), 1800);
    });
  });

  // Brilho que segue o cursor e inclinação 3D dos cards.
  if (!reduced) {
    document.querySelectorAll(".module-card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        const rx = (y / r.height - 0.5) * -8;
        const ry = (x / r.width - 0.5) * 8;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  // Sem GSAP ou com movimento reduzido: mostra tudo e encerra.
  if (reduced || !window.gsap) {
    root.classList.add("intro-done");
    return;
  }

  const gsap = window.gsap;
  if (lenis) {
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // Cortina de entrada e entrada do título.
  gsap
    .timeline()
    .to(".intro-curtain span", { opacity: 0, duration: 0.4, ease: "power2.out", delay: 0.2 })
    .to(".intro-curtain", {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => root.classList.add("intro-done"),
    })
    .from(".hero-title .word", { yPercent: 110, duration: 1.2, ease: "power4.out", stagger: 0.12 }, "-=0.6")
    .from(".hero-logo, .kicker, .hero-sub, .cta-row, .hero-meta", { opacity: 0, y: 24, duration: 0.9, ease: "power2.out", stagger: 0.1 }, "-=0.9");

  if (!window.ScrollTrigger) return;
  gsap.registerPlugin(window.ScrollTrigger);
  if (lenis) lenis.on("scroll", window.ScrollTrigger.update);

  // Hero: o 3D sobe mais devagar que o texto.
  gsap.to(".hero-scene", {
    yPercent: 22,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".hero-copy", {
    yPercent: -12,
    opacity: 0.2,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });

  // Manifesto: cada palavra acende conforme o scroll.
  const statement = document.querySelector("[data-words]");
  if (statement) {
    const words = statement.textContent.trim().split(/\s+/);
    statement.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(" ");
    gsap.to(statement.querySelectorAll(".w"), {
      color: "#efe9dc",
      stagger: 0.12,
      ease: "none",
      scrollTrigger: { trigger: statement, start: "top 78%", end: "bottom 55%", scrub: true },
    });
  }
  gsap.from(".principles > div", {
    y: 40,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: { trigger: ".principles", start: "top 88%" },
  });

  // Módulos: a seção fica fixada e o scroll vertical vira movimento horizontal.
  // Só depois de passar por todos os cards a página continua para baixo.
  // Vale para celular e desktop.
  const modules = document.querySelector(".modules");
  const track = document.querySelector(".modules-track");
  if (modules && track) {
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: modules,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
    gsap.from(".module-card", {
      y: 60,
      opacity: 0,
      stagger: 0.06,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: modules, start: "top 40%" },
    });
  }

  // Método: a linha cresce com o scroll.
  gsap.to(".method-line span", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { trigger: ".method", start: "top 65%", end: "bottom 70%", scrub: true },
  });
  gsap.from(".method-steps li", {
    y: 60,
    opacity: 0,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: ".method-steps", start: "top 85%" },
  });

  // Uso com Claude.
  gsap.from(".usage-steps li", {
    x: -40,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: { trigger: ".usage-steps", start: "top 85%" },
  });
  gsap.from(".prompt-box, .zip-card", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: ".usage-grid", start: "top 85%" },
  });

  // Fechamento: o título entra de escala.
  gsap.from(".closing-title", {
    scale: 1.2,
    opacity: 0,
    duration: 1.4,
    ease: "power4.out",
    scrollTrigger: { trigger: ".closing", start: "top 75%" },
  });
})();
