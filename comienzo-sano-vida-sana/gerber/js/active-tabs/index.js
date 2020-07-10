(() => {
  // Data
  const activeImages = [
    '/sites/default/files/2020-06/-1a.png',
    '/sites/default/files/2020-06/2a.png',
    '/sites/default/files/2020-06/3a.png'
  ];


  const inactiveImages = [
    '/sites/default/files/1.png',
    '/sites/default/files/2.png',
    '/sites/default/files/3.png'
  ];

  // DOM Elements
  const tabs = Array.from(document.querySelectorAll(`.elementor-element-171e0d2e
                                                      .elementor-widget-container
                                                        .elementor-tabs .elementor-tabs-wrapper
                                                          .elementor-tab-title`));

  // Functions
  function init(tab, index) {
      switchImage(tab, index, checkActive(tab));
  }

  function checkActive(tab) {
      return Array.from(tab.classList).includes("elementor-active");
  }

  function switchImage(tab, index, active) {
    const img = tab.querySelector('img');

    if (active) {
      const src = img.getAttribute('src');

      if (src.endsWith(inactiveImages[index])) {
        img.setAttribute('src', src.replace(inactiveImages[index], activeImages[index]));
      }
    } else {
      const url = img.getAttribute("src").split("/sites/default/files/")[0] + inactiveImages[index];
      img.setAttribute('src', url);
    }
  }

  // Init
  document.addEventListener("DOMContentLoaded", function() {
    tabs.map((tab, i) => {
        init(tab, i);
    
        tab.addEventListener("click", e => {
            tabs.map((tab, i) => {
              init(tab, i);
            });
        });
      });
  });
})();