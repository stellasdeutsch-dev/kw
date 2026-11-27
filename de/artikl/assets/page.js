/* Дизайн 10: подгонка большого слова по ширине, шапка при прокрутке, чек-лист чемодана, путь по уровням,
   видео играет только в зоне видимости, появление при прокрутке (выключено при «уменьшить движение»). */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // большое слово: размер шрифта так, чтобы слово заняло всю ширину колонки
  var g = document.querySelector('.giant'), gi = g && g.querySelector('.giant-in');
  function fit() {
    if (!g) return;
    g.style.setProperty('--gs', '100px');
    var w = 0; [].forEach.call(gi.children, function (c) { w += c.getBoundingClientRect().width; });
    var avail = g.clientWidth;
    if (!w) return;
    var fs = Math.floor(100 * avail / w * 0.985), cap = fs > 230;
    g.style.setProperty('--gs', (cap ? 230 : fs) + 'px');
    g.classList.toggle('is-cap', cap); // короткое слово: не растягиваем буквы по всей ширине
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  var rt; addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(fit, 120); });

  // шапка: линейка снизу после начала прокрутки
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('is-scrolled', scrollY > 8); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // чек-лист чемодана
  var box = document.querySelector('[data-packbox]');
  if (box) {
    var cbs = [].slice.call(box.querySelectorAll('[data-pack]')), n = box.querySelector('[data-pack-n]'),
      bar = box.querySelector('[data-pack-bar]'), done = document.querySelector('[data-pack-done]');
    var upd = function () {
      var k = cbs.filter(function (c) { return c.checked; }).length;
      n.textContent = k; bar.style.width = (100 * k / cbs.length) + '%';
      if (done) done.classList.toggle('is-done', k === cbs.length);
    };
    cbs.forEach(function (c) { c.addEventListener('change', upd); }); upd();
  }

  // путь к сериалу без субтитров: свой уровень -> подсветка пути и нужный пакет
  var dr = document.querySelector('[data-dream]');
  if (dr) {
    var order = ['A1', 'A2', 'B1', 'B2', 'C1'];
    var pick = function (lv) {
      var i = order.indexOf(lv);
      [].forEach.call(dr.querySelectorAll('.stop[data-lv]'), function (s) {
        var j = order.indexOf(s.getAttribute('data-lv'));
        s.classList.toggle('is-before', j < i); s.classList.toggle('is-path', j >= i);
      });
      [].forEach.call(dr.querySelectorAll('.lvb'), function (b) { var on = b.getAttribute('data-from') === lv; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
      var low = i < 2;
      dr.querySelector('[data-pack-low]').hidden = !low; dr.querySelector('[data-pack-high]').hidden = low;
    };
    dr.addEventListener('click', function (e) { var b = e.target.closest('.lvb'); if (b) pick(b.getAttribute('data-from')); });
    pick('A1');
  }

  // видео в рамке телефона: играет только в зоне видимости
  var v = document.querySelector('.phone video');
  if (v && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !reduce) v.play().catch(function () {}); else v.pause(); }); }, { threshold: .3 }).observe(v);
  }

  // появление при прокрутке
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv, .giant').forEach(function (el) { io.observe(el); });
})();
