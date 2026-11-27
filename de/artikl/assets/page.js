/* reveal on scroll; everything stays visible with reduced motion or without IntersectionObserver */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  var v = document.querySelector('.phone video');
  if (v) new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { v.play().catch(function () {}); } else v.pause(); }); }, { threshold: .3 }).observe(v);
})();
