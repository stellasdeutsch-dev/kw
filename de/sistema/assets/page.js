/* Дизайн 11: появление при прокрутке, видео только в зоне видимости, плавающая карточка покупки,
   приёмы продажи (до/после, калькулятор времени, ачивки). При prefers-reduced-motion: без появления и без автозапуска видео. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = 'IntersectionObserver' in window;
  var root = document.documentElement;

  /* reveal: после появления класс снимается, чтобы hover-переходы карточек были свои */
  if (!reduce && io) {
    root.classList.add('io');
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; el.classList.add('in'); ob.unobserve(el);
        setTimeout(function () { el.classList.remove('rv', 'in'); }, 1300);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    document.querySelectorAll('.rv').forEach(function (el) { ob.observe(el); });
  }

  /* video: играет только в зоне видимости */
  document.querySelectorAll('video[data-auto]').forEach(function (v) {
    if (reduce || !io) { v.setAttribute('controls', ''); return; }
    var vo = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.35 });
    vo.observe(v);
  });

  /* dock: после героя, прячется у блока цены и подвала */
  var dock = document.querySelector('[data-dock]'), hero = document.querySelector('.hero');
  if (dock && hero && io) {
    var past = false, nearPrice = false;
    var link = dock.querySelector('a');
    function upd() {
      var on = past && !nearPrice;
      dock.classList.toggle('is-on', on);
      dock.setAttribute('aria-hidden', on ? 'false' : 'true');
      link.tabIndex = on ? 0 : -1;
    }
    new IntersectionObserver(function (es) { past = !es[0].isIntersecting; upd(); }, { threshold: 0 }).observe(hero);
    var vis = new Map();
    var po = new IntersectionObserver(function (es) {
      es.forEach(function (en) { vis.set(en.target, en.isIntersecting); });
      nearPrice = false; vis.forEach(function (v) { if (v) nearPrice = true; }); upd();
    }, { threshold: 0 });
    document.querySelectorAll('#price, .foot').forEach(function (el) { po.observe(el); });
  }

  /* до и после */
  document.querySelectorAll('[data-ba]').forEach(function (box) {
    var bs = [].slice.call(box.querySelectorAll('[data-ba-set]'));
    bs.forEach(function (b) {
      b.addEventListener('click', function () {
        var after = b.dataset.baSet === 'after';
        box.classList.toggle('is-after', after);
        bs.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      });
    });
  });

  /* калькулятор времени: тема ≈ per минут */
  document.querySelectorAll('[data-calc]').forEach(function (box) {
    var d = JSON.parse(box.querySelector('[data-calc-data]').textContent);
    var r = box.querySelector('[data-calc-r]');
    var q = [].slice.call(box.querySelectorAll('[data-calc-set]'));
    function word(n, a, b, c) { var m = n % 10, h = n % 100; return (m === 1 && h !== 11) ? a : (m >= 2 && m <= 4 && (h < 12 || h > 14)) ? b : c; }
    function upd() {
      var m = +r.value, perDay = m / d.per;
      var month = Math.floor(perDay * 30), week = Math.floor(perDay * 7);
      var months = Math.ceil(d.total / (perDay * 30));
      box.querySelector('[data-calc-min]').textContent = m;
      box.querySelector('[data-calc-month]').textContent = month;
      box.querySelector('[data-calc-week]').textContent = week;
      box.querySelector('[data-calc-all]').textContent = months;
      box.querySelector('[data-calc-all-t]').textContent = word(months, 'месяц', 'месяца', 'месяцев') + ' на все ' + d.total + '+ гайдов';
      q.forEach(function (b) { b.classList.toggle('is-on', +b.dataset.calcSet === m); });
    }
    r.addEventListener('input', upd);
    q.forEach(function (b) { b.addEventListener('click', function () { r.value = b.dataset.calcSet; upd(); }); });
    upd();
  });

  /* ачивки */
  document.querySelectorAll('[data-quest]').forEach(function (box) {
    var lv = JSON.parse(box.querySelector('[data-qs-data]').textContent);
    var bs = [].slice.call(box.querySelectorAll('[data-qs]')), last = box.querySelector('[data-qs-last]');
    var total = bs.length + 1;
    function upd() {
      var n = bs.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; }).length;
      var open = n === bs.length;
      last.classList.toggle('is-open', open);
      var shown = n + (open ? 1 : 0);
      box.querySelector('[data-qs-n]').textContent = shown;
      box.querySelector('[data-qs-bar]').style.width = (shown / total * 100) + '%';
      box.querySelector('[data-qs-lv]').textContent = lv[Math.min(lv.length - 1, Math.round(shown / total * (lv.length - 1)))];
    }
    bs.forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); upd(); }); });
    upd();
  });
})();
