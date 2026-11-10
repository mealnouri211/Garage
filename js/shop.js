/* Shop page: filters are kept in the URL (?type=&cat=&q=) so links and the back button work. */
(() => {
  const HW = window.HW;
  const params = new URLSearchParams(location.search);
  const filter = { type: params.get('type') || 'all', cat: params.get('cat') || 'all', q: params.get('q') || '', sort: params.get('sort') || 'default' };
  const cat0 = HW.findCat(filter.cat);
  if (cat0 && filter.type === 'all') filter.type = cat0.type;

  function syncUrl() {
    const p = new URLSearchParams();
    if (filter.type !== 'all') p.set('type', filter.type);
    if (filter.cat !== 'all') p.set('cat', filter.cat);
    if (filter.q) p.set('q', filter.q);
    if (filter.sort !== 'default') p.set('sort', filter.sort);
    history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : ''));
  }

  function renderChips() {
    const types = [['all', HW.t('all')], ['service', HW.t('services')], ['part', HW.t('parts')]];
    HW.$('#typeChips').innerHTML = types.map(([k, v]) => `<button class="chip ${filter.type === k ? 'active' : ''}" data-type="${k}">${v}</button>`).join('');
    const cats = HW.CATS.filter((c) => filter.type === 'all' || c.type === filter.type);
    HW.$('#catChips').innerHTML = `<button class="chip ${filter.cat === 'all' ? 'active' : ''}" data-cat="all">${HW.t('all_cats')}</button>` +
      cats.map((c) => `<button class="chip ${filter.cat === c.id ? 'active' : ''}" data-cat="${c.id}">${HW.L(c.name)}</button>`).join('');
  }

  function renderProducts() {
    const q = filter.q.trim().toLowerCase();
    const list = HW.PRODUCTS.filter((p) =>
      (filter.type === 'all' || p.type === filter.type) &&
      (filter.cat === 'all' || p.cat === filter.cat) &&
      (!q || `${p.name.ar} ${p.name.en} ${p.desc.ar} ${p.desc.en}`.toLowerCase().includes(q)));
    const sorters = { low: (a, b) => a.base - b.base, high: (a, b) => b.base - a.base, off: (a, b) => HW.discountPct(b) - HW.discountPct(a) };
    if (sorters[filter.sort]) list.sort(sorters[filter.sort]);
    HW.$('#productGrid').innerHTML = list.map(HW.cardHtml).join('');
    HW.$('#emptyMsg').hidden = list.length > 0;
    HW.$('#count').textContent = `${list.length} ${HW.t('results')}`;
  }

  HW.boot(() => {
    renderChips(); renderProducts();
    const sel = HW.$('#sortSel');
    sel.innerHTML = [['default', 'sort_default'], ['low', 'sort_low'], ['high', 'sort_high'], ['off', 'sort_off']]
      .map(([v, k]) => `<option value="${v}" ${filter.sort === v ? 'selected' : ''}>${HW.t(k)}</option>`).join('');
    sel.onchange = (e) => { filter.sort = e.target.value; syncUrl(); renderProducts(); };
    const input = HW.$('#searchInput');
    input.value = filter.q;
    input.oninput = (e) => { filter.q = e.target.value; syncUrl(); renderProducts(); };
    HW.$('#typeChips').onclick = (e) => {
      const b = e.target.closest('[data-type]'); if (!b) return;
      filter.type = b.dataset.type; filter.cat = 'all'; syncUrl(); renderChips(); renderProducts();
    };
    HW.$('#catChips').onclick = (e) => {
      const b = e.target.closest('[data-cat]'); if (!b) return;
      filter.cat = b.dataset.cat; syncUrl(); renderChips(); renderProducts();
    };
  });
  if (params.get('focus')) HW.$('#searchInput').focus();
})();
