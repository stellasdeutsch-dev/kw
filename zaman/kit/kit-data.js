window.KIT = {
 "lang": "tr-TR",
 "mount": [
  {
   "after": "#about",
   "blocks": [
    {
     "type": "table",
     "id": "table",
     "title": "Таблица 8 времён",
     "lead": "Пары из ролика: сейчас или всегда, видел сам или узнал, план или «надо», если или «вот бы».",
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
     "rows": [
      {
       "name": "<b lang=\"tr\">Şimdiki zaman</b><small>-(ı)yor · A1</small>",
       "when": "Действие прямо сейчас и ближайший план",
       "formula": "основа + <b class=\"k-mark\">-ıyor / -iyor / -uyor / -üyor</b> + лицо",
       "aff": "<span lang=\"tr\">Şu an çay iç<b class=\"k-mark\">iyorum</b>.</span><small>Сейчас я пью чай.</small>",
       "neg": "<span lang=\"tr\">Bugün çalış<b class=\"k-mark\">mıyorum</b>.</span><small>Сегодня я не работаю.</small>",
       "q": "<span lang=\"tr\">Ne yap<b class=\"k-mark\">ıyorsun</b>?</span><small>Что ты делаешь?</small>"
      },
      {
       "name": "<b lang=\"tr\">Geniş zaman</b><small>-r · A2</small>",
       "when": "Привычки, факты, обещания",
       "formula": "основа + <b class=\"k-mark\">-r / -ar / -er / -ır…</b> · нет: *-maz / -mez*",
       "aff": "<span lang=\"tr\">Her sabah kahve iç<b class=\"k-mark\">erim</b>.</span><small>Каждое утро я пью кофе.</small>",
       "neg": "<span lang=\"tr\">Et ye<b class=\"k-mark\">mem</b>.</span><small>Я не ем мясо.</small>",
       "q": "<span lang=\"tr\">Çay iç<b class=\"k-mark\">er misin</b>?</span><small>Будешь чай?</small>"
      },
      {
       "name": "<b lang=\"tr\">Geçmiş zaman</b><small>-dı · A1</small>",
       "when": "Прошлое, которое ты видел сам",
       "formula": "основа + <b class=\"k-mark\">-dı / -di / -du / -dü</b> (-tı…) + лицо",
       "aff": "<span lang=\"tr\">Dün Balat'a git<b class=\"k-mark\">tim</b>.</span><small>Вчера я ездил в Балат.</small>",
       "neg": "<span lang=\"tr\">Onu ara<b class=\"k-mark\">madım</b>.</span><small>Я ему не звонил.</small>",
       "q": "<span lang=\"tr\">Kahvaltı yap<b class=\"k-mark\">tın mı</b>?</span><small>Ты позавтракал?</small>"
      },
      {
       "name": "<b lang=\"tr\">Belirsiz geçmiş</b><small>-mış · A2</small>",
       "when": "Узнал от других или видишь результат",
       "formula": "основа + <b class=\"k-mark\">-mış / -miş / -muş / -müş</b> + лицо",
       "aff": "<span lang=\"tr\">Ali evlen<b class=\"k-mark\">miş</b>.</span><small>Говорят, Али женился.</small>",
       "neg": "<span lang=\"tr\">Ayşe gel<b class=\"k-mark\">memiş</b>.</span><small>Айше, оказывается, не пришла.</small>",
       "q": "<span lang=\"tr\">Otobüs gel<b class=\"k-mark\">miş mi</b>?</span><small>Автобус уже пришёл?</small>"
      },
      {
       "name": "<b lang=\"tr\">Gelecek zaman</b><small>-acak · A2</small>",
       "when": "Планы, обещания, прогнозы",
       "formula": "основа + <b class=\"k-mark\">-(y)acak / -(y)ecek</b> + лицо",
       "aff": "<span lang=\"tr\">Yarın seni ara<b class=\"k-mark\">yacağım</b>.</span><small>Завтра я тебе позвоню.</small>",
       "neg": "<span lang=\"tr\">Bu akşam çık<b class=\"k-mark\">mayacağım</b>.</span><small>Сегодня вечером я никуда не пойду.</small>",
       "q": "<span lang=\"tr\">Saat kaçta gel<b class=\"k-mark\">eceksin</b>?</span><small>Во сколько ты придёшь?</small>"
      },
      {
       "name": "<b lang=\"tr\">Gereklilik kipi</b><small>-malı · B1</small>",
       "when": "Надо, должен, совет",
       "formula": "основа + <b class=\"k-mark\">-malı / -meli</b> + лицо",
       "aff": "<span lang=\"tr\">Her gün ders çalış<b class=\"k-mark\">malıyım</b>.</span><small>Мне надо заниматься каждый день.</small>",
       "neg": "<span lang=\"tr\">Geç kal<b class=\"k-mark\">mamalısın</b>.</span><small>Тебе нельзя опаздывать.</small>",
       "q": "<span lang=\"tr\">Ne yap<b class=\"k-mark\">malıyım</b>?</span><small>Что мне делать?</small>"
      },
      {
       "name": "<b lang=\"tr\">Şart kipi</b><small>-rsa · B1</small>",
       "when": "Если: реальное условие",
       "formula": "основа + <b class=\"k-mark\">-ırsa / -arsa / -erse…</b> + лицо",
       "aff": "<span lang=\"tr\">Vaktim ol<b class=\"k-mark\">ursa</b> gelirim.</span><small>Если будет время, приду.</small>",
       "neg": "<span lang=\"tr\">Gel<b class=\"k-mark\">mezsen</b> ararım.</span><small>Если не придёшь, позвоню.</small>",
       "q": "<span lang=\"tr\">Yağmur yağ<b class=\"k-mark\">arsa</b> ne yaparız?</span><small>Если пойдёт дождь, что будем делать?</small>"
      },
      {
       "name": "<b lang=\"tr\">Dilek kipi</b><small>-sa · B1</small>",
       "when": "«Вот бы…»: мечта или сожаление",
       "formula": "(keşke) основа + <b class=\"k-mark\">-sa / -se</b> + лицо",
       "aff": "<span lang=\"tr\">Keşke Türkçe bil<b class=\"k-mark\">sem</b>!</span><small>Вот бы мне знать турецкий!</small>",
       "neg": "<span lang=\"tr\">Keşke bugün çalış<b class=\"k-mark\">masam</b>.</span><small>Вот бы сегодня не работать.</small>",
       "q": "<span lang=\"tr\">Ne yap<b class=\"k-mark\">sam</b>?</span><small>Что бы мне сделать?</small>"
      }
     ],
     "numbered": true,
     "compact": true,
     "note": "Вопрос — частица mi отдельным словом. Её гласная тоже подстраивается: mı, mi, mu, mü."
    },
    {
     "type": "media",
     "id": "life",
     "title": "Времена в жизни: ещё 24 примера",
     "lead": "Каждое время в своей ситуации: три новых примера и слова-подсказки, по которым время узнаётся в речи. Выбери уровень, чтобы оставить только свои времена.",
     "groups": [
      {
       "title": "Восемь времён",
       "shape": "wide",
       "items": [
        {
         "title": "Şimdiki zaman",
         "lang": "tr",
         "sub": "Сейчас и ближайший план · -(ı)yor",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "img": "kit/img/tr02-now.webp",
         "alt": "Стакан турецкого чая на столе",
         "credit": "Фото: alazaat, CC BY",
         "tip": "Подсказки: şu an, şimdi, bugün. С yarın — уже решённый план.",
         "text": "<b lang=\"tr\">Şu an otobüsteyim, eve gid*iyorum*.</b> — Сейчас я в автобусе, еду домой.<br><b lang=\"tr\">Ali telefonla konuş*uyor*.</b> — Али говорит по телефону.<br><b lang=\"tr\">Yarın Ankara'ya gid*iyoruz*.</b> — Завтра мы едем в Анкару."
        },
        {
         "title": "Geniş zaman",
         "lang": "tr",
         "sub": "Привычки, факты, просьбы · -r",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "img": "kit/img/tr02-habit.webp",
         "alt": "Рыбаки на Галатском мосту",
         "credit": "Фото: Albert Skibinski, CC BY",
         "tip": "Подсказки: her gün, her sabah, genellikle, bazen. Вежливая просьба: …ar mısın?",
         "text": "<b lang=\"tr\">Balıkçılar her sabah buraya gel*ir*.</b> — Рыбаки каждое утро приходят сюда.<br><b lang=\"tr\">Ben kahveyi şekersiz iç*erim*.</b> — Я пью кофе без сахара.<br><b lang=\"tr\">Pencereyi aç*ar mısın*?</b> — Откроешь окно?"
        },
        {
         "title": "Geçmiş zaman",
         "lang": "tr",
         "sub": "Прошлое, которое видел сам · -dı",
         "level": "A1",
         "levels": [
          "A1"
         ],
         "img": "kit/img/tr02-past.webp",
         "alt": "Цветные дома в районе Балат",
         "credit": "Фото: Antoloji, CC BY-SA",
         "tip": "Подсказки: dün, geçen hafta, geçen yıl, iki gün önce (два дня назад).",
         "text": "<b lang=\"tr\">Dün Balat'ta çok fotoğraf çek*tim*.</b> — Вчера в Балате я много фотографировал.<br><b lang=\"tr\">Geçen yıl İstanbul'a gel*dik*.</b> — В прошлом году мы приехали в Стамбул.<br><b lang=\"tr\">Film saat kaçta bit*ti*?</b> — Во сколько закончился фильм?"
        },
        {
         "title": "Belirsiz geçmiş",
         "lang": "tr",
         "sub": "Узнал или видишь результат · -mış",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "img": "kit/img/tr02-heard.webp",
         "alt": "Заснеженные деревья у дома в Стамбуле",
         "credit": "Фото: ustung, CC BY",
         "tip": "На -mış рассказывают новости с чужих слов и сказки: Bir varmış, bir yokmuş…",
         "text": "<b lang=\"tr\">Gece kar yağ*mış*!</b> — Оказывается, ночью выпал снег!<br><b lang=\"tr\">Telefonumu evde unut*muşum*.</b> — Оказывается, я забыл телефон дома.<br><b lang=\"tr\">Duydun mu? Mağaza kapan*mış*.</b> — Слышал? Магазин, говорят, закрылся."
        },
        {
         "title": "Gelecek zaman",
         "lang": "tr",
         "sub": "Планы, обещания, прогнозы · -acak",
         "level": "A2",
         "levels": [
          "A2"
         ],
         "img": "kit/img/tr02-future.webp",
         "alt": "Воздушный шар над Каппадокией на рассвете",
         "credit": "Фото: Rab ., CC BY",
         "tip": "Подсказки: yarın, haftaya, gelecek yıl, iki gün sonra (через два дня).",
         "text": "<b lang=\"tr\">Yarın Kapadokya'ya gid*eceğiz*.</b> — Завтра мы поедем в Каппадокию.<br><b lang=\"tr\">Sana yardım ed*eceğim*, söz!</b> — Я тебе помогу, обещаю!<br><b lang=\"tr\">Yarın hava soğuk ol*acak*.</b> — Завтра будет холодно."
        },
        {
         "title": "Gereklilik kipi",
         "lang": "tr",
         "sub": "Надо, должен, совет · -malı",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "img": "kit/img/tr02-must.webp",
         "alt": "Стол с тетрадью и пеналом",
         "credit": "Фото: n_sapiens, CC BY-SA",
         "tip": "В разговоре чаще говорят lazım: gitmem lazım — мне надо идти.",
         "text": "<b lang=\"tr\">Bu kitabı oku*malısın*.</b> — Тебе стоит прочитать эту книгу.<br><b lang=\"tr\">Saat yedide evde ol*malıyım*.</b> — В семь я должен быть дома.<br><b lang=\"tr\">Burada sigara iç*memelisiniz*.</b> — Здесь вам нельзя курить."
        },
        {
         "title": "Şart kipi",
         "lang": "tr",
         "sub": "Если: реальное условие · -rsa",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "img": "kit/img/tr02-if.webp",
         "alt": "Человек с зонтом под дождём",
         "credit": "Фото: @Tuncay, CC BY",
         "tip": "Вторая часть фразы обычно в geniş zaman или в будущем: gelirsen görürsün.",
         "text": "<b lang=\"tr\">Yağmur yağ*arsa* evde kalırız.</b> — Если пойдёт дождь, останемся дома.<br><b lang=\"tr\">Erken kalk*arsan* otobüsü yakalarsın.</b> — Если встанешь рано, успеешь на автобус.<br><b lang=\"tr\">İst*ersen* birlikte gidelim.</b> — Если хочешь, пойдём вместе."
        },
        {
         "title": "Dilek kipi",
         "lang": "tr",
         "sub": "«Вот бы…»: мечта или сожаление · -sa",
         "level": "B1",
         "levels": [
          "B1"
         ],
         "img": "kit/img/tr02-wish.webp",
         "alt": "Травертины Памуккале на закате",
         "credit": "Фото: eleephotography, CC BY",
         "tip": "Keşke усиливает мечту. Ne yapsam? — «что бы мне сделать?», совет самому себе.",
         "text": "<b lang=\"tr\">Keşke şimdi Pamukkale'de ol*sam*!</b> — Вот бы сейчас оказаться в Памуккале!<br><b lang=\"tr\">Keşke yarın tatil ol*sa*.</b> — Вот бы завтра был выходной.<br><b lang=\"tr\">Bu akşam ne pişir*sem*?</b> — Что бы мне приготовить сегодня вечером?"
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
     "lang": "tr-TR",
     "lead": "Выбери время. В каждой строке форма gelmek и yapmak для одного лица: слева e/i-слово, справа a/ı-слово.",
     "verbs": [
      {
       "inf": "Şimdiki zaman",
       "ru": "сейчас · -(ı)yor",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "geliyorum · yapıyorum",
           ""
          ],
          [
           "sen",
           "geliyorsun · yapıyorsun",
           ""
          ],
          [
           "o",
           "geliyor · yapıyor",
           ""
          ],
          [
           "biz",
           "geliyoruz · yapıyoruz",
           ""
          ],
          [
           "siz",
           "geliyorsunuz · yapıyorsunuz",
           ""
          ],
          [
           "onlar",
           "geliyorlar · yapıyorlar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmiyorum · yapmıyorum",
           ""
          ],
          [
           "sen",
           "gelmiyorsun · yapmıyorsun",
           ""
          ],
          [
           "o",
           "gelmiyor · yapmıyor",
           ""
          ],
          [
           "biz",
           "gelmiyoruz · yapmıyoruz",
           ""
          ],
          [
           "siz",
           "gelmiyorsunuz · yapmıyorsunuz",
           ""
          ],
          [
           "onlar",
           "gelmiyorlar · yapmıyorlar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "geliyor muyum? · yapıyor muyum?",
           ""
          ],
          [
           "sen",
           "geliyor musun? · yapıyor musun?",
           ""
          ],
          [
           "o",
           "geliyor mu? · yapıyor mu?",
           ""
          ],
          [
           "biz",
           "geliyor muyuz? · yapıyor muyuz?",
           ""
          ],
          [
           "siz",
           "geliyor musunuz? · yapıyor musunuz?",
           ""
          ],
          [
           "onlar",
           "geliyorlar mı? · yapıyorlar mı?",
           ""
          ]
         ]
        }
       ],
       "note": ""
      },
      {
       "inf": "Geniş zaman",
       "ru": "обычно · -r",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "gelirim · yaparım",
           ""
          ],
          [
           "sen",
           "gelirsin · yaparsın",
           ""
          ],
          [
           "o",
           "gelir · yapar",
           ""
          ],
          [
           "biz",
           "geliriz · yaparız",
           ""
          ],
          [
           "siz",
           "gelirsiniz · yaparsınız",
           ""
          ],
          [
           "onlar",
           "gelirler · yaparlar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmem · yapmam",
           ""
          ],
          [
           "sen",
           "gelmezsin · yapmazsın",
           ""
          ],
          [
           "o",
           "gelmez · yapmaz",
           ""
          ],
          [
           "biz",
           "gelmeyiz · yapmayız",
           ""
          ],
          [
           "siz",
           "gelmezsiniz · yapmazsınız",
           ""
          ],
          [
           "onlar",
           "gelmezler · yapmazlar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "gelir miyim? · yapar mıyım?",
           ""
          ],
          [
           "sen",
           "gelir misin? · yapar mısın?",
           ""
          ],
          [
           "o",
           "gelir mi? · yapar mı?",
           ""
          ],
          [
           "biz",
           "gelir miyiz? · yapar mıyız?",
           ""
          ],
          [
           "siz",
           "gelir misiniz? · yapar mısınız?",
           ""
          ],
          [
           "onlar",
           "gelirler mi? · yaparlar mı?",
           ""
          ]
         ]
        }
       ],
       "note": "gelmek — исключение: gel*ir*, а не geler. У yapmak обычное -ar: yap*ar*."
      },
      {
       "inf": "Geçmiş zaman",
       "ru": "видел сам · -dı",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "geldim · yaptım",
           ""
          ],
          [
           "sen",
           "geldin · yaptın",
           ""
          ],
          [
           "o",
           "geldi · yaptı",
           ""
          ],
          [
           "biz",
           "geldik · yaptık",
           ""
          ],
          [
           "siz",
           "geldiniz · yaptınız",
           ""
          ],
          [
           "onlar",
           "geldiler · yaptılar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmedim · yapmadım",
           ""
          ],
          [
           "sen",
           "gelmedin · yapmadın",
           ""
          ],
          [
           "o",
           "gelmedi · yapmadı",
           ""
          ],
          [
           "biz",
           "gelmedik · yapmadık",
           ""
          ],
          [
           "siz",
           "gelmediniz · yapmadınız",
           ""
          ],
          [
           "onlar",
           "gelmediler · yapmadılar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "geldim mi? · yaptım mı?",
           ""
          ],
          [
           "sen",
           "geldin mi? · yaptın mı?",
           ""
          ],
          [
           "o",
           "geldi mi? · yaptı mı?",
           ""
          ],
          [
           "biz",
           "geldik mi? · yaptık mı?",
           ""
          ],
          [
           "siz",
           "geldiniz mi? · yaptınız mı?",
           ""
          ],
          [
           "onlar",
           "geldiler mi? · yaptılar mı?",
           ""
          ]
         ]
        }
       ],
       "note": "После глухих согласных (p, ç, t, k, s, ş, h, f) d становится t: yap*tı*m."
      },
      {
       "inf": "Belirsiz geçmiş",
       "ru": "узнал · -mış",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "gelmişim · yapmışım",
           ""
          ],
          [
           "sen",
           "gelmişsin · yapmışsın",
           ""
          ],
          [
           "o",
           "gelmiş · yapmış",
           ""
          ],
          [
           "biz",
           "gelmişiz · yapmışız",
           ""
          ],
          [
           "siz",
           "gelmişsiniz · yapmışsınız",
           ""
          ],
          [
           "onlar",
           "gelmişler · yapmışlar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmemişim · yapmamışım",
           ""
          ],
          [
           "sen",
           "gelmemişsin · yapmamışsın",
           ""
          ],
          [
           "o",
           "gelmemiş · yapmamış",
           ""
          ],
          [
           "biz",
           "gelmemişiz · yapmamışız",
           ""
          ],
          [
           "siz",
           "gelmemişsiniz · yapmamışsınız",
           ""
          ],
          [
           "onlar",
           "gelmemişler · yapmamışlar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "gelmiş miyim? · yapmış mıyım?",
           ""
          ],
          [
           "sen",
           "gelmiş misin? · yapmış mısın?",
           ""
          ],
          [
           "o",
           "gelmiş mi? · yapmış mı?",
           ""
          ],
          [
           "biz",
           "gelmiş miyiz? · yapmış mıyız?",
           ""
          ],
          [
           "siz",
           "gelmiş misiniz? · yapmış mısınız?",
           ""
          ],
          [
           "onlar",
           "gelmişler mi? · yapmışlar mı?",
           ""
          ]
         ]
        }
       ],
       "note": ""
      },
      {
       "inf": "Gelecek zaman",
       "ru": "будущее · -acak",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "geleceğim · yapacağım",
           ""
          ],
          [
           "sen",
           "geleceksin · yapacaksın",
           ""
          ],
          [
           "o",
           "gelecek · yapacak",
           ""
          ],
          [
           "biz",
           "geleceğiz · yapacağız",
           ""
          ],
          [
           "siz",
           "geleceksiniz · yapacaksınız",
           ""
          ],
          [
           "onlar",
           "gelecekler · yapacaklar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmeyeceğim · yapmayacağım",
           ""
          ],
          [
           "sen",
           "gelmeyeceksin · yapmayacaksın",
           ""
          ],
          [
           "o",
           "gelmeyecek · yapmayacak",
           ""
          ],
          [
           "biz",
           "gelmeyeceğiz · yapmayacağız",
           ""
          ],
          [
           "siz",
           "gelmeyeceksiniz · yapmayacaksınız",
           ""
          ],
          [
           "onlar",
           "gelmeyecekler · yapmayacaklar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "gelecek miyim? · yapacak mıyım?",
           ""
          ],
          [
           "sen",
           "gelecek misin? · yapacak mısın?",
           ""
          ],
          [
           "o",
           "gelecek mi? · yapacak mı?",
           ""
          ],
          [
           "biz",
           "gelecek miyiz? · yapacak mıyız?",
           ""
          ],
          [
           "siz",
           "gelecek misiniz? · yapacak mısınız?",
           ""
          ],
          [
           "onlar",
           "gelecekler mi? · yapacaklar mı?",
           ""
          ]
         ]
        }
       ],
       "note": ""
      },
      {
       "inf": "Gereklilik kipi",
       "ru": "надо · -malı",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "gelmeliyim · yapmalıyım",
           ""
          ],
          [
           "sen",
           "gelmelisin · yapmalısın",
           ""
          ],
          [
           "o",
           "gelmeli · yapmalı",
           ""
          ],
          [
           "biz",
           "gelmeliyiz · yapmalıyız",
           ""
          ],
          [
           "siz",
           "gelmelisiniz · yapmalısınız",
           ""
          ],
          [
           "onlar",
           "gelmeliler · yapmalılar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmemeliyim · yapmamalıyım",
           ""
          ],
          [
           "sen",
           "gelmemelisin · yapmamalısın",
           ""
          ],
          [
           "o",
           "gelmemeli · yapmamalı",
           ""
          ],
          [
           "biz",
           "gelmemeliyiz · yapmamalıyız",
           ""
          ],
          [
           "siz",
           "gelmemelisiniz · yapmamalısınız",
           ""
          ],
          [
           "onlar",
           "gelmemeliler · yapmamalılar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "gelmeli miyim? · yapmalı mıyım?",
           ""
          ],
          [
           "sen",
           "gelmeli misin? · yapmalı mısın?",
           ""
          ],
          [
           "o",
           "gelmeli mi? · yapmalı mı?",
           ""
          ],
          [
           "biz",
           "gelmeli miyiz? · yapmalı mıyız?",
           ""
          ],
          [
           "siz",
           "gelmeli misiniz? · yapmalı mısınız?",
           ""
          ],
          [
           "onlar",
           "gelmeliler mi? · yapmalılar mı?",
           ""
          ]
         ]
        }
       ],
       "note": ""
      },
      {
       "inf": "Şart kipi",
       "ru": "если · -rsa",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "gelirsem · yaparsam",
           ""
          ],
          [
           "sen",
           "gelirsen · yaparsan",
           ""
          ],
          [
           "o",
           "gelirse · yaparsa",
           ""
          ],
          [
           "biz",
           "gelirsek · yaparsak",
           ""
          ],
          [
           "siz",
           "gelirseniz · yaparsanız",
           ""
          ],
          [
           "onlar",
           "gelirlerse · yaparlarsa",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmezsem · yapmazsam",
           ""
          ],
          [
           "sen",
           "gelmezsen · yapmazsan",
           ""
          ],
          [
           "o",
           "gelmezse · yapmazsa",
           ""
          ],
          [
           "biz",
           "gelmezsek · yapmazsak",
           ""
          ],
          [
           "siz",
           "gelmezseniz · yapmazsanız",
           ""
          ],
          [
           "onlar",
           "gelmezlerse · yapmazlarsa",
           ""
          ]
         ]
        }
       ],
       "note": "Вопрос с şart обычно строят через вопросительное слово: Yağmur yağarsa ne yaparız? — Если пойдёт дождь, что будем делать?"
      },
      {
       "inf": "Dilek kipi",
       "ru": "вот бы · -sa",
       "tenses": [
        {
         "name": "Утверждение",
         "rows": [
          [
           "ben",
           "gelsem · yapsam",
           ""
          ],
          [
           "sen",
           "gelsen · yapsan",
           ""
          ],
          [
           "o",
           "gelse · yapsa",
           ""
          ],
          [
           "biz",
           "gelsek · yapsak",
           ""
          ],
          [
           "siz",
           "gelseniz · yapsanız",
           ""
          ],
          [
           "onlar",
           "gelseler · yapsalar",
           ""
          ]
         ]
        },
        {
         "name": "Отрицание",
         "rows": [
          [
           "ben",
           "gelmesem · yapmasam",
           ""
          ],
          [
           "sen",
           "gelmesen · yapmasan",
           ""
          ],
          [
           "o",
           "gelmese · yapmasa",
           ""
          ],
          [
           "biz",
           "gelmesek · yapmasak",
           ""
          ],
          [
           "siz",
           "gelmeseniz · yapmasanız",
           ""
          ],
          [
           "onlar",
           "gelmeseler · yapmasalar",
           ""
          ]
         ]
        },
        {
         "name": "Вопрос",
         "rows": [
          [
           "ben",
           "gelsem mi? · yapsam mı?",
           ""
          ],
          [
           "sen",
           "gelsen mi? · yapsan mı?",
           ""
          ],
          [
           "o",
           "gelse mi? · yapsa mı?",
           ""
          ],
          [
           "biz",
           "gelsek mi? · yapsak mı?",
           ""
          ],
          [
           "siz",
           "gelseniz mi? · yapsanız mı?",
           ""
          ],
          [
           "onlar",
           "gelseler mi? · yapsalar mı?",
           ""
          ]
         ]
        }
       ],
       "note": ""
      }
     ]
    },
    {
     "type": "platform",
     "id": "notion",
     "title": "Как выглядит *Alterna Timur* внутри",
     "lead": "Этот гайд — одна тема из платформы. Вот настоящие экраны курса в Notion: так устроены все темы от A0 до C1.",
     "url": "Alterna Timur · Notion",
     "facts": [
      [
       "A0–C1",
       "все уровни в одном курсе"
      ],
      [
       "C1",
       "TÖMER у автора курса"
      ],
      [
       "30 €",
       "один раз, доступ навсегда"
      ],
      [
       "6",
       "подборок: ютуб, кино, книги и другое"
      ]
     ],
     "shots": [
      {
       "img": "kit/img/tr-pl-home-a0.webp",
       "h": 759,
       "title": "Главная уровня A0–A2",
       "text": "Навигация по грамматике и лексике, подборка ресурсов (ютуб, мультфильмы, книги, подкасты, приложения) и таймер занятия.",
       "alt": "Экран курса в Notion: главная уровня A0–A2"
      },
      {
       "img": "kit/img/tr-pl-topics.webp",
       "h": 830,
       "title": "Лексика по темам",
       "text": "Каждая тема с фотографией: еда, ресторан, больница, погода, транспорт и другие.",
       "alt": "Экран курса в Notion: лексика по темам"
      },
      {
       "img": "kit/img/tr-pl-hospital.webp",
       "h": 840,
       "title": "Ситуации внутри темы",
       "text": "Например, «Больница»: у терапевта, в аптеке, звонок в скорую. Слова под реальную ситуацию.",
       "alt": "Экран курса в Notion: ситуации внутри темы"
      },
      {
       "img": "kit/img/tr-pl-phrases.webp",
       "h": 807,
       "title": "Фразы с транскрипцией",
       "text": "Русский, турецкий и транскрипция кириллицей: прочитал и сразу говоришь.",
       "alt": "Экран курса в Notion: фразы с транскрипцией"
      },
      {
       "img": "kit/img/tr-pl-grammar.webp",
       "h": 800,
       "title": "Грамматика по разделам",
       "text": "Алфавит и произношение, падежи, местоимения, глагол: темы идут по порядку.",
       "alt": "Экран курса в Notion: грамматика по разделам"
      },
      {
       "img": "kit/img/tr-pl-progress.webp",
       "h": 821,
       "title": "Прогресс по темам",
       "text": "Все темы уровня в одной таблице: блок, заметки, уровень и отметка «пройдено».",
       "alt": "Экран курса в Notion: прогресс по темам"
      },
      {
       "img": "kit/img/tr-pl-plan.webp",
       "h": 826,
       "title": "План и бонусы",
       "text": "Календарь занятий, задачи на день и бонусные разделы о мотивации и продуктивности.",
       "alt": "Экран курса в Notion: план и бонусы"
      },
      {
       "img": "kit/img/tr-pl-home-b1.webp",
       "h": 810,
       "title": "Главная B1–C1",
       "text": "Отдельное пространство для продвинутых уровней с той же логикой.",
       "alt": "Экран курса в Notion: главная B1–C1"
      }
     ],
     "author": {
      "name": "Тимур",
      "text": "TÖMER C1 (Университет Акдениз). Учится на инженера-электрика в Анталье, все занятия полностью на турецком. Курс собран из того, что помогло ему самому.",
      "img": "kit/img/tr-pl-author.webp"
     },
     "cta": {
      "href": "https://app.lava.top/products/2cdbb9f8-e65b-443e-8d2c-4fea4c121e41",
      "text": "Купить Alterna Timur за 30 €",
      "note": "Один раз, доступ навсегда",
      "wa": "https://wa.me/77758880910",
      "waText": "Написать Тимуру в WhatsApp"
     }
    }
   ]
  }
 ],
 "waitFor": "#about"
};
