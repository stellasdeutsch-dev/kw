window.KIT = {
 "lang": "en-GB",
 "mount": [
  {
   "after": "#ep1",
   "blocks": [
    {
     "type": "table",
     "id": "template",
     "title": "Шаблон недели",
     "lead": "Один тип задания на день, 15 минут. Темы меняются каждую неделю, ритм остаётся.",
     "cols": [
      {
       "key": "d",
       "label": "День"
      },
      {
       "key": "k",
       "label": "Задание"
      },
      {
       "key": "w",
       "label": "Что берёшь"
      },
      {
       "key": "h",
       "label": "Как делать"
      }
     ],
     "rows": [
      {
       "d": "Пн",
       "k": "Слова",
       "w": "10 новых слов одной темы",
       "h": "Прочитай вслух, каждое — во фразе, запиши в карточки"
      },
      {
       "d": "Вт",
       "k": "Фразы",
       "w": "Одна разговорная конструкция",
       "h": "Пять своих фраз по образцу, вслух"
      },
      {
       "d": "Ср",
       "k": "Грамматика",
       "w": "Одна тема",
       "h": "Правило, три примера, пять своих предложений"
      },
      {
       "d": "Чт",
       "k": "Слушать",
       "w": "Короткий выпуск или сцена",
       "h": "Послушай дважды: на слух и с текстом. Повтори за диктором"
      },
      {
       "d": "Пт",
       "k": "Квиз",
       "w": "Проверка недели",
       "h": "10 вопросов по словам, фразам и грамматике недели"
      },
      {
       "d": "Сб",
       "k": "Разговор",
       "w": "Живая речь",
       "h": "С партнёром, репетитором или ИИ на тему недели"
      },
      {
       "d": "Вс",
       "k": "Повторение",
       "w": "Без нового",
       "h": "Все карточки недели и то, где ошибся в квизе"
      }
     ],
     "note": "Заполни столбец «Что берёшь» на неделю вперёд в воскресенье вечером: так утром не придётся думать, что делать."
    },
    {
     "type": "plan",
     "id": "week",
     "bg": "b",
     "title": "Пример недели A2: «В кафе»",
     "lead": "Тот же план, что на экранах ролика. Каждый день — 15 минут.",
     "groups": [
      {
       "tag": "A2",
       "title": "Неделя «В кафе»",
       "sub": "Слова, фразы, Present Perfect, слушание, квиз, разговор",
       "items": [
        {
         "day": "Пн",
         "title": "Слова урока «В кафе»",
         "text": "10 новых слов",
         "min": "15 мин"
        },
        {
         "day": "Вт",
         "title": "Фразы с Could you…?",
         "text": "вежливые просьбы",
         "min": "15 мин"
        },
        {
         "day": "Ср",
         "title": "Present Perfect",
         "text": "опыт и результат",
         "min": "15 мин"
        },
        {
         "day": "Чт",
         "title": "Слушать 6 Minute English",
         "text": "и повторять вслух",
         "min": "15 мин"
        },
        {
         "day": "Пт",
         "title": "Квиз по неделе",
         "text": "10 вопросов",
         "min": "15 мин"
        },
        {
         "day": "Сб",
         "title": "Разговор с партнёром",
         "text": "тема «Еда и кафе»",
         "min": "15 мин"
        },
        {
         "day": "Вс",
         "title": "Повторение",
         "text": "все слова недели",
         "min": "15 мин"
        }
       ]
      }
     ]
    },
    {
     "type": "table",
     "id": "dialog",
     "title": "Диалог недели",
     "lead": "Вторник и четверг: прочитай по ролям, потом скажи свои реплики без подсказки.",
     "cols": [
      {
       "key": "who",
       "label": "Кто"
      },
      {
       "key": "en",
       "label": "Реплика",
       "lang": "en"
      },
      {
       "key": "ru",
       "label": "Перевод"
      }
     ],
     "rows": [
      {
       "who": "Бариста",
       "en": "Hi! What can I get you?",
       "ru": "Привет! Что вам принести?"
      },
      {
       "who": "Ты",
       "en": "Could I have a flat white, please?",
       "ru": "Можно мне флэт уайт?"
      },
      {
       "who": "Бариста",
       "en": "Sure. Anything else?",
       "ru": "Конечно. Что-нибудь ещё?"
      },
      {
       "who": "Ты",
       "en": "No, that's all, thanks.",
       "ru": "Нет, это всё, спасибо."
      },
      {
       "who": "Бариста",
       "en": "That'll be four fifty.",
       "ru": "С вас четыре пятьдесят."
      },
      {
       "who": "Ты",
       "en": "Can I pay by card?",
       "ru": "Можно картой?"
      }
     ],
     "speak": "en"
    },
    {
     "type": "table",
     "id": "words",
     "bg": "b",
     "title": "Слова недели",
     "lead": "Понедельник: 8 слов урока «В кафе» — каждое сразу во фразе.",
     "cols": [
      {
       "key": "w",
       "label": "Слово",
       "lang": "en"
      },
      {
       "key": "ru",
       "label": "Перевод"
      },
      {
       "key": "ex",
       "label": "Пример",
       "lang": "en"
      }
     ],
     "rows": [
      {
       "w": "order",
       "ru": "заказывать",
       "ex": "Are you ready to order?"
      },
      {
       "w": "to go",
       "ru": "с собой",
       "ex": "A latte to go, please."
      },
      {
       "w": "receipt",
       "ru": "чек",
       "ex": "Can I have the receipt?"
      },
      {
       "w": "still water",
       "ru": "вода без газа",
       "ex": "A bottle of still water, please."
      },
      {
       "w": "a table for two",
       "ru": "столик на двоих",
       "ex": "A table for two, please."
      },
      {
       "w": "tip",
       "ru": "чаевые",
       "ex": "Is the tip included?"
      },
      {
       "w": "menu",
       "ru": "меню",
       "ex": "Could we see the menu?"
      },
      {
       "w": "bill",
       "ru": "счёт",
       "ex": "Could we have the bill, please?"
      }
     ],
     "speak": "w"
    },
    {
     "type": "quiz",
     "id": "weekquiz",
     "mode": "steps",
     "title": "Квиз пятницы",
     "optLang": "en",
     "lead": "10 вопросов по неделе «В кафе».",
     "questions": [
      {
       "q": "«Можно мне флэт уайт?»",
       "options": [
        "Could I have a flat white, please?",
        "I want flat white.",
        "Give me a flat white."
       ],
       "answer": 0,
       "explain": "*Could I have…, please?* — вежливая просьба из диалога недели."
      },
      {
       "q": "Как сказать «с собой»?",
       "options": [
        "to go",
        "for here",
        "take out me"
       ],
       "answer": 0,
       "explain": "A latte *to go*, please."
      },
      {
       "q": "«чек» — это…",
       "options": [
        "bill",
        "receipt",
        "tip"
       ],
       "answer": 1,
       "explain": "*receipt* — чек. bill — счёт в кафе, tip — чаевые."
      },
      {
       "q": "«Можно картой?»",
       "options": [
        "Can I pay with a card money?",
        "Can I pay by card?",
        "Do I pay card?"
       ],
       "answer": 1,
       "explain": "Can I pay *by card*?"
      },
      {
       "q": "«вода без газа»",
       "options": [
        "still water",
        "quiet water",
        "calm water"
       ],
       "answer": 0,
       "explain": "*still water*. С газом — sparkling water."
      },
      {
       "q": "«Чаевые включены?»",
       "options": [
        "Is the tip included?",
        "Is the tip inside?",
        "Are tips in?"
       ],
       "answer": 0,
       "explain": "Is the tip *included*?"
      },
      {
       "q": "«Ты когда-нибудь пробовал суши?» (Present Perfect)",
       "options": [
        "Did you ever try sushi?",
        "Have you ever tried sushi?",
        "Do you ever tried sushi?"
       ],
       "answer": 1,
       "explain": "Опыт без времени — *Have* you ever *tried*…?"
      },
      {
       "q": "«Я уже заказал» (Present Perfect)",
       "options": [
        "I've already ordered.",
        "I already order.",
        "I've already order."
       ],
       "answer": 0,
       "explain": "have + V3: I*'ve* already *ordered*."
      },
      {
       "q": "Вежливо попросить счёт:",
       "options": [
        "Bill!",
        "Could we have the bill, please?",
        "We want bill now."
       ],
       "answer": 1,
       "explain": "*Could we have the bill, please?*"
      },
      {
       "q": "«Столик на двоих, пожалуйста»",
       "options": [
        "A table for two, please.",
        "Table two people.",
        "Two table, please."
       ],
       "answer": 0,
       "explain": "*A table for two*, please."
      }
     ],
     "bands": [
      {
       "min": 0,
       "title": "Повтори неделю",
       "text": "Вернись к словам и диалогу, а в воскресенье пройди квиз ещё раз."
      },
      {
       "min": 7,
       "title": "Неделя закрыта",
       "text": "В субботу — разговор на тему «Еда и кафе». С понедельника бери новую тему."
      },
      {
       "min": 10,
       "title": "10 из 10",
       "text": "Отличная неделя. Следующую тему можно брать чуть сложнее."
      }
     ]
    }
   ]
  },
  {
   "before": "section.wide:has(+ #quiz)",
   "blocks": [
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
      "note": "Один раз, доступ навсегда"
     }
    }
   ]
  }
 ],
 "waitFor": "#ep1"
};
