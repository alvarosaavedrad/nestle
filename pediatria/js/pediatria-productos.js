(() => {
  // Data
  const data = {
    formulas: "2261",
    cereales: "2262",
    "colados y picados": "2263",
  };

  document.addEventListener("DOMContentLoaded", function () {
    let displayedTab = data[localStorage.getItem("selectedProductoFromMenu")];

    if (!displayedTab) return;

    const tabTitles = Array.from(document.querySelectorAll(".elementor-tab-title"));
    const tabContents = Array.from(document.querySelectorAll(".elementor-tab-content"));

    tabTitles.map((item) => {
      if (item.getAttribute("tabindex") === displayedTab) {
        item.classList.add("elementor-active");
      } else {
        item.classList.remove("elementor-active");
      }
    });

    tabContents.map((item) => {
      if (item.id === `elementor-tab-content-${displayedTab}`) {
        item.style.display = "block";
        item.classList.add("elementor-active");
      } else {
        item.style.display = "none";
        item.classList.remove("elementor-active");
      }
    });
  });
})();
