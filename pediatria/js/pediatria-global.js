/**
 * Menu and Submenus opened on hover
 */
(() => {
  const menu = document.querySelector(".elementor-widget-menu #navbarResponsive");

  if (!menu) return;

  const submenus = Array.from(menu.querySelectorAll(".expanded.dropdown"));

  if (submenus) {
    submenus.map((item) => {
      // Set to closed
      item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", false);

      // Click
      const subitems = Array.from(item.querySelectorAll("ul li"));

      if (subitems) {
        subitems.map((subitem) => {
          subitem.addEventListener("click", (e) => {
            if (item.querySelector("a").getAttribute("title").toLowerCase() === "productos") {
              localStorage.setItem("selectedProductoFromMenu", e.target.textContent.toLowerCase());
            }

            if (item.querySelector("a").getAttribute("title").toLowerCase() === "material") {
              localStorage.setItem("selectedMaterialFromMenu", e.target.textContent.toLowerCase());
            }
          });
        });
      }

      // Hover
      item.addEventListener("mouseover", () => {
        if (window.innerWidth >= 768) {
          item.classList.add("open");

          // Open submenu
          const aNode = item.querySelector("a");
          aNode.setAttribute("aria-expanded", true);
        }
      });

      // Out
      item.addEventListener("mouseout", () => {
        if (window.innerWidth >= 768) {
          item.classList.remove("open");

          // Close submenu
          const aNode = item.querySelector("a");
          aNode.setAttribute("aria-expanded", false);
        }
      });
    });
  }
})();
