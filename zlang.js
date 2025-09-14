
        window.addEventListener('load', () => {
            const btnTexts = document.querySelectorAll('#floating-buttons .btn-text');
            let visible = false;

            const showTexts = () => {
                btnTexts.forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(-50%) translateX(0)';
                });
                visible = true;
            };

            const hideTexts = () => {
                btnTexts.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(-50%) translateX(20px)';
                });
                visible = false;
            };

            setTimeout(showTexts, 60000);

            // Ensure hover functionality doesn't conflict
            const buttons = ['whatsappBtn', 'phoneBtn'];
            buttons.forEach(buttonId => {
                const button = document.getElementById(buttonId);
                button.addEventListener('mouseenter', () => {
                    showTexts();
                });
                button.addEventListener('mouseleave', () => {
                    if (!visible) hideTexts();
                });
            });

            // WhatsApp button click
            document.getElementById('whatsappBtn').addEventListener('click', () => {
                window.open('https://wa.me/05456033448', '_blank');
            });

            // Phone button click
            document.getElementById('phoneBtn').addEventListener('click', () => {
                window.location.href = 'tel:05456033448';
            });

            // Back to top button functionality
            const backToTopBtn = document.getElementById('backToTop');
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        document.getElementById("playLocalVideo2").addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("videoPopup2").style.display = "block";
        });

        document.querySelectorAll(".video-close").forEach(function (closeBtn) {
            closeBtn.addEventListener("click", function () {
                const popup = this.closest(".video-popup");
                popup.style.display = "none";
                const video = popup.querySelector("video");
                video.pause();
                video.currentTime = 0;
            });
        });




let translations = {};
let currentLang = localStorage.getItem("lang") || "tr";

// Dili ayarla ve tüm UI'ı güncelle
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations();

  const labelMap = {
    tr: "TR Türkçe",
    en: "EN English",
    es: "ES Español",
    ru: "🇷🇺 Русский",
    ar: "🇸🇦 عربي",
    de: "🇩🇪 Deutsch"
  };

  const desktopBtn = document.getElementById("langBtn");
  if (desktopBtn) desktopBtn.textContent = labelMap[lang];

  const mobileBtn = document.getElementById("Mobile-langBtn");
  if (mobileBtn) mobileBtn.textContent = labelMap[lang];

  // Menüleri kapat
  const desktopDropdown = document.getElementById("langDropdown");
  if (desktopDropdown) desktopDropdown.classList.remove("show");

  const mobileDropdown = document.getElementById("Mobile-langDropdown");
  if (mobileDropdown) mobileDropdown.style.display = "none";
}

// HTML'deki tüm çeviri alanlarını uygula
function applyTranslations() {
  if (!translations[currentLang]) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    
    }
    
  });
}

// Çeviri dosyasını yükle
function initLanguage() {
  fetch("./assets/lang/lang.json")
    .then(res => res.json())
    .then(data => {
      translations = data;
      applyTranslations();

      const labelMap = {
        tr: "TR Türkçe",
        en: "EN English",
        es: "ES Español",
        ru: "🇷🇺 Русский",
        ar: "🇸🇦 عربي",
        de: "🇩🇪 Deutsch"
      };

      const desktopBtn = document.getElementById("langBtn");
      if (desktopBtn) desktopBtn.textContent = labelMap[currentLang];

      const mobileBtn = document.getElementById("Mobile-langBtn");
      if (mobileBtn) mobileBtn.textContent = labelMap[currentLang];
    });
}

// Olayları bağla
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();

  // Desktop dropdown toggle
  const desktopBtn = document.getElementById("langBtn");
  const desktopDropdown = document.getElementById("langDropdown");

  if (desktopBtn && desktopDropdown) {
    desktopBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      desktopDropdown.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!desktopBtn.contains(e.target) && !desktopDropdown.contains(e.target)) {
        desktopDropdown.classList.remove("show");
      }
    });
  }

  // Mobile dropdown toggle
  const mobileBtn = document.getElementById("Mobile-langBtn");
  const mobileDropdown = document.getElementById("Mobile-langDropdown");

  if (mobileBtn && mobileDropdown) {
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDropdown.style.display =
        mobileDropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
      if (!mobileBtn.contains(e.target) && !mobileDropdown.contains(e.target)) {
        mobileDropdown.style.display = "none";
      }
    });
  }
});






document.addEventListener('DOMContentLoaded', () => {
  const langSel = document.querySelector('.mobile-language-selector');
  if (!langSel) return;

  // Sayfadaki tüm toggle'ları al
  const toggles = Array.from(document.querySelectorAll('.vs-menu-toggle'));

  // Overlay (vs-menu-wrapper) içinde OLMAYAN toggle = header'daki hamburger
  const headerToggle =
    toggles.find(el => !el.closest('.vs-menu-wrapper'))   // öncelik: header
    || toggles.find(el => el.offsetParent !== null)       // görünür olan
    || toggles[0];

  if (headerToggle) {
    headerToggle.insertAdjacentElement('beforebegin', langSel);
  }
});



