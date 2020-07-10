/**
 * Header
 */
(() => {
  const pn = document.querySelector(".naturnes-header-img");
  const img = pn.querySelector(".naturnes-slider-bottom-img");

  img.querySelector("img").style.verticalAlign = "bottom";

  img.parentElement.removeChild(img);

  pn.insertAdjacentElement("beforeend", img);
})();

/**
 * Tabs
 */
(() => {
  const container = document.querySelector(".naturnes-section-preguntas .elementor-tabs-content-wrapper");
  const titles = Array.from(container.querySelectorAll(".elementor-tab-title"));

  const titlesWrapper = document.createElement("div");
  titlesWrapper.style.display = "flex";
  titlesWrapper.style.justifyContent = "space-around";
  titlesWrapper.style.padding = "0 16px";
  titlesWrapper.style.width = "100%";

  titles.map((item) => {
    container.removeChild(item);
  });

  container.insertAdjacentElement("afterbegin", titlesWrapper);

  titles.reverse();

  titles.map((item) => {
    item.style.fontSize = "1rem";
    item.style.width = "25%";

    titlesWrapper.insertAdjacentElement("afterbegin", item);
  });
})();
