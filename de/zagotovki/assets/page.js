/* Дизайн 09: появление при прокрутке, видео только в зоне видимости, приёмы продажи (чек-лист, план недели, пакеты).
   При prefers-reduced-motion: без появления, без автозапуска видео (у видео кнопки управления). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = 'IntersectionObserver' in window;
  var root = document.documentElement;

  /* reveal */
  if (!reduce && io) {
    root.classList.add('io');
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); ob.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.rv').forEach(function (el) { ob.observe(el); });
  }

  /* video: плays only while visible */
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

  /* checklist: «3 шага до первого урока» */
  document.querySelectorAll('[data-checklist]').forEach(function (box) {
    var btns = [].slice.call(box.querySelectorAll('[data-ck]'));
    var bar = box.querySelector('[data-ck-bar]'), cnt = box.querySelector('[data-ck-count]'), done = box.querySelector('[data-ck-done]');
    function upd() {
      var n = btns.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; }).length;
      cnt.textContent = n; bar.style.width = (n / btns.length * 100) + '%';
      btns.forEach(function (b) { b.closest('.ck-row').classList.toggle('is-on', b.getAttribute('aria-pressed') === 'true'); });
      done.hidden = n !== btns.length;
    }
    btns.forEach(function (b) {
      b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); upd(); });
    });
    var last = box.querySelector('[data-ck-last]');
    var lastLink = last && last.closest('.ck-row').querySelector('a');
    if (lastLink) lastLink.addEventListener('click', function () { last.setAttribute('aria-pressed', 'true'); upd(); });
    upd();
  });

  /* planner: выбери дни и минуты -> план недели */
  document.querySelectorAll('[data-planner]').forEach(function (box) {
    var data = JSON.parse(box.querySelector('[data-pl-data]').textContent);
    var days = [].slice.call(box.querySelectorAll('[data-day]')), mins = [].slice.call(box.querySelectorAll('[data-min]'));
    var week = box.querySelector('[data-pl-week]'), sum = box.querySelector('[data-pl-sum]'), empty = box.querySelector('[data-pl-empty]');
    function word(n, a, b, c) { var m = n % 10, h = n % 100; return (m === 1 && h !== 11) ? a : (m >= 2 && m <= 4 && (h < 12 || h > 14)) ? b : c; }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function upd() {
      var on = days.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return +b.dataset.day; });
      var m = +(mins.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; })[0] || mins[0]).dataset.min;
      week.innerHTML = on.map(function (i) {
        var t = data.tasks[i];
        return '<li><span class="d">' + esc(data.days[i]) + '</span><span class="t"><b>' + esc(t[0]) + '</b><span>' + esc(t[1]) + '</span></span><span class="m">' + m + ' мин</span></li>';
      }).join('');
      empty.hidden = on.length > 0;
      var total = on.length * m;
      sum.textContent = on.length ? on.length + ' ' + word(on.length, 'день', 'дня', 'дней') + ' × ' + m + ' мин = ' + total + ' ' + word(total, 'минута', 'минуты', 'минут') + ' в неделю' : 'Пока ни одного дня';
    }
    days.forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); upd(); }); });
    mins.forEach(function (b) { b.addEventListener('click', function () { mins.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); upd(); }); });
    upd();
  });

  /* packages: выбери платформы -> итог */
  document.querySelectorAll('[data-packages]').forEach(function (box) {
    var a = box.querySelector('[data-pk="a"]'), b = box.querySelector('[data-pk="b"]');
    var title = box.querySelector('[data-pk-title]'), price = box.querySelector('[data-pk-price]'), old = box.querySelector('[data-pk-old]'), list = box.querySelector('[data-pk-list]');
    var L = {
      both: ['Обе платформы: A0–C1', '30 €', '40 €', ['A0–A2 и B1–C1 вместе', 'экономия 10 €', 'бонус: раздел A0–A2 на украинском', 'один платёж, доступ навсегда']],
      a: ['Платформа A0–A2', '20 €', '', ['от алфавита до уверенного A2', 'один платёж, доступ навсегда', 'добавь B1–C1: вместе 30 € вместо 40 €']],
      b: ['Платформа B1–C1', '20 €', '', ['для тех, кто уже на B1 и идёт к C1', 'один платёж, доступ навсегда', 'добавь A0–A2: вместе 30 € вместо 40 €']],
      none: ['Выбери платформу', '0 €', '', ['нажми на A0–A2 или B1–C1']]
    };
    function upd() {
      var x = a.getAttribute('aria-pressed') === 'true', y = b.getAttribute('aria-pressed') === 'true';
      var k = x && y ? 'both' : x ? 'a' : y ? 'b' : 'none', d = L[k];
      title.textContent = d[0]; price.textContent = d[1]; old.textContent = d[2];
      list.innerHTML = d[3].map(function (s) { return '<li>' + s + '</li>'; }).join('');
    }
    [a, b].forEach(function (el) { el.addEventListener('click', function () { el.setAttribute('aria-pressed', el.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); upd(); }); });
    upd();
  });
})();
