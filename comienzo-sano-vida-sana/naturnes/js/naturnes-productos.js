/**
 * Header
 */
(() => {
  const pn = document.querySelector('.naturnes-header-img');
  const img = pn.querySelector('.naturnes-slider-bottom-img');

  img.querySelector('img').style.verticalAlign = 'bottom';

  img.parentElement.removeChild(img);

  pn.insertAdjacentElement("beforeend", img);
})();

/**
 * Tabs
 */
(() => {
  const mobileTitles = Array.from(document.querySelectorAll(".naturnes-productos-tabs .elementor-tab-mobile-title"));
  const pn = document.querySelector(".naturnes-productos-tabs .elementor-tabs-content-wrapper");

  mobileTitles.map(item => item.parentElement.removeChild);
  mobileTitles.reverse();
  mobileTitles.map(item => pn.insertAdjacentElement("afterbegin", item));
})();

/**
 * Top and Bottom line images
 */
(() => {
  const topLineImg = document.querySelector('.naturnes-productos-top-line');
  const bottomLineImg = document.querySelector('.naturnes-productos-bottom-line');
  const pn = document.querySelector('.naturnes-productos-colored-columns');

  topLineImg.parentElement.removeChild(topLineImg);
  bottomLineImg.parentElement.removeChild(bottomLineImg);

  pn.insertAdjacentElement('afterbegin', topLineImg);
  pn.insertAdjacentElement("beforeend", bottomLineImg);
})();