/**
 * Parallax Effect
 */
(() => {
  // Get elements
  const elemSoloParaMi = document.querySelector(".elementor-widget-wrap .savory__solo-para-mi-parallax");
  if (!elemSoloParaMi) return;

  const elemParaCompartir = document.querySelector(".elementor-widget-wrap .savory__para-compartir-parallax");
  if (!elemParaCompartir) return;

  // Add event listener
  document.addEventListener("mousemove", (e) => {
    parallax(e, elemSoloParaMi);
    parallax(e, elemParaCompartir);
  });

  // Magic happens here
  function parallax(e, node) {
    const _w = window.innerWidth / 2;
    const _h = window.innerHeight / 2;
    const _mouseX = e.clientX;
    const _mouseY = e.clientY;
    const _depth1 = `${50 - (_mouseX - _w) * 0.025}% ${50 - (_mouseY - _h) * 0.025}%`;
    const _depth2 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
    const _depth3 = `${50 - (_mouseX - _w) * 0.085}% ${50 - (_mouseY - _h) * 0.085}%`;
    const x = `${_depth3}, ${_depth2}, ${_depth1}`;
    node.style.backgroundPosition = x;
  }
})();
