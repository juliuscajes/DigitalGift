/**
 * Christmas & New Year Project
 * Interactive features and animations
 */

// Configuration
const CONFIG = {
  snowflakeCount: 50,
  senderName: "Julius C. Lagarto",
  messages: {
    christmas: {
      title: "Merry Christmas",
      content:
        "MERRY CHRISTMAS to my Family! May this festive season bring us joy, love, and countless blessings. I am truly grateful for everyone and the happiness bring into our life. -----From Kuya: Julius C. Lagarto",
    },
    newYear: {
      title: "Happy New Year",
      content:
        "HAPPY NEW YEAR! Wishing us a year filled with new hopes, exciting opportunities, and endless happiness. May 2026 be a year of prosperity and success for all of us. -----From Kuya: Julius C. Lagarto",
    },
  },
};

// Utility Functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Snowflake Management
class SnowflakeManager {
  constructor(count) {
    this.count = count;
    this.snowflakes = [];
  }

  create() {
    for (let i = 0; i < this.count; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.innerHTML = "❄";
      snowflake.setAttribute("aria-hidden", "true");

      // Randomize snowflake properties
      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDuration = Math.random() * 3 + 5 + "s";
      snowflake.style.animationDelay = Math.random() * 5 + "s";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

      document.body.appendChild(snowflake);
      this.snowflakes.push(snowflake);
    }
  }

  remove() {
    this.snowflakes.forEach((snowflake) => snowflake.remove());
    this.snowflakes = [];
  }
}

// Modal Management
class ModalManager {
  constructor() {
    this.modal = document.getElementById("modal");
    this.modalText = document.getElementById("modal-text");
    this.memoriesModal = document.getElementById("memories-modal");
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Close modal on outside click
    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
      if (event.target === this.memoriesModal) {
        this.closeMemories();
      }
    });

    // Close modal on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeModal();
        this.closeMemories();
      }
    });
  }

  showModal(title, message) {
    this.modalText.innerHTML = `<strong>${title}</strong><br><br>${message}`;
    this.modal.style.display = "flex";
    this.modal.setAttribute("aria-hidden", "false");

    // Focus on close button for accessibility
    setTimeout(() => {
      const closeBtn = this.modal.querySelector(".close-btn");
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  closeModal() {
    this.modal.style.display = "none";
    this.modal.setAttribute("aria-hidden", "true");
  }

  showMemories() {
    this.memoriesModal.style.display = "flex";
    this.memoriesModal.setAttribute("aria-hidden", "false");

    // Lazy load images
    this.lazyLoadImages();

    // Focus on close button for accessibility
    setTimeout(() => {
      const closeBtn = this.memoriesModal.querySelector(".close-btn");
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  closeMemories() {
    this.memoriesModal.style.display = "none";
    this.memoriesModal.setAttribute("aria-hidden", "true");
  }

  lazyLoadImages() {
    const images = this.memoriesModal.querySelectorAll("img[data-src]");
    const videos = this.memoriesModal.querySelectorAll("video[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
    videos.forEach((video) => imageObserver.observe(video));
  }
}

// Animation Observer
class AnimationObserver {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  }

  observe(elements) {
    elements.forEach((element) => this.observer.observe(element));
  }
}

// Performance Monitoring
class PerformanceMonitor {
  static logPageLoad() {
    if (window.performance && window.performance.timing) {
      window.addEventListener("load", () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
      });
    }
  }

  static prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
}

// Initialize Application
class ChristmasApp {
  constructor() {
    this.snowflakeManager = null;
    this.modalManager = null;
    this.animationObserver = null;
  }

  init() {
    // Initialize components
    this.setupSnowflakes();
    this.setupModals();
    this.setupAnimations();
    this.setupAccessibility();
    this.updateSenderName();

    // Monitor performance
    PerformanceMonitor.logPageLoad();

    console.log("🎄 Christmas & New Year App Initialized! 🎄");
  }

  setupSnowflakes() {
    if (!PerformanceMonitor.prefersReducedMotion()) {
      this.snowflakeManager = new SnowflakeManager(CONFIG.snowflakeCount);
      this.snowflakeManager.create();
    }
  }

  setupModals() {
    this.modalManager = new ModalManager();

    // Attach to window for onclick handlers in HTML
    window.showModal = (title, message) => {
      this.modalManager.showModal(title, message);
    };

    window.closeModal = () => {
      this.modalManager.closeModal();
    };

    window.showMemories = () => {
      this.modalManager.showMemories();
    };

    window.closeMemories = () => {
      this.modalManager.closeMemories();
    };
  }

  setupAnimations() {
    if (!PerformanceMonitor.prefersReducedMotion()) {
      this.animationObserver = new AnimationObserver();
      const animatedElements = document.querySelectorAll(".gift-card");
      this.animationObserver.observe(animatedElements);
    }
  }

  setupAccessibility() {
    // Add ARIA labels to interactive elements
    const giftCards = document.querySelectorAll(".gift-card");
    giftCards.forEach((card) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      // Allow keyboard navigation
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });

    // Add ARIA labels to modals
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-hidden", "true");
    });
  }

  updateSenderName() {
    const senderNameElement = document.getElementById("sender-name");
    if (senderNameElement) {
      senderNameElement.textContent = CONFIG.senderName;
    }
  }
}

// Service Worker Registration (for PWA support)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registered:", registration.scope);
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });
  });
}

// Initialize the application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    const app = new ChristmasApp();
    app.init();
  });
} else {
  const app = new ChristmasApp();
  app.init();
}

// Export for testing purposes
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ChristmasApp, ModalManager, SnowflakeManager };
}
