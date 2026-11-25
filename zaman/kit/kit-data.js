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
    }
   ]
  }
 ],
 "waitFor": "#about"
};
