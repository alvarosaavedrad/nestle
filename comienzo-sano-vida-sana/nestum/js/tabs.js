document.addEventListener("DOMContentLoaded", () => {
  /**
   * Tabs > Productos
   */
  (() => {
    // Relocate tabs in mobile
    const mobileTitles = Array.from(
      document.querySelectorAll(".nestum-productos-tabs .elementor-tabs-content-wrapper .elementor-tab-mobile-title")
    );
    const pn = document.querySelector(".nestum-productos-tabs .elementor-tabs-content-wrapper");

    mobileTitles.map((item) => item.parentElement.removeChild);
    mobileTitles.reverse();
    mobileTitles.map((item) => pn.insertAdjacentElement("afterbegin", item));

    // Change bg color for active tabs (desktop and mobile)
    const desktopTitles = Array.from(
      document.querySelectorAll(".nestum-productos-tabs .elementor-tabs-wrapper .elementor-tab-desktop-title")
    );

    // Add events
    desktopTitles.map((item) => {
      item.addEventListener("click", init);
    });

    mobileTitles.map((item) => {
      item.addEventListener("click", init);
    });

    // Init
    init();

    // Funciones
    function init() {
      desktopTitles.map(setActiveBackground);
      mobileTitles.map(setActiveBackground);
    }

    function setActiveBackground(item) {
      const classes = Array.from(item.classList);

      if (classes.includes("elementor-active")) {
        switch (item.textContent.toLowerCase()) {
          case "trigo":
            item.style.backgroundColor = "#b95131";
            break;

          case "5 cereales":
            item.style.backgroundColor = "#b5302d";
            break;

          case "arroz":
            item.style.backgroundColor = "#3896af";
            break;

          case "trigo y miel":
            item.style.backgroundColor = "#d19219";
            break;

          case "avena y arroz":
            item.style.backgroundColor = "#6f5390";
            break;

          case "trigo y frutas":
            item.style.backgroundColor = "#9bb336";
            break;

          case "frutilla":
            item.style.backgroundColor = "#ac1b74";
            break;

          case "cacao":
            item.style.backgroundColor = "#6c5027";
            break;
        }
      } else {
        item.style.backgroundColor = "transparent";
      }
    }
  })();
});
