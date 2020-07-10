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