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

    // Adding events to buttons
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

/**
 * Shop bars
 */
(() => {
  // Checking URL to go
  if (window.location.href.indexOf("/nuestros-helados/para-compartir/") === -1) {
    return;
  }

  // Getting buttons and shop bars
  const btns = Array.from(document.querySelectorAll(".btn_para-compartir_multipack"));
  if (!btns) return;

  const shops = Array.from(document.querySelectorAll(".shops_para-compartir_multipack"));
  if (!shops) return;

  const wrappers = Array.from(document.querySelectorAll(".para-compartir_multipack"));
  if (!wrappers) return;

  // Adding event to buttons
  btns.forEach((btn) => {
    btn.addEventListener("click", shopIconOnClick);
  });

  // Relocating shop bars
  shops.forEach((shop) => {
    Array.from(shop.classList).filter((shopClass) => {
      if (shopClass.startsWith("shops_para-compartir_multipack--")) {
        wrappers.forEach((wrapper) => {
          Array.from(wrapper.classList).filter((wrapperClass) => {
            if (wrapperClass.startsWith("para-compartir_multipack--")) {
              if (shopClass.indexOf(wrapperClass) !== -1) {
                shop.parentElement.removeChild(shop);
                wrapper.insertAdjacentElement("beforeend", shop);
              }
            }
          });
        });
      }
    });

    shop.style.display = "none";
  });

  // Showing and hiding items on click
  function shopIconOnClick(e) {
    const actual = Array.from(e.currentTarget.classList).filter((className) =>
      className.startsWith("btn_para-compartir_multipack--")
    );

    const shop = document.querySelector(`.shops_${actual[0].split("btn_")[1]}`);
    shop.style.display = shop.style.display !== "block" ? "block" : "none";
  }
})();

/**
 * Search
 */
(() => {
  const ss = document.querySelector(".savory-search");
  if (!ss) return;

  const ssc = document.querySelector(".savory-search-container");
  if (!ssc) return;

  ssc.parentElement.removeChild(ssc);
  document.body.insertAdjacentElement("beforeend", ssc);

  // Icon to hide menu
  const closeIcon = `
    <div class="navbarDesktop__display-close">
      <div class="close-icon" />
    </div>
  `;

  ssc.insertAdjacentHTML("afterbegin", closeIcon);

  // Adding events to buttons
  const ssi = document.querySelector(".savory-search-icon");
  if (!ssi) return;

  ssi.addEventListener("click", () => {
    if (Array.from(ssc.classList).includes("navbarDesktop__display--disappears")) {
      ssc.classList.remove("navbarDesktop__display--disappears");
    }

    ssc.classList.add("navbarDesktop__display--appears");
  });

  const ssclose = document.querySelector(".navbarDesktop__display-close");
  if (!ssclose) return;

  ssclose.addEventListener("click", () => {
    if (Array.from(ssc.classList).includes("navbarDesktop__display--appears")) {
      ssc.classList.remove("navbarDesktop__display--appears");
    }

    ssc.classList.add("navbarDesktop__display--disappears");
  });
})();
