/* Дизайн 13: появление при прокрутке, видео только в зоне видимости, рамка шапки при прокрутке, плавающая карточка покупки,
   приёмы продажи (цена в день, карта «ты здесь», тур по экранам). При prefers-reduced-motion: без появления и без автозапуска видео. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = 'IntersectionObserver' in window;
  var root = document.documentElement;

  /* reveal: после появления класс снимается, чтобы hover-переходы были свои */
  if (!reduce && io) {
    root.classList.add('io');
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; el.classList.add('in'); ob.unobserve(el);
        setTimeout(function () { el.classList.remove('rv', 'in'); }, 1400);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    document.querySelectorAll('.rv').forEach(function (el) { ob.observe(el); });
  }

  /* шапка: тонкая линия снизу, когда страница прокручена */
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* video: играет только в зоне видимости */
  document.querySelectorAll('video[data-auto]').forEach(function (v) {
    if (reduce || !io) { v.setAttribute('controls', ''); return; }
    new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.35 }).observe(v);
  });

  /* dock: после героя, прячется у блока цены и подвала */
  var dock = document.querySelector('[data-dock]'), hero = document.querySelector('.sec-hero');
  if (dock && hero && io) {
    var past = false, nearPrice = false, link = dock.querySelector('a'), vis = new Map();
    var upd = function () {
      var on = past && !nearPrice;
      dock.classList.toggle('is-on', on);
      dock.setAttribute('aria-hidden', on ? 'false' : 'true');
      link.tabIndex = on ? 0 : -1;
    };
    new IntersectionObserver(function (es) { past = !es[0].isIntersecting; upd(); }, { threshold: 0 }).observe(hero);
    var po = new IntersectionObserver(function (es) {
      es.forEach(function (en) { vis.set(en.target, en.isIntersecting); });
      nearPrice = false; vis.forEach(function (v) { if (v) nearPrice = true; }); upd();
    }, { threshold: 0 });
    document.querySelectorAll('#price, .foot').forEach(function (el) { po.observe(el); });
  }

  /* вкладки с role=tab: показать свою панель */
  function tabs(box, sel, onShow) {
    var bs = [].slice.call(box.querySelectorAll(sel));
    function show(i) {
      bs.forEach(function (b, j) {
        b.setAttribute('aria-selected', j === i ? 'true' : 'false');
        b.tabIndex = j === i ? 0 : -1;
        var p = document.getElementById(b.getAttribute('aria-controls'));
        if (p) p.hidden = j !== i;
      });
      if (onShow) onShow(i, bs.length);
    }
    bs.forEach(function (b, i) {
      b.addEventListener('click', function () { show(i); });
      b.addEventListener('keydown', function (ev) {
        var k = ev.key === 'ArrowRight' ? 1 : ev.key === 'ArrowLeft' ? -1 : 0;
        if (!k) return; ev.preventDefault();
        var n = (i + k + bs.length) % bs.length; show(n); bs[n].focus();
      });
    });
    return show;
  }

  /* 05: цена в день */
  document.querySelectorAll('[data-pd-box]').forEach(function (box) { tabs(box, '[data-pd]'); });

  /* 17: тур по экранам */
  document.querySelectorAll('[data-tour]').forEach(function (box) {
    var cur = 0, dots = [].slice.call(box.querySelectorAll('.dots i'));
    var prev = box.querySelector('[data-tr-prev]'), next = box.querySelector('[data-tr-next]');
    var show = tabs(box, '[data-tr]', function (i, n) {
      cur = i;
      dots.forEach(function (d, j) { d.classList.toggle('on', j === i); });
      prev.disabled = i === 0; next.disabled = i === n - 1;
    });
    prev.addEventListener('click', function () { show(Math.max(0, cur - 1)); });
    next.addEventListener('click', function () { show(Math.min(dots.length - 1, cur + 1)); });
  });

  /* 11: карта «ты здесь» */
  document.querySelectorAll('[data-map]').forEach(function (box) {
    var data = JSON.parse(box.querySelector('[data-mp-data]').textContent);
    var bs = [].slice.call(box.querySelectorAll('[data-mp]'));
    var you = box.querySelector('[data-mp-you]'), pk = [].slice.call(box.querySelectorAll('[data-pk]'));
    function pick(b) {
      var r = data[b.dataset.mp];
      bs.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      you.style.setProperty('--x', b.parentNode.style.getPropertyValue('--x'));
      box.querySelector('[data-mp-title]').textContent = r.title;
      box.querySelector('[data-mp-text]').innerHTML = r.text;
      box.querySelector('[data-mp-next]').textContent = r.next;
      pk.forEach(function (p) { p.classList.toggle('is-on', p.dataset.pk === r.pack); });
    }
    bs.forEach(function (b) { b.addEventListener('click', function () { pick(b); }); });
    var on = bs.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; })[0];
    if (on) pick(on);
  });
})();
