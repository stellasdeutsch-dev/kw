/* Дизайн 14: вкладки приёма продажи (дни истории, причины «не покупать»), пример «Мои ошибки», рамка шапки при прокрутке,
   видео играет только в зоне видимости, счётчики и появление при прокрутке. Всё движение выключено при «уменьшить движение». */
(function () {
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  root.classList.add('jsok');

  // вкладки: кнопки role=tab + панели; стрелки влево/вправо переключают
  function tabs(list, panelSel, onShow) {
    if (!list) return null;
    var bs = [].slice.call(list.querySelectorAll('[role=tab]'));
    var ps = bs.map(function (b) { return document.getElementById(b.getAttribute('aria-controls')); });
    var cur = 0;
    function show(i, focus) {
      cur = (i + bs.length) % bs.length;
      bs.forEach(function (b, k) {
        var on = k === cur;
        b.classList.toggle('on', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
        ps[k].hidden = !on;
        if (on && !reduce) { ps[k].classList.remove('in'); void ps[k].offsetWidth; ps[k].classList.add('in'); }
      });
      if (focus) bs[cur].focus();
      if (onShow) onShow(cur);
    }
    bs.forEach(function (b, k) {
      b.addEventListener('click', function () { show(k); });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); show(cur + 1, true); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); show(cur - 1, true); }
      });
    });
    ps.forEach(function (p, k) { p.hidden = k !== 0; });
    return { show: show, cur: function () { return cur; }, n: bs.length };
  }

  // история по дням: ползунок-подложка, точки, «Следующий день»
  var days = document.querySelector('[data-days]');
  if (days) {
    var sw = days.querySelector('.sw'), pips = [].slice.call(days.querySelectorAll('.pips i'));
    var t = tabs(sw, '[data-day]', function (i) {
      sw.style.setProperty('--p', i);
      pips.forEach(function (p, k) { p.classList.toggle('on', k === i); });
    });
    var nx = days.querySelector('[data-day-next]');
    if (nx && t) nx.addEventListener('click', function () { t.show(t.cur() + 1); });
  }

  // причины «не покупать»: выбор → крупный ответ
  tabs(document.querySelector('[data-obj-box] [role=tablist]'), '[data-obj]');

  // «Мои ошибки»: неверный ответ попадает в список с правильным вариантом
  var mis = document.querySelector('[data-mis]');
  if (mis) {
    var log = mis.querySelector('[data-mis-log]'), cnt = mis.querySelector('[data-mis-n]'), empty = mis.querySelector('[data-mis-empty]'), n = 0;
    mis.addEventListener('click', function (e) {
      var b = e.target.closest('.qo');
      if (!b || b.disabled) return;
      var q = b.closest('[data-mq]'), ok = b.getAttribute('data-ok') === '1';
      [].forEach.call(q.querySelectorAll('.qo'), function (x) { x.disabled = true; if (x.getAttribute('data-ok') === '1') x.classList.add('right'); });
      if (ok) return;
      b.classList.add('wrong');
      var li = document.createElement('li');
      var right = document.createElement('b'); right.setAttribute('lang', 'de'); right.textContent = q.getAttribute('data-right');
      var ru = document.createElement('span'); ru.textContent = q.getAttribute('data-ru') + ' · было: ' + b.textContent;
      li.appendChild(right); li.appendChild(ru); log.appendChild(li);
      n++; cnt.textContent = n; empty.hidden = true;
    });
  }

  // шапка: линия снизу после начала прокрутки
  var nav = document.querySelector('[data-nav]');
  if (nav) { var ns = function () { nav.classList.toggle('stuck', scrollY > 8); }; addEventListener('scroll', ns, { passive: true }); ns(); }

  // видео в рамке телефона: играет только в зоне видимости
  var v = document.querySelector('.phone video');
  if (v && hasIO) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !reduce) v.play().catch(function () {}); else v.pause(); }); }, { threshold: .3 }).observe(v);
  }

  if (reduce || !hasIO) return;
  root.classList.add('js');

  // счётчики от нуля
  var cio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var el = e.target, to = +el.getAttribute('data-count'), t0 = performance.now(), d = 1000;
      var step = function (now) {
        var p = Math.min(1, (now - t0) / d);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = '0'; requestAnimationFrame(step);
    });
  }, { threshold: .6 });
  document.querySelectorAll('[data-count]').forEach(function (el) { cio.observe(el); });

  // появление при прокрутке
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
})();
