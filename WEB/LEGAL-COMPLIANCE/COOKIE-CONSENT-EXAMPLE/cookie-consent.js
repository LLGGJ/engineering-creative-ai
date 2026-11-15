(() => {
  "use strict";

  const KEY = "eca_cookie_consent_v1";
  const VERSION = 1;
  const OPTIONAL = ["analytics", "marketing"];
  const listeners = new Set();
  const queuedScripts = [];
  let state = null;

  const defaults = () => ({
    version: VERSION,
    status: "unknown",
    updatedAt: null,
    categories: { necessary: true, analytics: false, marketing: false }
  });

  function read() {
    try {
      const parsed = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!parsed || parsed.version !== VERSION || !parsed.categories) return defaults();
      return {
        ...defaults(),
        ...parsed,
        categories: {
          necessary: true,
          analytics: parsed.categories.analytics === true,
          marketing: parsed.categories.marketing === true
        }
      };
    } catch {
      return defaults();
    }
  }

  function persist(next) {
    state = {
      version: VERSION,
      status: next.status,
      updatedAt: new Date().toISOString(),
      categories: {
        necessary: true,
        analytics: next.categories.analytics === true,
        marketing: next.categories.marketing === true
      }
    };
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage may be unavailable */ }
    window.dispatchEvent(new CustomEvent("cookieconsent:change", { detail: structuredCloneSafe(state) }));
    listeners.forEach((fn) => fn(structuredCloneSafe(state)));
    flushScripts();
    render();
  }

  function structuredCloneSafe(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function hasConsent(category) {
    if (category === "necessary") return true;
    return OPTIONAL.includes(category) && Boolean(state?.categories?.[category]);
  }

  function loadScript({ category, src, async = true, defer = false, attributes = {} } = {}) {
    if (!OPTIONAL.includes(category)) {
      throw new Error("A categoria deve ser analytics ou marketing neste exemplo.");
    }
    if (!src || typeof src !== "string") throw new Error("Informe a URL do script.");
    const item = { category, src, async, defer, attributes };
    if (hasConsent(category)) return inject(item);
    queuedScripts.push(item);
    return null;
  }

  function inject(item) {
    if (document.querySelector(`script[data-eca-src="${CSS.escape(item.src)}"]`)) return null;
    const script = document.createElement("script");
    script.src = item.src;
    script.async = item.async;
    script.defer = item.defer;
    script.dataset.ecaSrc = item.src;
    Object.entries(item.attributes || {}).forEach(([key, value]) => {
      if (/^on/i.test(key) || key === "src" || key === "type") return;
      script.setAttribute(key, String(value));
    });
    document.head.appendChild(script);
    return script;
  }

  function flushScripts() {
    const stillPending = [];
    queuedScripts.forEach((item) => {
      if (hasConsent(item.category)) inject(item);
      else stillPending.push(item);
    });
    queuedScripts.splice(0, queuedScripts.length, ...stillPending);
  }

  function updateFromForm(form) {
    const analytics = form.elements.analytics.checked;
    const marketing = form.elements.marketing.checked;
    persist({
      status: analytics || marketing ? "custom" : "rejected",
      categories: { necessary: true, analytics, marketing }
    });
  }

  function ensureUI() {
    if (document.getElementById("eca-consent-root")) return;
    const root = document.createElement("section");
    root.id = "eca-consent-root";
    root.className = "eca-consent";
    root.setAttribute("aria-label", "Preferências de privacidade");
    root.innerHTML = `
      <div class="eca-consent__banner" role="region" aria-label="Aviso de cookies" hidden>
        <div class="eca-consent__copy">
          <strong>Suas escolhas de privacidade</strong>
          <p>Usamos tecnologias necessárias para o funcionamento do site. Com sua escolha, também poderemos ativar tecnologias opcionais descritas na <a href="/politica-de-cookies">política de cookies</a>.</p>
        </div>
        <div class="eca-consent__actions">
          <button type="button" data-action="reject">Rejeitar opcionais</button>
          <button type="button" data-action="settings">Configurar</button>
          <button type="button" data-action="accept" class="eca-primary">Aceitar opcionais</button>
        </div>
      </div>
      <button type="button" class="eca-consent__reopen" data-action="settings" aria-label="Abrir preferências de privacidade">Preferências de cookies</button>
      <div class="eca-consent__dialog" role="dialog" aria-modal="true" aria-labelledby="eca-title" hidden>
        <div class="eca-consent__panel">
          <h2 id="eca-title">Configurar preferências</h2>
          <p>As tecnologias necessárias ficam ativas para permitir o funcionamento básico. Você pode escolher as categorias opcionais.</p>
          <form>
            <label class="eca-category"><span><b>Necessários</b><small>Essenciais para funções solicitadas e segurança.</small></span><input type="checkbox" checked disabled aria-label="Necessários sempre ativos"></label>
            <label class="eca-category"><span><b>Estatística</b><small>Ajuda a compreender o uso do site, se aplicável.</small></span><input name="analytics" type="checkbox"></label>
            <label class="eca-category"><span><b>Marketing</b><small>Permite tecnologias de publicidade, se aplicável.</small></span><input name="marketing" type="checkbox"></label>
            <div class="eca-consent__actions">
              <button type="button" data-action="close">Cancelar</button>
              <button type="submit" class="eca-primary">Salvar preferências</button>
            </div>
          </form>
        </div>
      </div>`;
    document.body.appendChild(root);

    root.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]")?.dataset.action;
      if (!action) return;
      if (action === "accept") persist({ status: "accepted", categories: { necessary: true, analytics: true, marketing: true } });
      if (action === "reject") persist({ status: "rejected", categories: { necessary: true, analytics: false, marketing: false } });
      if (action === "settings") openDialog();
      if (action === "close") closeDialog();
    });

    root.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      updateFromForm(event.currentTarget);
      closeDialog();
    });
  }

  function openDialog() {
    const dialog = document.querySelector("#eca-consent-root .eca-consent__dialog");
    if (!dialog) return;
    dialog.hidden = false;
    dialog.querySelector('[name="analytics"]').checked = hasConsent("analytics");
    dialog.querySelector('[name="marketing"]').checked = hasConsent("marketing");
    dialog.querySelector("button").focus();
  }

  function closeDialog() {
    const dialog = document.querySelector("#eca-consent-root .eca-consent__dialog");
    if (dialog) dialog.hidden = true;
  }

  function render() {
    const root = document.getElementById("eca-consent-root");
    if (!root) return;
    const banner = root.querySelector(".eca-consent__banner");
    const reopen = root.querySelector(".eca-consent__reopen");
    const hasChoice = state.status !== "unknown";
    banner.hidden = hasChoice;
    reopen.hidden = !hasChoice;
  }

  function init() {
    state = read();
    ensureUI();
    render();
    window.dispatchEvent(new CustomEvent("cookieconsent:ready", { detail: structuredCloneSafe(state) }));
  }

  window.CookieConsent = Object.freeze({
    hasConsent,
    getPreferences: () => structuredCloneSafe(state || defaults()),
    onChange: (callback) => { listeners.add(callback); return () => listeners.delete(callback); },
    openPreferences: openDialog,
    loadScript
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
