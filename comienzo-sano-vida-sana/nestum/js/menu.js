document.addEventListener("DOMContentLoaded", () => {
  /**
   * Menu
   */
  (() => {
    // Data
    const imgUrl = location.protocol + "//" + location.hostname + "/sites/default/files/2020-06/active.png";
    const isPreparaciones = location.pathname.includes("/nestum/preparaciones");

    // Dynamic image node
    const node = document.createElement("img");
    node.setAttribute("src", imgUrl);
    node.setAttribute("alt", "Active menu item");
    node.classList.add("nestum-active-underline");

    // Getting li items
    const menuItems = Array.from(document.querySelectorAll(".nestum-menu ul li a"));

    // Init
    menuItems.map((item) => {
      setActiveImage(item);

      item.addEventListener("click", () => {
        setActiveImage(item);
      });
    });

    // Functions
    function setActiveImage(item) {
      if (!item.querySelector("img")) {
        if (
          Array.from(item.parentElement.classList).includes("active") ||
          (isPreparaciones && item.textContent.toLowerCase() === "preparaciones")
        ) {
          item.insertAdjacentElement("beforeend", node);
        }
      }
    }
  })();
});
