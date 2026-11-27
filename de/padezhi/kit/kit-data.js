window.KIT = {
 "lang": "de-DE",
 "mount": [
  {
   "after": "#material",
   "blocks": [
    {
     "type": "table",
     "id": "cases",
     "title": "Таблица падежей",
     "lead": "Те же примеры, что в ролике. Артикль выделен, под ним пример и перевод.",
     "cols": [
      {
       "key": "case",
       "label": "Падеж",
       "html": true
      },
      {
       "key": "m",
       "label": "мужской",
       "html": true
      },
      {
       "key": "f",
       "label": "женский",
       "html": true
      },
      {
       "key": "n",
       "label": "средний",
       "html": true
      },
      {
       "key": "pl",
       "label": "мн. число",
       "html": true
      }
     ],
     "rows": [
      {
       "case": "<b lang=\"de\">Nominativ</b><small>кто? что?</small>",
       "m": "<b class=\"k-mark\" lang=\"de\">der</b><small><span lang=\"de\"><b class=\"k-mark\">Der</b> Mann ist hier.</span><br>Мужчина здесь.</small>",
       "f": "<b class=\"k-mark\" lang=\"de\">die</b><small><span lang=\"de\"><b class=\"k-mark\">Die</b> Frau ist hier.</span><br>Женщина здесь.</small>",
       "n": "<b class=\"k-mark\" lang=\"de\">das</b><small><span lang=\"de\"><b class=\"k-mark\">Das</b> Kind ist hier.</span><br>Ребёнок здесь.</small>",
       "pl": "<b class=\"k-mark\" lang=\"de\">die</b><small><span lang=\"de\"><b class=\"k-mark\">Die</b> Kinder sind hier.</span><br>Дети здесь.</small>"
      },
      {
       "case": "<b lang=\"de\">Akkusativ</b><small>кого? что?</small>",
       "m": "<b class=\"k-mark\" lang=\"de\">den</b><small><span lang=\"de\">Ich sehe <b class=\"k-mark\">den</b> Mann.</span><br>Я вижу мужчину.</small>",
       "f": "<b class=\"k-mark\" lang=\"de\">die</b><small><span lang=\"de\">Ich sehe <b class=\"k-mark\">die</b> Frau.</span><br>Я вижу женщину.</small>",
       "n": "<b class=\"k-mark\" lang=\"de\">das</b><small><span lang=\"de\">Ich sehe <b class=\"k-mark\">das</b> Kind.</span><br>Я вижу ребёнка.</small>",
       "pl": "<b class=\"k-mark\" lang=\"de\">die</b><small><span lang=\"de\">Ich sehe <b class=\"k-mark\">die</b> Kinder.</span><br>Я вижу детей.</small>"
      },
      {
       "case": "<b lang=\"de\">Dativ</b><small>кому? чему?</small>",
       "m": "<b class=\"k-mark\" lang=\"de\">dem</b><small><span lang=\"de\">Ich helfe <b class=\"k-mark\">dem</b> Mann.</span><br>Я помогаю мужчине.</small>",
       "f": "<b class=\"k-mark\" lang=\"de\">der</b><small><span lang=\"de\">Ich helfe <b class=\"k-mark\">der</b> Frau.</span><br>Я помогаю женщине.</small>",
       "n": "<b class=\"k-mark\" lang=\"de\">dem</b><small><span lang=\"de\">Ich helfe <b class=\"k-mark\">dem</b> Kind.</span><br>Я помогаю ребёнку.</small>",
       "pl": "<b class=\"k-mark\" lang=\"de\">den … -n</b><small><span lang=\"de\">Ich helfe <b class=\"k-mark\">den</b> Kinder<b class=\"k-mark\">n</b>.</span><br>Я помогаю детям.</small>"
      }
     ],
     "note": "В Akkusativ меняется только мужской род: der → den. В Dativ — dem, der, dem, den, а во множественном числе к слову добавляется -n: den Kindern."
    },
    {
     "type": "table",
     "id": "ein",
     "title": "ein, kein и mein по падежам",
     "lead": "Неопределённый артикль, kein и mein, dein, sein меняются так же. Изменившиеся формы выделены.",
     "cols": [
      {
       "key": "case",
       "label": "Падеж",
       "html": true
      },
      {
       "key": "m",
       "label": "мужской",
       "html": true
      },
      {
       "key": "f",
       "label": "женский",
       "html": true
      },
      {
       "key": "n",
       "label": "средний",
       "html": true
      },
      {
       "key": "pl",
       "label": "мн. число",
       "html": true
      }
     ],
     "rows": [
      {
       "case": "<b lang=\"de\">Nominativ</b>",
       "m": "<span lang=\"de\">ein Mann</span>",
       "f": "<span lang=\"de\">eine Frau</span>",
       "n": "<span lang=\"de\">ein Kind</span>",
       "pl": "<span lang=\"de\">keine Kinder</span>"
      },
      {
       "case": "<b lang=\"de\">Akkusativ</b>",
       "m": "<span lang=\"de\"><b class=\"k-mark\">einen</b> Mann</span>",
       "f": "<span lang=\"de\">eine Frau</span>",
       "n": "<span lang=\"de\">ein Kind</span>",
       "pl": "<span lang=\"de\">keine Kinder</span>"
      },
      {
       "case": "<b lang=\"de\">Dativ</b>",
       "m": "<span lang=\"de\"><b class=\"k-mark\">einem</b> Mann</span>",
       "f": "<span lang=\"de\"><b class=\"k-mark\">einer</b> Frau</span>",
       "n": "<span lang=\"de\"><b class=\"k-mark\">einem</b> Kind</span>",
       "pl": "<span lang=\"de\"><b class=\"k-mark\">keinen</b> Kinder<b class=\"k-mark\">n</b></span>"
      }
     ],
     "note": "У ein нет множественного числа, поэтому в последнем столбце — kein. mein, dein, unser и другие притяжательные склоняются как kein: meinen Mann, meiner Frau, meinen Kindern."
    },
    {
     "type": "media",
     "id": "when",
     "title": "Когда какой падеж",
     "search": "Найти глагол или предлог",
     "lead": "Шесть случаев, которые закрывают почти все фразы A1–A2: глаголы, предлоги, «где или куда» и «кому что».",
     "groups": [
      {
       "title": "Случаи",
       "shape": "wide",
       "items": [
        {
         "title": "Akkusativ после глагола",
         "sub": "кого? что?",
         "img": "kit/img/de13-akk.webp",
         "alt": "Пожилой мужчина читает газету",
         "credit": "Фото: Bijay Chaurasia, CC BY-SA 4.0",
         "tip": "Большинство глаголов с дополнением требуют Akkusativ.",
         "text": "<b lang=\"de\">sehen, haben, kaufen, brauchen, lesen</b><br><span lang=\"de\">Er liest <b class=\"k-mark\">die</b> Zeitung.</span> — Он читает газету.<br><span lang=\"de\">Ich brauche <b class=\"k-mark\">einen</b> Termin.</span> — Мне нужна запись.<br><span lang=\"de\">Hast du <b class=\"k-mark\">den</b> Schlüssel?</span> — Ключ у тебя?"
        },
        {
         "title": "Dativ после глагола",
         "sub": "кому? чему?",
         "img": "kit/img/de13-dat.webp",
         "alt": "Официантка обслуживает гостей",
         "credit": "Фото: PattayaPatrol, CC BY-SA 4.0",
         "tip": "Таких глаголов немного: их удобно выучить списком.",
         "text": "<b lang=\"de\">helfen, danken, gefallen, gehören, antworten</b><br><span lang=\"de\">Die Kellnerin hilft <b class=\"k-mark\">dem</b> Gast.</span> — Официантка помогает гостю.<br><span lang=\"de\">Das Restaurant gefällt <b class=\"k-mark\">mir</b>.</span> — Мне нравится ресторан.<br><span lang=\"de\">Ich danke <b class=\"k-mark\">Ihnen</b>!</span> — Благодарю вас!"
        },
        {
         "title": "Akkusativ после предлога",
         "sub": "всегда Akkusativ",
         "img": "kit/img/de13-akkprep.webp",
         "alt": "Булочки на витрине пекарни",
         "credit": "Фото: Benreis, CC BY-SA 4.0",
         "tip": "Запоминалка: für, ohne, durch, gegen, um — всегда Akkusativ.",
         "text": "<b lang=\"de\">für, ohne, durch, gegen, um</b><br><span lang=\"de\">Die Brötchen sind für <b class=\"k-mark\">die</b> Kinder.</span> — Булочки — для детей.<br><span lang=\"de\">Wir gehen durch <b class=\"k-mark\">den</b> Park.</span> — Мы идём через парк.<br><span lang=\"de\">Ich komme ohne <b class=\"k-mark\">meinen</b> Mann.</span> — Я приду без мужа."
        },
        {
         "title": "Dativ после предлога",
         "sub": "всегда Dativ",
         "img": "kit/img/de13-datprep.webp",
         "alt": "Поезда берлинского метро",
         "credit": "Фото: IngolfBLN, CC BY-SA 2.0",
         "tip": "zu + dem = zum, zu + der = zur, von + dem = vom: zum Bahnhof, zur Arbeit.",
         "text": "<b lang=\"de\">mit, nach, bei, seit, von, zu, aus</b><br><span lang=\"de\">Ich fahre mit <b class=\"k-mark\">der</b> U-Bahn.</span> — Я еду на метро.<br><span lang=\"de\">Ich wohne bei <b class=\"k-mark\">meinen</b> Eltern.</span> — Я живу у родителей.<br><span lang=\"de\">Seit <b class=\"k-mark\">einem</b> Jahr lerne ich Deutsch.</span> — Я учу немецкий уже год."
        },
        {
         "title": "Где? или Куда?",
         "sub": "in, an, auf, unter, über, vor, hinter, neben, zwischen",
         "img": "kit/img/de13-wo.webp",
         "alt": "Девушка читает на диване",
         "credit": "Фото: Shixart1985, CC BY 2.0",
         "tip": "in + dem = im, an + dem = am, in + das = ins: im Büro, am Bahnhof, ins Kino.",
         "text": "<b lang=\"de\">Wo? — Dativ · Wohin? — Akkusativ</b><br><span lang=\"de\">Das Buch liegt auf <b class=\"k-mark\">dem</b> Sofa.</span> — Книга лежит на диване. (где?)<br><span lang=\"de\">Ich lege das Buch auf <b class=\"k-mark\">das</b> Sofa.</span> — Я кладу книгу на диван. (куда?)<br><span lang=\"de\">Ich bin in <b class=\"k-mark\">der</b> Küche. — Ich gehe in <b class=\"k-mark\">die</b> Küche.</span> — Я на кухне. — Я иду на кухню."
        },
        {
         "title": "Кому и что",
         "sub": "Dativ — человек, Akkusativ — вещь",
         "img": "kit/img/de13-geben.webp",
         "alt": "Бариста у кофемашины",
         "credit": "Фото: CHI Polska, CC BY-SA 4.0",
         "tip": "Сначала кому (Dativ), потом что (Akkusativ): dem Gast den Kaffee.",
         "text": "<b lang=\"de\">geben, schenken, zeigen, schicken, bringen</b><br><span lang=\"de\">Der Barista gibt <b class=\"k-mark\">dem</b> Gast <b class=\"k-mark\">den</b> Kaffee.</span> — Бариста даёт гостю кофе.<br><span lang=\"de\">Ich schenke <b class=\"k-mark\">meiner</b> Mutter Blumen.</span> — Я дарю маме цветы.<br><span lang=\"de\">Zeig <b class=\"k-mark\">mir</b> das Foto!</span> — Покажи мне фото!"
        }
       ]
      }
     ],
     "note": "Фото со свободными лицензиями из Wikimedia Commons и Openverse, автор и лицензия указаны под каждым снимком."
    },
    {
     "type": "table",
     "id": "pron",
     "title": "Местоимения: ich – mich – mir",
     "lead": "Личные местоимения тоже меняются по падежам: mich — кого, mir — кому.",
     "cols": [
      {
       "key": "nom",
       "label": "Nominativ",
       "lang": "de"
      },
      {
       "key": "akk",
       "label": "Akkusativ",
       "lang": "de"
      },
      {
       "key": "dat",
       "label": "Dativ",
       "lang": "de"
      },
      {
       "key": "ex",
       "label": "Пример",
       "html": true
      }
     ],
     "rows": [
      {
       "nom": "ich",
       "akk": "mich",
       "dat": "mir",
       "ex": "<span lang=\"de\">Er sieht mich. Er hilft mir.</span><small>Он видит меня. Он помогает мне.</small>"
      },
      {
       "nom": "du",
       "akk": "dich",
       "dat": "dir",
       "ex": "<span lang=\"de\">Ich sehe dich. Ich helfe dir.</span><small>Я вижу тебя. Я помогаю тебе.</small>"
      },
      {
       "nom": "er",
       "akk": "ihn",
       "dat": "ihm",
       "ex": "<span lang=\"de\">Ich sehe ihn. Ich helfe ihm.</span><small>Я вижу его. Я помогаю ему.</small>"
      },
      {
       "nom": "sie",
       "akk": "sie",
       "dat": "ihr",
       "ex": "<span lang=\"de\">Ich sehe sie. Ich helfe ihr.</span><small>Я вижу её. Я помогаю ей.</small>"
      },
      {
       "nom": "es",
       "akk": "es",
       "dat": "ihm",
       "ex": "<span lang=\"de\">Ich sehe es. Ich helfe ihm.</span><small>Я вижу его (ребёнка). Я помогаю ему.</small>"
      },
      {
       "nom": "wir",
       "akk": "uns",
       "dat": "uns",
       "ex": "<span lang=\"de\">Er sieht uns. Er hilft uns.</span><small>Он видит нас. Он помогает нам.</small>"
      },
      {
       "nom": "ihr",
       "akk": "euch",
       "dat": "euch",
       "ex": "<span lang=\"de\">Ich sehe euch. Ich helfe euch.</span><small>Я вижу вас. Я помогаю вам.</small>"
      },
      {
       "nom": "sie / Sie",
       "akk": "sie / Sie",
       "dat": "ihnen / Ihnen",
       "ex": "<span lang=\"de\">Ich helfe ihnen. Kann ich Ihnen helfen?</span><small>Я помогаю им. Чем могу вам помочь?</small>"
      }
     ],
     "compact": true,
     "note": "Вежливое Sie пишется с большой буквы во всех падежах: Sie, Sie, Ihnen."
    },
    {
     "type": "quiz",
     "id": "check",
     "mode": "list",
     "title": "Проверь себя",
     "optLang": "de",
     "lead": "8 пропусков: выбери артикль или форму.",
     "questions": [
      {
       "q": "Ich sehe … Mann.",
       "options": [
        "der",
        "den",
        "dem"
       ],
       "answer": 1,
       "explain": "sehen + Akkusativ: der → *den*."
      },
      {
       "q": "Ich helfe … Frau.",
       "options": [
        "die",
        "der",
        "den"
       ],
       "answer": 1,
       "explain": "helfen + Dativ: die → *der*."
      },
      {
       "q": "Ich fahre mit … Bus.",
       "options": [
        "den",
        "dem",
        "der"
       ],
       "answer": 1,
       "explain": "mit + Dativ: der Bus → mit *dem* Bus."
      },
      {
       "q": "Ich helfe den …",
       "options": [
        "Kinder",
        "Kindern",
        "Kinds"
       ],
       "answer": 1,
       "explain": "Во множественном числе в Dativ к слову добавляется *-n*: den Kinder*n*."
      },
      {
       "q": "Das ist für … Vater.",
       "options": [
        "meinen",
        "meinem",
        "mein"
       ],
       "answer": 0,
       "explain": "für + Akkusativ: *meinen* Vater."
      },
      {
       "q": "Ich lege das Handy auf … Tisch. (куда?)",
       "options": [
        "dem",
        "den",
        "der"
       ],
       "answer": 1,
       "explain": "Wohin? — Akkusativ: auf *den* Tisch."
      },
      {
       "q": "Das Handy liegt auf … Tisch. (где?)",
       "options": [
        "dem",
        "den",
        "der"
       ],
       "answer": 0,
       "explain": "Wo? — Dativ: auf *dem* Tisch."
      },
      {
       "q": "Kannst du … helfen?",
       "options": [
        "mich",
        "mir",
        "ich"
       ],
       "answer": 1,
       "explain": "helfen + Dativ: helfen *mir*."
      }
     ],
     "bands": [
      {
       "min": 0,
       "title": "Повтори таблицу",
       "text": "Вернись к таблице падежей и к случаям «когда какой»."
      },
      {
       "min": 7,
       "title": "Отлично",
       "text": "Теперь сверяйся с таблицей, только когда сомневаешься, и говори вслух."
      }
     ]
    },
    {
     "type": "platform",
     "id": "notion",
     "title": "Как выглядит *Stellas* внутри",
     "lead": "Этот гайд — одна тема из платформы. Вот настоящие экраны Stellas в Notion: так устроены все темы от A0 до C1.",
     "url": "Stellas Deutsch · Notion",
     "facts": [
      [
       "340+",
       "гайдов A0–C1: объяснение, видео, упражнение, ответы"
      ],
      [
       "7500+",
       "слов с аудио и транскрипцией"
      ],
      [
       "30 €",
       "A0–C1 вместо 40 €, один раз"
      ],
      [
       "Notion",
       "работает офлайн в приложении"
      ]
     ],
     "shots": [
      {
       "img": "kit/img/de-pl-home.webp",
       "h": 1031,
       "title": "Главная уровня A0–A2",
       "text": "Навигация по грамматике и лексике, подборка ресурсов (ютуб, мультфильмы, книги, подкасты, приложения), таймер и заметки.",
       "alt": "Экран курса в Notion: главная уровня A0–A2"
      },
      {
       "img": "kit/img/de-pl-city.webp",
       "h": 1045,
       "title": "Лексика по ситуациям",
       "text": "Город и транспорт: спросить дорогу, купить билет, контроль билетов. Еда: кафе, еда на вынос, доставка, булочная.",
       "alt": "Экран курса в Notion: лексика по ситуациям"
      },
      {
       "img": "kit/img/de-pl-lexik.webp",
       "h": 1047,
       "title": "Темы с фотографиями",
       "text": "Еда, ресторан, семья, больница, хобби, погода, гостиница, дом: слова собраны по темам.",
       "alt": "Экран курса в Notion: темы с фотографиями"
      },
      {
       "img": "kit/img/de-pl-b1grammar.webp",
       "h": 1047,
       "title": "Грамматика по порядку",
       "text": "На B1: Plusquamperfekt, Präteritum, Futur I, пассив и другие темы времён и форм глагола.",
       "alt": "Экран курса в Notion: грамматика по порядку"
      },
      {
       "img": "kit/img/de-pl-srs.webp",
       "h": 1031,
       "title": "Интервальные повторения",
       "text": "Карточки слов по уровням от A1 до C1: перевод открывается по клику, повтор в нужный день.",
       "alt": "Экран курса в Notion: интервальные повторения"
      },
      {
       "img": "kit/img/de-pl-habits.webp",
       "h": 1031,
       "title": "Трекер привычек",
       "text": "Чтение, слушание, разговор и письмо по дням. Бонусом раздел A0–A2 на украинском.",
       "alt": "Экран курса в Notion: трекер привычек"
      },
      {
       "img": "kit/img/de-pl-exams.webp",
       "h": 1047,
       "title": "Экзамены",
       "text": "Goethe-Zertifikat от A1 до C1: как готовиться, типичные ошибки и советы.",
       "alt": "Экран курса в Notion: экзамены"
      },
      {
       "img": "kit/img/de-pl-progress.webp",
       "h": 1047,
       "title": "Прогресс по темам",
       "text": "Таблица всех тем уровня: тема, уровень и отметка «пройдено».",
       "alt": "Экран курса в Notion: прогресс по темам"
      }
     ],
     "author": null,
     "cta": {
      "href": "https://app.lava.top/801303618?tabId=products&sort=published",
      "text": "Купить Stellas",
      "note": "Один платёж, доступ навсегда, обновления бесплатно",
      "wa": "https://t.me/stellasdeutsch",
      "waText": "Спросить в Telegram",
      "waIcon": "tg"
     }
    }
   ]
  }
 ],
 "waitFor": "#material"
};
