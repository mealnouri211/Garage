/* Home page */
(() => {
  const HW = window.HW;
  const FEATURED = ['polish-hero', 'ppf-full', 'thermal-a', 'wheels-protect', 'dc-m550', 'repaint-glasurit', 'wash-nano', 'service-jp'];
  HW.boot(() => {
    HW.$('#statItems').textContent = HW.PRODUCTS.length;
    HW.$('#statCats').textContent = HW.CATS.length;
    HW.$('#catGrid').innerHTML = HW.CATS.map((c) => {
      const n = HW.PRODUCTS.filter((p) => p.cat === c.id).length;
      return `<a class="cat" href="shop.html?cat=${c.id}">${HW.ph(c.img, HW.L(c.name))}<span class="cat__label">${HW.L(c.name)}<span class="cat__count">${n}</span></span></a>`;
    }).join('');
    HW.$('#featuredGrid').innerHTML = FEATURED.map(HW.findProduct).filter(Boolean).map(HW.cardHtml).join('');
  });
})();
