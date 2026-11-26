// 3D-Printed Prosthetic Hand — site behaviour

// ===== Edit these to update the names shown on the website =====
const TEAM_NAMES = "Vaibhav Sampat Dighe · Krushna Uday Bothe · Tanmay Vijay Matade · Pranav Dhus";
const GUIDE_NAME = "To be added";
// ================================================================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-team-names]").forEach((el) => {
    el.textContent = TEAM_NAMES;
  });
  document.querySelectorAll("[data-guide-name]").forEach((el) => {
    el.textContent = GUIDE_NAME;
  });

  // Theme toggle
  const root = document.documentElement;
  const themeButton = document.getElementById("theme-toggle");
  const syncThemeButton = () => {
    const isDark = root.getAttribute("data-theme") !== "light";
    themeButton.textContent = isDark ? "Light" : "Dark";
    themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  };
  syncThemeButton();
  themeButton.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("hand-theme", next);
    } catch (e) {
      // storage unavailable; theme still switches for this visit
    }
    syncThemeButton();
  });

  // Mobile menu
  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  // Scroll progress bar
  const bar = document.getElementById("scroll-progress-bar");
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.width = `${(ratio * 100).toFixed(1)}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  let lastTrigger = null;

  const openLightbox = (trigger) => {
    lastTrigger = trigger;
    const img = trigger.querySelector("img");
    lightboxImg.src = trigger.dataset.gallerySrc;
    lightboxImg.alt = img ? img.alt : "";
    lightboxCaption.textContent = trigger.dataset.caption || "";
    lightbox.hidden = false;
    closeButton.focus();
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = "";
    if (lastTrigger) {
      lastTrigger.focus();
    }
  };

  document.querySelectorAll("[data-gallery-src]").forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });
  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
});
