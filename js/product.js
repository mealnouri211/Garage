/* Product page: option configurator, live price, booking slots, add to cart (or update a cart line). */
(() => {
  const HW = window.HW;
  const params = new URLSearchParams(location.search);
  const p = HW.findProduct(params.get('id'));
  const editKey = params.get('edit');
  const editing = editKey ? HW.cart.find((i) => i.key === editKey && i.pid === (p && p.id)) : null;

  const st = editing
    ? { sel: JSON.parse(JSON.stringify(editing.sel)), qty: editing.qty, date: editing.date, time: editing.time }
    : { sel: {}, qty: 1, date: '', time: '' };
  if (p) p.groups.forEach((g) => { st.sel[g.id] = st.sel[g.id] || []; });

  const SLOT_HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const hourLabel = (h) => `${String(h).padStart(2, '0')}:00`;
  const todayStr = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
  // Demo only: pretends some slots are already taken. Replace with a real availability API.
  function slotTaken(date, hour, pid) {
    let h = 0; const s = `${date}-${hour}-${pid}`;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h % 5 === 0;
  }

  function slotsHtml() {
    if (!st.date) return '';
    const isFri = new Date(st.date + 'T00:00:00').getDay() === 5;
    const now = new Date(), isToday = st.date === todayStr();
    return SLOT_HOURS.map((h) => {
      const off = (isFri && h < 16) || (isToday && h <= now.getHours()) || slotTaken(st.date, h, p.id);
      return `<button type="button" class="slot ${st.time === hourLabel(h) ? 'active' : ''}" data-time="${hourLabel(h)}" ${off ? 'disabled' : ''}>${hourLabel(h)}</button>`;
    }).join('');
  }

  function render() {
    const root = HW.$('#productRoot');
    if (!p) {
      HW.$('#crumbs').innerHTML = `<a href="index.html">${HW.t('home')}</a><span>/</span><a href="shop.html">${HW.t('shop')}</a>`;
      root.innerHTML = `<div class="done"><p class="muted">${HW.t('not_found')}</p><a class="btn btn--gold" href="shop.html">${HW.t('browse')}</a></div>`;
      return;
    }
    const cat = HW.findCat(p.cat);
    HW.$('#crumbs').innerHTML = `<a href="index.html">${HW.t('home')}</a><span>/</span><a href="shop.html">${HW.t('shop')}</a><span>/</span><a href="shop.html?cat=${cat.id}">${HW.L(cat.name)}</a><span>/</span><span>${HW.L(p.name)}</span>`;

    const groups = p.groups.map((g) => `
      <fieldset class="group">
        <legend>${HW.L(g.label)} <small>${g.required ? HW.t('required') : HW.t('optional')}</small></legend>
        <div class="opts">${g.options.map((o) => `
          <label class="opt">
            <input type="${g.type === 'radio' ? 'radio' : 'checkbox'}" name="${g.id}" value="${o.id}" ${st.sel[g.id].includes(o.id) ? 'checked' : ''}>
            <span>${HW.L(o.label)}</span>
            ${o.delta ? `<em>${o.delta > 0 ? '+' : '−'}${Math.abs(o.delta).toFixed(3)}</em>` : ''}
          </label>`).join('')}
        </div>
      </fieldset>`).join('');

    const pct = HW.discountPct(p);
    const inc = p.includes[HW.lang], notes = p.notes[HW.lang];
    const details = `
      ${inc.length ? `<section class="detail"><h3>${HW.t('includes_t')}</h3><ul class="checks">${inc.map((x) => `<li>${x}</li>`).join('')}</ul></section>` : ''}
      ${p.specs.length ? `<section class="detail"><h3>${HW.t('specs_t')}</h3><dl class="specs">${p.specs.map((x) => `<div><dt>${HW.L(x.k)}</dt><dd>${HW.L(x.v)}</dd></div>`).join('')}</dl></section>` : ''}
      ${notes.length ? `<section class="detail"><h3>${HW.t('notes_t')}</h3><ul class="notes">${notes.map((x) => `<li>${x}</li>`).join('')}</ul></section>` : ''}`;
    root.innerHTML = `
      <div class="pp">
        <div class="pp__media">${HW.ph(p.img, HW.L(p.name))}</div>
        <div class="pp__form">
          <span class="card__tag card__tag--inline">${p.type === 'service' ? HW.t('service') : HW.t('part')}</span>
          <h1>${HW.L(p.name)}</h1>
          <div class="pricebox">${HW.priceHtml(p, false)}${pct ? `<span class="pill">-${pct}% ${HW.t('off')}</span><span class="save">${HW.t('you_save')} ${HW.money(p.was - p.base)}</span>` : ''}</div>
          <p class="lead">${HW.L(p.desc)}</p>
          ${p.badges.length ? `<div class="badges">${p.badges.map((b) => `<span>${HW.L(b)}</span>`).join('')}</div>` : ''}
          ${details}
          ${groups}
          <fieldset class="group" id="bookingBox" hidden>
            <legend>${HW.t('booking')} <small>${HW.t('required')}</small></legend>
            <div class="field"><label for="bkDate">${HW.t('choose_date')}</label><input type="date" id="bkDate" min="${todayStr()}" value="${st.date}"></div>
            <div class="slots" id="slots">${slotsHtml()}</div>
          </fieldset>
          <div class="err" id="cfgErr" role="alert"></div>
          <a class="btn btn--ghost btn--block" target="_blank" rel="noopener" href="https://wa.me/${HW.CONTACT.wa}?text=${encodeURIComponent(HW.t('wa_hello') + ' ' + HW.L(p.name))}">${HW.t('ask_wa')}</a>
          <div class="buybar">
            <div class="qty" ${p.type === 'service' ? 'hidden' : ''} aria-label="${HW.t('qty')}">
              <button type="button" data-q="-1" aria-label="-">−</button><span id="qtyVal">${st.qty}</span><button type="button" data-q="1" aria-label="+">+</button>
            </div>
            <div class="total"><small>${HW.t('total')}</small><strong id="cfgTotal"></strong></div>
            <button class="btn btn--gold" id="addBtn">${editing ? HW.t('continue_booking') : HW.t('add_to_cart')}</button>
          </div>
        </div>
      </div>`;
    refresh();

    const form = HW.$('.pp__form');
    form.onchange = (e) => {
      const el = e.target;
      if (el.matches('.opts input')) {
        const g = p.groups.find((x) => x.id === el.name);
        st.sel[g.id] = g.type === 'radio' ? [el.value] : HW.$$(`input[name="${g.id}"]:checked`, form).map((i) => i.value);
        HW.$('#cfgErr').textContent = ''; refresh();
      } else if (el.id === 'bkDate') {
        st.date = el.value; st.time = ''; HW.$('#slots').innerHTML = slotsHtml(); HW.$('#cfgErr').textContent = '';
      }
    };
    form.onclick = (e) => {
      const q = e.target.closest('[data-q]');
      if (q) { st.qty = Math.min(20, Math.max(1, st.qty + Number(q.dataset.q))); refresh(); return; }
      const s = e.target.closest('.slot');
      if (s && !s.disabled) { st.time = s.dataset.time; HW.$$('.slot', form).forEach((x) => x.classList.toggle('active', x === s)); HW.$('#cfgErr').textContent = ''; return; }
      if (e.target.closest('#addBtn')) addToCart();
    };

    // related products
    const rel = HW.PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id);
    const more = HW.PRODUCTS.filter((x) => x.type === p.type && x.cat !== p.cat && x.id !== p.id);
    const list = [...rel, ...more].slice(0, 4);
    HW.$('#relatedWrap').hidden = !list.length;
    HW.$('#relatedGrid').innerHTML = list.map(HW.cardHtml).join('');
  }

  function refresh() {
    HW.$('#cfgTotal').textContent = HW.money(HW.unitPrice(p, st.sel) * st.qty);
    HW.$('#bookingBox').hidden = !HW.needsBooking(p, st.sel);
    HW.$('#qtyVal').textContent = st.qty;
  }

  function addToCart() {
    if (p.groups.some((g) => g.required && !st.sel[g.id].length)) { HW.$('#cfgErr').textContent = HW.t('err_required'); return; }
    const book = HW.needsBooking(p, st.sel);
    if (book && (!st.date || !st.time)) { HW.$('#cfgErr').textContent = HW.t('err_booking'); return; }
    const line = { pid: p.id, sel: st.sel, qty: st.qty, date: book ? st.date : '', time: book ? st.time : '' };
    if (editing) Object.assign(editing, line);
    else HW.cart.push({ key: `${Date.now()}${Math.random().toString(36).slice(2, 6)}`, ...line });
    HW.saveCart();
    location.href = 'cart.html';
  }

  document.body.classList.add('is-product');
  HW.boot(render);
})();
