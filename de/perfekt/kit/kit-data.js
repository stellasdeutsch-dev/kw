window.KIT = {
 "lang": "de-DE",
 "mount": [
  {
   "after": "#material",
   "blocks": [
    {
     "type": "table",
     "id": "table",
     "title": "Таблица 6 времён",
     "lead": "Три прошедших, настоящее и два будущих. Изменяемая часть *выделена цветом*.",
     "cols": [
      {
       "key": "name",
       "label": "Время",
       "html": true
      },
      {
       "key": "when",
       "label": "Когда"
      },
      {
       "key": "formula",
       "label": "Формула",
       "html": true
      },
      {
       "key": "aff",
       "label": "Да",
       "html": true
      },
      {
       "key": "neg",
       "label": "Нет",
       "html": true
      },
      {
       "key": "q",
       "label": "Вопрос",
       "html": true
      }
     ],
     "rows": [
      {
       "name": "<b lang=\"de\">Präsens</b><small>настоящее · A1</small>",
       "when": "Сейчас, обычно, а с указанием времени — и про будущее",
       "formula": "основа + <b class=\"k-mark\">окончание</b>: -e, -st, -t, -en, -t, -en",
       "aff": "<span lang=\"de\">Ich <b class=\"k-mark\">arbeite</b> heute im Büro.</span><small>Я сегодня работаю в офисе.</small>",
       "neg": "<span lang=\"de\">Ich <b class=\"k-mark\">arbeite</b> heute <b class=\"k-mark\">nicht</b>.</span><small>Я сегодня не работаю.</small>",
       "q": "<span lang=\"de\"><b class=\"k-mark\">Arbeitest</b> du heute?</span><small>Ты сегодня работаешь?</small>"
      },
      {
       "name": "<b lang=\"de\">Perfekt</b><small>прошедшее разговорное · A1–A2</small>",
       "when": "Прошлое в разговоре и в переписке",
       "formula": "<b class=\"k-mark\">haben / sein</b> + Partizip II в конце",
       "aff": "<span lang=\"de\">Wir <b class=\"k-mark\">sind</b> nach Berlin <b class=\"k-mark\">gefahren</b>.</span><small>Мы съездили в Берлин.</small>",
       "neg": "<span lang=\"de\">Ich <b class=\"k-mark\">habe</b> den Film <b class=\"k-mark\">nicht</b> gesehen.</span><small>Я не смотрел этот фильм.</small>",
       "q": "<span lang=\"de\"><b class=\"k-mark\">Hast</b> du schon <b class=\"k-mark\">gegessen</b>?</span><small>Ты уже поел?</small>"
      },
      {
       "name": "<b lang=\"de\">Präteritum</b><small>прошедшее письменное · A2–B1</small>",
       "when": "Прошлое в текстах и рассказах. В речи — war, hatte и модальные глаголы",
       "formula": "основа + <b class=\"k-mark\">-te</b> или <b class=\"k-mark\">новая основа</b>",
       "aff": "<span lang=\"de\">Als Kind <b class=\"k-mark\">wohnte</b> ich in Almaty.</span><small>В детстве я жил в Алматы.</small>",
       "neg": "<span lang=\"de\">Gestern <b class=\"k-mark\">hatte</b> ich <b class=\"k-mark\">keine</b> Zeit.</span><small>Вчера у меня не было времени.</small>",
       "q": "<span lang=\"de\"><b class=\"k-mark\">Warst</b> du schon mal in Wien?</span><small>Ты когда-нибудь был в Вене?</small>"
      },
      {
       "name": "<b lang=\"de\">Plusquamperfekt</b><small>предпрошедшее · B1</small>",
       "when": "Что случилось раньше другого события в прошлом",
       "formula": "<b class=\"k-mark\">hatte / war</b> + Partizip II",
       "aff": "<span lang=\"de\">Der Zug <b class=\"k-mark\">war</b> schon <b class=\"k-mark\">abgefahren</b>.</span><small>Поезд уже ушёл (к тому моменту).</small>",
       "neg": "<span lang=\"de\">Ich <b class=\"k-mark\">hatte</b> das Buch noch <b class=\"k-mark\">nicht</b> gelesen.</span><small>Я ещё не прочитал книгу (тогда).</small>",
       "q": "<span lang=\"de\"><b class=\"k-mark\">Hattest</b> du vorher etwas <b class=\"k-mark\">gegessen</b>?</span><small>Ты до этого что-нибудь ел?</small>"
      },
      {
       "name": "<b lang=\"de\">Futur I</b><small>будущее · A2</small>",
       "when": "Обещание, прогноз, твёрдое намерение",
       "formula": "<b class=\"k-mark\">werden</b> + инфинитив в конце",
       "aff": "<span lang=\"de\">Ich <b class=\"k-mark\">werde</b> dich morgen <b class=\"k-mark\">anrufen</b>.</span><small>Я позвоню тебе завтра.</small>",
       "neg": "<span lang=\"de\">Es <b class=\"k-mark\">wird</b> morgen <b class=\"k-mark\">nicht</b> regnen.</span><small>Завтра не будет дождя.</small>",
       "q": "<span lang=\"de\"><b class=\"k-mark\">Wirst</b> du am Samstag <b class=\"k-mark\">arbeiten</b>?</span><small>Ты будешь работать в субботу?</small>"
      },
      {
       "name": "<b lang=\"de\">Futur II</b><small>будущее завершённое · B2</small>",
       "when": "Будет сделано к моменту в будущем; догадка о прошлом",
       "formula": "<b class=\"k-mark\">werden</b> + Partizip II + <b class=\"k-mark\">haben / sein</b>",
       "aff": "<span lang=\"de\">Bis Freitag <b class=\"k-mark\">werde</b> ich den Bericht geschrieben <b class=\"k-mark\">haben</b>.</span><small>К пятнице я напишу отчёт.</small>",
       "neg": "<span lang=\"de\">Bis morgen <b class=\"k-mark\">wird</b> er das <b class=\"k-mark\">nicht</b> geschafft haben.</span><small>К завтрашнему дню он не успеет.</small>",
       "q": "<span lang=\"de\"><b class=\"k-mark\">Wirst</b> du bis Juni alles geschafft <b class=\"k-mark\">haben</b>?</span><small>Ты успеешь всё к июню?</small>"
      }
     ],
     "numbered": true,
     "compact": true,
     "note": "Отрицание nicht стоит перед частью, которую отрицают, или ближе к концу. kein — вместо ein и перед существительным без артикля. В вопросе глагол на первом месте."
    },
    {
     "type": "media",
     "id": "life",
     "title": "Времена в жизни: ещё 18 примеров",
     "lead": "Каждое время в своей ситуации: три новых примера и слова-подсказки, по которым время узнаётся в речи. Выбери уровень, чтобы оставить только свои времена.",
     "groups": [
      {
       "title": "Шесть времён",
       "shape": "wide",
       "items": [
        {
         "title": "Präsens",
         "lang": "de",
         "sub": "Сейчас, обычно и план · основа + окончание",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "img": "kit/img/de03-praesens.webp",
         "alt": "Ноутбук, телефон и кофе на столе",
         "credit": "Фото: Rawpixel Ltd, CC BY",
         "tip": "Подсказки: jetzt, gerade, immer, jeden Tag. С morgen, am Montag — про будущее.",
         "text": "<b lang=\"de\">Ich <b class=\"k-mark\">schreibe</b> gerade eine E-Mail.</b> — Я сейчас пишу письмо.<br><b lang=\"de\">Sie <b class=\"k-mark\">trinkt</b> morgens immer Kaffee.</b> — Она по утрам всегда пьёт кофе.<br><b lang=\"de\">Morgen <b class=\"k-mark\">fahren</b> wir nach Hamburg.</b> — Завтра мы едем в Гамбург."
        },
        {
         "title": "Perfekt",
         "lang": "de",
         "sub": "Прошлое в разговоре · haben / sein + Partizip II",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "img": "kit/img/de03-perfekt.webp",
         "alt": "Поезд ICE у платформы",
         "credit": "Фото: kalleboo, CC BY",
         "tip": "Подсказки: gestern, letzte Woche, schon, noch nie. Движение и изменение состояния — с sein.",
         "text": "<b lang=\"de\">Wir <b class=\"k-mark\">sind</b> mit dem ICE <b class=\"k-mark\">gefahren</b>.</b> — Мы ехали на ICE.<br><b lang=\"de\">Ich <b class=\"k-mark\">habe</b> die Tickets online <b class=\"k-mark\">gekauft</b>.</b> — Я купил билеты онлайн.<br><b lang=\"de\">Wann <b class=\"k-mark\">ist</b> der Zug <b class=\"k-mark\">angekommen</b>?</b> — Когда пришёл поезд?"
        },
        {
         "title": "Präteritum",
         "lang": "de",
         "sub": "Прошлое в рассказе · -te или новая основа",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "img": "kit/img/de03-praeteritum.webp",
         "alt": "Старая фотография ребёнка с коляской",
         "credit": "Фото: Beverly & Pack, CC BY",
         "tip": "В речи в Präteritum почти всегда только sein, haben и модальные: war, hatte, konnte, musste.",
         "text": "<b lang=\"de\">Früher <b class=\"k-mark\">wohnten</b> wir auf dem Land.</b> — Раньше мы жили в деревне.<br><b lang=\"de\">Mein Opa <b class=\"k-mark\">war</b> Lehrer.</b> — Мой дедушка был учителем.<br><b lang=\"de\">Als Kind <b class=\"k-mark\">konnte</b> ich nicht schwimmen.</b> — В детстве я не умел плавать."
        },
        {
         "title": "Plusquamperfekt",
         "lang": "de",
         "sub": "Раньше другого прошлого · hatte / war + Partizip II",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "img": "kit/img/de03-plusq.webp",
         "alt": "Пустая платформа вокзала ночью",
         "credit": "Фото: Dai Lygad, CC BY",
         "tip": "Подсказки: schon, vorher, nachdem. Второе событие обычно в Präteritum.",
         "text": "<b lang=\"de\">Als wir ankamen, <b class=\"k-mark\">war</b> der Zug schon <b class=\"k-mark\">abgefahren</b>.</b> — Когда мы пришли, поезд уже ушёл.<br><b lang=\"de\">Ich <b class=\"k-mark\">hatte</b> den Schlüssel zu Hause <b class=\"k-mark\">vergessen</b>.</b> — Я забыл ключ дома (ещё до этого).<br><b lang=\"de\">Nachdem sie <b class=\"k-mark\">gegessen hatte</b>, ging sie spazieren.</b> — Поев, она пошла гулять."
        },
        {
         "title": "Futur I",
         "lang": "de",
         "sub": "Обещание и прогноз · werden + инфинитив",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "img": "kit/img/de03-futur1.webp",
         "alt": "Ежедневник, ручка и очки",
         "credit": "Фото: Generationbass.com, CC BY",
         "tip": "Про план чаще говорят в Präsens: Morgen gehe ich zum Arzt. Futur I — когда важно обещание или прогноз.",
         "text": "<b lang=\"de\">Ich <b class=\"k-mark\">werde</b> jeden Tag Deutsch <b class=\"k-mark\">lernen</b>.</b> — Я буду учить немецкий каждый день.<br><b lang=\"de\">Das <b class=\"k-mark\">wird</b> schon <b class=\"k-mark\">klappen</b>.</b> — Всё получится.<br><b lang=\"de\">Nächstes Jahr <b class=\"k-mark\">werden</b> wir umziehen.</b> — В следующем году мы переедем."
        },
        {
         "title": "Futur II",
         "lang": "de",
         "sub": "Сделано к моменту в будущем · werden + Partizip II + haben",
         "level": "B2",
         "levels": [
          "B2"
         ],
         "img": "kit/img/de03-futur2.webp",
         "alt": "Выпускники в мантиях",
         "credit": "Фото: spakattacks, CC BY",
         "tip": "В разговоре вместо Futur II обычно говорят Perfekt: Bis Juni habe ich die Prüfung bestanden.",
         "text": "<b lang=\"de\">Bis Juni <b class=\"k-mark\">werde</b> ich die Prüfung bestanden <b class=\"k-mark\">haben</b>.</b> — К июню я сдам экзамен.<br><b lang=\"de\">In einem Jahr <b class=\"k-mark\">werden</b> wir das Haus gebaut <b class=\"k-mark\">haben</b>.</b> — Через год мы построим дом.<br><b lang=\"de\">Sie <b class=\"k-mark\">wird</b> den Termin vergessen <b class=\"k-mark\">haben</b>.</b> — Она, наверное, забыла про встречу."
        }
       ]
      }
     ],
     "note": "Фото со свободными лицензиями Creative Commons из Openverse, автор указан под каждым снимком."
    },
    {
     "type": "forms",
     "id": "conj",
     "title": "Спряжение по лицам",
     "lang": "de-DE",
     "speak": true,
     "lead": "Выбери время. machen спрягается с haben, fahren — с sein. Третья карточка — отрицание и вопрос.",
     "verbs": [
      {
       "inf": "Präsens",
       "ru": "сейчас",
       "tenses": [
        {
         "name": "machen",
         "ru": "делать · с haben",
         "rows": [
          [
           "ich",
           "mache",
           ""
          ],
          [
           "du",
           "machst",
           ""
          ],
          [
           "er/sie/es",
           "macht",
           ""
          ],
          [
           "wir",
           "machen",
           ""
          ],
          [
           "ihr",
           "macht",
           ""
          ],
          [
           "sie/Sie",
           "machen",
           ""
          ]
         ]
        },
        {
         "name": "fahren",
         "ru": "ехать · с sein",
         "rows": [
          [
           "ich",
           "fahre",
           ""
          ],
          [
           "du",
           "fährst",
           ""
          ],
          [
           "er/sie/es",
           "fährt",
           ""
          ],
          [
           "wir",
           "fahren",
           ""
          ],
          [
           "ihr",
           "fahrt",
           ""
          ],
          [
           "sie/Sie",
           "fahren",
           ""
          ]
         ]
        },
        {
         "name": "Нет и вопрос",
         "ru": "порядок слов",
         "rows": [
          [
           "нет",
           "Ich fahre *nicht* mit.",
           "Я не еду с вами."
          ],
          [
           "вопрос",
           "*Machst* du heute Sport?",
           "Ты сегодня занимаешься спортом?"
          ]
         ]
        }
       ],
       "note": "fahren меняет a на ä в du и er/sie/es: du *fährst*, er *fährt*."
      },
      {
       "inf": "Perfekt",
       "ru": "прошлое в речи",
       "tenses": [
        {
         "name": "machen",
         "ru": "делать · с haben",
         "rows": [
          [
           "ich",
           "habe gemacht",
           ""
          ],
          [
           "du",
           "hast gemacht",
           ""
          ],
          [
           "er/sie/es",
           "hat gemacht",
           ""
          ],
          [
           "wir",
           "haben gemacht",
           ""
          ],
          [
           "ihr",
           "habt gemacht",
           ""
          ],
          [
           "sie/Sie",
           "haben gemacht",
           ""
          ]
         ]
        },
        {
         "name": "fahren",
         "ru": "ехать · с sein",
         "rows": [
          [
           "ich",
           "bin gefahren",
           ""
          ],
          [
           "du",
           "bist gefahren",
           ""
          ],
          [
           "er/sie/es",
           "ist gefahren",
           ""
          ],
          [
           "wir",
           "sind gefahren",
           ""
          ],
          [
           "ihr",
           "seid gefahren",
           ""
          ],
          [
           "sie/Sie",
           "sind gefahren",
           ""
          ]
         ]
        },
        {
         "name": "Нет и вопрос",
         "ru": "порядок слов",
         "rows": [
          [
           "нет",
           "Ich habe das *nicht* gemacht.",
           "Я этого не делал."
          ],
          [
           "вопрос",
           "*Bist* du schon mal Zug gefahren?",
           "Ты когда-нибудь ездил на поезде?"
          ]
         ]
        }
       ],
       "note": "fahren с sein, когда едешь сам: Ich *bin* nach Bonn gefahren. С объектом — с haben: Ich *habe* das Auto gefahren."
      },
      {
       "inf": "Präteritum",
       "ru": "прошлое в тексте",
       "tenses": [
        {
         "name": "machen",
         "ru": "делать · с haben",
         "rows": [
          [
           "ich",
           "machte",
           ""
          ],
          [
           "du",
           "machtest",
           ""
          ],
          [
           "er/sie/es",
           "machte",
           ""
          ],
          [
           "wir",
           "machten",
           ""
          ],
          [
           "ihr",
           "machtet",
           ""
          ],
          [
           "sie/Sie",
           "machten",
           ""
          ]
         ]
        },
        {
         "name": "fahren",
         "ru": "ехать · с sein",
         "rows": [
          [
           "ich",
           "fuhr",
           ""
          ],
          [
           "du",
           "fuhrst",
           ""
          ],
          [
           "er/sie/es",
           "fuhr",
           ""
          ],
          [
           "wir",
           "fuhren",
           ""
          ],
          [
           "ihr",
           "fuhrt",
           ""
          ],
          [
           "sie/Sie",
           "fuhren",
           ""
          ]
         ]
        },
        {
         "name": "Нет и вопрос",
         "ru": "порядок слов",
         "rows": [
          [
           "нет",
           "Er fuhr *nicht* weiter.",
           "Он не поехал дальше."
          ],
          [
           "вопрос",
           "*Fuhren* sie mit dem Auto?",
           "Они ехали на машине?"
          ]
         ]
        }
       ],
       "note": "machen — слабый глагол: основа + -te. fahren — сильный: новая основа fuhr, у ich и er нет окончания."
      },
      {
       "inf": "Plusquamperfekt",
       "ru": "раньше прошлого",
       "tenses": [
        {
         "name": "machen",
         "ru": "делать · с haben",
         "rows": [
          [
           "ich",
           "hatte gemacht",
           ""
          ],
          [
           "du",
           "hattest gemacht",
           ""
          ],
          [
           "er/sie/es",
           "hatte gemacht",
           ""
          ],
          [
           "wir",
           "hatten gemacht",
           ""
          ],
          [
           "ihr",
           "hattet gemacht",
           ""
          ],
          [
           "sie/Sie",
           "hatten gemacht",
           ""
          ]
         ]
        },
        {
         "name": "fahren",
         "ru": "ехать · с sein",
         "rows": [
          [
           "ich",
           "war gefahren",
           ""
          ],
          [
           "du",
           "warst gefahren",
           ""
          ],
          [
           "er/sie/es",
           "war gefahren",
           ""
          ],
          [
           "wir",
           "waren gefahren",
           ""
          ],
          [
           "ihr",
           "wart gefahren",
           ""
          ],
          [
           "sie/Sie",
           "waren gefahren",
           ""
          ]
         ]
        },
        {
         "name": "Нет и вопрос",
         "ru": "порядок слов",
         "rows": [
          [
           "нет",
           "Wir hatten das noch *nicht* gemacht.",
           "Мы этого ещё не сделали (тогда)."
          ],
          [
           "вопрос",
           "*Warst* du vorher schon dort gewesen?",
           "Ты до этого уже там бывал?"
          ]
         ]
        }
       ],
       "note": ""
      },
      {
       "inf": "Futur I",
       "ru": "будущее",
       "tenses": [
        {
         "name": "machen",
         "ru": "делать · с haben",
         "rows": [
          [
           "ich",
           "werde machen",
           ""
          ],
          [
           "du",
           "wirst machen",
           ""
          ],
          [
           "er/sie/es",
           "wird machen",
           ""
          ],
          [
           "wir",
           "werden machen",
           ""
          ],
          [
           "ihr",
           "werdet machen",
           ""
          ],
          [
           "sie/Sie",
           "werden machen",
           ""
          ]
         ]
        },
        {
         "name": "fahren",
         "ru": "ехать · с sein",
         "rows": [
          [
           "ich",
           "werde fahren",
           ""
          ],
          [
           "du",
           "wirst fahren",
           ""
          ],
          [
           "er/sie/es",
           "wird fahren",
           ""
          ],
          [
           "wir",
           "werden fahren",
           ""
          ],
          [
           "ihr",
           "werdet fahren",
           ""
          ],
          [
           "sie/Sie",
           "werden fahren",
           ""
          ]
         ]
        },
        {
         "name": "Нет и вопрос",
         "ru": "порядок слов",
         "rows": [
          [
           "нет",
           "Ich werde das *nicht* machen.",
           "Я не буду этого делать."
          ],
          [
           "вопрос",
           "*Wirst* du morgen fahren?",
           "Ты поедешь завтра?"
          ]
         ]
        }
       ],
       "note": ""
      },
      {
       "inf": "Futur II",
       "ru": "завершится к",
       "tenses": [
        {
         "name": "machen",
         "ru": "делать · с haben",
         "rows": [
          [
           "ich",
           "werde gemacht haben",
           ""
          ],
          [
           "du",
           "wirst gemacht haben",
           ""
          ],
          [
           "er/sie/es",
           "wird gemacht haben",
           ""
          ],
          [
           "wir",
           "werden gemacht haben",
           ""
          ],
          [
           "ihr",
           "werdet gemacht haben",
           ""
          ],
          [
           "sie/Sie",
           "werden gemacht haben",
           ""
          ]
         ]
        },
        {
         "name": "fahren",
         "ru": "ехать · с sein",
         "rows": [
          [
           "ich",
           "werde gefahren sein",
           ""
          ],
          [
           "du",
           "wirst gefahren sein",
           ""
          ],
          [
           "er/sie/es",
           "wird gefahren sein",
           ""
          ],
          [
           "wir",
           "werden gefahren sein",
           ""
          ],
          [
           "ihr",
           "werdet gefahren sein",
           ""
          ],
          [
           "sie/Sie",
           "werden gefahren sein",
           ""
          ]
         ]
        },
        {
         "name": "Нет и вопрос",
         "ru": "порядок слов",
         "rows": [
          [
           "нет",
           "Bis dahin wird er es *nicht* gemacht haben.",
           "К тому времени он этого не сделает."
          ],
          [
           "вопрос",
           "*Wird* er bis Montag alles gemacht haben?",
           "Он успеет всё сделать к понедельнику?"
          ]
         ]
        }
       ],
       "note": "Futur II в разговоре редкость: вместо него Perfekt с указанием времени."
      }
     ]
    },
    {
     "type": "table",
     "id": "partizip",
     "title": "Как образуется Partizip II",
     "lead": "Шесть правил закрывают почти все глаголы. Сильные формы проще запоминать списком, он ниже.",
     "cols": [
      {
       "key": "rule",
       "label": "Правило"
      },
      {
       "key": "ex",
       "label": "Примеры",
       "lang": "de"
      }
     ],
     "rows": [
      {
       "rule": "Слабые глаголы: *ge- + основа + -t*",
       "ex": "machen → gemacht, kaufen → gekauft, arbeiten → gearbeitet"
      },
      {
       "rule": "Сильные глаголы: *ge- + основа + -en*, гласная часто меняется",
       "ex": "fahren → gefahren, schreiben → geschrieben, trinken → getrunken"
      },
      {
       "rule": "Смешанные: *ge- + новая основа + -t*",
       "ex": "bringen → gebracht, denken → gedacht, wissen → gewusst"
      },
      {
       "rule": "Отделяемая приставка: *ge* встаёт после неё",
       "ex": "einkaufen → eingekauft, aufstehen → aufgestanden, anrufen → angerufen"
      },
      {
       "rule": "Неотделяемая приставка be-, ver-, er-, ent-, emp-, zer-, ge-, miss-: *без ge-*",
       "ex": "besuchen → besucht, verstehen → verstanden, erzählen → erzählt"
      },
      {
       "rule": "Глаголы на -ieren: *без ge-*",
       "ex": "studieren → studiert, telefonieren → telefoniert, passieren → passiert"
      }
     ]
    },
    {
     "type": "cards",
     "id": "haben-sein",
     "title": "*haben* или *sein*",
     "cols": 3,
     "lead": "С sein — движение с места на место, изменение состояния и несколько исключений. Всё остальное — с haben.",
     "items": [
      {
       "title": "sein: движение с места на место",
       "badge": "sein",
       "list": [
        "gehen → ist gegangen",
        "fahren → ist gefahren",
        "fliegen → ist geflogen",
        "kommen → ist gekommen"
       ]
      },
      {
       "title": "sein: изменение состояния",
       "badge": "sein",
       "list": [
        "aufstehen → ist aufgestanden",
        "einschlafen → ist eingeschlafen",
        "werden → ist geworden",
        "sterben → ist gestorben"
       ]
      },
      {
       "title": "sein: запомнить отдельно",
       "badge": "sein",
       "list": [
        "sein → ist gewesen",
        "bleiben → ist geblieben",
        "passieren → ist passiert",
        "begegnen → ist begegnet"
       ]
      },
      {
       "title": "haben: есть объект (кого? что?)",
       "badge": "haben",
       "list": [
        "Ich habe einen Kaffee getrunken.",
        "Sie hat das Auto gefahren.",
        "Wir haben Oma besucht."
       ]
      },
      {
       "title": "haben: нет движения",
       "badge": "haben",
       "list": [
        "schlafen → hat geschlafen",
        "arbeiten → hat gearbeitet",
        "warten → hat gewartet"
       ]
      },
      {
       "title": "haben: возвратные и модальные",
       "badge": "haben",
       "list": [
        "sich waschen → hat sich gewaschen",
        "sich freuen → hat sich gefreut",
        "können → hat gekonnt"
       ]
      }
     ],
     "note": "На юге Германии, в Австрии и Швейцарии говорят ich *bin* gesessen, gestanden, gelegen. В стандартном немецком — с haben."
    },
    {
     "type": "table",
     "id": "verbs",
     "title": "40 частых глаголов в Perfekt",
     "search": "Найти глагол",
     "speak": "perf",
     "numbered": true,
     "compact": true,
     "lead": "Инфинитив, форма для er/sie/es, перевод и пример. Значок звука читает форму голосом браузера.",
     "cols": [
      {
       "key": "inf",
       "label": "Глагол",
       "lang": "de"
      },
      {
       "key": "perf",
       "label": "Perfekt",
       "lang": "de"
      },
      {
       "key": "ru",
       "label": "Перевод"
      },
      {
       "key": "ex",
       "label": "Пример",
       "html": true
      }
     ],
     "groups": [
      {
       "title": "С sein",
       "sub": "11 глаголов",
       "rows": [
        {
         "inf": "sein",
         "perf": "ist gewesen",
         "ru": "быть",
         "ex": "<span lang=\"de\">Ich bin noch nie in Wien gewesen.</span><small>Я ещё никогда не был в Вене.</small>"
        },
        {
         "inf": "werden",
         "perf": "ist geworden",
         "ru": "становиться",
         "ex": "<span lang=\"de\">Sie ist Ärztin geworden.</span><small>Она стала врачом.</small>"
        },
        {
         "inf": "gehen",
         "perf": "ist gegangen",
         "ru": "идти",
         "ex": "<span lang=\"de\">Ich bin früh ins Bett gegangen.</span><small>Я рано лёг спать.</small>"
        },
        {
         "inf": "kommen",
         "perf": "ist gekommen",
         "ru": "приходить",
         "ex": "<span lang=\"de\">Wann bist du nach Hause gekommen?</span><small>Когда ты пришёл домой?</small>"
        },
        {
         "inf": "fahren",
         "perf": "ist gefahren",
         "ru": "ехать",
         "ex": "<span lang=\"de\">Wir sind mit dem Zug gefahren.</span><small>Мы поехали на поезде.</small>"
        },
        {
         "inf": "fliegen",
         "perf": "ist geflogen",
         "ru": "лететь",
         "ex": "<span lang=\"de\">Sie ist nach Istanbul geflogen.</span><small>Она улетела в Стамбул.</small>"
        },
        {
         "inf": "bleiben",
         "perf": "ist geblieben",
         "ru": "оставаться",
         "ex": "<span lang=\"de\">Ich bin zu Hause geblieben.</span><small>Я остался дома.</small>"
        },
        {
         "inf": "aufstehen",
         "perf": "ist aufgestanden",
         "ru": "вставать",
         "ex": "<span lang=\"de\">Heute bin ich um sechs aufgestanden.</span><small>Сегодня я встал в шесть.</small>"
        },
        {
         "inf": "passieren",
         "perf": "ist passiert",
         "ru": "случаться",
         "ex": "<span lang=\"de\">Was ist passiert?</span><small>Что случилось?</small>"
        },
        {
         "inf": "einschlafen",
         "perf": "ist eingeschlafen",
         "ru": "засыпать",
         "ex": "<span lang=\"de\">Das Kind ist sofort eingeschlafen.</span><small>Ребёнок сразу уснул.</small>"
        },
        {
         "inf": "umziehen",
         "perf": "ist umgezogen",
         "ru": "переезжать",
         "ex": "<span lang=\"de\">Wir sind letztes Jahr nach Köln umgezogen.</span><small>В прошлом году мы переехали в Кёльн.</small>"
        }
       ]
      },
      {
       "title": "С haben: Partizip на -t",
       "sub": "7 глаголов",
       "rows": [
        {
         "inf": "haben",
         "perf": "hat gehabt",
         "ru": "иметь",
         "ex": "<span lang=\"de\">Wir haben viel Glück gehabt.</span><small>Нам очень повезло.</small>"
        },
        {
         "inf": "machen",
         "perf": "hat gemacht",
         "ru": "делать",
         "ex": "<span lang=\"de\">Was hast du am Wochenende gemacht?</span><small>Что ты делал в выходные?</small>"
        },
        {
         "inf": "arbeiten",
         "perf": "hat gearbeitet",
         "ru": "работать",
         "ex": "<span lang=\"de\">Ich habe bis acht gearbeitet.</span><small>Я работал до восьми.</small>"
        },
        {
         "inf": "kaufen",
         "perf": "hat gekauft",
         "ru": "покупать",
         "ex": "<span lang=\"de\">Ich habe Brot und Milch gekauft.</span><small>Я купил хлеб и молоко.</small>"
        },
        {
         "inf": "bringen",
         "perf": "hat gebracht",
         "ru": "приносить",
         "ex": "<span lang=\"de\">Der Kellner hat die Rechnung gebracht.</span><small>Официант принёс счёт.</small>"
        },
        {
         "inf": "denken",
         "perf": "hat gedacht",
         "ru": "думать",
         "ex": "<span lang=\"de\">Ich habe an dich gedacht.</span><small>Я думал о тебе.</small>"
        },
        {
         "inf": "wissen",
         "perf": "hat gewusst",
         "ru": "знать",
         "ex": "<span lang=\"de\">Das habe ich nicht gewusst.</span><small>Этого я не знал.</small>"
        }
       ]
      },
      {
       "title": "С haben: Partizip на -en",
       "sub": "12 глаголов",
       "rows": [
        {
         "inf": "essen",
         "perf": "hat gegessen",
         "ru": "есть",
         "ex": "<span lang=\"de\">Wir haben schon gegessen.</span><small>Мы уже поели.</small>"
        },
        {
         "inf": "trinken",
         "perf": "hat getrunken",
         "ru": "пить",
         "ex": "<span lang=\"de\">Er hat zu viel Kaffee getrunken.</span><small>Он выпил слишком много кофе.</small>"
        },
        {
         "inf": "sehen",
         "perf": "hat gesehen",
         "ru": "видеть",
         "ex": "<span lang=\"de\">Hast du den Film gesehen?</span><small>Ты видел этот фильм?</small>"
        },
        {
         "inf": "lesen",
         "perf": "hat gelesen",
         "ru": "читать",
         "ex": "<span lang=\"de\">Ich habe das Buch in einer Woche gelesen.</span><small>Я прочитал книгу за неделю.</small>"
        },
        {
         "inf": "schreiben",
         "perf": "hat geschrieben",
         "ru": "писать",
         "ex": "<span lang=\"de\">Sie hat mir eine Nachricht geschrieben.</span><small>Она написала мне сообщение.</small>"
        },
        {
         "inf": "sprechen",
         "perf": "hat gesprochen",
         "ru": "говорить",
         "ex": "<span lang=\"de\">Wir haben lange miteinander gesprochen.</span><small>Мы долго разговаривали.</small>"
        },
        {
         "inf": "nehmen",
         "perf": "hat genommen",
         "ru": "брать",
         "ex": "<span lang=\"de\">Ich habe den Bus genommen.</span><small>Я поехал на автобусе.</small>"
        },
        {
         "inf": "finden",
         "perf": "hat gefunden",
         "ru": "находить",
         "ex": "<span lang=\"de\">Ich habe meinen Schlüssel nicht gefunden.</span><small>Я не нашёл свой ключ.</small>"
        },
        {
         "inf": "vergessen",
         "perf": "hat vergessen",
         "ru": "забывать",
         "ex": "<span lang=\"de\">Ich habe meinen Regenschirm vergessen.</span><small>Я забыл зонт.</small>"
        },
        {
         "inf": "treffen",
         "perf": "hat getroffen",
         "ru": "встречать",
         "ex": "<span lang=\"de\">Gestern habe ich einen alten Freund getroffen.</span><small>Вчера я встретил старого друга.</small>"
        },
        {
         "inf": "schlafen",
         "perf": "hat geschlafen",
         "ru": "спать",
         "ex": "<span lang=\"de\">Hast du gut geschlafen?</span><small>Ты хорошо спал?</small>"
        },
        {
         "inf": "helfen",
         "perf": "hat geholfen",
         "ru": "помогать",
         "ex": "<span lang=\"de\">Mein Nachbar hat mir beim Umzug geholfen.</span><small>Сосед помог мне с переездом.</small>"
        }
       ]
      },
      {
       "title": "Без ge- или с ge- внутри",
       "sub": "10 глаголов",
       "rows": [
        {
         "inf": "anrufen",
         "perf": "hat angerufen",
         "ru": "звонить",
         "ex": "<span lang=\"de\">Hast du deine Mutter angerufen?</span><small>Ты позвонил маме?</small>"
        },
        {
         "inf": "einkaufen",
         "perf": "hat eingekauft",
         "ru": "ходить за покупками",
         "ex": "<span lang=\"de\">Ich habe schon eingekauft.</span><small>Я уже сходил за продуктами.</small>"
        },
        {
         "inf": "kennenlernen",
         "perf": "hat kennengelernt",
         "ru": "знакомиться",
         "ex": "<span lang=\"de\">Wo habt ihr euch kennengelernt?</span><small>Где вы познакомились?</small>"
        },
        {
         "inf": "besuchen",
         "perf": "hat besucht",
         "ru": "навещать",
         "ex": "<span lang=\"de\">Wir haben unsere Oma besucht.</span><small>Мы навестили бабушку.</small>"
        },
        {
         "inf": "verstehen",
         "perf": "hat verstanden",
         "ru": "понимать",
         "ex": "<span lang=\"de\">Ich habe die Frage nicht verstanden.</span><small>Я не понял вопрос.</small>"
        },
        {
         "inf": "bekommen",
         "perf": "hat bekommen",
         "ru": "получать",
         "ex": "<span lang=\"de\">Hast du meine E-Mail bekommen?</span><small>Ты получил моё письмо?</small>"
        },
        {
         "inf": "bezahlen",
         "perf": "hat bezahlt",
         "ru": "платить",
         "ex": "<span lang=\"de\">Ich habe mit Karte bezahlt.</span><small>Я заплатил картой.</small>"
        },
        {
         "inf": "erzählen",
         "perf": "hat erzählt",
         "ru": "рассказывать",
         "ex": "<span lang=\"de\">Sie hat uns alles erzählt.</span><small>Она нам всё рассказала.</small>"
        },
        {
         "inf": "studieren",
         "perf": "hat studiert",
         "ru": "учиться в вузе",
         "ex": "<span lang=\"de\">Sie hat in Leipzig Medizin studiert.</span><small>Она изучала медицину в Лейпциге.</small>"
        },
        {
         "inf": "telefonieren",
         "perf": "hat telefoniert",
         "ru": "говорить по телефону",
         "ex": "<span lang=\"de\">Ich habe mit dem Vermieter telefoniert.</span><small>Я поговорил по телефону с арендодателем.</small>"
        }
       ]
      }
     ]
    },
    {
     "type": "quiz",
     "id": "check",
     "mode": "list",
     "title": "Проверь себя",
     "optLang": "de",
     "lead": "8 вопросов: haben или sein, Partizip II и выбор времени.",
     "questions": [
      {
       "q": "«Я поехал в Мюнхен» —",
       "options": [
        "Ich habe nach München gefahren.",
        "Ich bin nach München gefahren.",
        "Ich bin nach München gefahrt."
       ],
       "answer": 1,
       "explain": "Движение с места на место — с *sein*: ich *bin* gefahren."
      },
      {
       "q": "Partizip II от einkaufen —",
       "options": [
        "geeinkauft",
        "eingekauft",
        "einkauft"
       ],
       "answer": 1,
       "explain": "Отделяемая приставка: ge встаёт после неё — ein*ge*kauft."
      },
      {
       "q": "Partizip II от verstehen —",
       "options": [
        "verstanden",
        "geverstanden",
        "verstehen"
       ],
       "answer": 0,
       "explain": "Приставка ver- неотделяемая: без ge- — *verstanden*."
      },
      {
       "q": "«Что случилось?» —",
       "options": [
        "Was hat passiert?",
        "Was ist passiert?",
        "Was ist gepassiert?"
       ],
       "answer": 1,
       "explain": "passieren — с *sein* и без ge-: Was *ist passiert*?"
      },
      {
       "q": "«Я остался дома» —",
       "options": [
        "Ich bin zu Hause geblieben.",
        "Ich habe zu Hause geblieben.",
        "Ich bin zu Hause gebleibt."
       ],
       "answer": 0,
       "explain": "bleiben — исключение с *sein*: ich *bin* geblieben."
      },
      {
       "q": "Где порядок слов верный?",
       "options": [
        "Ich habe gekauft ein Ticket.",
        "Ich habe ein Ticket gekauft.",
        "Ich gekauft habe ein Ticket."
       ],
       "answer": 1,
       "explain": "Вспомогательный глагол на втором месте, *Partizip II в конце*."
      },
      {
       "q": "«Когда мы пришли, фильм уже начался» —",
       "options": [
        "Als wir kamen, hat der Film schon begonnen.",
        "Als wir kamen, hatte der Film schon begonnen.",
        "Als wir kamen, wird der Film begonnen haben."
       ],
       "answer": 1,
       "explain": "Раньше другого прошлого — *Plusquamperfekt*: hatte … begonnen."
      },
      {
       "q": "Какое время чаще всего в устном рассказе о выходных?",
       "options": [
        "Präteritum",
        "Perfekt",
        "Futur II"
       ],
       "answer": 1,
       "explain": "В разговоре о прошлом немцы обычно говорят в *Perfekt*. Präteritum — в текстах и с sein, haben, модальными."
      }
     ],
     "bands": [
      {
       "min": 0,
       "title": "Повтори правила",
       "text": "Вернись к таблице haben или sein и к правилам Partizip II."
      },
      {
       "min": 7,
       "title": "Отлично",
       "text": "Теперь расскажи вслух, что ты делал вчера: пять фраз в Perfekt."
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
