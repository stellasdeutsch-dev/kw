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
     "type": "media",
     "id": "scenes",
     "title": "Каждое время в одной сцене",
     "lead": "Фото ситуации, шкала времени, слова-маркеры и два новых примера к каждому времени. Фильтр по уровню оставит то, что проходят на твоём уровне.",
     "groups": [
      {
       "title": "Present: настоящее",
       "shape": "wide",
       "items": [
        {
         "title": "Present Simple",
         "lang": "en",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "sub": "Регулярно, привычки, факты, расписание",
         "text": "<b>Шкала:</b> было — есть — будет: всегда так<br><b>Маркеры:</b> <span lang=\"en\">always, usually, often, every day, never</span><br><span lang=\"en\">I <b class=\"k-mark\">drink</b> coffee every morning.</span> — Я пью кофе каждое утро.<br><span lang=\"en\">The shop <b class=\"k-mark\">opens</b> at nine.</span> — Магазин открывается в девять.",
         "tip": "He, she, it — с окончанием -s: she drinks, it opens.",
         "img": "kit/img/en02-ps.webp",
         "alt": "Present Simple: Регулярно, привычки, факты, расписание",
         "credit": "Фото: madame.furie, CC BY-SA"
        },
        {
         "title": "Present Continuous",
         "lang": "en",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "sub": "Прямо сейчас или временно",
         "text": "<b>Шкала:</b> процесс идёт в момент речи<br><b>Маркеры:</b> <span lang=\"en\">now, right now, at the moment, this week</span><br><span lang=\"en\">He<b class=\"k-mark\">'s cooking</b> dinner right now.</span> — Он сейчас готовит ужин.<br><span lang=\"en\">I<b class=\"k-mark\">'m staying</b> with friends this week.</span> — На этой неделе я живу у друзей.",
         "tip": "Глаголы know, like, want обычно без -ing: I know, а не I am knowing.",
         "img": "kit/img/en02-pc.webp",
         "alt": "Present Continuous: Прямо сейчас или временно",
         "credit": "Фото: Epicantus, CC BY"
        },
        {
         "title": "Present Perfect",
         "lang": "en",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "sub": "Опыт или результат, время не названо",
         "text": "<b>Шкала:</b> было когда-то → важно сейчас<br><b>Маркеры:</b> <span lang=\"en\">ever, never, already, just, yet</span><br><span lang=\"en\">I<b class=\"k-mark\">'ve</b> never <b class=\"k-mark\">been</b> to Japan.</span> — Я никогда не был в Японии.<br><span lang=\"en\">She<b class=\"k-mark\">'s</b> just <b class=\"k-mark\">left</b>.</span> — Она только что ушла.",
         "tip": "Есть yesterday или last year — значит, Past Simple.",
         "img": "kit/img/en02-pp.webp",
         "alt": "Present Perfect: Опыт или результат, время не названо",
         "credit": "Фото: hjl, CC BY"
        },
        {
         "title": "Present Perfect Continuous",
         "lang": "en",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "sub": "Длится до сих пор, важно сколько",
         "text": "<b>Шкала:</b> началось раньше → идёт сейчас<br><b>Маркеры:</b> <span lang=\"en\">for, since, how long, all day</span><br><span lang=\"en\">It<b class=\"k-mark\">'s been raining</b> since morning.</span> — Дождь идёт с утра.<br><span lang=\"en\">We<b class=\"k-mark\">'ve been waiting</b> for twenty minutes.</span> — Мы ждём уже двадцать минут.",
         "tip": "По-русски здесь настоящее время: «жду уже час» = I’ve been waiting for an hour.",
         "img": "kit/img/en02-ppc.webp",
         "alt": "Present Perfect Continuous: Длится до сих пор, важно сколько",
         "credit": "Фото: fredcamino, CC BY-SA"
        }
       ]
      },
      {
       "title": "Past: прошедшее",
       "shape": "wide",
       "items": [
        {
         "title": "Past Simple",
         "lang": "en",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "sub": "Закончилось, время названо или понятно",
         "text": "<b>Шкала:</b> точка в прошлом<br><b>Маркеры:</b> <span lang=\"en\">yesterday, last summer, in 2020, two years ago</span><br><span lang=\"en\">We <b class=\"k-mark\">went</b> to the sea last summer.</span> — Прошлым летом мы ездили на море.<br><span lang=\"en\">I <b class=\"k-mark\">met</b> him two years ago.</span> — Я познакомился с ним два года назад.",
         "tip": "В вопросе и отрицании помогает did, а глагол в начальной форме: Did you go?",
         "img": "kit/img/en02-pas.webp",
         "alt": "Past Simple: Закончилось, время названо или понятно",
         "credit": "Фото: laszlo-photo, CC BY"
        },
        {
         "title": "Past Continuous",
         "lang": "en",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "sub": "Шло в момент в прошлом",
         "text": "<b>Шкала:</b> процесс в прошлом, его прервали<br><b>Маркеры:</b> <span lang=\"en\">when, while, at ten last night</span><br><span lang=\"en\">I <b class=\"k-mark\">was walking</b> home when it started to rain.</span> — Я шёл домой, когда пошёл дождь.<br><span lang=\"en\">What <b class=\"k-mark\">were</b> you <b class=\"k-mark\">doing</b> at ten last night?</span> — Что ты делал вчера в десять вечера?",
         "tip": "Длинное действие — Past Continuous, короткое, которое его прервало, — Past Simple.",
         "img": "kit/img/en02-pac.webp",
         "alt": "Past Continuous: Шло в момент в прошлом",
         "credit": "Фото: eflon, CC BY"
        },
        {
         "title": "Past Perfect",
         "lang": "en",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "sub": "Случилось раньше другого прошлого",
         "text": "<b>Шкала:</b> раньше → потом, оба в прошлом<br><b>Маркеры:</b> <span lang=\"en\">before, by the time, already</span><br><span lang=\"en\">When we arrived, the train <b class=\"k-mark\">had</b> already <b class=\"k-mark\">left</b>.</span> — Когда мы пришли, поезд уже ушёл.<br><span lang=\"en\">I <b class=\"k-mark\">had</b> never <b class=\"k-mark\">seen</b> snow before that trip.</span> — До той поездки я никогда не видел снега.",
         "tip": "Если порядок понятен из before или after, можно и Past Simple.",
         "img": "kit/img/en02-pap.webp",
         "alt": "Past Perfect: Случилось раньше другого прошлого",
         "credit": "Фото: Rex Roof, CC BY"
        },
        {
         "title": "Past Perfect Continuous",
         "lang": "en",
         "level": "B2",
         "levels": [
          "B2"
         ],
         "sub": "Длилось до момента в прошлом",
         "text": "<b>Шкала:</b> долгий процесс → момент в прошлом<br><b>Маркеры:</b> <span lang=\"en\">for, since, before, how long</span><br><span lang=\"en\">He was tired because he <b class=\"k-mark\">had been running</b>.</span> — Он устал, потому что бегал.<br><span lang=\"en\">They <b class=\"k-mark\">had been waiting</b> for an hour when the bus came.</span> — Они ждали уже час, когда пришёл автобус.",
         "tip": "Объясняет причину: почему кто-то устал, промок или злился.",
         "img": "kit/img/en02-papc.webp",
         "alt": "Past Perfect Continuous: Длилось до момента в прошлом",
         "credit": "Фото: Peter Mooney, CC BY"
        }
       ]
      },
      {
       "title": "Future: будущее и be going to",
       "shape": "wide",
       "items": [
        {
         "title": "Future Simple",
         "lang": "en",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "sub": "Решение сейчас, обещание, прогноз",
         "text": "<b>Шкала:</b> решил в момент речи<br><b>Маркеры:</b> <span lang=\"en\">tomorrow, next week, I think, probably</span><br><span lang=\"en\">I<b class=\"k-mark\">'ll call</b> you tomorrow.</span> — Я позвоню тебе завтра.<br><span lang=\"en\">I think it <b class=\"k-mark\">will be</b> sunny.</span> — Думаю, будет солнечно.",
         "tip": "Отрицание — won’t: I won’t tell anyone. «Никому не скажу».",
         "img": "kit/img/en02-fs.webp",
         "alt": "Future Simple: Решение сейчас, обещание, прогноз",
         "credit": "Фото: Kelvin_Kevin Gan, CC BY"
        },
        {
         "title": "Future Continuous",
         "lang": "en",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "sub": "Будет в процессе в момент будущего",
         "text": "<b>Шкала:</b> процесс в точке будущего<br><b>Маркеры:</b> <span lang=\"en\">this time tomorrow, at eight tonight</span><br><span lang=\"en\">Don't call at eight, I<b class=\"k-mark\">'ll be driving</b>.</span> — Не звони в восемь, я буду за рулём.<br><span lang=\"en\">This time next week we<b class=\"k-mark\">'ll be lying</b> on the beach.</span> — Через неделю в это время мы будем лежать на пляже.",
         "tip": "Удобно вежливо спросить о планах: Will you be using the car tonight?",
         "img": "kit/img/en02-fc.webp",
         "alt": "Future Continuous: Будет в процессе в момент будущего",
         "credit": "Фото: bnilsen, CC BY-SA"
        },
        {
         "title": "Future Perfect",
         "lang": "en",
         "level": "B2",
         "levels": [
          "B2"
         ],
         "sub": "Будет сделано к моменту в будущем",
         "text": "<b>Шкала:</b> готово к точке будущего<br><b>Маркеры:</b> <span lang=\"en\">by June, by then, by the time</span><br><span lang=\"en\">By June I<b class=\"k-mark\">'ll have finished</b> university.</span> — К июню я окончу университет.<br><span lang=\"en\">The film <b class=\"k-mark\">will have started</b> by the time we get there.</span> — Фильм уже начнётся, когда мы доберёмся.",
         "tip": "Главное слово — by: by six, by Monday, by the end of the year.",
         "img": "kit/img/en02-fp.webp",
         "alt": "Future Perfect: Будет сделано к моменту в будущем",
         "credit": "Фото: spakattacks, CC BY"
        },
        {
         "title": "Future Perfect Continuous",
         "lang": "en",
         "level": "C1",
         "levels": [
          "C1"
         ],
         "sub": "Сколько будет длиться к моменту в будущем",
         "text": "<b>Шкала:</b> длится → точка будущего<br><b>Маркеры:</b> <span lang=\"en\">for … by, by next year</span><br><span lang=\"en\">In May I<b class=\"k-mark\">'ll have been living</b> here for ten years.</span> — В мае будет десять лет, как я здесь живу.<br><span lang=\"en\">Next month she<b class=\"k-mark\">'ll have been working</b> here for five years.</span> — В следующем месяце будет пять лет, как она здесь работает.",
         "tip": "Редкое время: его достаточно узнавать в тексте.",
         "img": "kit/img/en02-fpc.webp",
         "alt": "Future Perfect Continuous: Сколько будет длиться к моменту в будущем",
         "credit": "Фото: rawpixel, CC0"
        },
        {
         "title": "Be going to",
         "lang": "en",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "sub": "План, решённый заранее, или явный признак",
         "text": "<b>Шкала:</b> уже решил или уже видно<br><b>Маркеры:</b> <span lang=\"en\">tonight, next week, look!</span><br><span lang=\"en\">Look at those clouds! It<b class=\"k-mark\">'s going to rain</b>.</span> — Посмотри на тучи! Сейчас пойдёт дождь.<br><span lang=\"en\">We<b class=\"k-mark\">'re going to buy</b> a car.</span> — Мы собираемся купить машину.",
         "tip": "Решил заранее — going to. Решил прямо сейчас — will: I’ll get it!",
         "img": "kit/img/en02-go.webp",
         "alt": "Be going to: План, решённый заранее, или явный признак",
         "credit": "Фото: izoo3y, CC BY-SA"
        }
       ]
      }
     ],
     "note": "Фото с Openverse по свободным лицензиям Creative Commons, автор указан на карточке."
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
    },
    {
     "type": "platform",
     "id": "notion",
     "title": "Как выглядит *Dias English* внутри",
     "lead": "Этот гайд — одна тема из курса. Вот настоящие экраны курса в Notion: так устроены все темы от A0 до C1.",
     "url": "Dias English · Notion",
     "facts": [
      [
       "A0–C1",
       "все уровни в одном курсе"
      ],
      [
       "7.5",
       "IELTS у автора курса"
      ],
      [
       "30 €",
       "один раз, доступ навсегда"
      ],
      [
       "Gemini",
       "разговорная практика в каждой теме"
      ]
     ],
     "shots": [
      {
       "img": "kit/img/en-pl-home-b2.webp",
       "h": 1000,
       "title": "Главная уровня",
       "text": "Навигация, подборка ресурсов (фильмы, ютуб, подкасты, книги) и таймер занятия. Такая главная у каждого уровня.",
       "alt": "Экран курса в Notion: главная уровня"
      },
      {
       "img": "kit/img/en-pl-roadmap.webp",
       "h": 1000,
       "title": "Дорожная карта по неделям",
       "text": "Что делать каждый день: этапы и недели от A0 до A1. Не нужно решать, что учить сегодня.",
       "alt": "Экран курса в Notion: дорожная карта по неделям"
      },
      {
       "img": "kit/img/en-pl-tobe.webp",
       "h": 1000,
       "title": "Урок грамматики",
       "text": "Одна тема на странице: правило, таблица, примеры и практика с Gemini.",
       "alt": "Экран курса в Notion: урок грамматики"
      },
      {
       "img": "kit/img/en-pl-comic.webp",
       "h": 1000,
       "title": "Объяснения с картинками",
       "text": "Правило показано комиксом и примерами, дальше упражнения.",
       "alt": "Экран курса в Notion: объяснения с картинками"
      },
      {
       "img": "kit/img/en-pl-lexika.webp",
       "h": 1000,
       "title": "Лексика по темам с фото",
       "text": "Рабочий день, семья, еда, путешествия: слова собраны по ситуациям.",
       "alt": "Экран курса в Notion: лексика по темам с фото"
      },
      {
       "img": "kit/img/en-pl-gemini.webp",
       "h": 1000,
       "title": "Разговорная практика с Gemini",
       "text": "Готовые ситуации: кафе, документы, город. Говоришь с ИИ как с собеседником.",
       "alt": "Экран курса в Notion: разговорная практика с Gemini"
      },
      {
       "img": "kit/img/en-pl-habits.webp",
       "h": 1000,
       "title": "Трекер привычек",
       "text": "Отмечаешь чтение, аудирование, письмо и говорение по дням и видишь свой календарь.",
       "alt": "Экран курса в Notion: трекер привычек"
      },
      {
       "img": "kit/img/en-pl-home-a2.webp",
       "h": 1000,
       "title": "Свой раздел на каждый уровень",
       "text": "A0, A1, A2, B1, B2, C1: у каждого уровня свои грамматика, лексика и подборка.",
       "alt": "Экран курса в Notion: свой раздел на каждый уровень"
      }
     ],
     "author": {
      "name": "Диас",
      "text": "IELTS 7.5. Учится в Sapienza в Риме на программе Global Humanities, все занятия полностью на английском. Курс собран как карта, которой ему самому не хватало.",
      "img": "kit/img/en-pl-author.webp"
     },
     "cta": {
      "href": "https://app.lava.top/products/2c950aa0-d8be-4317-8f39-0f9b4016f5da",
      "text": "Купить Dias English за 30 €",
      "note": "Один раз, доступ навсегда",
      "wa": "https://wa.me/message/IX7YNJVXVIL4I1",
      "waText": "Написать Диасу в WhatsApp"
     }
    }
   ]
  }
 ],
 "waitFor": "#about"
};
