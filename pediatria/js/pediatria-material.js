(() => {
  // Data
  const data = {
    "formulas de rutina": "2801",
    "formulas de especialidades": "2802",
    "alimentos infantiles": "2803",
  };

  document.addEventListener("DOMContentLoaded", function () {
    let displayedTab = data[localStorage.getItem("selectedMaterialFromMenu")];

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
