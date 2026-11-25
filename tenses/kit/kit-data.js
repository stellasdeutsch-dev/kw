window.KIT = {
 "lang": "en-GB",
 "mount": [
  {
   "after": "#about",
   "blocks": [
    {
     "type": "table",
     "id": "table",
     "title": "Таблица 12 времён",
     "lead": "Изменяемая часть выделена цветом. Уровень — когда время обычно проходят.",
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
       "label": "Утверждение",
       "html": true
      },
      {
       "key": "neg",
       "label": "Отрицание",
       "html": true
      },
      {
       "key": "q",
       "label": "Вопрос",
       "html": true
      }
     ],
     "groups": [
      {
       "title": "Present",
       "sub": "настоящее",
       "rows": [
        {
         "name": "<b lang=\"en\">Present Simple</b><small>A1</small>",
         "when": "Привычки, расписание, факты",
         "formula": "V · he / she / it + <b class=\"k-mark\">-s</b> · <b class=\"k-mark\">don't / doesn't</b> + V",
         "aff": "<span lang=\"en\">He <b class=\"k-mark\">drinks</b> coffee every morning.</span><small>Он пьёт кофе каждое утро.</small>",
         "neg": "<span lang=\"en\">I <b class=\"k-mark\">don't drive</b>.</span><small>Я не вожу машину.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Does</b> the bus <b class=\"k-mark\">stop</b> here?</span><small>Автобус здесь останавливается?</small>"
        },
        {
         "name": "<b lang=\"en\">Present Continuous</b><small>A1</small>",
         "when": "Прямо сейчас или временно",
         "formula": "<b class=\"k-mark\">am / is / are</b> + V-<b class=\"k-mark\">ing</b>",
         "aff": "<span lang=\"en\">I<b class=\"k-mark\">'m reading</b> a great book.</span><small>Я сейчас читаю классную книгу.</small>",
         "neg": "<span lang=\"en\">They <b class=\"k-mark\">aren't listening</b>.</span><small>Они не слушают.</small>",
         "q": "<span lang=\"en\">Where <b class=\"k-mark\">are</b> you <b class=\"k-mark\">going</b>?</span><small>Куда ты идёшь?</small>"
        },
        {
         "name": "<b lang=\"en\">Present Perfect</b><small>A2</small>",
         "when": "Опыт или результат сейчас, время не названо",
         "formula": "<b class=\"k-mark\">have / has</b> + V3 · <b class=\"k-mark\">haven't / hasn't</b> + V3",
         "aff": "<span lang=\"en\">I<b class=\"k-mark\">'ve been</b> to Rome twice.</span><small>Я был в Риме два раза.</small>",
         "neg": "<span lang=\"en\">She <b class=\"k-mark\">hasn't called</b> yet.</span><small>Она ещё не позвонила.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Have</b> you ever <b class=\"k-mark\">tried</b> sushi?</span><small>Ты когда-нибудь пробовал суши?</small>"
        },
        {
         "name": "<b lang=\"en\">Present Perfect Continuous</b><small>B1</small>",
         "when": "Длится до сих пор, важна длительность",
         "formula": "<b class=\"k-mark\">have / has been</b> + V-<b class=\"k-mark\">ing</b>",
         "aff": "<span lang=\"en\">I<b class=\"k-mark\">'ve been waiting</b> for an hour.</span><small>Я жду уже час.</small>",
         "neg": "<span lang=\"en\">She <b class=\"k-mark\">hasn't been sleeping</b> well.</span><small>Она плохо спит в последнее время.</small>",
         "q": "<span lang=\"en\">How long <b class=\"k-mark\">have</b> you <b class=\"k-mark\">been learning</b> English?</span><small>Сколько ты уже учишь английский?</small>"
        }
       ]
      },
      {
       "title": "Past",
       "sub": "прошедшее",
       "rows": [
        {
         "name": "<b lang=\"en\">Past Simple</b><small>A1</small>",
         "when": "Закончилось в прошлом, время названо",
         "formula": "<b class=\"k-mark\">V-ed</b> или 2-я форма · <b class=\"k-mark\">didn't</b> + V · <b class=\"k-mark\">Did</b> … V?",
         "aff": "<span lang=\"en\">I <b class=\"k-mark\">visited</b> Rome last summer.</span><small>Прошлым летом я был в Риме.</small>",
         "neg": "<span lang=\"en\">We <b class=\"k-mark\">didn't watch</b> the match.</span><small>Мы не смотрели матч.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Did</b> you <b class=\"k-mark\">sleep</b> well?</span><small>Ты хорошо спал?</small>"
        },
        {
         "name": "<b lang=\"en\">Past Continuous</b><small>A2</small>",
         "when": "Процесс в момент прошлого, его прервали",
         "formula": "<b class=\"k-mark\">was / were</b> + V-<b class=\"k-mark\">ing</b>",
         "aff": "<span lang=\"en\">I <b class=\"k-mark\">was having</b> dinner when you called.</span><small>Я ужинал, когда ты позвонил.</small>",
         "neg": "<span lang=\"en\">We <b class=\"k-mark\">weren't sleeping</b>.</span><small>Мы не спали.</small>",
         "q": "<span lang=\"en\">What <b class=\"k-mark\">were</b> you <b class=\"k-mark\">doing</b> at 8?</span><small>Что ты делал в 8 часов?</small>"
        },
        {
         "name": "<b lang=\"en\">Past Perfect</b><small>B1</small>",
         "when": "Случилось раньше другого события в прошлом",
         "formula": "<b class=\"k-mark\">had</b> + V3 · <b class=\"k-mark\">hadn't</b> + V3",
         "aff": "<span lang=\"en\">The film <b class=\"k-mark\">had started</b> before we arrived.</span><small>Фильм начался до того, как мы пришли.</small>",
         "neg": "<span lang=\"en\">I <b class=\"k-mark\">hadn't seen</b> snow before.</span><small>До этого я не видел снега.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Had</b> you <b class=\"k-mark\">met</b> before?</span><small>Вы были знакомы раньше?</small>"
        },
        {
         "name": "<b lang=\"en\">Past Perfect Continuous</b><small>B2</small>",
         "when": "Длилось до момента в прошлом",
         "formula": "<b class=\"k-mark\">had been</b> + V-<b class=\"k-mark\">ing</b>",
         "aff": "<span lang=\"en\">We <b class=\"k-mark\">had been walking</b> for hours when it started to rain.</span><small>Мы шли уже несколько часов, когда пошёл дождь.</small>",
         "neg": "<span lang=\"en\">He <b class=\"k-mark\">hadn't been working</b> there long.</span><small>Он проработал там недолго.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Had</b> you <b class=\"k-mark\">been waiting</b> long?</span><small>Ты долго ждал?</small>"
        }
       ]
      },
      {
       "title": "Future",
       "sub": "будущее",
       "rows": [
        {
         "name": "<b lang=\"en\">Future Simple</b><small>A2</small>",
         "when": "Решение в момент речи, обещание, прогноз",
         "formula": "<b class=\"k-mark\">will</b> + V · <b class=\"k-mark\">won't</b> + V",
         "aff": "<span lang=\"en\">I<b class=\"k-mark\">'ll call</b> you back.</span><small>Я тебе перезвоню.</small>",
         "neg": "<span lang=\"en\">It <b class=\"k-mark\">won't take</b> long.</span><small>Это не займёт много времени.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Will</b> you <b class=\"k-mark\">help</b> me?</span><small>Поможешь мне?</small>"
        },
        {
         "name": "<b lang=\"en\">Future Continuous</b><small>B1</small>",
         "when": "Будет в процессе в момент будущего",
         "formula": "<b class=\"k-mark\">will be</b> + V-<b class=\"k-mark\">ing</b>",
         "aff": "<span lang=\"en\">This time tomorrow I<b class=\"k-mark\">'ll be flying</b> to Rome.</span><small>Завтра в это время я буду лететь в Рим.</small>",
         "neg": "<span lang=\"en\">I <b class=\"k-mark\">won't be working</b> on Friday.</span><small>В пятницу я не буду работать.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Will</b> you <b class=\"k-mark\">be using</b> the car tonight?</span><small>Ты будешь пользоваться машиной вечером?</small>"
        },
        {
         "name": "<b lang=\"en\">Future Perfect</b><small>B2</small>",
         "when": "Будет сделано к моменту в будущем",
         "formula": "<b class=\"k-mark\">will have</b> + V3",
         "aff": "<span lang=\"en\">I<b class=\"k-mark\">'ll have finished</b> by six.</span><small>К шести я закончу.</small>",
         "neg": "<span lang=\"en\">They <b class=\"k-mark\">won't have arrived</b> by then.</span><small>К тому времени они ещё не приедут.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Will</b> you <b class=\"k-mark\">have read</b> it by Monday?</span><small>Ты прочитаешь это к понедельнику?</small>"
        },
        {
         "name": "<b lang=\"en\">Future Perfect Continuous</b><small>C1</small>",
         "when": "Сколько будет длиться к моменту в будущем",
         "formula": "<b class=\"k-mark\">will have been</b> + V-<b class=\"k-mark\">ing</b>",
         "aff": "<span lang=\"en\">In May I<b class=\"k-mark\">'ll have been living</b> here for ten years.</span><small>В мае будет десять лет, как я здесь живу.</small>",
         "neg": "<span lang=\"en\">She <b class=\"k-mark\">won't have been working</b> long by then.</span><small>К тому времени она будет работать совсем недолго.</small>",
         "q": "<span lang=\"en\">How long <b class=\"k-mark\">will</b> you <b class=\"k-mark\">have been studying</b> by June?</span><small>Сколько ты уже будешь учиться к июню?</small>"
        }
       ]
      },
      {
       "title": "Бонус: be going to",
       "sub": "не отдельное время, но без него никуда",
       "rows": [
        {
         "name": "<b lang=\"en\">Be going to</b><small>A2</small>",
         "when": "План, решённый заранее",
         "formula": "<b class=\"k-mark\">am / is / are going to</b> + V",
         "aff": "<span lang=\"en\">I<b class=\"k-mark\">'m going to learn</b> to drive.</span><small>Я собираюсь научиться водить.</small>",
         "neg": "<span lang=\"en\">We <b class=\"k-mark\">aren't going to stay</b> long.</span><small>Мы не собираемся задерживаться.</small>",
         "q": "<span lang=\"en\"><b class=\"k-mark\">Are</b> you <b class=\"k-mark\">going to buy</b> it?</span><small>Ты собираешься это купить?</small>"
        }
       ]
      }
     ],
     "numbered": true,
     "compact": true,
     "note": "V — глагол, V3 — третья форма (done, seen, worked), V-ing — глагол с -ing."
    },
    {
     "type": "forms",
     "id": "work",
     "title": "Один глагол во всех временах",
     "lang": "en-GB",
     "speak": true,
     "lead": "Глагол work — «работать». Выбери время и прочитай вслух все три формы.",
     "verbs": [
      {
       "inf": "Present Simple",
       "ru": "обычно",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "He *works* from home.",
           "Он работает из дома."
          ],
          [
           "Нет",
           "He *doesn't work* on Sundays.",
           "По воскресеньям он не работает."
          ],
          [
           "Вопрос",
           "*Does* he *work* here?",
           "Он здесь работает?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Present Continuous",
       "ru": "сейчас",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'m working* now.",
           "Я сейчас работаю."
          ],
          [
           "Нет",
           "I*'m not working* today.",
           "Сегодня я не работаю."
          ],
          [
           "Вопрос",
           "*Are* you *working*?",
           "Ты сейчас работаешь?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Present Perfect",
       "ru": "результат",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'ve worked* here for two years.",
           "Я работаю здесь два года."
          ],
          [
           "Нет",
           "I *haven't worked* abroad.",
           "Я не работал за границей."
          ],
          [
           "Вопрос",
           "*Have* you ever *worked* nights?",
           "Ты когда-нибудь работал по ночам?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Present Perfect Continuous",
       "ru": "длится",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'ve been working* all day.",
           "Я работаю весь день."
          ],
          [
           "Нет",
           "I *haven't been working* much lately.",
           "В последнее время я мало работаю."
          ],
          [
           "Вопрос",
           "How long *have* you *been working* here?",
           "Сколько ты уже здесь работаешь?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Past Simple",
       "ru": "вчера",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I *worked* late yesterday.",
           "Вчера я работал допоздна."
          ],
          [
           "Нет",
           "I *didn't work* last week.",
           "На прошлой неделе я не работал."
          ],
          [
           "Вопрос",
           "*Did* you *work* on Saturday?",
           "Ты работал в субботу?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Past Continuous",
       "ru": "процесс",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I *was working* when you called.",
           "Я работал, когда ты позвонил."
          ],
          [
           "Нет",
           "I *wasn't working* at that time.",
           "В то время я не работал."
          ],
          [
           "Вопрос",
           "*Were* you *working* at 9?",
           "Ты работал в 9?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Past Perfect",
       "ru": "раньше",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I *had worked* there before I moved.",
           "До переезда я работал там."
          ],
          [
           "Нет",
           "I *hadn't worked* in a café before.",
           "До этого я не работал в кафе."
          ],
          [
           "Вопрос",
           "*Had* you *worked* together before?",
           "Вы раньше работали вместе?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Past Perfect Continuous",
       "ru": "длилось до",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I *had been working* for hours.",
           "Я работал уже несколько часов."
          ],
          [
           "Нет",
           "I *hadn't been working* long.",
           "Я работал недолго."
          ],
          [
           "Вопрос",
           "*Had* you *been working* all night?",
           "Ты работал всю ночь?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Future Simple",
       "ru": "будущее",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'ll work* tomorrow.",
           "Я поработаю завтра."
          ],
          [
           "Нет",
           "I *won't work* this weekend.",
           "В эти выходные я не буду работать."
          ],
          [
           "Вопрос",
           "*Will* you *work* on Monday?",
           "Ты будешь работать в понедельник?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Future Continuous",
       "ru": "в процессе",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'ll be working* at 10.",
           "В 10 я буду работать."
          ],
          [
           "Нет",
           "I *won't be working* then.",
           "Тогда я не буду работать."
          ],
          [
           "Вопрос",
           "*Will* you *be working* late?",
           "Ты будешь работать допоздна?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Future Perfect",
       "ru": "к моменту",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'ll have worked* here a year in May.",
           "В мае будет год, как я здесь работаю."
          ],
          [
           "Нет",
           "I *won't have finished* by then.",
           "К тому времени я не закончу."
          ],
          [
           "Вопрос",
           "*Will* you *have finished* by six?",
           "Ты закончишь к шести?"
          ]
         ]
        }
       ]
      },
      {
       "inf": "Future Perfect Continuous",
       "ru": "сколько к моменту",
       "tenses": [
        {
         "name": "work",
         "ru": "работать",
         "rows": [
          [
           "Да",
           "I*'ll have been working* here for ten years.",
           "Будет десять лет, как я здесь работаю."
          ],
          [
           "Нет",
           "I *won't have been working* long.",
           "Я буду работать недолго."
          ],
          [
           "Вопрос",
           "How long *will* you *have been working*?",
           "Сколько ты уже будешь работать?"
          ]
         ]
        }
       ]
      }
     ]
    }
   ]
  }
 ],
 "waitFor": "#about"
};
