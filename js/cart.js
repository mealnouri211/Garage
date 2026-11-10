/* Cart page */
(() => {
  const HW = window.HW;
  function render() {
    const root = HW.$('#cartRoot');
    if (!HW.cart.length) {
      root.innerHTML = `<div class="done"><p class="muted">${HW.t('cart_empty')}</p><a class="btn btn--gold" href="shop.html">${HW.t('browse')}</a></div>`;
      return;
    }
    root.innerHTML = `
      <div class="two-col">
        <div class="lines">${HW.cart.map((it) => HW.lineHtml(it, { editable: true })).join('')}</div>
        <aside class="panel summary">
          <h3>${HW.t('order_summary')}</h3>
          <div class="sum">
            <div><span>${HW.t('items')}</span><span>${HW.cart.reduce((s, i) => s + i.qty, 0)}</span></div>
            <div><span>${HW.t('subtotal')}</span><span class="price">${HW.money(HW.cartTotal())}</span></div>
            <div class="grand"><span>${HW.t('total')}</span><span>${HW.money(HW.cartTotal())}</span></div>
          </div>
          <a class="btn btn--gold btn--block" href="checkout.html">${HW.t('proceed')}</a>
          <a class="btn btn--ghost btn--block" href="shop.html">${HW.t('continue_shopping')}</a>
        </aside>
      </div>`;
    // add an "Edit" link to each line
    HW.$$('.line', root).forEach((el) => {
      const it = HW.cart.find((i) => i.key === el.dataset.key);
      const a = document.createElement('a');
      a.className = 'line__rm'; a.href = `${HW.productUrl(it.pid)}&edit=${it.key}`; a.textContent = HW.t('edit');
      HW.$('.line__side', el).prepend(a);
    });
    root.onclick = (e) => {
      const rm = e.target.closest('[data-rm]');
      if (rm) { HW.cart = HW.cart.filter((i) => i.key !== rm.dataset.rm); HW.saveCart(); render(); HW.applyI18n(); return; }
      const q = e.target.closest('[data-q]');
      if (q) {
        const it = HW.cart.find((i) => i.key === q.closest('.line').dataset.key);
        it.qty = Math.min(20, Math.max(1, it.qty + Number(q.dataset.q))); HW.saveCart(); render(); HW.applyI18n();
      }
    };
  }
  HW.boot(render);
})();
