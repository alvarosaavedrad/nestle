/**
 * Menu
 */
document.addEventListener("DOMContentLoaded", function (event) {
  (() => {
    // Getting menu element
    const menu = document.querySelector("#navbarDesktop.navbar-desktop");
    if (!menu) return;

    // Relocating menu element in DOM
    menu.parentElement.removeChild(menu);

    document.body.insertAdjacentElement("beforeend", menu);

    // Icon to hide menu
    const closeIcon = `
      <div class="navbarDesktop__display-close">
        <div class="close-icon" />
      </div>
    `;

    menu.insertAdjacentHTML("afterbegin", closeIcon);

    // Getting buttons to show and hide menu
    const btnMenu = document.querySelector(".savory__navbar--menu");
    if (!btnMenu) return;

    const btnCross = document.querySelector(".navbarDesktop__display-close");
    if (!btnCross) return;

    // Adding events to butons
    btnMenu.addEventListener("click", () => {
      if (Array.from(menu.classList).includes("navbarDesktop__display--disappears")) {
        menu.classList.remove("navbarDesktop__display--disappears");
      }

      menu.classList.add("navbarDesktop__display--appears");
    });

    btnCross.addEventListener("click", () => {
      if (Array.from(menu.classList).includes("navbarDesktop__display--appears")) {
        menu.classList.remove("navbarDesktop__display--appears");
      }

      menu.classList.add("navbarDesktop__display--disappears");
    });

    // Social Media
    const socialMediaContainer = `
      <div class="navbarDesktop__display-social-media">
        <div class="social-media-icon">
          <a class="elementor-icon elementor-social-icon elementor-social-icon-1" href="https://www.facebook.com/SavoryChile" target="_blank" title="Facebook">
            <img alt="facebook" class="elementor-social-icon-image elementor-social-img" src="/sites/default/files/2020-07/facebook.png">
          </a>
        </div>

        <div class="social-media-icon">
          <a class="elementor-icon elementor-social-icon elementor-social-icon-1" href="https://twitter.com/savorychile" target="_blank" title="Twitter">
            <img alt="twitter" class="elementor-social-icon-image elementor-social-img" src="/sites/default/files/2020-07/twitter.png">
          </a>
        </div>

        <div class="social-media-icon">
          <a class="elementor-icon elementor-social-icon elementor-social-icon-1" href="https://www.instagram.com/savorychile/" target="_blank" title="Instagram">
            <img alt="instagram" class="elementor-social-icon-image elementor-social-img" src="/sites/default/files/2020-07/instagram.png">
          </a>
        </div>

        <div class="social-media-icon">
          <a class="elementor-icon elementor-social-icon elementor-social-icon-1" href="/hablemos" target="_blank" title="Hablemos">
            <img alt="hablemos" class="elementor-social-icon-image elementor-social-img" src="/sites/default/files/2020-07/telephone.png">
          </a>
        </div>
      </div>
    `;

    menu.insertAdjacentHTML("beforeend", socialMediaContainer);
  })();
});
