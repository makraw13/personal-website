const menuButton = document.querySelector("[data-menu-toggle]");
const siteNav = document.getElementById("site-nav");

function closeMenu() {
  if (!menuButton || !siteNav) {
    return;
  }

  menuButton.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
}

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });
}
