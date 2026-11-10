/* Contact page: opens WhatsApp with the typed message . */
(() => {
  const HW = window.HW;
  const WA_NUMBER = HW.CONTACT.wa;
  HW.boot(() => {
    HW.$('#contactForm').onsubmit = (e) => {
      e.preventDefault();
      const text = `${HW.$('#cName').value.trim()} (${HW.$('#cPhone').value.trim()})\n${HW.$('#cMsg').value.trim()}`;
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    };
  });
})();
