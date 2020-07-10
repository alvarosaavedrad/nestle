/**
 * Parallax Effect
 */
(() => {
  // Get elements
  const elemSoloParaMi = document.querySelector(".elementor-widget-wrap .savory__solo-para-mi-parallax");
  const elemParaCompartir = document.querySelector(".elementor-widget-wrap .savory__para-compartir-parallax");

  // Add event listener
  document.addEventListener("mousemove", (e) => {
    parallax(e, elemSoloParaMi);
    parallax(e, elemParaCompartir);
  });

  // Magic happens here
  function parallax(e, node) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.08}% ${50 - (_mouseY - _h) * 0.08}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    node.style.backgroundPosition = x;
  }
})();
