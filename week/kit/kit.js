/* Блоки с материалом гайда (таблицы, тест, карточки, план). Данные: window.KIT. Стили: kit.css + тема дизайна. */
(function () {
  var K = window.KIT;
  if (!K) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var IC = {
    speak: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.2L12 5.6v12.8l-4.8-3.9H4z" fill="currentColor"/><path d="M15.2 8.8a4.4 4.4 0 0 1 0 6.4M17.8 6.2a8 8 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
    yes: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".16"/><path d="m7.5 12.4 3 3 6-6.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    no: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".16"/><path d="m8.5 8.5 7 7m0-7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="m15 15 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 7v5l3.2 2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H5m5-5-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    redo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4v3.6h3.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  function ic(n, c) { return '<span class="k-ic ' + (c || '') + '">' + IC[n] + '</span>'; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  // *x* -> highlighted part; text is trusted (our own data) but escaped anyway
  function mk(s) { return esc(s).replace(/\*([^*]+)\*/g, '<b class="k-mark">$1</b>'); }
  function rich(s) { return String(s == null ? '' : s).replace(/\*([^*]+)\*/g, '<b class="k-mark">$1</b>'); } // allows <b>, <a>
  function plain(s) { return String(s || '').replace(/\*/g, ''); }
  function canSpeak() { return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window; }
  function speakBtn(text, lang) {
    if (!canSpeak()) return '';
    return '<button type="button" class="k-say" data-say="' + esc(plain(text)) + '" data-lang="' + lang + '" aria-label="Послушать: ' + esc(plain(text)) + '">' + IC.speak + '</button>';
  }
  function head(b) {
    return '<div class="k-head">' + (b.title ? '<h2 class="k-h2 k-rv">' + rich(b.title) + '</h2>' : '') +
      (b.lead ? '<p class="k-lead k-rv">' + rich(b.lead) + '</p>' : '') + '</div>';
  }
  function a(href, text, cls) {
    var ext = /^https?:/.test(href);
    return '<a class="' + (cls || 'k-link') + '" href="' + esc(href) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '><span>' + rich(text) + '</span>' + ic(ext ? 'link' : 'arrow') + '</a>';
  }

  var R = {};

  /* ---------- table: columns, optional groups, search, speak; cards on phones ---------- */
  R.table = function (b) {
    var groups = b.groups || [{ rows: b.rows }];
    var n = 0;
    var nav = (b.groups && b.groups.length > 1) ? '<nav class="k-chips k-rv" aria-label="Разделы">' + b.groups.map(function (g, i) {
      return '<a class="k-chip" href="#' + b.id + '-g' + i + '">' + esc(g.title) + (g.rows ? ' <small>' + g.rows.length + '</small>' : '') + '</a>';
    }).join('') + '</nav>' : '';
    var search = b.search ? '<label class="k-search k-rv">' + ic('search') + '<input type="search" placeholder="' + esc(b.search === true ? 'Найти слово' : b.search) + '" data-filter="' + b.id + '" autocomplete="off"></label>' : '';
    var body = groups.map(function (g, gi) {
      var rows = g.rows.map(function (r) {
        n++;
        return '<tr>' + (b.numbered ? '<td class="k-n" data-label="№">' + n + '</td>' : '') + b.cols.map(function (c, ci) {
          var v = r[c.key] == null ? '' : r[c.key];
          var cell = c.html ? rich(v) : mk(v);
          var say = (b.speak && b.speak === c.key && v) ? speakBtn(v, b.lang || K.lang) : '';
          return '<td class="k-c-' + c.key + (c.lang ? ' k-tl' : '') + (ci === 0 ? ' k-first' : '') + '" data-label="' + esc(c.label) + '"' + (c.lang ? ' lang="' + c.lang + '"' : '') + '>' + (say ? '<div class="k-sayrow"><span class="k-cell">' + cell + '</span>' + say + '</div>' : '<span class="k-cell">' + cell + '</span>') + '</td>';
        }).join('') + '</tr>';
      }).join('');
      return (g.title ? '<h3 class="k-h3 k-rv" id="' + b.id + '-g' + gi + '">' + rich(g.title) + (g.sub ? ' <small>' + rich(g.sub) + '</small>' : '') + '</h3>' : '') +
        '<div class="k-tablewrap k-rv"><table class="k-table' + (b.compact ? ' k-compact' : '') + '"><thead><tr>' + (b.numbered ? '<th class="k-n">№</th>' : '') +
        b.cols.map(function (c) { return '<th class="k-c-' + c.key + '">' + esc(c.label) + '</th>'; }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
    }).join('');
    return head(b) + nav + search + '<div class="k-tables" data-list="' + b.id + '">' + body + '</div>' +
      (b.search ? '<p class="k-empty" hidden>Ничего не нашлось</p>' : '') + (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- cards with optional level filter ---------- */
  R.cards = function (b) {
    var lv = [];
    if (b.filter) b.items.forEach(function (it) { (it.levels || []).forEach(function (l) { if (lv.indexOf(l) < 0) lv.push(l); }); });
    lv.sort();
    var chips = b.filter ? '<div class="k-chips k-rv" role="group" aria-label="Фильтр по уровню"><button type="button" class="k-chip is-on" data-lv="">Все</button>' +
      lv.map(function (l) { return '<button type="button" class="k-chip" data-lv="' + l + '">' + l + '</button>'; }).join('') + '</div>' : '';
    var cats = b.groupBy ? [] : [null];
    if (b.groupBy) b.items.forEach(function (it) { if (cats.indexOf(it[b.groupBy]) < 0) cats.push(it[b.groupBy]); });
    var grid = cats.map(function (cat) {
      var items = b.items.filter(function (it) { return cat === null || it[b.groupBy] === cat; });
      return (cat ? '<h3 class="k-h3 k-rv">' + esc(cat) + ' <small>' + items.length + '</small></h3>' : '') +
        '<div class="k-cards' + (b.cols ? ' k-cols-' + b.cols : '') + '">' + items.map(function (it) {
        var tag = it.href ? 'a' : 'article';
        var attr = it.href ? ' href="' + esc(it.href) + '"' + (/^https?:/.test(it.href) ? ' target="_blank" rel="noopener"' : '') : '';
        return '<' + tag + ' class="k-card k-rv' + (it.href ? ' is-link' : '') + '"' + attr + ' data-lv="' + esc((it.levels || []).join(' ')) + '">' +
          '<div class="k-card-top">' + (it.badge ? '<span class="k-badge">' + esc(it.badge) + '</span>' : '') +
          (it.level ? '<span class="k-lv">' + esc(it.level) + '</span>' : '') + (it.price ? '<span class="k-price">' + esc(it.price) + '</span>' : '') + '</div>' +
          '<h4 class="k-card-t"' + (it.lang ? ' lang="' + it.lang + '"' : '') + '>' + rich(it.title) + '</h4>' +
          (it.sub ? '<p class="k-card-sub">' + rich(it.sub) + '</p>' : '') +
          (it.text ? '<p class="k-card-x">' + rich(it.text) + '</p>' : '') +
          (it.list ? '<ul class="k-card-ul">' + it.list.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>' : '') +
          (it.href ? '<span class="k-card-go">' + esc(it.go || 'Открыть') + ic(/^https?:/.test(it.href) ? 'link' : 'arrow') + '</span>' : '') +
          '</' + tag + '>';
      }).join('') + '</div>';
    }).join('');
    return head(b) + chips + '<div data-cards="' + b.id + '">' + grid + '</div>' + (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- works / doesn't work ---------- */
  R.compare = function (b) {
    function col(c, kind) {
      return '<div class="k-cmp k-cmp-' + kind + ' k-rv"><h3 class="k-h3">' + ic(kind) + '<span>' + rich(c.title) + '</span></h3><ul>' +
        c.items.map(function (it) { return '<li>' + ic(kind, 'k-li-ic') + '<div><b>' + rich(it[0]) + '</b>' + (it[1] ? '<span>' + rich(it[1]) + '</span>' : '') + '</div></li>'; }).join('') + '</ul></div>';
    }
    return head(b) + '<div class="k-cmps">' + col(b.no, 'no') + col(b.yes, 'yes') + '</div>' + (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- plan: weeks / days ---------- */
  R.plan = function (b) {
    return head(b) + '<div class="k-plan">' + b.groups.map(function (g, gi) {
      return '<section class="k-week k-rv"><div class="k-week-h"><span class="k-week-n">' + esc(g.tag || (gi + 1)) + '</span><div><h3 class="k-h3">' + rich(g.title) + '</h3>' +
        (g.sub ? '<p>' + rich(g.sub) + '</p>' : '') + '</div></div><ol class="k-days">' + g.items.map(function (d) {
          return '<li class="k-day' + (d.href ? ' has-link' : '') + '"><span class="k-day-d">' + esc(d.day) + '</span><div class="k-day-b"><b>' + rich(d.title) + '</b>' +
            (d.text ? '<span>' + rich(d.text) + '</span>' : '') + (d.href ? a(d.href, d.linkText || 'Открыть', 'k-link k-link-s') : '') + '</div>' +
            (d.min ? '<span class="k-min">' + ic('clock') + esc(d.min) + '</span>' : '') + '</li>';
        }).join('') + '</ol></section>';
    }).join('') + '</div>' + (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- verb forms: tabs per verb, table per tense ---------- */
  R.forms = function (b) {
    var tabs = '<div class="k-chips k-tabs k-rv" role="tablist" aria-label="Глаголы">' + b.verbs.map(function (v, i) {
      return '<button type="button" role="tab" class="k-chip' + (i === 0 ? ' is-on' : '') + '" aria-selected="' + (i === 0) + '" data-tab="' + b.id + '-' + i + '"><span lang="' + (b.lang || K.lang) + '">' + esc(v.inf) + '</span> <small>' + esc(v.ru) + '</small></button>';
    }).join('') + '</div>';
    var panes = b.verbs.map(function (v, i) {
      return '<div class="k-pane" role="tabpanel" id="' + b.id + '-' + i + '"' + (i ? ' hidden' : '') + '>' +
        (v.note ? '<p class="k-pane-note">' + rich(v.note) + '</p>' : '') + '<div class="k-tense-grid">' +
        v.tenses.map(function (t) {
          return '<div class="k-tense"><h4 class="k-tense-h"><span>' + esc(t.name) + '</span>' + (t.ru ? '<small>' + esc(t.ru) + '</small>' : '') + '</h4><dl>' +
            t.rows.map(function (r) {
              return '<div class="k-form"><dt>' + esc(r[0]) + '</dt><dd><span class="k-tl" lang="' + (b.lang || K.lang) + '">' + mk(r[1]) + '</span>' +
                (b.speak ? speakBtn(r[1], b.lang || K.lang) : '') + '<small>' + mk(r[2]) + '</small></dd></div>';
            }).join('') + '</dl></div>';
        }).join('') + '</div></div>';
    }).join('');
    return head(b) + tabs + '<div class="k-panes k-rv">' + panes + '</div>' + (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- levels / roadmap ---------- */
  R.levels = function (b) {
    return head(b) + '<ol class="k-levels">' + b.items.map(function (l) {
      return '<li class="k-level k-rv"><div class="k-level-h"><span class="k-level-code">' + esc(l.code) + '</span><div><h3 class="k-h3">' + rich(l.name) + '</h3>' +
        (l.sub ? '<p>' + rich(l.sub) + '</p>' : '') + '</div></div><div class="k-level-b">' +
        (l.cols || []).map(function (c) { return '<div class="k-level-col"><h4>' + esc(c.title) + '</h4><ul>' + c.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul></div>'; }).join('') +
        '</div>' + (l.href ? a(l.href, l.linkText || 'Открыть') : '') + '</li>';
    }).join('') + '</ol>' + (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- quiz: steps (level test) or list (self-check) ---------- */
  R.quiz = function (b) {
    var qs = b.questions;
    var body = qs.map(function (q, i) {
      return '<div class="k-q" role="group" data-i="' + i + '" data-answer="' + q.answer + '"' + (b.mode === 'steps' && i ? ' hidden' : '') + '>' +
        '<div class="k-q-h"><span class="k-q-n">' + (i + 1) + ' / ' + qs.length + '</span>' + (q.level && b.showLevel ? '<span class="k-lv">' + q.level + '</span>' : '') + '<span class="k-q-t">' + mk(q.q) + '</span></div>' +
        '<div class="k-opts">' + q.options.map(function (o, j) {
          return '<button type="button" class="k-opt" data-j="' + j + '"><span class="k-opt-l">' + 'ABCD'.charAt(j) + '</span><span' + (b.optLang ? ' lang="' + b.optLang + '"' : '') + '>' + mk(o) + '</span></button>';
        }).join('') + '</div>' + (q.explain ? '<p class="k-explain" hidden>' + rich(q.explain) + '</p>' : '') + '</div>';
    }).join('');
    var bar = b.mode === 'steps' ? '<div class="k-bar" aria-hidden="true"><i style="width:' + (100 / qs.length) + '%"></i></div>' : '';
    var nav = b.mode === 'steps' ? '<div class="k-qnav"><button type="button" class="k-btn2" data-prev disabled>' + ic('back') + '<span>Назад</span></button>' +
      '<button type="button" class="k-btn" data-next disabled><span>Дальше</span>' + ic('arrow') + '</button></div>' : '';
    return head(b) + '<div class="k-quiz k-rv" data-quiz="' + b.id + '" data-mode="' + (b.mode || 'list') + '">' + bar + body + nav +
      '<div class="k-result" hidden aria-live="polite"></div></div>';
  };

  /* ---------- plain text / callout ---------- */
  R.text = function (b) {
    return head(b) + (b.html ? '<div class="k-text k-rv">' + b.html + '</div>' : '') +
      (b.points ? '<ul class="k-points">' + b.points.map(function (p) { return '<li class="k-rv">' + ic('yes') + '<div>' + rich(p) + '</div></li>'; }).join('') + '</ul>' : '') +
      (b.links ? '<div class="k-links k-rv">' + b.links.map(function (l) { return a(l.href, l.text, 'k-btn' + (l.ghost ? '2' : '')); }).join('') + '</div>' : '');
  };

  /* ---------- mount ---------- */
  function section(b) {
    var el = document.createElement('section');
    el.className = 'kit k-s-' + b.type + ' k-bg-' + (b.bg || 'a');
    el.id = b.id;
    el.innerHTML = '<div class="k-wrap">' + R[b.type](b) + '</div>';
    return el;
  }
  function mountAll() {
    (K.mount || []).forEach(function (m) {
      var ref = m.before ? document.querySelector(m.before) : m.after ? document.querySelector(m.after) : m.into ? document.querySelector(m.into) : null;
      if (!ref) { console.warn('kit: no mount point', m.before || m.after || m.into); return; }
      var frag = document.createDocumentFragment();
      m.blocks.forEach(function (b) { if (R[b.type]) frag.appendChild(section(b)); });
      if (m.before) ref.parentNode.insertBefore(frag, ref);
      else if (m.after) ref.parentNode.insertBefore(frag, ref.nextSibling);
      else ref.appendChild(frag);
    });
    wire();
  }

  function wire() {
    // reveal
    var rv = [].slice.call(document.querySelectorAll('.kit .k-rv'));
    if (!reduce && 'IntersectionObserver' in window) {
      document.documentElement.classList.add('k-anim');
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('k-in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -6% 0px' });
      rv.forEach(function (el) { io.observe(el); });
    }
    // speak (browser voice)
    document.addEventListener('click', function (e) {
      var s = e.target.closest && e.target.closest('.k-say');
      if (!s || !canSpeak()) return;
      var u = new SpeechSynthesisUtterance(s.getAttribute('data-say'));
      u.lang = s.getAttribute('data-lang'); u.rate = 0.85;
      var v = speechSynthesis.getVoices().filter(function (x) { return x.lang && x.lang.replace('_', '-').indexOf(u.lang.slice(0, 2)) === 0; })[0];
      if (v) u.voice = v;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
      s.classList.add('is-on'); u.onend = function () { s.classList.remove('is-on'); };
    });
    // search filter
    [].forEach.call(document.querySelectorAll('.kit [data-filter]'), function (inp) {
      var box = document.querySelector('[data-list="' + inp.getAttribute('data-filter') + '"]');
      var empty = box.parentNode.querySelector('.k-empty');
      inp.addEventListener('input', function () {
        var q = inp.value.trim().toLocaleLowerCase('tr');
        var shown = 0;
        [].forEach.call(box.querySelectorAll('tbody tr'), function (tr) {
          var ok = !q || tr.textContent.toLocaleLowerCase('tr').indexOf(q) >= 0;
          tr.hidden = !ok; if (ok) shown++;
        });
        [].forEach.call(box.querySelectorAll('.k-tablewrap'), function (w) {
          var any = w.querySelector('tbody tr:not([hidden])');
          w.hidden = !any; var h = w.previousElementSibling; if (h && h.classList.contains('k-h3')) h.hidden = !any;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });
    // level filter for cards
    [].forEach.call(document.querySelectorAll('.kit.k-s-cards'), function (sec) {
      var chips = sec.querySelectorAll('.k-chip[data-lv]');
      [].forEach.call(chips, function (c) {
        c.addEventListener('click', function () {
          [].forEach.call(chips, function (x) { x.classList.toggle('is-on', x === c); });
          var lv = c.getAttribute('data-lv');
          [].forEach.call(sec.querySelectorAll('.k-card'), function (card) {
            card.hidden = !!lv && (' ' + card.getAttribute('data-lv') + ' ').indexOf(' ' + lv + ' ') < 0;
          });
          [].forEach.call(sec.querySelectorAll('.k-cards'), function (g) {
            var any = g.querySelector('.k-card:not([hidden])');
            g.hidden = !any; var h = g.previousElementSibling; if (h && h.classList.contains('k-h3')) h.hidden = !any;
          });
        });
      });
    });
    // tabs
    [].forEach.call(document.querySelectorAll('.kit .k-tabs'), function (tl) {
      var tabs = tl.querySelectorAll('[data-tab]');
      [].forEach.call(tabs, function (t) {
        t.addEventListener('click', function () {
          [].forEach.call(tabs, function (x) {
            var on = x === t; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on);
            document.getElementById(x.getAttribute('data-tab')).hidden = !on;
          });
        });
      });
    });
    // quizzes
    [].forEach.call(document.querySelectorAll('.kit [data-quiz]'), quiz);
  }

  function quiz(box) {
    var id = box.getAttribute('data-quiz');
    var b = null;
    (K.mount || []).forEach(function (m) { m.blocks.forEach(function (x) { if (x.id === id) b = x; }); });
    var steps = box.getAttribute('data-mode') === 'steps';
    var qs = [].slice.call(box.querySelectorAll('.k-q'));
    var picked = qs.map(function () { return -1; });
    var cur = 0;
    var next = box.querySelector('[data-next]'), prev = box.querySelector('[data-prev]'), bar = box.querySelector('.k-bar i');
    var res = box.querySelector('.k-result');
    function show(i) {
      qs.forEach(function (q, k) { q.hidden = k !== i; });
      cur = i;
      if (bar) bar.style.width = ((i + 1) / qs.length * 100) + '%';
      if (prev) prev.disabled = i === 0;
      if (next) { next.disabled = picked[i] < 0; next.querySelector('span').textContent = i === qs.length - 1 ? 'Результат' : 'Дальше'; }
    }
    qs.forEach(function (q, i) {
      var ans = +q.getAttribute('data-answer');
      [].forEach.call(q.querySelectorAll('.k-opt'), function (o) {
        o.addEventListener('click', function () {
          var j = +o.getAttribute('data-j');
          if (!steps && picked[i] >= 0) return; // list mode: one try, then explanation
          picked[i] = j;
          [].forEach.call(q.querySelectorAll('.k-opt'), function (x) { x.classList.toggle('is-picked', x === o); });
          if (!steps) {
            q.classList.add('is-done');
            q.querySelectorAll('.k-opt')[ans].classList.add('is-right');
            if (j !== ans) o.classList.add('is-wrong');
            var ex = q.querySelector('.k-explain'); if (ex) ex.hidden = false;
            if (picked.every(function (p) { return p >= 0; })) finish();
          } else if (next) next.disabled = false;
        });
      });
    });
    if (next) next.addEventListener('click', function () {
      if (cur < qs.length - 1) { show(cur + 1); box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
      else finish();
    });
    if (prev) prev.addEventListener('click', function () { if (cur > 0) show(cur - 1); });
    function finish() {
      var score = 0, byLv = {};
      qs.forEach(function (q, i) {
        var lv = b.questions[i].level || '';
        byLv[lv] = byLv[lv] || [0, 0]; byLv[lv][1]++;
        if (picked[i] === +q.getAttribute('data-answer')) { score++; byLv[lv][0]++; }
      });
      var band = null;
      (b.bands || []).forEach(function (x) { if (score >= x.min) band = x; });
      if (b.bandBy === 'levels') { // go up level by level while the share of right answers stays at pass or above
        band = b.bands[0];
        for (var k = 1; k < b.bands.length; k++) { var r = byLv[b.bands[k].code]; if (r && r[0] / r[1] >= (b.pass || 0.6)) band = b.bands[k]; else break; }
      }
      var lvRows = b.showLevel ? '<div class="k-res-lv">' + Object.keys(byLv).filter(Boolean).map(function (k) { return '<span><b>' + k + '</b> ' + byLv[k][0] + ' из ' + byLv[k][1] + '</span>'; }).join('') + '</div>' : '';
      res.innerHTML = '<p class="k-res-score">' + score + ' из ' + qs.length + '</p>' + lvRows +
        (band ? '<h3 class="k-h3">' + rich(band.title) + '</h3><p>' + rich(band.text) + '</p>' + (band.href ? '<div class="k-links">' + a(band.href, band.linkText || 'Открыть', 'k-btn') + '</div>' : '') : '') +
        '<button type="button" class="k-btn2" data-again>' + ic('redo') + '<span>Пройти заново</span></button>';
      res.hidden = false;
      if (steps) { qs.forEach(function (q) { q.hidden = true; }); box.querySelector('.k-qnav').hidden = true; if (bar) bar.style.width = '100%'; }
      res.querySelector('[data-again]').addEventListener('click', function () {
        picked = picked.map(function () { return -1; });
        qs.forEach(function (q) {
          q.classList.remove('is-done');
          [].forEach.call(q.querySelectorAll('.k-opt'), function (x) { x.classList.remove('is-picked', 'is-right', 'is-wrong'); });
          var ex = q.querySelector('.k-explain'); if (ex) ex.hidden = true;
          q.hidden = false;
        });
        res.hidden = true;
        if (steps) { box.querySelector('.k-qnav').hidden = false; show(0); }
        box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
      if (steps) box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
    if (steps) show(0);
  }

  function start() {
    if (!K.waitFor || document.querySelector(K.waitFor)) return mountAll();
    var mo = new MutationObserver(function () { if (document.querySelector(K.waitFor)) { mo.disconnect(); mountAll(); } });
    mo.observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
