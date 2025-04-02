document.addEventListener("DOMContentLoaded", () => {
 
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector("#navmenu");
  const navLinks = document.querySelectorAll("#navmenu a");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("mobile-nav-active");
    });

    document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        document.body.classList.remove("mobile-nav-active");
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("href");
        if (target && target.startsWith("#") && !link.parentElement.classList.contains("dropdown")) {
          document.body.classList.remove("mobile-nav-active");
        }
      });
    });

    const dropdowns = document.querySelectorAll(".navmenu .dropdown > a");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = dropdown.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle("dropdown-active");
        }
      });
    });
  }

  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookieConsent") && banner) {
    banner.style.display = "flex";
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "accepted");
      if (banner) banner.style.display = "none";
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "declined");
      if (banner) banner.style.display = "none";
    });
  }
});
