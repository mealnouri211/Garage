/* Order confirmation page */
(() => {
  const HW = window.HW;
  const ref = new URLSearchParams(location.search).get('ref');
  const order = HW.store.get('hw_orders', []).find((o) => o.ref === ref);

  function render() {
    const root = HW.$('#confRoot');
    if (!order) {
      root.innerHTML = `<div class="done"><p class="muted">${HW.t('conf_none')}</p><a class="btn btn--gold" href="shop.html">${HW.t('browse')}</a></div>`;
      return;
    }
    const items = order.items.filter((i) => HW.findProduct(i.pid)).map((i) => ({ ...i, key: i.pid }));
    const payKey = { knet: 'pay_knet_v', apple: 'pay_apple_v', cash: 'pay_cash_v' }[order.payment];
    root.innerHTML = `
      <div class="done">
        <div class="done__icon"><svg viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></svg></div>
        <h1>${HW.t('conf_title')}</h1>
        <p class="muted">${HW.t('done_p')}</p>
        <div><small class="muted">${HW.t('ref')}</small><br><code id="refCode"></code></div>
      </div>
      <div class="panel">
        <h3>${HW.t('order_summary')}</h3>
        <div class="lines lines--compact">${items.map((it) => HW.lineHtml(it)).join('')}</div>
        <div class="sum"><div class="grand"><span>${HW.t('total')}</span><span>${HW.money(order.total)}</span></div></div>
        <dl class="facts">
          <div><dt>${HW.t('customer')}</dt><dd id="cust"></dd></div>
          <div><dt>${HW.t('payment_l')}</dt><dd>${HW.t(payKey)}</dd></div>
          <div><dt>${HW.t('status')}</dt><dd>${HW.t('pending')}</dd></div>
        </dl>
      </div>
      <div class="actions">
        <a class="btn btn--gold" href="index.html">${HW.t('back_home')}</a>
        <button class="btn btn--ghost" onclick="window.print()">${HW.t('print')}</button>
      </div>`;
    HW.$('#refCode').textContent = order.ref;
    HW.$('#cust').textContent = [order.customer.name, order.customer.phone, order.customer.car].filter(Boolean).join(' · ');
  }
  HW.boot(render);
})();
