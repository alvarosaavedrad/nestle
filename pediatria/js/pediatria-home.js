let counHiddenRows = 0,
  counHiddenSeparator = 0;
jQuery(document).ready(function () {
  jQuery(".row-more").each(function (key, value) {
    counHiddenRows = counHiddenRows + 1;
  });

  jQuery(".row-more-separator").each(function (key, value) {
    counHiddenSeparator = counHiddenSeparator + 1;
  });

  if (counHiddenRows === 0) {
    jQuery(".elementor-element-b869946").hide();
  } else {
    jQuery(".elementor-element-b869946")
      .find(".elementor-button")
      .on("click", function () {
        jQuery(".row-more-separator").first().removeClass("row-more-separator");
        jQuery(".row-more").first().removeClass("row-more");
        counHiddenRows = counHiddenRows - 1;
        counHiddenSeparator = counHiddenSeparator - 1;
        if (counHiddenRows === 0) {
          jQuery(".elementor-element-b869946").hide();
        }
      });
  }
});

/**
 * Three columns handler (In progress)
 */
(() => {
  // Get title nodes
  const columnTitles = Array.from(
    document.querySelectorAll(
      ".pediatria-productos-accordion .elementor-widget-dsu-accordion_item .elementor-tab-title"
    )
  );

  // Get content nodes
  const columnContents = Array.from(
    document.querySelectorAll(
      ".pediatria-productos-accordion .elementor-widget-dsu-accordion_item .elementor-tab-content"
    )
  );

  // Functions
  function titleHandler(i) {
    columnTitles.map((item, index) => {
      if (index !== i && Array.from(item.classList).includes("elementor-active")) {
        item.classList.remove("elementor-active");
      }
    });

    columnContents.map((item, index) => {
      if (index !== i && Array.from(item.classList).includes("elementor-active")) {
        const classes = ["elementor-active", "elementor-tab-content-opened"];
        item.classList.remove(classes);
        item.classList.add("elementor-tab-content-closed");
      } else {
        item.classList.remove("elementor-tab-content-closed");
        item.classList.add("elementor-tab-content-opened");
      }
    });
  }

  // Init
  columnTitles.map((item, index) => {
    if (Array.from(item.classList).includes("elementor-active")) {
      item.classList.remove("elementor-active");
    }

    item.addEventListener("click", () => {
      titleHandler(index);
    });
  });

  columnContents.map((item, index) => {
    if (Array.from(item.classList).includes("elementor-active")) {
      item.classList.remove("elementor-active");
    }

    item.style.display = "none";
  });
})();
