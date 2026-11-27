/* Дизайн 12: счётчики, текст по словам при прокрутке, плашка покупки после материала, ползунок «цена за слово»,
   тест с рекомендацией пакета, видео играет только в зоне видимости, появление при прокрутке.
   Всё движение выключено при «уменьшить движение». */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  // ползунок: N слов × 0,4 цента (30 € / 7500 слов = 0,004 €)
  var u = document.querySelector('[data-unit]');
  if (u) {
    var r = u.querySelector('[data-unit-r]'), n = u.querySelector('[data-unit-n]'), eur = u.querySelector('[data-unit-eur]');
    var upd = function () {
      var k = +r.value;
      n.textContent = k.toLocaleString('ru-RU');
      eur.textContent = (k * 30 / 7500).toFixed(2).replace('.', ',') + ' €';
      r.style.setProperty('--p', (100 * (k - r.min) / (r.max - r.min)) + '%');
    };
    r.addEventListener('input', upd); upd();
  }

  // тест: по одному вопросу, в конце рекомендация пакета
  var t = document.querySelector('[data-test]');
  if (t) {
    var qs = [].slice.call(t.querySelectorAll('[data-tq]')), bar = t.querySelector('[data-test-bar]'), res = t.querySelector('[data-tres]');
    var th = +t.getAttribute('data-th') || 4, score = 0, cur = 0;
    var show = function (i) {
      qs.forEach(function (q, j) { q.hidden = j !== i; });
      res.hidden = i < qs.length;
      bar.style.width = (100 * i / qs.length) + '%';
      if (i >= qs.length) {
        t.querySelector('[data-test-score]').textContent = score;
        var hi = score >= th;
        t.querySelector('[data-tres-low]').hidden = hi; t.querySelector('[data-tres-high]').hidden = !hi;
      }
    };
    t.addEventListener('click', function (ev) {
      var b = ev.target.closest('.topt');
      if (b && !b.disabled) {
        var q = b.closest('[data-tq]'), ok = b.getAttribute('data-ok') === '1';
        [].forEach.call(q.querySelectorAll('.topt'), function (x) {
          x.disabled = true;
          if (x.getAttribute('data-ok') === '1') x.classList.add('is-ok');
        });
        if (!ok) b.classList.add('is-no'); else score++;
        cur++;
        setTimeout(function () { show(cur); }, reduce ? 0 : 650);
      }
      if (ev.target.closest('[data-test-again]')) {
        score = 0; cur = 0;
        [].forEach.call(t.querySelectorAll('.topt'), function (x) { x.disabled = false; x.classList.remove('is-ok', 'is-no'); });
        show(0);
        var f = t.querySelector('.topt'); if (f) f.focus();
      }
    });
  }

  // плашка покупки: видна после материала и до блока цен
  var dock = document.querySelector('[data-dock]');
  if (dock) {
    var kits = function () { return document.querySelectorAll('.kit'); };
    var price = document.getElementById('price'), foot = document.querySelector('.foot');
    var onScroll = function () {
      var ks = kits(), last = ks.length ? ks[ks.length - 1] : document.getElementById('material');
      var past = last && last.getBoundingClientRect().bottom < innerHeight * .5;
      var stop = price && price.getBoundingClientRect().top < innerHeight;
      var fb = foot && foot.getBoundingClientRect().top < innerHeight;
      dock.classList.toggle('is-on', !!(past && !stop && !fb));
    };
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
  }

  // видео в рамке телефона: играет только в зоне видимости
  var v = document.querySelector('.phone video');
  if (v && hasIO) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !reduce) v.play().catch(function () {}); else v.pause(); }); }, { threshold: .3 }).observe(v);
  }

  if (reduce || !hasIO) return;
  document.documentElement.classList.add('js');

  // счётчики от нуля
  var cio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var el = e.target, to = +el.getAttribute('data-count'), t0 = performance.now(), d = 1100;
      var step = function (now) {
        var p = Math.min(1, (now - t0) / d), k = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * k);
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = '0'; requestAnimationFrame(step);
    });
  }, { threshold: .6 });
  document.querySelectorAll('.cnt[data-count]').forEach(function (el) { cio.observe(el); });

  // текст по словам: слова темнеют по мере прокрутки
  var rv = document.querySelector('[data-reveal]');
  if (rv) {
    var ws = [].slice.call(rv.querySelectorAll('.rw'));
    var paint = function () {
      var b = rv.getBoundingClientRect(), h = innerHeight;
      var p = Math.max(0, Math.min(1, (h * .85 - b.top) / (b.height + h * .35)));
      var k = Math.round(p * ws.length);
      ws.forEach(function (w, i) { w.classList.toggle('on', i < k); });
    };
    addEventListener('scroll', paint, { passive: true }); paint();
  }

  // появление при прокрутке
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
})();
