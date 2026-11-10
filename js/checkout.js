/* Checkout page: collects details, saves the order locally, then goes to confirmation.html */
(() => {
  const HW = window.HW;
  if (!HW.cart.length) { location.replace('cart.html'); return; }

  function render() {
    const root = HW.$('#checkoutRoot');
    const keep = ['fName', 'fPhone', 'fCar', 'fNotes'].reduce((o, id) => ({ ...o, [id]: (HW.$('#' + id) || {}).value || '' }), {});
    root.innerHTML = `
      <div class="two-col">
        <form class="panel" id="checkoutForm" novalidate>
          <h3>${HW.t('your_details')}</h3>
          <div class="field"><label for="fName">${HW.t('f_name')}</label><input id="fName" autocomplete="name" required></div>
          <div class="field"><label for="fPhone">${HW.t('f_phone')}</label><input id="fPhone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" required></div>
          <div class="field"><label for="fCar">${HW.t('f_car')}</label><input id="fCar"></div>
          <div class="field"><label for="fNotes">${HW.t('f_notes')}</label><textarea id="fNotes" rows="3"></textarea></div>
          <div class="field"><label>${HW.t('payment')}</label>
            <div class="pay-opts">
              <label><input type="radio" name="pay" value="knet" checked>${HW.t('pay_knet')}</label>
              <label><input type="radio" name="pay" value="apple">${HW.t('pay_apple')}</label>
              <label><input type="radio" name="pay" value="cash">${HW.t('pay_cash')}</label>
            </div>
          </div>
          <div class="err" id="coErr" role="alert"></div>
          <button class="btn btn--gold btn--block" type="submit">${HW.t('confirm')}</button>
        </form>
        <aside class="panel summary">
          <h3>${HW.t('order_summary')}</h3>
          <div class="lines lines--compact">${HW.cart.map((it) => HW.lineHtml(it)).join('')}</div>
          <div class="sum"><div class="grand"><span>${HW.t('total')}</span><span>${HW.money(HW.cartTotal())}</span></div></div>
          <a class="line__rm" href="cart.html">${HW.t('edit')}</a>
        </aside>
      </div>`;
    Object.entries(keep).forEach(([id, v]) => { HW.$('#' + id).value = v; });
    HW.$('#checkoutForm').onsubmit = submit;
  }

  function submit(e) {
    e.preventDefault();
    const name = HW.$('#fName').value.trim(), phone = HW.$('#fPhone').value.trim();
    if (!name || phone.replace(/\D/g, '').length < 7) { HW.$('#coErr').textContent = HW.t('fill_all'); return; }
    const order = {
      ref: 'HW-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
      createdAt: new Date().toISOString(),
      customer: { name, phone, car: HW.$('#fCar').value.trim(), notes: HW.$('#fNotes').value.trim() },
      payment: HW.$('input[name="pay"]:checked').value,
      total: HW.cartTotal(),
      items: HW.cart.map((it) => ({ pid: it.pid, sel: it.sel, qty: it.qty, date: it.date, time: it.time }))
    };
    /* TODO: POST `order` to your backend / payment gateway here, then redirect on success. */
    HW.store.set('hw_orders', [...HW.store.get('hw_orders', []), order]);
    HW.cart = []; HW.saveCart();
    location.href = `confirmation.html?ref=${order.ref}`;
  }
  HW.boot(render);
})();
