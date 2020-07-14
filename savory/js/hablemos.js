/**
 * Full screen data display
 */
(() => {
  const html = `
  <div class="hablemos__display">
    <div class="hablemos__display-container">
      <div class="hablemos__display-texts">
        <h3>contáctate con nosotros llamando al</h3>
        <p>+56 8 0022 2323</p>
      </div>

      <div class="hablemos__display-close">
        <div class="close-icon" />
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  // Get display element
  const display = document.querySelector(".hablemos__display");

  // Show display element
  const setTelephone = (number) => {
    document.querySelector(".hablemos__display-texts p").textContent = number;
  };

  const btnCliente = document.querySelector(".hablemos__btn--cliente");
  const btnSugerencia = document.querySelector(".hablemos__btn--sugerencia");

  const showDisplay = () => {
    if (Array.from(display.classList).includes("hablemos__display--disappears")) {
      display.classList.remove("hablemos__display--disappears");
    }

    display.classList.add("hablemos__display--appears");
  };

  btnCliente.addEventListener("click", () => {
    setTelephone("+56 8 0022 2323");

    showDisplay();
  });

  btnSugerencia.addEventListener("click", () => {
    setTelephone("+56 8 0021 3006");

    showDisplay();
  });

  // Hide display element
  const close = document.querySelector(".hablemos__display-close .close-icon");

  close.addEventListener("click", () => {
    if (Array.from(display.classList).includes("hablemos__display--appears")) {
      display.classList.remove("hablemos__display--appears");
    }

    display.classList.add("hablemos__display--disappears");
  });
})();
