// Picks the page language from ?lang=, then the last choice, then the browser, and wires the switcher.
(() => {
  const supported = ["zh-Hant", "ja", "en"];
  const fromBrowser = () => {
    for (const l of navigator.languages || [navigator.language]) {
      const lower = (l || "").toLowerCase();
      if (lower.startsWith("zh")) return "zh-Hant";
      if (lower.startsWith("ja")) return "ja";
      if (lower.startsWith("en")) return "en";
    }
    return "en";
  };
  const query = new URLSearchParams(location.search).get("lang");
  let stored = null;
  try { stored = localStorage.getItem("lang"); } catch {}
  const pick = [query, stored].find((l) => supported.includes(l)) || fromBrowser();

  const apply = (lang) => {
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-set-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    const title = document.querySelector(`meta[name="title-${lang}"]`);
    if (title) document.title = title.content;
  };
  apply(pick);
  document.addEventListener("DOMContentLoaded", () => {
    apply(document.documentElement.dataset.lang);
    document.querySelectorAll("[data-set-lang]").forEach((b) =>
      b.addEventListener("click", () => {
        try { localStorage.setItem("lang", b.dataset.setLang); } catch {}
        apply(b.dataset.setLang);
      })
    );
  });
})();
