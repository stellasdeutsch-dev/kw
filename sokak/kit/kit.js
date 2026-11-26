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


  /* ---------- media: cards with a real logo / cover / poster / avatar, groups, level filter, search ---------- */
  R.media = function (b) {
    var lv = [];
    b.groups.forEach(function (g) { g.items.forEach(function (it) { (it.levels || []).forEach(function (l) { if (lv.indexOf(l) < 0) lv.push(l); }); }); });
    lv.sort();
    var total = b.groups.reduce(function (n, g) { return n + g.items.length; }, 0);
    var nav = b.groups.length > 1 ? '<nav class="k-chips k-rv" aria-label="Разделы">' + b.groups.map(function (g, i) {
      return '<a class="k-chip" href="#' + b.id + '-g' + i + '">' + esc(g.title) + ' <small>' + g.items.length + '</small></a>'; }).join('') + '</nav>' : '';
    var tools = '<div class="k-mtools k-rv">' + (b.search ? '<label class="k-search">' + ic('search') + '<input type="search" data-msearch="' + b.id + '" placeholder="' + esc(b.search) + '" aria-label="' + esc(b.search) + '"></label>' : '') +
      (lv.length > 1 ? '<div class="k-chips k-lvchips" role="group" aria-label="Фильтр по уровню"><span class="k-lvlabel">Уровень:</span><button type="button" class="k-chip is-on" data-mlv="">Все</button>' +
        lv.map(function (l) { return '<button type="button" class="k-chip" data-mlv="' + l + '">' + l + '</button>'; }).join('') + '</div>' : '') + '</div>';
    var body = b.groups.map(function (g, gi) {
      return '<div class="k-mgroup" id="' + b.id + '-g' + gi + '">' + (b.groups.length > 1 ? '<h3 class="k-h3 k-rv">' + esc(g.title) + ' <small>' + g.items.length + '</small></h3>' : '') +
        (g.lead ? '<p class="k-mlead k-rv">' + rich(g.lead) + '</p>' : '') +
        '<div class="k-mgrid k-m-' + (g.shape || 'sq') + '">' + g.items.map(function (it, i) {
          var tag = it.href ? 'a' : 'article';
          var attr = it.href ? ' href="' + esc(it.href) + '"' + (/^https?:/.test(it.href) ? ' target="_blank" rel="noopener"' : '') : '';
          return '<' + tag + ' class="k-mcard k-rv' + (it.href ? ' is-link' : '') + (it.bonus ? ' is-bonus' : '') + '"' + attr + ' style="--i:' + (i % 6) + '" data-lv="' + esc((it.levels || []).join(' ')) + '">' +
            '<div class="k-mimg' + (it.fit === 'contain' ? ' is-contain' : '') + '">' + (it.img ? '<img src="' + esc(it.img) + '" alt="' + esc(plain(it.alt || it.title)) + '" loading="lazy" decoding="async">' : '<span class="k-mph">' + esc(plain(it.title).slice(0, 1)) + '</span>') + '</div>' +
            '<div class="k-mbody"><div class="k-card-top">' + (it.level ? '<span class="k-lv">' + esc(it.level) + '</span>' : '') +
            (it.price ? '<span class="k-price">' + esc(it.price) + '</span>' : '') + (it.bonus ? '<span class="k-badge">Бонус</span>' : '') + '</div>' +
            (function () {
              var t = '<h4 class="k-card-t"' + (it.lang ? ' lang="' + it.lang + '"' : '') + '>' + rich(it.title) + '</h4>';
              var sayText = it.say || (it.lang && !it.href && it.say !== false ? String(it.title).replace(/<[^>]+>/g, '') : '');
              return sayText ? '<div class="k-sayrow">' + t + speakBtn(sayText, it.lang === 'tr' ? 'tr-TR' : it.lang === 'en' ? 'en-GB' : K.lang) + '</div>' : t;
            })() +
            (it.sub ? '<p class="k-card-sub">' + rich(it.sub) + '</p>' : '') + (it.text ? '<p class="k-card-x">' + rich(it.text) + '</p>' : '') +
            (it.tip ? '<p class="k-mtip">' + ic('yes') + '<span>' + rich(it.tip) + '</span></p>' : '') +
            (it.href ? '<span class="k-card-go">' + esc(it.go || 'Открыть') + ic(/^https?:/.test(it.href) ? 'link' : 'arrow') + '</span>' : '') +
            (it.credit ? '<p class="k-mcredit">' + esc(it.credit) + '</p>' : '') + '</div></' + tag + '>';
        }).join('') + '</div></div>';
    }).join('');
    return head(b) + nav + tools + '<div data-media="' + b.id + '">' + body + '<p class="k-empty" hidden>Ничего не нашлось. Попробуй другое слово или уровень.</p></div>' +
      (b.note ? '<p class="k-note k-rv">' + rich(b.note) + '</p>' : '');
  };

  /* ---------- platform: real screenshots of the course in Notion, tabs + frame + lightbox ---------- */
  R.platform = function (b) {
    var tabs = b.shots.map(function (s, i) {
      return '<button type="button" class="k-ptab' + (i ? '' : ' is-on') + '" data-pshot="' + i + '" aria-pressed="' + (i ? 'false' : 'true') + '">' +
        '<span class="k-ptab-n">' + (i + 1) + '</span><span class="k-ptab-tx"><b>' + esc(s.title) + '</b><span>' + rich(s.text) + '</span></span></button>';
    }).join('');
    var imgs = b.shots.map(function (s, i) {
      return '<img class="k-pimg' + (i ? '' : ' is-on') + '" src="' + esc(s.img) + '" alt="' + esc(s.alt || s.title) + '" width="1600" height="' + (s.h || 900) + '"' + (i ? ' loading="lazy"' : '') + ' decoding="async">';
    }).join('');
    var facts = b.facts ? '<ul class="k-pfacts k-rv">' + b.facts.map(function (f) { return '<li><b class="k-count" data-to="' + esc(f[0]) + '">' + esc(f[0]) + '</b><span>' + rich(f[1]) + '</span></li>'; }).join('') + '</ul>' : '';
    var author = b.author ? '<div class="k-pauthor k-rv">' + (b.author.img ? '<img src="' + esc(b.author.img) + '" alt="' + esc(b.author.name) + '" loading="lazy" decoding="async">' : '') +
      '<p><b>' + esc(b.author.name) + '</b>' + rich(b.author.text) + '</p></div>' : '';
    return head(b) + facts +
      '<div class="k-pf" data-platform>' +
        '<div class="k-pframe k-rv"><div class="k-pbar"><i></i><i></i><i></i><span>' + esc(b.url || 'notion.site') + '</span></div>' +
          '<button type="button" class="k-pview" data-pzoom aria-label="Открыть скриншот крупно">' + imgs + '<span class="k-pzoom">' + ic('search') + '<span>Крупно</span></span></button></div>' +
        '<div class="k-ptabs k-rv" role="group" aria-label="Экраны платформы">' + tabs + '</div>' +
      '</div>' + author +
      (b.cta ? '<div class="k-links k-pcta k-rv">' + a(b.cta.href, b.cta.text, 'k-btn') + (b.cta.note ? '<span class="k-pnote">' + rich(b.cta.note) + '</span>' : '') + '</div>' : '') +
      '<dialog class="k-lightbox" aria-label="Скриншот платформы"><button type="button" class="k-lb-x" data-lbclose aria-label="Закрыть">' + IC.no + '</button><p></p></dialog>';
  };


  /* ---------- collapse: groups become tabs, long lists show the first items + «Показать ещё», so the page stays short ---------- */
  function collapse() {
    [].forEach.call(document.querySelectorAll('.kit'), function (sec) {
      if (/k-s-(platform|quiz|forms|compare|text)/.test(sec.className)) return;
      var units = [], list = null, itemSel = null, lim = 6;
      function wrapPairs(box, nextSel) { // h3 + following block -> .k-unit
        [].slice.call(box.children).forEach(function (h) {
          if (!h.matches('h3.k-h3')) return;
          var nx = h.nextElementSibling; if (!nx || !nx.matches(nextSel)) return;
          var u = document.createElement('div'); u.className = 'k-unit';
          box.insertBefore(u, h); u.appendChild(h); u.appendChild(nx);
        });
        return [].slice.call(box.querySelectorAll(':scope > .k-unit'));
      }
      if ((list = sec.querySelector('[data-media]'))) { units = [].slice.call(list.querySelectorAll('.k-mgroup')); itemSel = '.k-mcard'; lim = 6; }
      else if ((list = sec.querySelector('[data-list]'))) { units = wrapPairs(list, '.k-tablewrap'); itemSel = 'tbody tr'; lim = 10; }
      else if ((list = sec.querySelector('[data-cards]'))) { units = wrapPairs(list, '.k-cards'); itemSel = '.k-card'; lim = 6; }
      else if ((list = sec.querySelector('.k-plan'))) { units = [].slice.call(list.querySelectorAll('.k-week')); itemSel = '.k-day'; lim = 99; if (units.length < 3) units = []; }
      else if ((list = sec.querySelector('.k-levels'))) { units = []; itemSel = '.k-level'; lim = 99; }
      if (!list) return;
      if (!units.length) { list.classList.add('k-unit'); units = [list]; }
      units.forEach(function (u) { u.classList.add('k-unit'); });
      // limit per unit
      units.forEach(function (u) {
        var items = [].slice.call(u.querySelectorAll(itemSel));
        var l = (u.querySelector('.k-m-tall') ? 8 : lim);
        if (items.length <= l + 2) return;
        items.forEach(function (it, i) { if (i >= l) it.classList.add('k-lim'); });
        var rest = items.length - l;
        var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'k-btn2 k-more';
        btn.innerHTML = '<span>Показать ещё ' + rest + '</span>';
        btn.addEventListener('click', function () {
          var open = u.classList.toggle('is-open');
          btn.querySelector('span').textContent = open ? 'Свернуть' : 'Показать ещё ' + rest;
          if (!open) u.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        });
        u.appendChild(btn);
      });
      // tabs
      if (units.length >= 2) {
        var oldNav = sec.querySelector('nav.k-chips[aria-label="Разделы"]'); if (oldNav) oldNav.remove();
        var bar = document.createElement('div'); bar.className = 'k-chips k-utabs'; bar.setAttribute('role', 'tablist'); bar.setAttribute('aria-label', 'Разделы');
        units.forEach(function (u, i) {
          var h = u.querySelector('h3, .k-week-h h3'); var t = h ? h.cloneNode(true) : null;
          if (t) [].forEach.call(t.querySelectorAll('small'), function (x) { x.remove(); });
          var n = u.querySelectorAll(itemSel).length;
          var b = document.createElement('button'); b.type = 'button'; b.className = 'k-chip' + (i ? '' : ' is-on'); b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i ? 'false' : 'true');
          b.innerHTML = esc(t ? t.textContent.trim() : 'Раздел ' + (i + 1)) + (n > 1 ? ' <small>' + n + '</small>' : '');
          b.addEventListener('click', function () {
            units.forEach(function (x, k) { x.classList.toggle('k-utab-off', k !== i); });
            [].forEach.call(bar.children, function (x, k) { x.classList.toggle('is-on', k === i); x.setAttribute('aria-selected', k === i); });
          });
          bar.appendChild(b);
          u._showTab = function () { b.click(); };
          if (i) u.classList.add('k-utab-off');
        });
        sec.classList.add('k-tabbed');
        var anchor = sec.querySelector('.k-mtools') || list;
        anchor.parentNode.insertBefore(bar, anchor);
      }
      // while searching or filtering by level: show everything that matches
      function upd() {
        var q = [].some.call(sec.querySelectorAll('input[type=search]'), function (i) { return i.value.trim(); });
        var lv = [].some.call(sec.querySelectorAll('.k-chip.is-on[data-lv], .k-chip.is-on[data-mlv]'), function (c) { return c.getAttribute('data-lv') || c.getAttribute('data-mlv'); });
        sec.classList.toggle('k-filtering', !!(q || lv));
      }
      sec.addEventListener('input', upd);
      sec.addEventListener('click', function (e) { if (e.target.closest('[data-lv], [data-mlv]')) setTimeout(upd, 0); });
    });
  }

  // a link to a group (#<id>-gN, or any element inside a tab) opens that tab first
  function openHash(hash, scroll) {
    if (!hash || hash.length < 2) return false;
    var el = document.getElementById(decodeURIComponent(hash.slice(1)));
    var u = el && (el._showTab ? el : el.closest && el.closest('.k-unit'));
    if (!u || !u._showTab) return false;
    u._showTab();
    if (scroll) u.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    return true;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a && openHash(a.getAttribute('href'), true)) { e.preventDefault(); history.replaceState(null, '', a.getAttribute('href')); }
  });
  window.addEventListener('hashchange', function () { openHash(location.hash, true); });

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
    collapse();
    wire();
    if (location.hash) setTimeout(function () { openHash(location.hash, true); }, 50);
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

    // media: level chips + search
    [].forEach.call(document.querySelectorAll('.kit.k-s-media'), function (sec) {
      var box = sec.querySelector('[data-media]'), inp = sec.querySelector('[data-msearch]'), chips = sec.querySelectorAll('[data-mlv]'), lv = '';
      function apply() {
        var q = inp ? inp.value.trim().toLocaleLowerCase('ru') : '', shown = 0;
        [].forEach.call(box.querySelectorAll('.k-mcard'), function (c) {
          var ok = (!lv || (' ' + c.getAttribute('data-lv') + ' ').indexOf(' ' + lv + ' ') >= 0) && (!q || c.textContent.toLocaleLowerCase('ru').indexOf(q) >= 0);
          c.hidden = !ok; if (ok) shown++;
        });
        [].forEach.call(box.querySelectorAll('.k-mgroup'), function (g) { g.hidden = !g.querySelector('.k-mcard:not([hidden])'); });
        box.querySelector('.k-empty').hidden = shown > 0;
      }
      [].forEach.call(chips, function (c) { c.addEventListener('click', function () { lv = c.getAttribute('data-mlv'); [].forEach.call(chips, function (x) { x.classList.toggle('is-on', x === c); }); apply(); }); });
      if (inp) inp.addEventListener('input', apply);
    });
    // counters
    if (!reduce && 'IntersectionObserver' in window) {
      var co = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return; co.unobserve(e.target);
          var el = e.target, raw = el.getAttribute('data-to'), m = raw.match(/^(\D*)(\d+)(.*)$/);
          if (!m) return; var to = +m[2], t0 = null;
          function step(t) { t0 = t0 || t; var k = Math.min(1, (t - t0) / 1100); el.textContent = m[1] + Math.round(to * (1 - Math.pow(1 - k, 3))) + m[3]; if (k < 1) requestAnimationFrame(step); }
          requestAnimationFrame(step);
        });
      }, { threshold: .6 });
      [].forEach.call(document.querySelectorAll('.kit .k-count'), function (el) { co.observe(el); });
    }
    // platform: tabs, autoplay until the user touches it, lightbox
    [].forEach.call(document.querySelectorAll('.kit [data-platform]'), function (pf) {
      var tabs = pf.querySelectorAll('[data-pshot]'), imgs = pf.querySelectorAll('.k-pimg'), cur = 0, timer = null;
      var sec = pf.closest('.kit'), dlg = sec.querySelector('.k-lightbox');
      function show(i) {
        cur = i;
        [].forEach.call(tabs, function (t, k) { t.classList.toggle('is-on', k === i); t.setAttribute('aria-pressed', k === i); });
        [].forEach.call(imgs, function (im, k) { im.classList.toggle('is-on', k === i); });
      }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      [].forEach.call(tabs, function (t, k) { t.addEventListener('click', function () { stop(); show(k); }); });
      if (!reduce && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting && timer === null && !pf.dataset.touched) timer = setInterval(function () { show((cur + 1) % tabs.length); }, 4200);
            else if (!e.isIntersecting) stop();
          });
        }, { threshold: .35 }).observe(pf);
        pf.addEventListener('pointerdown', function () { pf.dataset.touched = '1'; stop(); });
      }
      pf.querySelector('[data-pzoom]').addEventListener('click', function () {
        pf.dataset.touched = '1'; stop();
        if (!dlg || !dlg.showModal) { window.open(imgs[cur].src, '_blank'); return; }
        var lbImg = dlg.querySelector('img') || dlg.insertBefore(document.createElement('img'), dlg.querySelector('p'));
        lbImg.src = imgs[cur].src; lbImg.alt = imgs[cur].alt;
        dlg.querySelector('p').textContent = tabs[cur].querySelector('b').textContent;
        dlg.showModal();
      });
      if (dlg) {
        dlg.querySelector('[data-lbclose]').addEventListener('click', function () { dlg.close(); });
        dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      }
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
