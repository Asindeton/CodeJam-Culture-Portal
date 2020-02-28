import React from 'react'
import autor from '../../images/assets/arshanskiy1.jpg'
import autorTwo from '../../images/assets/arshanskiy2.jpg'
import autorThree from '../../images/assets/arshanskiy3.jpg'
import belousovOne from '../../images/assets/belousov1.jpg'
import belousovTwo from '../../images/assets/belousov2.jpg'
import belousovThree from '../../images/assets/belousov3.jpg'
import zalmanovichOne from '../../images/assets/zalmanovich.jpg'
import veinerovichOne from '../../images/assets/veinerovich1.jpg'
import veinerovichTwo from '../../images/assets/veinerovich2.jpg'
import veinerovichThree from '../../images/assets/veinerovich3.jpg'
import ginzburgOne from '../../images/assets/ginzburg1.jpg'
import ginzburgTwo from '../../images/assets/ginzburg2.jpg'
import ginzburgThree from '../../images/assets/ginzburg3.jpg'
import golubOne from '../../images/assets/golub1.jpg'
import golubTwo from '../../images/assets/golub2.jpg'
import golubThree from '../../images/assets/golub3.jpg'
import gutkovichOne from '../../images/assets/gutkovich1.jpg'
import gutkovichTwo from '../../images/assets/gutkovich2.jpg'
import gutkovichThree from '../../images/assets/gutkovich3.jpg'
import dashukOne from '../../images/assets/dashuk1.jpg'
import dashukTwo from '../../images/assets/dashuk2.jpg'
import dashukThree from '../../images/assets/dashuk3.jpg'
import korshOne from '../../images/assets/korsh1.jpg'
import korshTwo from '../../images/assets/korsh2.jpg'
import korshThree from '../../images/assets/korsh3.jpg'
import hashchevatskiOne from '../../images/assets/hashchevatski1.jpg'
import hashchevatskiTwo from '../../images/assets/hashchevatski2.jpg'
import hashchevatskiThree from '../../images/assets/hashchevatski3.jpg'
import maruhinOne from '../../images/assets/maruhin.jpg'
import maruhinTwo from '../../images/assets/maruhin2.jpg'
import maruhinThree from '../../images/assets/maruhin3.jpg'
import maruhinFour from '../../images/assets/maruhin4.jpg'

const directorsData = [
  {
    "name": {
      "ru": "Эдуард",
      "en": "Edward",
      "be": "Эдуард"
    },
    "surname": {
      "ru": "Аршанский",
      "en": "Arshansky",
      "be": "Аршанскій"
    },
    "patronymic": {
      "ru": "Львович",
      "en": "Lvovich",
      "be": "Львовіч"
    },
    "biography": [
      {
        "years": "1917-1927",
        "do": {
          "ru": "Режиссер в театре",
          "en": "Director in the theater",
          "be": "Рэжысёр у тэатры"
        }
      },
      {
        "years": "1931-1941",
        "do": {
          "ru": "Окончил режиссерский факультет ВГИКа и был режиссером студии 'Советская Беларусь'",
          "en": "He graduated from the directing department of VGIK and was the director of the studio 'Soviet Belarus",
          "be": "Скончыў рэжысёрскі факультэт ВГiКу і быў рэжысёрам студыі 'Савецкая Беларусь'"
        }
      },
      {
        "years": "1941-1949",
        "do": {
          "ru": "Режиссер в театре",
          "en": "Director in the theater",
          "be": "Рэжысёр у тэатры"
        }
      },
      {
        "years": "1950-",
        "do": {
          "ru": "Режиссер Ленинградской студии документальных фильмов",
          "en": "Director of the Leningrad Documentary Film Studio",
          "be": "Рэжысёр Ленінградскай студыі дакументальных фільмаў"
        }
      }
    ],
    "filmography": [
      {
        'period': '1930\'s', 'information': [{
          "year": 1930,
          "film": {
            "ru": "Переправа вплавь",
            "en": "Cross the river",
            "be": "Пераправа ўплаў"
          }
        },
          {
            "year": 1931,
            "film": {
              "ru": "Кто лучше?",
              "en": "Who is better?",
              "be": "Хто лепш?"
            }
          },
          {
            "year": 1932,
            "film": {
              "ru": "Боям навстречу",
              "en": "Towards the battle",
              "be": "Баях насустрач"
            }
          },
          {
            "year": 1933,
            "film": {
              "ru": "Дважды рождённый",
              "en": "Twice born",
              "be": "Двойчы народжаны"
            }
          },
          {
            "year": 1935,
            "film": {
              "ru": "Новая Родина",
              "en": "New Homeland",
              "be": "Новая Радзіма"
            }
          },
          {
            "year": 1937,
            "film": {
              "ru": "Соловей",
              "en": "Nightingale",
              "be": "Салавей"
            }
          }]
      },
      {
        'period': '1950\'s', 'information': [
          {
            "year": 1951,
            "film": {
              "ru": "Виноград",
              "en": "Grapes",
              "be": "Вінаград"
            }
          },
          {
            "year": 1953,
            "film": {
              "ru": "Павел Судников",
              "en": "Pavel Sudnikov",
              "be": "Павел Суднікау"
            }
          },
          {
            "year": 1955,
            "film": {
              "ru": "По новым путям",
              "en": "On new ways",
              "be": "Па новых шляхах"
            }
          },
          {
            "year": 1957,
            "film": {
              "ru": "Человек, опередивший время",
              "en": "A man ahead of time",
              "be": "Чалавек, які апярэдзіў час"
            }
          }]
      },
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1960,
            "film": {
              "ru": "Спортивная юность",
              "en": "Sports youth",
              "be": "Спартыўная юнацтва"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Возвращение в жизнь",
              "en": "Return to Life",
              "be": "Вяртанне ў жыццё"
            }
          }
        ]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Невель",
          "en": "Nevel",
          "be": "Невель"
        },
        "coordinate": {
          "lat": 56.01667,
          "lon": 29.93333
        }
      },
      {
        "place": {
          "ru": "ВГИК",
          "en": "VGIK",
          "be": "ВГІК"
        },
        "coordinate": {
          "lat": 55.77583,
          "lon": 37.63722
        }
      },
      {
        "place": {
          "ru": "Лендок",
          "en": "Landok",
          "be": "Лендок"
        },
        "coordinate": {
          "lat": 59.924111,
          "lon": 30.2949473
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Соловей",
          "en": "Nightingale",
          "be": "Салавей"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/9273/547592.jpg"
      },
      {
        "about": {
          "ru": "Соловей",
          "en": "Nightingale",
          "be": "Салавей"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/9273/438659.jpg"
      },
      {
        "about": {
          "ru": "Дважды рожденный",
          "en": "Twice Born",
          "be": "Двойчы народжаны"
        },
        "picture": "https://i.ytimg.com/vi/3gLr5VrKIY0/hqdefault.jpg"
      }
    ],
    "description": {
      "ru": "Белорусский советский режиссёр, сценарист",
      "en": "Belarusian Soviet director, screenwriter",
      "be": "Беларускі савецкі рэжысёр, сцэнарыст"
    },
    "fullDescription": {
      "ru": "Белорусский советский режиссёр, сценарист",
      "en": "Belarusian Soviet director, screenwriter",
      "be": "Беларускі савецкі рэжысёр, сцэнарыст"
    },
    "picture": "https://www.kino-teatr.ru/acter/photo/5/3/47035/391626.jpg",
    "yearsOfLife": "25.08.1899 - 06.07.1974",
    "placeOfBirth": {
      "ru": "Невель",
      "en": "Nevel",
      "be": "Невель"
    },
    "youtubeFilm": "3gLr5VrKIY0",
    "awards": 0
  },
  {
    "name": {
      "ru": "Олег",
      "en": "Oleg",
      "be": "Алег"
    },
    "surname": {
      "ru": "Белоусов",
      "en": "Belousov",
      "be": "Белаусаў"
    },
    "patronymic": {
      "ru": "Павлович",
      "en": "Pavlovich",
      "be": "Паўлавіч"
    },
    "biography": [
      {
        "years": "1945",
        "do": {
          "ru": "Родился в городе Слуцке (Минская область)",
          "en": "Born in the city of Slutsk (Minsk region)",
          "be": "Нарадзіўся ў горадзе Слуцку (Мінская вобласць)"
        }
      },
      {
        "years": "1968 - 1973",
        "do": {
          "ru": "Литературный сотрудник газеты 'Літаратура і мастацтва'",
          "en": "Literary employee of the newspaper 'Literature and mastastva'",
          "be": "Літаратурны супрацоўнік газеты 'Літаратура і мастацтва'"
        }
      },
      {
        "years": "1975 - 1989",
        "do": {
          "ru": "Основатель и художественный руководитель мастерской мультфильмов киностудии 'Беларусьфильм'",
          "en": "Founder and artistic director of the animation studio of the film studio 'Belarusfilm'",
          "be": "Заснавальнік і мастацкі кіраўнік майстэрні мультфільмаў кінастудыі 'Беларусьфільм'"
        }
      },
      {
        "years": "1989 - 1995",
        "do": {
          "ru": "Основатель и художественный руководитель студии 'АВС'",
          "en": "Founder and artistic director of the studio 'ABC'",
          "be": "Заснавальнік і мастацкі кіраўнік студыі 'АВС'"
        }
      },
      {
        "years": "1995",
        "do": {
          "ru": "Вице-президент киновидеостудии 'Кадр-2'",
          "en": "Vice-president of the film studio 'Kadr-2'",
          "be": "Віцэ-прэзідэнт кінавідэастудыі 'Кадр-2'"
        }
      },
      {
        "years": "1996",
        "do": {
          "ru": "Окончил Белорусский государственный университет",
          "en": "Graduated from Belarusian State University",
          "be": "Скончыў Беларускі дзяржаўны універсітэт"
        }
      },
      {
        "years": "2009",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": "Памёр"
        }
      }
    ],
    "filmography": [
      {
        'period': '1980\'s', 'information': [
          {
            "year": 1980,
            "film": {
              "ru": "Сказка о весёлом клоуне",
              "en": "The Tale of the Funny Clown",
              "be": "Казка пра вясёлага клоўна"
            }
          },
          {
            "year": 1982,
            "film": {
              "ru": "Песнь о зубре",
              "en": "Song of the Bison",
              "be": "Песня пра зубра"
            }
          },
          {
            "year": 1985,
            "film": {
              "ru": "Ковбойские игры",
              "en": "Cowboy Games",
              "be": "Каўбойскія гульні"
            }
          },
          {
            "year": 1987,
            "film": {
              "ru": "Ладья отчаянья",
              "en": "Rook of Despair",
              "be": "Ладдзя адчаю"
            }
          },
          {
            "year": 1988,
            "film": {
              "ru": "Куб",
              "en": "Cube",
              "be": "Куб"
            }
          }]
      },
      {
        'period': '1990\'s', 'information': [
          {
            "year": 1990,
            "film": {
              "ru": "Очень старый человек с огромными крыльями",
              "en": "A very old man with huge wings",
              "be": "Вельмі стары чалавек з велізарнымі крыламі"
            }
          },
          {
            "year": 1993,
            "film": {
              "ru": "Декамерон",
              "en": "Decameron",
              "be": "Дэкамерон"
            }
          }
        ]
      }],
    "mapsLocation": [
      {
        "place": {
          "ru": "Слуцк",
          "en": "Slutsk",
          "be": "Слуцк"
        },
        "coordinate": {
          "lat": 53.01667,
          "lon": 27.55
        }
      },
      {
        "place": {
          "ru": "БГУ",
          "en": "BSU",
          "be": "БДУ"
        },
        "coordinate": {
          "lat": 53.89389,
          "lon": 27.547083
        }
      },
      {
        "place": {
          "ru": "Беларусьфильм",
          "en": "Belarusfilm",
          "be": "Беларусьфільм"
        },
        "coordinate": {
          "lat": 53.9275797,
          "lon": 27.6276866
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Сказка о весёлом клоуне",
          "en": "The Tale of the Funny Clown",
          "be": "Казка пра вясёлага клоўна"
        },
        "picture": "https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/%D0%9A%D0%B0%D0%B4%D1%80_%D0%B8%D0%B7_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0_%D0%BE_%D0%B2%D0%B5%D1%81%D1%91%D0%BB%D0%BE%D0%BC_%D0%BA%D0%BB%D0%BE%D1%83%D0%BD%D0%B5%C2%BB_1980.jpg/274px-%D0%9A%D0%B0%D0%B4%D1%80_%D0%B8%D0%B7_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0_%D0%BE_%D0%B2%D0%B5%D1%81%D1%91%D0%BB%D0%BE%D0%BC_%D0%BA%D0%BB%D0%BE%D1%83%D0%BD%D0%B5%C2%BB_1980.jpg"
      },
      {
        "about": {
          "ru": "Песнь о зубре",
          "en": "Song of the Bison",
          "be": "Песня пра зубра"
        },
        "picture": "https://upload.wikimedia.org/wikipedia/ru/thumb/8/89/%D0%9A%D0%B0%D0%B4%D1%80_%D0%B8%D0%B7_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9F%D0%B5%D1%81%D0%BD%D1%8C_%D0%BE_%D0%B7%D1%83%D0%B1%D1%80%D0%B5%C2%BB_1982.jpg/270px-%D0%9A%D0%B0%D0%B4%D1%80_%D0%B8%D0%B7_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%9F%D0%B5%D1%81%D0%BD%D1%8C_%D0%BE_%D0%B7%D1%83%D0%B1%D1%80%D0%B5%C2%BB_1982.jpg"
      },
      {
        "about": {
          "ru": "Ковбойские игры",
          "en": "Cowboy Games",
          "be": "Каўбойскія гульні"
        },
        "picture": "https://i.ytimg.com/vi/brGy1ETOAec/hqdefault.jpg"
      },
      {
        "about": {
          "ru": "Ладья отчаянья",
          "en": "Rook of Despair",
          "be": "Ладдзя адчаю"
        },
        "picture": "https://i.ytimg.com/vi/93ELb_9IxSg/hqdefault.jpg"
      },
      {
        "about": {
          "ru": "Очень старый человек с огромными крыльями",
          "en": "A very old man with huge wings",
          "be": "Вельмі стары чалавек з велізарнымі крыламі"
        },
        "picture": "https://static.kinokopilka.pro/system/images/screenshots/images/000/339/949/339949_original.jpg"
      }
    ],
    "description": {
      "ru": "Советский и белорусский художник-мультипликатор, сценарист, режиссёр",
      "en": "Soviet and Belarusian animator, screenwriter, director",
      "be": "Савецкі і беларускі мастак-мультыплікатар, сцэнарыст, рэжысёр"
    },
    "fullDescription": {
      "ru": "Советский и белорусский художник-мультипликатор, сценарист, режиссёр",
      "en": "Soviet and Belarusian animator, screenwriter, director",
      "be": "Савецкі і беларускі мастак-мультыплікатар, сцэнарыст, рэжысёр"
    },
    "picture": "https://flibusta.site/ia/53/415253/oleg_belousov.jpg",
    "yearsOfLife": "16.11.1945 - 26.03.2009",
    "placeOfBirth": {
      "ru": "Слуцк",
      "en": "Slutsk",
      "be": "Слуцк"
    },
    "youtubeFilm": "0-FAaBFl72M",
    "awards": 0
  },
  {
    "name": {
      "ru": "Моисей",
      "en": "Moses",
      "be": "Майсей"
    },
    "surname": {
      "ru": "Беров",
      "en": "Berov",
      "be": "Бераў"
    },
    "patronymic": {
      "ru": "Залманович",
      "en": "Zalmanovich",
      "be": "Залмановіч"
    },
    "biography": [
      {
        "years": "1909",
        "do": {
          "ru": "Родился в еврейской семье в Велиже (ныне Смоленская область)",
          "en": "Born into a Jewish family in Velizh (now Smolensk region)",
          "be": "Нарадзіўся ў габрэйскай сям'і ў Вяліжы (цяпер Смаленская вобласць)"
        }
      },
      {
        "years": "1933 - 1984",
        "do": {
          "ru": "Оператор киностудии Белгоскино-Беларусьфильм",
          "en": "Operator of the film studio Belgoskino-Belarusfilm",
          "be": "Аператар кінастудыі Белдзяржкіно-Беларусьфільм"
        }
      },
      {
        "years": "1934",
        "do": {
          "ru": "Окончил художественный техникум в Витебске и операторский факультет ВГИКа в Москве",
          "en": "He graduated from the art college in Vitebsk and the operator department of VGIK in Moscow",
          "be": "Скончыў мастацкі тэхнікум у Віцебску і аператарскі факультэт ВГІКу ў Маскве"
        }
      },
      {
        "years": "1941",
        "do": {
          "ru": "Кинооператор 3-го Белорусского и Западного фронтов",
          "en": "Cameraman of the 3rd Belorussian and Western Fronts",
          "be": "Кінааператар 3-га Беларускага і Заходняга франтоў"
        }
      },
      {
        "years": "1944",
        "do": {
          "ru": "Член ВКП(б)",
          "en": "Member of the CPSU (b)",
          "be": "Член ВКП(б)"
        }
      },
      {
        "years": "1967",
        "do": {
          "ru": "Заслуженный деятель искусств БССР",
          "en": "Honored Art Worker of the BSSR",
          "be": "Заслужаны дзеяч мастацтваў БССР"
        }
      },
      {
        "years": "2003",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": "Памёр"
        }
      }
    ],
    "filmography": [
      {
        'period': '1940\'s', 'information': [
          {
            "year": 1942,
            "film": {
              "ru": "Приезд тувинской делегации",
              "en": "Arrival of the Tuvan delegation",
              "be": "Прыезд тувінскай дэлегацыі"
            }
          },
          {
            "year": 1943,
            "film": {
              "ru": "Союзкиножурнал № 11-12",
              "en": "Soyuzkinozhurnal No. 11-12",
              "be": "Саюзкінажурнал № 11-12"
            }
          },
          {
            "year": 1945,
            "film": {
              "ru": "Процесс над немцами в Белоруссии",
              "en": "The trial of the Germans in Belarus",
              "be": "Працэс над немцамі ў Беларусі"
            }
          },
          {
            "year": 1946,
            "film": {
              "ru": "Суд народа",
              "en": "Court of the people",
              "be": "Суд народа"
            }
          },
          {
            "year": 1947,
            "film": {
              "ru": "Судебный процесс в Бобруйске",
              "en": "The trial in Bobruis",
              "be": "Судовы працэс у Бабруйску"
            }
          },
          {
            "year": 1948,
            "film": {
              "ru": "Советская Белоруссия",
              "en": "Soviet Belarus",
              "be": "Савецкая Беларусь"
            }
          }]
      },
      {
        'period': '1950\'s', 'information': [
          {
            "year": 1950,
            "film": {
              "ru": "На земле Белорусской",
              "en": "On the land of Belarus",
              "be": "На зямлі Беларускай"
            }
          }]
      },
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1960,
            "film": {
              "ru": "Утро жизни",
              "en": "Morning of life",
              "be": "Раніца жыцця"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Этим летом",
              "en": "This summer",
              "be": "Гэтым летам"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Глобус Наполеона",
              "en": "Napoleon’s Globe",
              "be": "Глобус Наполеона"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Соль земли",
              "en": "Salt of the Earth",
              "be": "Соль зямлі"
            }
          },
          {
            "year": 1963,
            "film": {
              "ru": "Весенние мелодии",
              "en": "Spring melodies",
              "be": "Вясновыя мелодыі"
            }
          },
          {
            "year": 1964,
            "film": {
              "ru": "Незабываемое",
              "en": "Unforgettable",
              "be": "Незабыўнае"
            }
          },
          {
            "year": 1965,
            "film": {
              "ru": "3-е июля",
              "en": "July 3rd",
              "be": "3-га ліпеня"
            }
          },
          {
            "year": 1968,
            "film": {
              "ru": "Генерал Пуща",
              "en": "General Forest",
              "be": "Генерал Пушча"
            }
          },
          {
            "year": 1969,
            "film": {
              "ru": "Курган",
              "en": "Barrow",
              "be": "Курган"
            }
          }]
      },
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1974,
            "film": {
              "ru": "Жить в веках",
              "en": "Live through the ages",
              "be": "Жыць у стагоддзях"
            }
          },
          {
            "year": 1974,
            "film": {
              "ru": "Освобождение Советской Белоруссии",
              "en": "Liberation of Soviet Belarus",
              "be": "Вызваленне Савецкай Беларусі"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Велиж",
          "en": "Velizh",
          "be": "Вяліж"
        },
        "coordinate": {
          "lat": 55.6,
          "lon": 31.2
        }
      },
      {
        "place": {
          "ru": "ВГИК",
          "en": "VGIK",
          "be": "ВГІК"
        },
        "coordinate": {
          "lat": 55.1728971,
          "lon": 30.1503461
        }
      },
      {
        "place": {
          "ru": "Беларусьфильм",
          "en": "Belarusfilm",
          "be": "Беларусьфільм"
        },
        "coordinate": {
          "lat": 53.9275797,
          "lon": 27.6276866
        }
      }
    ],
    "photoGallery": [],
    "description": {
      "ru": "Советский кинооператор и режиссёр, художник, кинодокументалист",
      "en": "Soviet cameraman and director, artist, documentary filmmaker",
      "be": "Савецкі кінааператар і рэжысёр, мастак, кінадакументаліст"
    },
    "fullDescription": {
      "ru": "Советский кинооператор и режиссёр, художник, кинодокументалист. Заслуженный деятель искусств БССР (1967)",
      "en": "Soviet cameraman and director, artist, documentary filmmaker. Honored Artist of the BSSR (1967)",
      "be": "Савецкі кінааператар і рэжысёр, мастак, кінадакументаліст. Заслужаны дзеяч мастацтваў БССР (1967)"
    },
    "picture": "https://upload.wikimedia.org/wikipedia/ru/6/64/Moisey_Zalmanovich_Berov.jpg",
    "yearsOfLife": "10.12.1909 - 2003",
    "placeOfBirth": {
      "ru": "Велиж",
      "en": "Velizh",
      "be": "Вяліж"
    },
    "youtubeFilm": "",
    "awards": 1
  },
  {
    "name": {
      "ru": "Иосиф",
      "en": "Joseph",
      "be": "Іосіф"
    },
    "surname": {
      "ru": "Вейнерович",
      "en": "Weinerovich",
      "be": "Вейнеровіч"
    },
    "patronymic": {
      "ru": "Наумович",
      "en": "Naumovich",
      "be": "Навумовіч"
    },
    "biography": [
      {
        "years": "1925",
        "do": {
          "ru": "Оператор и режиссёр киностудии Белгоскино-Беларусьфильм",
          "en": "Operator and director of the film studio Belgoskino-Belarusfilm",
          "be": "Аператар і рэжысёр кінастудыі Белдзяржкіно-Беларусьфільм"
        }
      },
      {
        "years": "1934",
        "do": {
          "ru": "Окончил операторский факультет Государственного техникума кинематографии",
          "en": "Graduated from the camera department of the State College of Cinematography",
          "be": "Скончыў аператарскі факультэт Дзяржаўнага тэхнікума кінематаграфіі"
        }
      },
      {
        "years": "1941",
        "do": {
          "ru": "Снимал фронтовую кинохронику (ЦСДФ)",
          "en": "Filmed the front-line newsreel",
          "be": "Здымаў франтавую кінахроніку (ЦСДФ)"
        }
      },
      {
        "years": "1950",
        "do": {
          "ru": "Во время антисемитской кампании остранён от работы",
          "en": "During the anti-Semitic campaign, removed from work",
          "be": "Падчас антысеміцкай кампаніі остранён ад працы"
        }
      },
      {
        "years": "1951 - 1953",
        "do": {
          "ru": "Работал в Институте механизации и электрификации сельского хозяйства АН БССР младшим научным сотрудником",
          "en": "He worked at the Institute of Mechanization and Electrification of Agriculture of the Academy of Sciences of the BSSR as a junior researcher",
          "be": "Працаваў у Інстытуце механізацыі і электрыфікацыі сельскай гаспадаркі АН БССР малодшым навуковым супрацоўнікам"
        }
      },
      {
        "years": "1957",
        "do": {
          "ru": "Восстановлен на прежней работе в Беларусьфильме",
          "en": "Reinstated in his previous job at Belarusfilm",
          "be": "Адноўлены на ранейшай працы ў Беларусьфільме"
        }
      },
      {
        "years": "1988",
        "do": {
          "ru": "Закончил работу на Беларусьфильм",
          "en": "Finished work on Belarusfilm",
          "be": "Скончыў працу на Беларусьфільме"
        }
      },
      {
        "years": "1998",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": "Памёр"
        }
      }
    ],
    "filmography": [
      {
        'period': '1930\'s', 'information': [
          {
            "year": 1930,
            "film": {
              "ru": "На границе",
              "en": "On the border",
              "be": "На мяжы"
            }
          },
          {
            "year": 1937,
            "film": {
              "ru": "Право на образование",
              "en": "The right to education",
              "be": "Права на адукацыю"
            }
          },
          {
            "year": 1938,
            "film": {
              "ru": "Белорусский свадебный обряд",
              "en": "Belarusian wedding ceremony",
              "be": "Беларускі вясельны абрад"
            }
          },
          {
            "year": 1939,
            "film": {
              "ru": "Воля народа",
              "en": "The will of the people",
              "be": "Воля народу"
            }
          },
          {
            "year": 1939,
            "film": {
              "ru": "Осушение болот",
              "en": "Drain the swamps",
              "be": "Асушэнне балот"
            }
          }]
      },
      {
        'period': '1940\'s', 'information': [
          {
            "year": 1946,
            "film": {
              "ru": "Строители",
              "en": "Builders",
              "be": "Будаўнікі"
            }
          },
          {
            "year": 1946,
            "film": {
              "ru": "В родную семью",
              "en": "Into a native family",
              "be": "У родную сям'ю"
            }
          },
          {
            "year": 1946,
            "film": {
              "ru": "Суд народов",
              "en": "Court of Nations",
              "be": "Суд народаў"
            }
          },
          {
            "year": 1946,
            "film": {
              "ru": "Обогащенная земля",
              "en": "Enriched Earth",
              "be": "Узбагачаная зямля"
            }
          }]
      },
      {
        'period': '1950\'s', 'information': [
          {
            "year": 1954,
            "film": {
              "ru": "Неоценимое богатство",
              "en": "Invaluable wealth",
              "be": "Неацэннае багацце"
            }
          },
          {
            "year": 1955,
            "film": {
              "ru": "Теплофикация колхоза",
              "en": "Heating of the collective farm",
              "be": "Цеплафікацыя калгаса"
            }
          },
          {
            "year": 1955,
            "film": {
              "ru": "Передовые методы",
              "en": "Best Practices",
              "be": "Перадавыя метады"
            }
          },
          {
            "year": 1956,
            "film": {
              "ru": "Книгу в массы",
              "en": "Book to the masses",
              "be": "Кнігу ў масы"
            }
          },
          {
            "year": 1956,
            "film": {
              "ru": "Кукуруза на полях Белоруссии",
              "en": "Corn on the fields of Belarus",
              "be": "Кукуруза на палях Беларусі"
            }
          },
          {
            "year": 1956,
            "film": {
              "ru": "Колхоз им. Калинина",
              "en": "Collective farm named after Kalinin",
              "be": "Калгас ім. Калініна"
            }
          },
          {
            "year": 1957,
            "film": {
              "ru": "Потребкооперация Белоруссии",
              "en": "Consumer cooperation of Belarus",
              "be": "Спажыўкааперацыя Беларусі"
            }
          },
          {
            "year": 1958,
            "film": {
              "ru": "В единой семье",
              "en": "In a single family",
              "be": "У адзінай сям'і"
            }
          },
          {
            "year": 1958,
            "film": {
              "ru": "Ценная культура",
              "en": "Valuable culture",
              "be": "Каштоўная культура"
            }
          },
          {
            "year": 1958,
            "film": {
              "ru": "Беларусь индустриальная",
              "en": "Belarus industrial",
              "be": "Беларусь індустрыяльная"
            }
          },
          {
            "year": 1959,
            "film": {
              "ru": "Испытание сельхозмашин",
              "en": "Testing of agricultural machinery",
              "be": "Выпрабаванне сельгасмашын"
            }
          },
          {
            "year": 1959,
            "film": {
              "ru": "Механизация животноводческих ферм",
              "en": "Mechanization of livestock farms",
              "be": "Механізацыя жывёлагадоўчых ферм"
            }
          },
          {
            "year": 1959,
            "film": {
              "ru": "Птицеводство Белоруссии",
              "en": "Poultry farming of Belarus",
              "be": "Птушкагадоўля Беларусі"
            }
          }]
      },
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1960,
            "film": {
              "ru": "Творцы нового",
              "en": "Creators of the new",
              "be": "Творцы новага"
            }
          },
          {
            "year": 1960,
            "film": {
              "ru": "Могучий резерв",
              "en": "Mighty reserve",
              "be": "Магутны рэзерв"
            }
          },
          {
            "year": 1960,
            "film": {
              "ru": "Дом на проспекте",
              "en": "House on the avenue",
              "be": "Дом на праспекце"
            }
          },
          {
            "year": 1960,
            "film": {
              "ru": "Малюнки родного края",
              "en": "Pictures of the native land",
              "be": "Малюнки роднага краю"
            }
          },
          {
            "year": 1961,
            "film": {
              "ru": "Питательно и вкусно",
              "en": "Nutritious and delicious",
              "be": "Пажыўна і смачна"
            }
          },
          {
            "year": 1961,
            "film": {
              "ru": "Песня нашей земли",
              "en": "Song of our land",
              "be": "Песня нашай зямлі"
            }
          },
          {
            "year": 1961,
            "film": {
              "ru": "Сказка о Беловежи",
              "en": "The Tale of Bialowieza",
              "be": "Казка пра Белавежу"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Утро над Бугом",
              "en": "Morning over the Bug",
              "be": "Раніца над Бугам"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Человека ведет мечта",
              "en": "Man is led by a dream",
              "be": "Чалавека вядзе мара"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Моя семья",
              "en": "My family",
              "be": "Мая сям'я"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Наперекор невзгодам",
              "en": "Contrary to adversity",
              "be": "Насуперак нягодам"
            }
          },
          {
            "year": 1962,
            "film": {
              "ru": "Золотое дно",
              "en": "The Golden Bottom",
              "be": "Залатое дно"
            }
          },
          {
            "year": 1963,
            "film": {
              "ru": "Над рекой Аресой",
              "en": "Above the Aresa River",
              "be": "Над ракой Арэса"
            }
          },
          {
            "year": 1963,
            "film": {
              "ru": "Рядом друзья",
              "en": "Friends nearby",
              "be": "Побач сябры"
            }
          },
          {
            "year": 1964,
            "film": {
              "ru": "Конец канители",
              "en": "The end of the gimmick",
              "be": "Канец важданінай"
            }
          },
          {
            "year": 1965,
            "film": {
              "ru": "Дорога без привала",
              "en": "Road without a halt",
              "be": "Дарога без прывалу"
            }
          },
          {
            "year": 1966,
            "film": {
              "ru": "Улицы бессмертия",
              "en": "Streets of Immortality",
              "be": "Вуліцы неўміручасці"
            }
          },
          {
            "year": 1967,
            "film": {
              "ru": "Генерал Пуща",
              "en": "General Forest",
              "be": "Генерал Пушча"
            }
          },
          {
            "year": 1968,
            "film": {
              "ru": "Цветы в декабре",
              "en": "Flowers in December",
              "be": "Кветкі ў снежні"
            }
          },
          {
            "year": 1969,
            "film": {
              "ru": "Сколько счастью лет?",
              "en": "How happy are you?",
              "be": "Колькі шчасцю гадоў?"
            }
          }]
      },
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1970,
            "film": {
              "ru": "Весна верности",
              "en": "Spring of Allegiance",
              "be": "Вясна вернасці"
            }
          },
          {
            "year": 1971,
            "film": {
              "ru": "В огне жизни",
              "en": "In the fire of life",
              "be": "У агні жыцця"
            }
          },
          {
            "year": 1971,
            "film": {
              "ru": "Преемник",
              "en": "Successor",
              "be": "Пераемнік"
            }
          },
          {
            "year": 1971,
            "film": {
              "ru": "Здравствуй, университет!",
              "en": "Hello, University!",
              "be": "Добры дзень, універсітэт!"
            }
          },
          {
            "year": 1971,
            "film": {
              "ru": "Хлеб на кленовых листьях",
              "en": "Maple Leaf Bread",
              "be": "Хлеб на кляновых лісцях"
            }
          },
          {
            "year": 1972,
            "film": {
              "ru": "Баллада о мужестве и любви",
              "en": "Ballad of Courage and Love",
              "be": "Балада пра мужнасць і любоў"
            }
          },
          {
            "year": 1972,
            "film": {
              "ru": "Похороны Притыцкого",
              "en": "The funeral of Pritytsky",
              "be": "Пахаванне Прытыцкага"
            }
          },
          {
            "year": 1973,
            "film": {
              "ru": "Ступени роста",
              "en": "Steps of growth",
              "be": "Прыступкі росту"
            }
          },
          {
            "year": 1974,
            "film": {
              "ru": "Могилев: дни и ночи мужества",
              "en": "Mogilev: days and nights of courage",
              "be": "Магілёў: дні і ночы мужнасці"
            }
          },
          {
            "year": 1975,
            "film": {
              "ru": "О матерях можно рассказывать бесконечно",
              "en": "You can talk endlessly about mother",
              "be": "Аб маці можна расказваць бясконца"
            }
          },
          {
            "year": 1976,
            "film": {
              "ru": "Право на бессмертие",
              "en": "The right to immortality",
              "be": "Права на неўміручасць"
            }
          },
          {
            "year": 1977,
            "film": {
              "ru": "Минск — город-герой",
              "en": "Minsk is a hero city",
              "be": "Мінск - горад-герой"
            }
          },
          {
            "year": 1978,
            "film": {
              "ru": "Пора дерзаний",
              "en": "Time for daring",
              "be": "Пара дерзаний"
            }
          },
          {
            "year": 1978,
            "film": {
              "ru": "Бессмертный подвиг Минска",
              "en": "Immortal feat of Minsk",
              "be": "Неўміручы подзвіг Мінска"
            }
          },
          {
            "year": 1978,
            "film": {
              "ru": "Штрихи к портрету",
              "en": "Strokes to the portrait",
              "be": "Рыскі да партрэта"
            }
          },
          {
            "year": 1979,
            "film": {
              "ru": "Мы — кузнецы",
              "en": "We are blacksmiths",
              "be": "Мы - кавалі"
            }
          },
          {
            "year": 1979,
            "film": {
              "ru": "Празднование освобождения",
              "en": "Celebration of liberation",
              "be": "Святкаванне вызвалення"
            }
          }]
      },
      {
        'period': '1980\'s', 'information': [
          {
            "year": 1980,
            "film": {
              "ru": "5 лет и вся жизнь",
              "en": "5 years and all life",
              "be": "5 гадоў і ўсё жыццё"
            }
          },
          {
            "year": 1980,
            "film": {
              "ru": "Три цвета радости",
              "en": "Three colors of joy",
              "be": "Тры колеру радасці"
            }
          },
          {
            "year": 1980,
            "film": {
              "ru": "На тревожных перекрестках",
              "en": "At disturbing intersections",
              "be": "На трывожных скрыжаваннях"
            }
          },
          {
            "year": 1981,
            "film": {
              "ru": "Доброго вам здоровья",
              "en": "I wish you good health",
              "be": "Добрага вам здароўя"
            }
          },
          {
            "year": 1984,
            "film": {
              "ru": "Рельсовая война",
              "en": "Rail War",
              "be": "Рэйкавая вайна"
            }
          },
          {
            "year": 1984,
            "film": {
              "ru": "Три удара",
              "en": "Three hits",
              "be": "Тры ўдары"
            }
          },
          {
            "year": 1984,
            "film": {
              "ru": "Постижение тайны",
              "en": "Understanding the mystery",
              "be": "Зразуменне таямніцы"
            }
          },
          {
            "year": 1985,
            "film": {
              "ru": "Бегомльская легенда",
              "en": "Begoml legend",
              "be": "Бягомльская легенда"
            }
          },
          {
            "year": 1985,
            "film": {
              "ru": "Трудные радости",
              "en": "Difficult Joys",
              "be": "Цяжкія радасці"
            }
          },
          {
            "year": 1986,
            "film": {
              "ru": "Старовойтов отвечает Си-Эн-Эн",
              "en": "Starovoitov answers CNN",
              "be": "Старавойтаў адказвае Сі-Эн-Эн"
            }
          },
          {
            "year": 1986,
            "film": {
              "ru": "Улица младшего лейтенанта Степанова",
              "en": "Street of the second lieutenant Stepanov",
              "be": "Вуліца малодшага лейтэнанта Сцяпанава"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Минск",
          "en": "Minsk",
          "be": "Мінск"
        },
        "coordinate": {
          "lat": 53.91667,
          "lon": 27.55
        }
      },
      {
        "place": {
          "ru": "Беларусьфильм",
          "en": "Belarusfilm",
          "be": "Беларусьфільм"
        },
        "coordinate": {
          "lat": 53.9275797,
          "lon": 27.6276866
        }
      }
    ],
    "photoGallery": [],
    "description": {
      "ru": "Советский кинооператор и режиссёр документального кино",
      "en": "Soviet cameraman and documentary director",
      "be": "Савецкі кінааператар і рэжысёр дакументальнага кіно"
    },
    "fullDescription": {
      "ru": "Советский кинооператор и режиссёр документального кино. Народный артист БССР (1973). Лауреат Сталинской премии второй степени (1943). Член ВКП(б) с 1942 года",
      "en": "Soviet cameraman and documentary film director. People's Artist of the BSSR (1973). Laureate of the Stalin Prize of the second degree (1943). Member of the CPSU (b) since 1942",
      "be": "Савецкі кінааператар і рэжысёр дакументальнага кіно. Народны артыст БССР (1973). Лаўрэат Сталінскай прэміі другой ступені (1943). Член ВКП (б) з 1942 году"
    },
    "picture": "https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRjlKHB3ejhaL-7yDrgUCcjw",
    "yearsOfLife": "24.12.1909 - 29.08.1998",
    "placeOfBirth": {
      "ru": "Минск",
      "en": "Minsk",
      "be": "Мінск"
    },
    "youtubeFilm": "",
    "awards": 4
  },
  {
    "name": {
      "ru": "Александр",
      "en": "Alexander",
      "be": "Аляксандр"
    },
    "surname": {
      "ru": "Гинцбург",
      "en": "Gunzburg",
      "be": "Гінцбург"
    },
    "patronymic": {
      "ru": "Ильич",
      "en": "Ilyich",
      "be": "Ільіч"
    },
    "biography": [
      {
        "years": "1907",
        "do": {
          "ru": "Родился в Рогачёве (ныне Гомельская область, Беларусь)",
          "en": "Born in Rogachev (now Gomel region, Belarus)",
          "be": "Нарадзіўся ў Рагачове (цяпер Гомельская вобласць, Беларусь)"
        }
      },
      {
        "years": "1927",
        "do": {
          "ru": "Оператор на Ленфильме (тогда Совкино)",
          "en": "The operator on Lenfilm (then Sovkino)",
          "be": "Аператар на Ленфільме (тады Савкіно)"
        }
      },
      {
        "years": "1934",
        "do": {
          "ru": "Высшее образование получил в Ленинграде (Ленинградский фотокинотехникум)",
          "en": "Received higher education in Leningrad (Leningrad Photographic and Film Technology College)",
          "be": "Вышэйшую адукацыю атрымаў у Ленінградзе (Ленінградскі фотакінатэхнікум)"
        }
      },
      {
        "years": "1941",
        "do": {
          "ru": "Во время войны работа на ЦОКС (Ташкент)",
          "en": "During the war, work at the Central Exhibition Center (Tashkent)",
          "be": "Падчас вайны праца на ЦОКС (Ташкент)"
        }
      },
      {
        "years": "1943",
        "do": {
          "ru": "Работа на киностудии имени М. Горького(тогда Союздетфильм)",
          "en": "Work at the M. Gorky film studio (then Soyuzdetfilm)",
          "be": "Праца на кінастудыі імя М. Горкага (тады Саюздетфільм)"
        }
      },
      {
        "years": "1950-",
        "do": {
          "ru": "Работа на студии Беларусьфильм",
          "en": "Work at the Belarusfilm studio",
          "be": "Праца на студыі Беларусьфільм"
        }
      },
      {
        "years": "1972",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": "Памёр"
        }
      }
    ],
    "filmography": [
      {
        'period': '1920\'s', 'information': [
          {
            "year": 1927,
            "film": {
              "ru": "Поэт и царь",
              "en": "Poet and King",
              "be": "Паэт і цар"
            }
          }]
      },
      {
        'period': '1950\'s', 'information': [
          {
            "year": 1953,
            "film": {
              "ru": "Бай и батрак",
              "en": "Rich and farm laborer",
              "be": "Бай і парабак"
            }
          },
          {
            "year": 1959,
            "film": {
              "ru": "Однажды ночью",
              "en": "One night",
              "be": "Аднойчы ноччу"
            }
          }]
      },
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1965,
            "film": {
              "ru": "Гиперболоид инженера Гарина",
              "en": "Engineer Hyperboloid Garin",
              "be": "Гіпербалоід інжынера Гарына"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Рогaчёв",
          "en": "Rogachev",
          "be": "Рагaчоў"
        },
        "coordinate": {
          "lat": 53.1,
          "lon": 30.05
        }
      },
      {
        "place": {
          "ru": "Ташкент",
          "en": "Tashkent",
          "be": "Ташкент"
        },
        "coordinate": {
          "lat": 41.3,
          "lon": 69.26667
        }
      },
      {
        "place": {
          "ru": "Киностудия имени Горького",
          "en": "Gorky Film Studio",
          "be": "Кінастудыя імя Горкага"
        },
        "coordinate": {
          "lat": 55.8339864,
          "lon": 37.6386315
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Поэт и царь",
          "en": "Poet and King",
          "be": "Паэт і цар"
        },
        "picture": "https://cdn-st3.rtr-vesti.ru/vh/pictures/b/280/862.jpg"
      },
      {
        "about": {
          "ru": "Поэт и царь",
          "en": "Poet and King",
          "be": "Паэт і цар"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/5544/5799.jpg"
      },
      {
        "about": {
          "ru": "Гиперболоид инженера Гарина",
          "en": "Engineer Hyperboloid Garin",
          "be": "Гіпербалоід інжынера Гарына"
        },
        "picture": "https://i.ytimg.com/vi/AGCPJNlLG1o/maxresdefault.jpg"
      },
      {
        "about": {
          "ru": "Гиперболоид инженера Гарина",
          "en": "Engineer Hyperboloid Garin",
          "be": "Гіпербалоід інжынера Гарына"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/1371/12096.jpg"
      }
    ],
    "description": {
      "ru": "Советский кинооператор и режиссёр",
      "en": "Soviet cameraman and director",
      "be": "Савецкі кінааператар і рэжысёр"
    },
    "fullDescription": {
      "ru": "Советский кинооператор и режиссёр",
      "en": "Soviet cameraman and director",
      "be": "Савецкі кінааператар і рэжысёр"
    },
    "picture": "https://www.kino-teatr.ru/acter/album/25515/10383.jpg",
    "yearsOfLife": "01.03.1907 - 10.03.1972",
    "placeOfBirth": {
      "ru": "Рогачёв",
      "en": "Rogachev",
      "be": "Рагaчоў"
    },
    "youtubeFilm":
      "AGCPJNlLG1o",
    "awards": 3
  },
  {
    "name": {
      "ru": "Лев",
      "en": "Lev",
      "be": "Леў"
    },
    "surname": {
      "ru": "Голуб",
      "en": "Golub",
      "be": "Голуб"
    },
    "patronymic": {
      "ru": "Владимирович",
      "en": "Vladimirovich",
      "be": "Уладзіміравіч"
    },
    "biography": [
      {
        "years": "1904",
        "do": {
          "ru": "Родился в Екатеринославе",
          "en": "Born in Yekaterinoslav",
          "be": "Нарадзіўся ў Екацярынаславе"
        }
      },
      {
        "years": "1922",
        "do": {
          "ru": "Учился в учительской семинарии в Екатеринославе",
          "en": "Studied at a teacher’s seminary in Yekaterinoslav",
          "be": "Вучыўся ў настаўніцкай семінарыі ў Екацярынаславе"
        }
      },
      {
        "years": "1928",
        "do": {
          "ru": "Окончил Государственный техникум кинематографии (теперь Всероссийский государственный университет кинематографии имени С. А. Герасимова)",
          "en": "Graduated from the State College of Cinematography (now the All-Russian State University of Cinematography named after S. A. Gerasimov)",
          "be": "Скончыў Дзяржаўны тэхнікум кінематаграфіі (цяпер Усерасійскі дзяржаўны універсітэт кінематаграфіі імя С. А. Герасімава)"
        }
      },
      {
        "years": "1928 — 1934",
        "do": {
          "ru": "Режиссëр на студии Совкино",
          "en": "Director at Sovkino Studio",
          "be": "Рэжысëр на студыі Совкино"
        }
      },
      {
        "years": "1934 — 1937",
        "do": {
          "ru": "Режиссëр на Одесской киностудии",
          "en": "Director at the Odessa film studio",
          "be": "Рэжысëр на Адэскай кінастудыі"
        }
      },
      {
        "years": "1937 — 1938",
        "do": {
          "ru": "Режиссëр на Киевской киностудии",
          "en": "Director at the Kiev film studio",
          "be": "Рэжысëр на Кіеўскай кінастудыі"
        }
      },
      {
        "years": "1938—1941",
        "do": {
          "ru": "Режиссëр на Московской киностудии научно-популярных фильмов",
          "en": "Director at the Moscow film studio of popular science films",
          "be": "Рэжысëр на Маскоўскай кінастудыі навукова-папулярных фільмаў"
        }
      },
      {
        "years": "1940—1941",
        "do": {
          "ru": "Режиссëр на Минской киностудии",
          "en": "Director at the Minsk film studio",
          "be": "Рэжысëр на Мінскай кінастудыі"
        }
      },
      {
        "years": "1941",
        "do": {
          "ru": "Режиссëр на киностудии Мосфильм",
          "en": "Director at the Mosfilm film studio",
          "be": "Рэжысëр на кінастудыі Масфільм"
        }
      },
      {
        "years": "1941—1943",
        "do": {
          "ru": "Режиссëр на Центральной Объединëнной киностудии художественных фильмов — ЦОКС (Алма-Ата)",
          "en": "Director at the Central United Film Studios of Feature Films - CUFS (Alma-Ata)",
          "be": "Рэжысëр на Цэнтральнай Аб'яднанный кінастудыі мастацкіх фільмаў - ЦАКС (Алма-Ата)"
        }
      },
      {
        "years": "1943—1946",
        "do": {
          "ru": "Режиссëр на Новосибирской киностудии научно-популярных фильмов",
          "en": "Director at the Novosibirsk film studio of popular science films",
          "be": "Рэжысëр на Новасібірскай кінастудыі навукова-папулярных фільмаў"
        }
      },
      {
        "years": "1946",
        "do": {
          "ru": "Режиссëр на киностудии Беларусьфильм",
          "en": "Director at the Belarusfilm film studio",
          "be": "Рэжысëр на кінастудыі Беларусьфільм"
        }
      },
      {
        "years": "1959-1994",
        "do": {
          "ru": "Художественный руководителель учебной студии киноактера при Белорусском театрально-художественном институте",
          "en": "Artistic director of a training studio for a film actor at the Belarusian Theater and Art Institute",
          "be": "Мастацкі кіраунік вучэбнай студыі кінаакцёра пры Беларускім тэатральна-мастацкім інстытуце"
        }
      },
      {
        "years": "1994",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": ""
        }
      }
    ],
    "filmography": [
      {
        'period': '1920\'s', 'information': [
          {
            "year": 1929,
            "film": {
              "ru": "Счастливые кольца (Ножи)",
              "en": "Happy rings (Knives)",
              "be": "Шчаслівыя кольцы (Нажы)"
            }
          }]
      },
      {
        'period': '1930\'s', 'information': [
          {
            "year": 1930,
            "film": {
              "ru": "Песнь о первой девушке (Первая девушка)",
              "en": "Song of the first girl (First girl)",
              "be": "Песьня пра першую дзяўчынку (Першая дзяўчына)"
            }
          },
          {
            "year": 1936,
            "film": {
              "ru": "Половодье",
              "en": "High water",
              "be": "Разводдзе"
            }
          }]
      },
      {
        'period': '1940\'s', 'information': [
          {
            "year": 1947,
            "film": {
              "ru": "Беловежская пуща (документальный фильм)",
              "en": "Belovezhskaya Pushcha (documentary)",
              "be": "Белавежская пушча (дакументальны фільм)"
            }
          },
          {
            "year": 1948,
            "film": {
              "ru": "Советская Белоруссия (документальный фильм)",
              "en": "Soviet Belarus (documentary)",
              "be": "Савецкая Беларусь (дакументальны фільм)"
            }
          },
          {
            "year": 1949,
            "film": {
              "ru": "Счастье народа (документальный фильм)",
              "en": "The happiness of the people (documentary)",
              "be": "Шчасце народа (дакументальны фільм)"
            }
          }]
      },
      {
        'period': '1950\'s', 'information': [
          {
            "year": 1954,
            "film": {
              "ru": "Дети партизана",
              "en": "Partisan children",
              "be": "Дзеці партызана"
            }
          },
          {
            "year": 1956,
            "film": {
              "ru": "Миколка-паровоз (Начало пути)",
              "en": "Mikolka steam locomotive (Beginning of the journey)",
              "be": "Міколка-паравоз (Пачатак шляху)"
            }
          },
          {
            "year": 1959,
            "film": {
              "ru": "Девочка ищет отца",
              "en": "Girl is looking for a father",
              "be": "Дзяўчынка шукае бацьку"
            }
          }]
      },
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1962,
            "film": {
              "ru": "Улица младшего сына",
              "en": "Street of the youngest son",
              "be": "Вуліца малодшага сына"
            }
          },
          {
            "year": 1965,
            "film": {
              "ru": "Пущик едет в Прагу (СССР, Чехословакия)",
              "en": "Puschik goes to Prague (USSR, Czechoslovakia)",
              "be": "Пущык едзе ў Прагу (СССР, Чэхаславакія)"
            }
          },
          {
            "year": 1967,
            "film": {
              "ru": "Анютина дорога",
              "en": "Anyutina road",
              "be": "Анюціна дарога"
            }
          }]
      },
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1971,
            "film": {
              "ru": "Полонез Огинского",
              "en": "Oginsky Polonaise",
              "be": "Паланэз Агінскага"
            }
          },
          {
            "year": 1975,
            "film": {
              "ru": "Маленький сержант (СССР, Чехословакия)",
              "en": "Little sergeant (USSR, Czechoslovakia))",
              "be": "Маленькі сяржант (СССР, Чэхаславакія)"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Днепр",
          "en": "Dnipro",
          "be": "Днепр"
        },
        "coordinate": {
          "lat": 48.4666008,
          "lon": 34.72
        }
      },
      {
        "place": {
          "ru": "Белорусская государственная академия искусств",
          "en": "Belarusian State Academy of Arts",
          "be": "Беларуская дзяржаўная акадэмія мастацтваў"
        },
        "coordinate": {
          "lat": 53.9226577,
          "lon": 27.5988599
        }
      },
      {
        "place": {
          "ru": "Всероссийский государственный университет кинематографии имени С. А. Герасимова",
          "en": "All-Russian State University of Cinematography named after S. A. Gerasimov",
          "be": "Усерасійскі дзяржаўны універсітэт кінематаграфіі імя С. А. Герасімава"
        },
        "coordinate": {
          "lat": 55.7856664,
          "lon": 37.6337376
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Дети партизанов",
          "en": "Partisan children",
          "be": "Дзеці партызанаў"
        },
        "picture": "https://i.ytimg.com/vi/g6CaDjBrhbE/hqdefault.jpg"
      },
      {
        "about": {
          "ru": "Миколка паровоз",
          "en": "Mykolka steam locomotive",
          "be": "Міколка паравоз"
        },
        "picture": "https://upload.wikimedia.org/wikipedia/ru/thumb/2/2e/Mikolka_parovoz.jpg/270px-Mikolka_parovoz.jpg"
      },
      {
        "about": {
          "ru": "Девочка ищет отца",
          "en": "Girl is looking for a father",
          "be": "Дзяўчынка шукае бацьку"
        },
        "picture": "https://i.ytimg.com/vi/NGstTg6sSfw/hqdefault.jpg"
      }
    ],
    "description": {
      "ru": "Советский и белорусский кинорежиссёр, сценарист",
      "en": "Soviet and Belarusian film director, screenwriter",
      "be": "Савецкі і беларускі кінарэжысёр, сцэнарыст"
    },
    "fullDescription": {
      "ru": "Советский и белорусский кинорежиссёр, сценарист. Народный артист БССР (1964)",
      "en": "Soviet and Belarusian film director, screenwriter. People's Artist of the BSSR (1964)",
      "be": "Савецкі і беларускі кінарэжысёр, сцэнарыст. Народны артыст БССР (1964)"
    },
    "picture": "https://www.kino-teatr.ru/acter/foto/sov/30853.jpg",
    "yearsOfLife": "29.09.1904 - 26.05.1994",
    "placeOfBirth": {
      "ru": "Днепр",
      "en": "Dnipro",
      "be": "Днепр"
    },
    "youtubeFilm": "5X1bTL7U7xo",
    "awards": 14
  },
  {
    "name": {
      "ru": "Александр",
      "en": "Alexander",
      "be": "Аляксандр"
    },
    "surname": {
      "ru": "Гуткович",
      "en": "Gutkovich",
      "be": "Гутковіч"
    },
    "patronymic": {
      "ru": "Захарович",
      "en": "Zakharovich",
      "be": "Захаравіч"
    },
    "biography": [
      {
        "years": "1920",
        "do": {
          "ru": "Родился в местечке Аскеры (ныне Бешенковичский район, Витебская область, Белоруссия) в семье кузнеца Залмана и Цивы Гуткович. Окончил сельскую школу",
          "en": "Born in the town of Askera (now Beshenkovichi district, Vitebsk region, Belarus) in the family of the blacksmith Zalman and Ziva Gutkovich. He graduated from the village school",
          "be": "Нарадзіўся ў мястэчку Аскер (цяпер Бешанковіцкі раён, Віцебская вобласць, Беларусь) у сям'і каваля Залмана і Цивы Гутковіч. Скончыў сельскую школу"
        }
      },
      {
        "years": "1939",
        "do": {
          "ru": "Учился в театральной студии Большого драматического театра в Ленинграде, затем в Ленинградском театральном институте, на режиссёрском факультете",
          "en": "He studied at the theater studio of the Bolshoi Drama Theater in Leningrad, then at the Leningrad Theater Institute, at the directing department",
          "be": "Вучыўся ў тэатральнай студыі Вялікага драматычнага тэатра ў Ленінградзе, затым у Ленінградскім тэатральным інстытуце, на рэжысёрскім факультэце"
        }
      },
      {
        "years": "1941",
        "do": {
          "ru": "Участник Великой Отечественной войны. За боевые заслуги награждён орденом Отечественной войны II степени, орденом Красной Звезды и медалями",
          "en": "Member of the Great Patriotic War. For military merits, he was awarded the Order of the Patriotic War II degree, the Order of the Red Star and medals",
          "be": "Удзельнік Вялікай Айчыннай вайны. За баявыя заслугі ўзнагароджаны ордэнам Айчыннай вайны II ступені, ордэнам Чырвонай Зоркі і медалямі"
        }
      },
      {
        "years": "1945",
        "do": {
          "ru": "Демобилизовался и поступил на актёрский факультет Белорусского театрально-художественного института (мастерская Е.А. Мировича)",
          "en": "He was demobilized and entered the acting department of the Belarusian Theater and Art Institute (workshop of EA Mirovich)",
          "be": "Дэмабілізаваўся і паступіў на акцёрскі факультэт Беларускага тэатральна-мастацкага інстытута (майстэрня Я.А. Міровіча)"
        }
      },
      {
        "years": "1949",
        "do": {
          "ru": "Актёр Белорусского государственного драматического театра имени Якуба Коласа",
          "en": "Actor of the Belarusian State Drama Theater named after Yakub Kolas",
          "be": "Акцёр Беларускага дзяржаўнага драматычнага тэатра імя Якуба Коласа"
        }
      },
      {
        "years": "1957",
        "do": {
          "ru": "Педагог Белорусского республиканского театра юного зрителя",
          "en": "Teacher of the Belarusian Republican Theater for Young Spectators",
          "be": "Педагог Беларускага рэспубліканскага тэатра юнага гледача"
        }
      },
      {
        "years": "1959",
        "do": {
          "ru": "Режиссёр студии Белорусского телевидения",
          "en": "Director of the Belarusian Television Studio",
          "be": "Рэжысёр студыі Беларускага тэлебачання"
        }
      },
      {
        "years": "1961",
        "do": {
          "ru": "Член СП СССР",
          "en": "Member of the Union of Writers of the USSR",
          "be": "Член СП СССР"
        }
      },
      {
        "years": "1989",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": "Памёр"
        }
      }
    ],
    "filmography": [
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1965,
            "film": {
              "ru": "Люди на болоте",
              "en": "People in the Swamp",
              "be": "Людзі на балоце"
            }
          },
          {
            "year": 1968,
            "film": {
              "ru": "Тревожное счастье (фильм-спектакль)",
              "en": "Anxious happiness (film-performance)",
              "be": "Трывожнае шчасце (фільм-спектакль)"
            }
          }]
      },
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1971,
            "film": {
              "ru": "Вся королевская рать",
              "en": "The whole royal army",
              "be": "Уся каралеўская раць"
            }
          }]
      },
      {
        'period': '1980\'s', 'information': [
          {
            "year": 1980,
            "film": {
              "ru": "Атланты и кариатиды",
              "en": "Atlantes and Caryatids",
              "be": "Атланты і карыятыды"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Аскеры (Бешенковичский район)",
          "en": "Asker (Beshenkovichi district)",
          "be": "Аскеры (Бешанковіцкі раён)"
        },
        "coordinate": {
          "lat": 54.968357,
          "lon": 29.395331
        }
      },
      {
        "place": {
          "ru": "Национальный академический драматический театр имени Якуба Коласа",
          "en": "National Academic Drama Theater named after Yakub Kolas",
          "be": "Нацыянальны акадэмічны драматычны тэатр імя Якуба Коласа"
        },
        "coordinate": {
          "lat": 55.193633,
          "lon": 30.201486
        }
      },
      {
        "place": {
          "ru": "Российский государственный институт сценических искусств",
          "en": "Russian State Institute of Performing Arts",
          "be": "Расійскі дзяржаўны інстытут сцэнічных мастацтваў"
        },
        "coordinate": {
          "lat": 59.940603,
          "lon": 30.345817
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Атланты и кариатиды",
          "en": "Atlantes and Caryatids",
          "be": "Атланты і карыятыды"
        },
        "picture": "https://vdp.mycdn.me/getImage?id=530158258794&idx=1&thumbType=32"
      },
      {
        "about": {
          "ru": "Атланты и кариатиды",
          "en": "Atlantes and Caryatids",
          "be": "Атланты і карыятыды"
        },
        "picture": "https://www.kino-teatr.ru/acter/album/2806/798316.jpg"
      },
      {
        "about": {
          "ru": "Вся королевская рать",
          "en": "The whole royal army",
          "be": "Уся каралеўская раць"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/1267/30730.jpg"
      },
      {
        "about": {
          "ru": "Вся королевская рать",
          "en": "The whole royal army",
          "be": "Уся каралеўская раць"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/1267/30730.jpg"
      },
      {
        "about": {
          "ru": "Вся королевская рать",
          "en": "The whole royal army",
          "be": "Уся каралеўская раць"
        },
        "picture": "https://www.kino-teatr.ru/movie/kadr/1267/30739.jpg"
      },
      {
        "about": {
          "ru": "Вся королевская рать",
          "en": "The whole royal army",
          "be": "Уся каралеўская раць"
        },
        "picture": "https://sovetskiymultik.at.ua/4/vsja.korolevskaja.rat.1971.3.0-21-59.419.jpg"
      }
    ],
    "description": {
      "ru": "Советский и белорусский кинорежиссёр, сценарист и драматург",
      "en": "Soviet and Belarusian film director, screenwriter and playwright",
      "be": "Савецкі і беларускі кінарэжысёр, сцэнарыст і драматург"
    },
    "fullDescription": {
      "ru": "Советский и белорусский кинорежиссёр, сценарист и драматург. Заслуженный деятель искусств Белорусской ССР (1981). Лауреат Государственной премии Белорусской ССР (1966)",
      "en": "Soviet and Belarusian film director, screenwriter and playwright. Honored Artist of the Belarusian SSR (1981). State Prize of the Belarusian SSR (1966)",
      "be": "Савецкі і беларускі кінарэжысёр, сцэнарыст і драматург. Заслужаны дзеяч мастацтваў Беларускай ССР (1981). Лаўрэат Дзяржаўнай прэміі Беларускай ССР (1966)"
    },
    "picture": "https://upload.wikimedia.org/wikipedia/ru/5/51/Alexander_Zakharovich_Gutkovich.jpg",
    "yearsOfLife": "20.12.1920 - 19.09.1989",
    "placeOfBirth": {
      "ru": "Аскеры",
      "en": "Askery",
      "be": "Аскеры"
    },
    "youtubeFilm": "HcNpMn3o5Gs",
    "awards": 2
  },
  {
    "name": {
      "ru": "Виктор",
      "en": "Victor",
      "be": "Віктар"
    },
    "surname": {
      "ru": "Дашук",
      "en": "Dashuk",
      "be": "Дашук"
    },
    "patronymic": {
      "ru": "Никифорович",
      "en": "Nikiforovich",
      "be": "Нічыпаравіч"
    },
    "biography": [
      {
        "years": "1938",
        "do": {
          "ru": "Родился  в деревне Валоки Хойницкого района Гомельской области",
          "en": "Born in the village of Valoki, Khoynitsky district of the Gomel region",
          "be": "Нарадзіўся ў вёсцы Валок Хойніцкага раёна Гомельскай вобласці"
        }
      },
      {
        "years": "1960",
        "do": {
          "ru": "Закончил факультет журналистики Белорусского Государственного университета  ВСРК (мастерская Леонида Трауберга)",
          "en": "Graduated from the Faculty of Journalism of the Belarusian State University of the FIRC (workshop of Leonid Trauberg)",
          "be": "Скончыў факультэт журналістыкі Беларускага Дзяржаўнага універсітэта УСРК (майстэрня Леаніда Трауберга)"
        }
      },
      {
        "years": "1960",
        "do": {
          "ru": "Работа на киностудии 'Беларусьфильм'. Был администратором, ассистентом оператора, режиссёра",
          "en": "Work at the film studio 'Belarusfilm'. He was the administrator, assistant operator, director",
          "be": "Праца на кінастудыі 'Беларусьфільм'. Быў адміністратарам, асістэнтам аператара, рэжысёра"
        }
      },
      {
        "years": "1963",
        "do": {
          "ru": "Режиссёр, оператор, сценарист документального и игрового кино",
          "en": "Director, cameraman, screenwriter of documentary and feature films",
          "be": "Рэжысёр, аператар, сцэнарыст дакументальнага і ігравога кіно"
        }
      },
      {
        "years": "1967",
        "do": {
          "ru": "Окончил Высшие курсы сценаристов и режиссёров в Москве (отделение кинорежиссуры, мастерская Л.Трауберга)",
          "en": "Graduated from the Higher Courses for Scriptwriters and Directors in Moscow (film directing department, L. Trauberg workshop)",
          "be": "Скончыў Вышэйшыя курсы сцэнарыстаў і рэжысёраў у Маскве (аддзяленне кінарэжысуры, майстэрня Л.Трауберга)"
        }
      },
      {
        "years": "1989-1993",
        "do": {
          "ru": "Профессор Белорусской государственной академии искусств, руководитель мастерской режиссуры документального кино",
          "en": "Professor of the Belarusian State Academy of Arts, head of the workshop for directing documentaries",
          "be": "Прафесар Беларускай дзяржаўнай акадэміі мастацтваў, кіраўнік майстэрні рэжысуры дакументальнага кіно"
        }
      },
      {
        "years": "1993",
        "do": {
          "ru": "Секретарь правления Союза кинематографистов БССР",
          "en": "Secretary of the Board of the Union of Cinematographers of the BSSR",
          "be": "Сакратар праўлення Саюза кінематаграфістаў БССР"
        }
      },
      {
        "years": "1993-2005",
        "do": {
          "ru": "Основал студию Спадар Д.",
          "en": "Founded Spadar D. Studio",
          "be": "Заснаваў студыю Спадар Д."
        }
      }
    ],
    "filmography": [
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1970,
            "film": {
              "ru": "Дом",
              "en": "Home",
              "be": "Дом"
            }
          },
          {
            "year": 1970,
            "film": {
              "ru": "Безумству храбрых",
              "en": "Madness of the Brave",
              "be": "Вар'яцтву адважных"
            }
          },
          {
            "year": 1970,
            "film": {
              "ru": "Давным-давно окончен бой",
              "en": "The battle was long gone",
              "be": "Даўным-даўно скончаны бой"
            }
          },
          {
            "year": 1972,
            "film": {
              "ru": "А кукушка куковала…",
              "en": "And the cuckoo crowed ...",
              "be": "А зязюля кукавала ..."
            }
          },
          {
            "year": 1973,
            "film": {
              "ru": "Биография полонеза ля минор",
              "en": "Biography of Polonaise in A Minor",
              "be": "Біяграфія паланэза ля мінор"
            }
          },
          {
            "year": 1975,
            "film": {
              "ru": "Я из огненной деревни",
              "en": "I am from the fiery village",
              "be": "Я з вогненнай вёскі"
            }
          },
          {
            "year": 1977,
            "film": {
              "ru": "Тонежские бабы",
              "en": "Tonezh women",
              "be": "Тонежскія бабы"
            }
          }]
      },
      {
        'period': '1980\'s', 'information': [
          {
            "year": 1980,
            "film": {
              "ru": "Прощание",
              "en": "Farewell",
              "be": "Развітанне"
            }
          },
          {
            "year": 1980,
            "film": {
              "ru": "У войны не женское лицо",
              "en": "The war does not have a female face",
              "be": "У вайны не жаночы твар"
            }
          },
          {
            "year": 1980,
            "film": {
              "ru": "Девяносто шестая осень",
              "en": "Ninety-sixth autumn",
              "be": "Дзевяноста шостая восень"
            }
          },
          {
            "year": 1981,
            "film": {
              "ru": "Труба",
              "en": "Pipe",
              "be": "Труба"
            }
          },
          {
            "year": 1984,
            "film": {
              "ru": "Василь Быков. Восхождение",
              "en": "Vasil Bykov. Ascent",
              "be": "Васіль Быкаў. Узыходжанне"
            }
          },
          {
            "year": 1987,
            "film": {
              "ru": "Двое на острове слёз",
              "en": "Two on the island of tears",
              "be": "Двое на востраве слёз"
            }
          },
          {
            "year": 1989,
            "film": {
              "ru": "Витебское дело",
              "en": "Vitebsk affair",
              "be": "Віцебская справа"
            }
          },
          {
            "year": 1989,
            "film": {
              "ru": "Чурбанов и другие",
              "en": "Churbanov and others",
              "be": "Чурбакоў і іншыя"
            }
          }]
      },
      {
        'period': '1990\'s', 'information': [
          {
            "year": 1990,
            "film": {
              "ru": "Форс-мажор",
              "en": "Force Major",
              "be": "Форс-мажор"
            }
          },

          {
            "year": 1995,
            "film": {
              "ru": "Сладкий яд любви",
              "en": "Sweet Poison of Love",
              "be": "Салодкі яд кахання"
            }
          },
          {
            "year": 1997,
            "film": {
              "ru": "Между Сатаной и Богом",
              "en": "Between Satan and God",
              "be": "Паміж Сатаной і Богам"
            }
          },
          {
            "year": 1998,
            "film": {
              "ru": "Ночь длинных ножей",
              "en": "Night of the Long Knives",
              "be": "Ноч доўгіх нажоў"
            }
          }]
      },
      {
        'period': '2000\'s', 'information': [
          {
            "year": 2002,
            "film": {
              "ru": "Репортаж из клетки для кроликов",
              "en": "Report from the cage for rabbits",
              "be": "Рэпартаж з клеткі для трусоў"
            }
          },
          {
            "year": 2003,
            "film": {
              "ru": "Декамерон по-белорусски",
              "en": "Belarusian Decameron",
              "be": "Дэкамерон па-беларуску"
            }
          },
          {
            "year": 2004,
            "film": {
              "ru": "Magnum misteria",
              "en": "Magnum misteria",
              "be": "Magnum misteria"
            }
          },
          {
            "year": 2005,
            "film": {
              "ru": "Солдат Василий Быков",
              "en": "Soldier Vasily Bykov",
              "be": "Салдат Васіль Быкаў"
            }
          },
          {
            "year": 2007,
            "film": {
              "ru": "Женщина легкого поведения по имени Femida",
              "en": "A woman of easy virtue named Femida",
              "be": "Жанчына лёгкіх паводзінаў з імём Femida"
            }
          },
          {
            "year": 2009,
            "film": {
              "ru": "Страсть",
              "en": "Passion",
              "be": "Запал"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Хойники",
          "en": "Khoyniki",
          "be": "Хойнікі"
        },
        "coordinate": {
          "lat": 51.883226,
          "lon": 29.969274
        }
      },
      {
        "place": {
          "ru": "Высшие курсы сценаристов и режиссёров",
          "en": "Higher Courses for Scriptwriters and Directors",
          "be": "Вышэйшыя курсы сцэнарыстаў і рэжысёраў"
        },
        "coordinate": {
          "lat": 55.7688907,
          "lon": 37.5743827
        }
      },
      {
        "place": {
          "ru": "Белорусский государственный университет",
          "en": "Belarusian State University",
          "be": "Беларускі дзяржаўны універсітэт"
        },
        "coordinate": {
          "lat": 53.89389,
          "lon": 27.547083
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Женщина легкого поведения по имени Femida",
          "en": "A woman of easy virtue named Femida",
          "be": "Жанчына лёгкіх паводзінаў з імём Femida"
        },
        "picture": "https://imgprx.livejournal.net/2d761c8e81890b64c9488152d507a525eedbce84/U3IPXBk8thAS2ky7OMZvgLhI9sP1a-eMAYLr_QfAi8qT1VUjF49hDQYGiu37ka7BLl8uQaUVEiwSyai99wmxsxsOLpwWDUmoZNVr2P__yOJVv2o8406Q_Fs9zWRqGdMdye6QtWR9Lj1WZlVSDW-ybw"
      },
      {
        "about": {
          "ru": "Женщина легкого поведения по имени Femida",
          "en": "A woman of easy virtue named Femida",
          "be": "Жанчына лёгкіх паводзінаў з імём Femida"
        },
        "picture": "https://imgprx.livejournal.net/30afaaaa87777b6d1f60f3a962d06c5f4053cc47/U3IPXBk8thAS2ky7OMZvgL7-6xzzTXuv2MdfhdyDAZGGziYYu1NilS2H-74ANRAZSPQKxING7YwtRxgS8vT4L-F6HlRwy0gB5iuHDayJpsAZmCxFsV336drotZbFqbGI4TzduoI4b5BPSKDUkr0xPg"
      },
      {
        "about": {
          "ru": "Репортаж из клетки для кроликов",
          "en": "Report from the cage for rabbits",
          "be": "Рэпартаж з клеткі для трусоў"
        },
        "picture": "https://i.ytimg.com/vi/HIhnq2PmEUo/hqdefault.jpg"
      }
    ],
    "description": {
      "ru": "Советский белорусский кинорежиссёр-документалист",
      "en": "Soviet Belarusian documentary filmmaker",
      "be": "Савецкі беларускі кінарэжысёр-дакументаліст"
    },
    "fullDescription": {
      "ru": "Советский белорусский кинорежиссёр-документалист. Лауреат Государственной премии СССР (1985), Заслуженный деятель искусств Белорусской ССР (1977), Народный артист Белорусской ССР (1989). Член КПСС с 1976 года",
      "en": "Soviet Belarusian film director and documentary. Laureate of the USSR State Prize (1985), Honored Artist of the Byelorussian SSR (1977), People's Artist of the Byelorussian SSR (1989). Member of the CPSU since 1976",
      "be": "Савецкі беларускі кінарэжысёр-дакументаліст. Лаўрэат Дзяржаўнай прэміі СССР (1985), Заслужаны дзеяч мастацтваў Беларускай ССР (1977), Народны артыст Беларускай ССР (1989). Член КПСС з 1976 года"
    },
    "picture": "https://www.kino-teatr.ru/acter/foto/sov/254684.jpg",
    "yearsOfLife": "16.09.1938",
    "placeOfBirth": {
      "ru": "Валоки",
      "en": "Valoca",
      "be": "Валокі"
    },
    "youtubeFilm": "871A1vtH1CY",
    "awards": 5
  },
  {
    "name": {
      "ru": "Владимир",
      "en": "Vladimir",
      "be": "Уладзімір"
    },
    "surname": {
      "ru": "Корш-Саблин",
      "en": "Korsh Sablin",
      "be": "Корш-Саблін"
    },
    "patronymic": {
      "ru": "Владимирович",
      "en": "Vladimirovich",
      "be": "Уладзіміравіч"
    },
    "biography": [
      {
        "years": "1900",
        "do": {
          "ru": "Родился  в Москве",
          "en": "Born in Moscow",
          "be": "Нарадзіўся ў Маскве"
        }
      },
      {
        "years": "1917",
        "do": {
          "ru": "Окончил театральное училище",
          "en": "Graduated from the theater school",
          "be": "Скончыў тэатральнае вучылішча"
        }
      },
      {
        "years": "1925",
        "do": {
          "ru": "Работа помощником, ассистентом режиссёра и актёром киностудии Госкино (Совкино) в Москве",
          "en": "Work as an assistant, assistant director and actor of the Goskino (Sovkino) film studio in Moscow",
          "be": "Праца памочнікам, асістэнтам рэжысёра і акцёрам кінастудыі Дзяржкіно (Савкіно) у Маскве"
        }
      },
      {
        "years": "1926",
        "do": {
          "ru": "Актёр и режиссёр киностудии Советская Беларусь специального управления Белгоскино (позже Беларусьфильм); снимал комедии, фильмы-драмы, биографические фильмы",
          "en": "Actor and director of the film studio Soviet Belarus of the special management Belgoskino (later Belarusfilm); he shot comedies, drama films, biographical films",
          "be": "Акцёр і рэжысёр кінастудыі Савецкая Беларусь спецыяльнага кіравання Белдзяржкіно (пазней Беларусьфільм); здымаў камедыі, фільмы-драмы, біяграфічныя фільмы"
        }
      },
      {
        "years": "1945—1960",
        "do": {
          "ru": "Художественный руководитель киностудии Беларусьфильм",
          "en": "Artistic director of the Belarusfilm film studio",
          "be": "Мастацкі кіраўнік кінастудыі Беларусьфільм"
        }
      },
      {
        "years": "1962—1974",
        "do": {
          "ru": "Первый секретарь Союза кинематографистов БССР. Член Союза кинематографистов СССР",
          "en": "First Secretary of the Union of Cinematographers of the BSSR. Member of the Union of Cinematographers of the USSR",
          "be": "Першы сакратар Саюза кінематаграфістаў БССР. Член Саюза кінематаграфістаў СССР"
        }
      },
      {
        "years": "1974",
        "do": {
          "ru": "Умер",
          "en": "Died",
          "be": "Памёр"
        }
      }
    ],
    "filmography": [
      {
        'period': '1920\'s', 'information': [
          {
            "year": 1929,
            "film": {
              "ru": "В огне рожденная",
              "en": "Born in the fire",
              "be": "У агні народжаная"
            }
          }]
      },
      {
        'period': '1930\'s', 'information': [
          {
            "year": 1930,
            "film": {
              "ru": "Жизнь и учеба кавдивизии (документальный)",
              "en": "Life and study of cavalry division (documentary)",
              "be": "Жыццё і вучоба кавдивизии (дакументальны)"
            }
          },
          {
            "year": 1930,
            "film": {
              "ru": "Из топи болот (документальный)",
              "en": "From the swamp of swamps (documentary)",
              "be": "З твані балот (дакументальны)"
            }
          },
          {
            "year": 1931,
            "film": {
              "ru": "Бумага (документальный)",
              "en": "Paper (documentary)",
              "be": "Папера (дакументальны)"
            }
          },
          {
            "year": 1931,
            "film": {
              "ru": "3 штыка (документальный)",
              "en": "3 bayonets (documentary)",
              "be": "3 штыка (дакументальны)"
            }
          },
          {
            "year": 1931,
            "film": {
              "ru": "Стальной путь (документальный)",
              "en": "Steel path (documentary)",
              "be": "Сталёвы шлях (дакументальны)"
            }
          },
          {
            "year": 1931,
            "film": {
              "ru": "Солнечный поход",
              "en": "Sunny Campaign",
              "be": "Сонечны паход"
            }
          },
          {
            "year": 1933,
            "film": {
              "ru": "Первый взвод",
              "en": "First platoon",
              "be": "Першы ўзвод"
            }
          },
          {
            "year": 1934,
            "film": {
              "ru": "Золотые огни (совместно с Б. Л. Бродянским)",
              "en": "Golden Lights (with B. L. Brodyansky)",
              "be": "Залатыя агні (сумесна з Б. Л. Бродянским)"
            }
          },
          {
            "year": 1936,
            "film": {
              "ru": "Искатели счастья",
              "en": "Seekers of happiness",
              "be": "Шукальнікі шчасця"
            }
          },
          {
            "year": 1937,
            "film": {
              "ru": "Дочь Родины",
              "en": "Daughter of the Motherland",
              "be": "Дачка Радзімы"
            }
          },
          {
            "year": 1939,
            "film": {
              "ru": "Огненные годы",
              "en": "Fiery Years",
              "be": "Вогненныя гады"
            }
          }]
      },
      {
        'period': '1940\'s', 'information': [
          {
            "year": 1940,
            "film": {
              "ru": "Моя любовь",
              "en": "My love",
              "be": "Моё каханне"
            }
          },
          {
            "year": 1942,
            "film": {
              "ru": "Белорусские новеллы (киносборник) (новеллы Пчёлка, На зов матери) (совместно с Ю. В. Таричем)",
              "en": "Belarusian short stories (film collection) (short stories Bee, Call of the mother) (together with Yu. V. Tarich)",
              "be": "Беларускія навелы (киносборник) (навелы Пчёлка, На кліч маці) (сумесна з Ю. В. Тарыч)"
            }
          },
          {
            "year": 1943,
            "film": {
              "ru": "Живи, родная Беларусь! (киноконцерт) (совместно с Н. Ф. Садковичем)",
              "en": "Live, dear Belarus! (cinema concert) (together with N. F. Sadkovich)",
              "be": "Жыві, радімая Беларусь! (Кінаканцэрт) (сумесна з Н. Ф. Садковичем)"
            }
          },
          {
            "year": 1944,
            "film": {
              "ru": "Освобождение советской Белоруссии (документальный) (совместно с Н. Ф. Садковичем)",
              "en": "Liberation of Soviet Belarus (documentary) (together with N. F. Sadkovich)",
              "be": "Вызваленне савецкай Беларусі (дакументальны) (сумесна з Н. Ф. Садковичем)"
            }
          },
          {
            "year": 1947,
            "film": {
              "ru": "Новый дом",
              "en": "New home",
              "be": "Новы дом"
            }
          },
          {
            "year": 1949,
            "film": {
              "ru": "Константин Заслонов (совместно с А. М. Файнциммером)",
              "en": "Konstantin Zaslonov (together with A. M. Fainzimmer)",
              "be": "Канстанцін Заслонаў (сумесна з А. М. Файнциммером)"
            }
          }]
      },
      {
        'period': '1950\'s', 'information': [
          {
            "year": 1951,
            "film": {
              "ru": "Советская Белоруссия (документальный) (совместно с Н. Кравчуновским)",
              "en": "Soviet Belarus (documentary) (together with N. Kravchunovsky)",
              "be": "Савецкая Беларусь (дакументальны) (сумесна з Н. Кравчуновским)"
            }
          },
          {
            "year": 1953,
            "film": {
              "ru": "Поют жаворонки (совместно с К. Н. Санниковым)",
              "en": "Larks sing (together with K. N. Sannikov)",
              "be": "Спяваюць жаўрукі (сумесна з К. Н. Саннікавым)"
            }
          },
          {
            "year": 1954,
            "film": {
              "ru": "Кто смеется последним?",
              "en": "Who laughs last?",
              "be": "Хто смяецца апошнім?"
            }
          },
          {
            "year": 1955,
            "film": {
              "ru": "Посеяли девушки лён",
              "en": "The sown girls of flax",
              "be": "Пасеялі дзяўчыны лён"
            }
          },
          {
            "year": 1958,
            "film": {
              "ru": "Красные листья",
              "en": "Red leaves",
              "be": "Чырвонае лісце"
            }
          }]
      },
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1961,
            "film": {
              "ru": "Первые испытания",
              "en": "First tests",
              "be": "Першыя выпрабаванні"
            }
          },
          {
            "year": 1964,
            "film": {
              "ru": "Москва — Генуя (совместно с А. В. Спешневым и П. Н. Армандом)",
              "en": "Moscow-Genoa (together with A. V. Speshnev and P. N. Armand)",
              "be": "Масква - Генуя (сумесна з А. В. Спешневым і П. Н. Арманд)"
            }
          },
          {
            "year": 1967,
            "film": {
              "ru": "Запомним этот день",
              "en": "Remember this day",
              "be": "Запомнім гэты дзень"
            }
          }]
      },
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1970,
            "film": {
              "ru": "Крушение империи (совместно с Н. А. Калининым)",
              "en": "The collapse of the empire (together with N. A. Kalinin)",
              "be": "Крушэнне імперыі (сумесна з Н. А. Калініным)"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Москва",
          "en": "Moscow",
          "be": "Масква"
        },
        "coordinate": {
          "lat": 55.7251,
          "lon": 37.646921
        }
      },
      {
        "place": {
          "ru": "Беларусьфильм",
          "en": "Belarusfilm",
          "be": "Беларусьфільм"
        },
        "coordinate": {
          "lat": 53.927751,
          "lon": 27.630546
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Крушение империи",
          "en": "The Collapse of the Empire",
          "be": "Крушэнне імперыі"
        },
        "picture": "https://pimg.mycdn.me/getImage?disableStub=true&type=VIDEO_S_720&skipBlack=true&url=http%3A%2F%2Fi.mycdn.me%2Fimage%3Fid%3D860814478315%26t%3D50%26plc%3DWEB%26tkn%3D*KRelvzJRs9y_9xN8vjHHj1t-3YU&signatureToken=CFzchLu4HxVPpNta2DFxDg"
      },
      {
        "about": {
          "ru": "Запомним этот день",
          "en": "Remember this day",
          "be": "Запомнім гэты дзень"
        },
        "picture": "https://kinocccp.ru/wp-content/uploads/2018/11/ramdisk_crop_184756826_7JlK7-min.jpg"
      },
      {
        "about": {
          "ru": "Посеяли девушки лён",
          "en": "The sown girls of flax",
          "be": "Пасеялі дзяўчыны лён"
        },
        "picture": "http://kinoflux.us/uploads/posts/2019-07/1563246705_poseyali-devushki-len-1956.jpg"
      }
    ],
    "description": {
      "ru": "Белорусский советский кинорежиссёр, актёр кино",
      "en": "Belarusian Soviet film director, film actor",
      "be": "Беларускі савецкі кінарэжысёр, акцёр кіно"
    },
    "fullDescription": {
      "ru": "Белорусский советский кинорежиссёр, актёр кино. Народный артист СССР (1969). Лауреат Сталинской премии (1950). Один из основоположников белорусского кино",
      "en": "Belarusian Soviet film director, film actor. People's Artist of the USSR (1969). Stalin Prize winner (1950). One of the founders of Belarusian cinema",
      "be": "Беларускі савецкі кінарэжысёр, акцёр кіно. Народны артыст СССР (1969). Лаўрэат Сталінскай прэміі (1950). Адзін з заснавальнікаў беларускага кіно"
    },
    "picture": "https://upload.wikimedia.org/wikipedia/commons/2/23/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%9A%D0%BE%D1%80%D1%88-%D0%A1%D0%B0%D0%B1%D0%BB%D0%B8%D0%BD.gif",
    "yearsOfLife": "29.03.1900 — 06.07.1974",
    "placeOfBirth": {
      "ru": "Москва",
      "en": "Moscow",
      "be": "Масква"
    },
    "youtubeFilm": "YvbpZZsH32o",
    "awards": 10
  },
  {
    "name": {
      "ru": "Юрий",
      "en": "Yuri",
      "be": "Юрый"
    },
    "surname": {
      "ru": "Хащеватский",
      "en": "Khaschevatsky",
      "be": "Хашчавацкі"
    },
    "patronymic": {
      "ru": "Иосифович",
      "en": "Iosifovich",
      "be": "Іосіфавіч"
    },
    "biography": [
      {
        "years": "1947",
        "do": {
          "ru": "Родился  в Одессе",
          "en": "Born in Odessa",
          "be": "Нарадзіўся ў Адэсе"
        }
      },
      {
        "years": "1973",
        "do": {
          "ru": "Окончил Одесский технологический институт",
          "en": "Graduated from Odessa Technological Institute",
          "be": "Скончыў Адэскі тэхналагічны інстытут"
        }
      },
      {
        "years": "1976",
        "do": {
          "ru": "Режиссёр В Белторгрекламе",
          "en": "Director in Beltorgreklam",
          "be": "Рэжысёр У Белторгрэкламе"
        }
      },
      {
        "years": "1978",
        "do": {
          "ru": "Режиссёр на Белорусском телевидении",
          "en": "Director on Belarusian television",
          "be": "Рэжысёр на Беларускім тэлебачанні"
        }
      },
      {
        "years": "1981",
        "do": {
          "ru": "Окончил ЛГИТМиК",
          "en": "Graduated from LGITMiK",
          "be": "Скончыў ЛГIТМIК"
        }
      },
      {
        "years": "1985",
        "do": {
          "ru": "Режиссёр на 'Белорусском телефильме'",
          "en": "Director on 'Belarusian Telefilm'",
          "be": "Рэжысёр на 'Беларускім тэлефільме'"
        }
      },
      {
        "years": "1989",
        "do": {
          "ru": "Режиссёр на киностудии 'Беларусьфильм'",
          "en": "Director at the Belarusfilm film studio",
          "be": "Рэжысёр на кінастудыі 'Беларусьфільм'"
        }
      }
    ],
    "filmography": [
      {
        'period': '1980\'s', 'information': [
          {
            "year": 1985,
            "film": {
              "ru": "Эта тихая жизнь в Глубоком (документальный)",
              "en": "This quiet life in the Glubokoye (documentary)",
              "be": "Гэтая ціхая жыццё ў Глыбокім (дакументальны)"
            }
          },
          {
            "year": 1986,
            "film": {
              "ru": "Возвращение в Хатынь (фильм-спектакль)",
              "en": "Return to Khatyn (film-performance)",
              "be": "Вяртанне ў Хатынь (фільм-спектакль)"
            }
          },
          {
            "year": 1986,
            "film": {
              "ru": "Взгляни на свой дом (документальный)",
              "en": "Take a look at your house (documentary)",
              "be": "Зірні на свой дом (дакументальны)"
            }
          },
          {
            "year": 1987,
            "film": {
              "ru": "Упрямый человек (документальный)",
              "en": "Stubborn person (documentary)",
              "be": "Ўпарты чалавек (дакументальны)"
            }
          },
          {
            "year": 1987,
            "film": {
              "ru": "Здесь был Крылов (документальный)",
              "en": "There was Krylov (documentary)",
              "be": "Тут быў Крылоў (дакументальны)"
            }
          },
          {
            "year": 1987,
            "film": {
              "ru": "Призывники (документальный)",
              "en": "Draftees (documentary)",
              "be": "Прызыўнікі (дакументальны)"
            }
          },
          {
            "year": 1988,
            "film": {
              "ru": "Путники (документальный)",
              "en": "Travelers (documentary)",
              "be": "Падарожныя (дакументальны)"
            }
          },
          {
            "year": 1988,
            "film": {
              "ru": "Мастера и подмастерья (документальный)",
              "en": "Masters and apprentices (documentary)",
              "be": "Майстры і чаляднікі (дакументальны)"
            }
          },
          {
            "year": 1988,
            "film": {
              "ru": "Формула ускорения (документальный)",
              "en": "Acceleration formula (documentary)",
              "be": "Формула паскарэння (дакументальны)"
            }
          },
          {
            "year": 1989,
            "film": {
              "ru": "Встречный иск (документальный)",
              "en": "Counterclaim (documentary)",
              "be": "Сустрэчны пазоў (дакументальны)"
            }
          },
          {
            "year": 1989,
            "film": {
              "ru": "В небо на колесе (документальный)",
              "en": "To the sky on a wheel (documentary)",
              "be": "У неба на коле (дакументальны)"
            }
          },
          {
            "year": 1989,
            "film": {
              "ru": "Кто сегодня отсутствует",
              "en": "Who is absent today",
              "be": "Хто сёння адсутнічае"
            }
          }]
      },
      {
        'period': '1990\'s', 'information': [
          {
            "year": 1990,
            "film": {
              "ru": "Лифт для промежуточного человека",
              "en": "Lift for an intermediate person",
              "be": "Ліфт для прамежкавага чалавека"
            }
          },
          {
            "year": 1990,
            "film": {
              "ru": "Магистраль (документальный)",
              "en": "Highway (documentary)",
              "be": "Магістраль (дакументальны)"
            }
          },
          {
            "year": 1991,
            "film": {
              "ru": "Оранжевые жилеты (документальный)",
              "en": "Orange vests (documentary)",
              "be": "Аранжавыя камізэлькі (дакументальны)"
            }
          },
          {
            "year": 1991,
            "film": {
              "ru": "Всё хорошо (документальный)",
              "en": "Everything is good (documentary)",
              "be": "Усё добра (дакументальны)"
            }
          },
          {
            "year": 1992,
            "film": {
              "ru": "Русское счастье (документальный)",
              "en": "Russian happiness (documentary)",
              "be": "Рускае шчасце (дакументальны)"
            }
          },
          {
            "year": 1993,
            "film": {
              "ru": "Страсти по Марианне (документальный)",
              "en": "Passion for Marianne (documentary)",
              "be": "Страсці па Марыяне (дакументальны)"
            }
          },
          {
            "year": 1994,
            "film": {
              "ru": "Хлеб Израиля (документальный)",
              "en": "Bread of Israel (documentary)",
              "be": "Хлеб Ізраіля (дакументальны)"
            }
          },
          {
            "year": 1996,
            "film": {
              "ru": "Оазис (документальный)",
              "en": "Oasis (documentary)",
              "be": "Аазіс (дакументальны)"
            }
          },
          {
            "year": 1996,
            "film": {
              "ru": "Обыкновенный президент (документальный)",
              "en": "Ordinary president (documentary)",
              "be": "Звычайны прэзідэнт (дакументальны)"
            }
          },
          {
            "year": 1997,
            "film": {
              "ru": "Эхо молчания (документальный)",
              "en": "Echo of silence (documentary)",
              "be": "Рэха маўчання (дакументальны)"
            }
          },
          {
            "year": 1998,
            "film": {
              "ru": "Время Чжоу Эньлая (документальный)",
              "en": "The time of Zhou Enlai (documentary)",
              "be": "Час Чжоу Эньлая (дакументальны)"
            }
          }]
      },
      {
        'period': '2000\'s', 'information': [
          {
            "year": 2000,
            "film": {
              "ru": "Боги Серпа и Молота (документальный)",
              "en": "Gods of the Hammer and Sickle (documentary)",
              "be": "Багі Сярпа і Молата (дакументальны)"
            }
          },
          {
            "year": 2002,
            "film": {
              "ru": "Дожить до любви (документальный)",
              "en": "To live to love (documentary)",
              "be": "Дажыць да кахання (дакументальны)"
            }
          },
          {
            "year": 2002,
            "film": {
              "ru": "Кавказские пленники (документальный)",
              "en": "Caucasian captives (documentary)",
              "be": "Каўказскія палонныя (дакументальны)"
            }
          },
          {
            "year": 2003,
            "film": {
              "ru": "Святой доктор",
              "en": "Holy Doctor",
              "be": "Святы доктар"
            }
          },
          {
            "year": 2003,
            "film": {
              "ru": "Солнечный клоун (документальный)",
              "en": "Solar clown (documentary)",
              "be": "Сонечны клоўн (дакументальны)"
            }
          },
          {
            "year": 2007,
            "film": {
              "ru": "Площадь Калиновского (документальный)",
              "en": "Kalinovsky Square (Belorussian. Ploshcha, documentary)",
              "be": "Плошча Каліноўскага (дакументальны)"
            }
          },
          {
            "year": 2007,
            "film": {
              "ru": "Вперед, в прошлое",
              "en": "Forward to the past",
              "be": "Наперад, у мінулае"
            }
          },
          {
            "year": 2008,
            "film": {
              "ru": "В поисках идиша (документальный, совместно с Александром Городницким)",
              "en": "In search of Yiddish (documentary, together with Alexander Gorodnitsky)",
              "be": "У пошуках ідыша (дакументальны, сумесна з Аляксандрам Гарадніцкім)"
            }
          }]
      },
      {
        'period': '2010\'s', 'information': [
          {
            "year": 2010,
            "film": {
              "ru": "Лоботомия (документальный)",
              "en": "Lobotomy (documentary)",
              "be": "Лабатамія (дакументальны)"
            }
          },
          {
            "year": 2011,
            "film": {
              "ru": "Обыкновенные выборы (документальный)",
              "en": "Ordinary elections (documentary)",
              "be": "Звычайныя выбары (дакументальны)"
            }
          },
          {
            "year": 2018,
            "film": {
              "ru": "Этот безумный, безумный, безумный русский мир (документальный)",
              "en": "This crazy, crazy, crazy Russian world (documentary)",
              "be": "Гэты вар'яцкі, вар'яцкі, вар'яцкі рускі свет (дакументальны)"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Одесса",
          "en": "Odessa",
          "be": "Адэса"
        },
        "coordinate": {
          "lat": 46.4598865,
          "lon": 30.5717043
        }
      },
      {
        "place": {
          "ru": "Беларусьфильм",
          "en": "Belarusfilm",
          "be": "Беларусьфільм"
        },
        "coordinate": {
          "lat": 53.9275797,
          "lon": 27.6276866
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Этот безумный, безумный, безумный 'русский мир'",
          "en": "This crazy, crazy, crazy 'Russian world'",
          "be": "Гэты вар'яцкі, вар'яцкі, вар'яцкі рускі свет (дакументальны)"
        },
        "picture": "https://gdb.currenttime.tv/42135DC4-CEF2-4230-A67A-0798AD258D1D_w1200_r1_s.png"
      },
      {
        "about": {
          "ru": "Кавказские пленники ",
          "en": "Caucasian captives",
          "be": "Каўказскія палонныя"
        },
        "picture": "https://shtab.su/wp-content/uploads/2015/10/vojna_chechnja_1995.jpg"
      },
      {
        "about": {
          "ru": "Страсти по Марианне",
          "en": "Passion for Marianne",
          "be": "Страсці па Марыяне"
        },
        "picture": "https://i.ytimg.com/vi/3dttUjDS8a4/hqdefault.jpg"
      }
    ],
    "description": {
      "ru": "Белорусский и советский кинорежиссёр",
      "en": "Belarusian and Soviet film director",
      "be": "Беларускі і савецкі кінарэжысёр"
    },
    "fullDescription": {
      "ru": "Белорусский и советский кинорежиссёр",
      "en": "Belarusian and Soviet film director",
      "be": "Беларускі і савецкі кінарэжысёр"
    },
    "picture": "https://yt3.ggpht.com/a/AGF-l79gh-zsahfnOWMVkxBCG3I1lxq8m3W0SYMe9A=s900-c-k-c0xffffffff-no-rj-mo",
    "yearsOfLife": "18.10.1947",
    "placeOfBirth": {
      "ru": "Одесса",
      "en": "Odessa",
      "be": "Адэса"
    },
    "youtubeFilm": "LcQBNLLewpo",
    "awards": 13
  },
  {
    "name": {
      "ru": "Юрий",
      "en": "Yuri",
      "be": "Юрый"
    },
    "surname": {
      "ru": "Марухин",
      "en": "Marukhin",
      "be": "Марухін"
    },
    "patronymic": {
      "ru": "Александрович",
      "en": "Alexandrovich",
      "be": "Аляксандравіч"
    },
    "biography": [
      {
        "years": "1960",
        "do": {
          "ru": "Работал оператором-постановщиком киностудии Беларусьфильм",
          "en": "Work as the director of photography at the Belarusfilm film studio",
          "be": "Працаваў аператарам-пастаноўшчыкам кінастудыі Беларусьфільм"
        }
      },
      {
        "years": "1962",
        "do": {
          "ru": "Окончил операторский факультет Всесоюзного государственного института кинематографии в Москве (мастерская Леонида Косматова)",
          "en": "Graduated from the camera department of the All-Union State Institute of Cinematography in Moscow (workshop of Leonid Kosmatov)",
          "be": "Скончыў аператарскі факультэт Усесаюзнага дзяржаўнага інстытута кінематаграфіі ў Маскве (майстэрня Леаніда Косматова)"
        }
      },
      {
        "years": "1984",
        "do": {
          "ru": "Режиссёр игрового кино",
          "en": "Feature film director",
          "be": "Рэжысёр ігравога кіно"
        }
      },
      {
        "years": "2000 - 2001",
        "do": {
          "ru": "Председатель правления Белорусского союза кинематографистов",
          "en": "Chairman of the Board of the Belarusian Union of Cinematographers",
          "be": "Старшыня праўлення Беларускага саюза кінематаграфістаў"
        }
      }
    ],
    "filmography": [
      {
        'period': '1960\'s', 'information': [
          {
            "year": 1966,
            "film": {
              "ru": "Солнце над городом (Документальный фильм)",
              "en": "The sun over the city (Documentary)",
              "be": "Сонца над горадам (Дакументальны фільм)"
            }
          },
          {
            "year": 1968,
            "film": {
              "ru": "Сергей Петрович (Документальный фильм)",
              "en": "Sergey Petrovich (Documentary)",
              "be": "Сяргей Пятровіч (Дакументальны фільм)"
            }
          }]
      },
      {
        'period': '1970\'s', 'information': [
          {
            "year": 1975,
            "film": {
              "ru": "Солдатки (Документальный фильм)",
              "en": "Soldiers (Documentary)",
              "be": "Салдатка (Дакументальны фільм)"
            }
          },
          {
            "year": 1977,
            "film": {
              "ru": "Фантазия (Документальный фильм)",
              "en": "Fantasy (Documentary)",
              "be": "Фантазія (Дакументальны фільм)"
            }
          },
          {
            "year": 1977,
            "film": {
              "ru": "Мы — 'Квант' (Документальный фильм)",
              "en": "We are 'Quantum' (Documentary)",
              "be": "Мы - 'Квант' (Дакументальны фільм)"
            }
          },
          {
            "year": 1979,
            "film": {
              "ru": "Осень земледельца (Документальный фильм)",
              "en": "The Farmer's Autumn (Documentary)",
              "be": "Восень земляроба (Дакументальны фільм)"
            }
          }]
      },
      {
        'period': '1980\'s', 'information': [
          {
            "year": 1981,
            "film": {
              "ru": "Моё Полесье (Документальный фильм)",
              "en": "My Polesie (Documentary)",
              "be": "Маё Палессе (Дакументальны фільм)"
            }
          },
          {
            "year": 1984,
            "film": {
              "ru": "Радуница",
              "en": "Radunitsa",
              "be": "Радаўніца"
            }
          },
          {
            "year": 1986,
            "film": {
              "ru": "Человек, который брал интервью",
              "en": "The person who interviewed",
              "be": "Чалавек, які браў інтэрв'ю"
            }
          },
          {
            "year": 1988,
            "film": {
              "ru": "Адам и Марыля (Документальный фильм)",
              "en": "Adam and Maryl (Documentary)",
              "be": "Адам і Марыля (Дакументальны фільм)"
            }
          }]
      },
      {
        'period': '1990\'s', 'information': [
          {
            "year": 1990,
            "film": {
              "ru": "Охраняется государством (Документальный фильм)",
              "en": "Protected by the State (Documentary)",
              "be": "Ахоўваецца дзяржавай (Дакументальны фільм)"
            }
          },
          {
            "year": 1990,
            "film": {
              "ru": "Мать Урагана",
              "en": "Mother of the Hurricane",
              "be": "Маці Урагану"
            }
          },
          {
            "year": 1992,
            "film": {
              "ru": "Портрет не фоне замка (Документальный фильм)",
              "en": "Portrait against the background of the castle (Documentary)",
              "be": "Партрэт не фоне замка (Дакументальны фільм)"
            }
          },
          {
            "year": 1992,
            "film": {
              "ru": "Уик-энд с убийцей",
              "en": "Weekend with a killer",
              "be": "Ўік-энд з забойцам"
            }
          },
          {
            "year": 1994,
            "film": {
              "ru": "Дровосек, дедок и здешние (Документальный фильм)",
              "en": "Lumberjack, grandfather and those here (Documentary)",
              "be": "Дрывасек, дзядок і тутэйшыя (Дакументальны фільм)"
            }
          },
          {
            "year": 1994,
            "film": {
              "ru": "Конь необузданный (Документальный фильм)",
              "en": "Unbridled Horse (Documentary)",
              "be": "Конь неўтаймаваны (Дакументальны фільм)"
            }
          },
          {
            "year": 1998,
            "film": {
              "ru": "Художник Леонид Щемелёв (Документальный фильм)",
              "en": "Artist Leonid Schemelev (Documentary)",
              "be": "Мастак Леанід Шчамялёў (Дакументальны фільм)"
            }
          }]
      },
      {
        'period': '2010\'s', 'information': [
          {
            "year": 2011,
            "film": {
              "ru": "Успеть до ночи (Документальный фильм)",
              "en": "Catch up to night (Documentary)",
              "be": "Паспець да ночы (Дакументальны фільм)"
            }
          }]
      }
    ],
    "mapsLocation": [
      {
        "place": {
          "ru": "Фёдоровка",
          "en": "Fedorovka",
          "be": "Фёдораука"
        },
        "coordinate": {
          "lat": 53.4311028,
          "lon": 40.9512262
        }
      },
      {
        "place": {
          "ru": "ВГИК",
          "en": "VGIK",
          "be": "УГИК"
        },
        "coordinate": {
          "lat": 55.8352084,
          "lon": 37.6370953
        }
      },
      {
        "place": {
          "ru": "Белорусский союз кинематографистов",
          "en": "Belarusian Union of Cinematographers",
          "be": "Беларускі саюз кінематаграфістаў"
        },
        "coordinate": {
          "lat": 53.926837,
          "lon": 27.630791
        }
      }
    ],
    "photoGallery": [
      {
        "about": {
          "ru": "Радуница",
          "en": "Radunitsa",
          "be": "Радаўніца"
        },
        "picture": "https://i.ytimg.com/vi/p9GsK5m7d_w/hqdefault.jpg"
      },
      {
        "about": {
          "ru": "Человек, который брал интервью",
          "en": "The person who interviewed",
          "be": "Чалавек, які браў інтэрв'ю"
        },
        "picture": "https://upload.wikimedia.org/wikipedia/ru/thumb/2/27/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA_%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9_%D0%B1%D1%80%D0%B0%D0%BB_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D1%8C%D1%8E.jpg/286px-%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA_%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9_%D0%B1%D1%80%D0%B0%D0%BB_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D1%8C%D1%8E.jpg"
      },
      {
        "about": {
          "ru": "Мать Урагана",
          "en": "Mother of the Hurricane",
          "be": "Маці Урагану"
        },
        "picture": "https://kinoflux.org/uploads/posts/2019-07/1562905237_mat-uragana-1990.jpg"
      },
      {
        "about": {
          "ru": "Уик-энд с убийцей",
          "en": "Weekend with a killer",
          "be": "Ўік-энд з забойцам"
        },
        "picture": "https://thumbs.filmix.co/posters/thumbs/w220/uik-end-s-ubiycey-1992_32589_0.jpg"
      }
    ],
    "description": {
      "ru": "Советский и белорусский кинорежиссёр, сценарист, оператор",
      "en": "Soviet and Belarusian film director, screenwriter, cameraman",
      "be": "Савецкі і беларускі кінарэжысёр, сцэнарыст, аператар"
    },
    "fullDescription": {
      "ru": "Советский и белорусский кинорежиссёр, сценарист, оператор. Заслуженный деятель искусств Белорусской ССР (1974). Сценарии писал в основном к своим документальным фильмам. Член КПСС с 1974 года",
      "en": "Soviet and Belarusian film director, screenwriter, cameraman. Honored Artist of the Byelorussian SSR (1974). He wrote scripts mainly for his documentaries. Member of the CPSU since 1974",
      "be": "Савецкі і беларускі кінарэжысёр, сцэнарыст, аператар. Заслужаны дзеяч мастацтваў Беларускай ССР (1974). Сцэнары пісаў у асноўным да сваіх дакументальных фільмаў. Член КПСС з 1974 года"
    },
    "picture": "https://www.sb.by/upload/resize_cache/slam.image/iblock/578/855_2000_1/578d00cbe0034068bf4726daf25048d0.jpg",
    "yearsOfLife": "13.07.1938 - 20.12.2001",
    "placeOfBirth": {
      "ru": "Фёдоровка",
      "en": "Fedorovka",
      "be": "Фёдораука"
    },
    "youtubeFilm": "p9GsK5m7d_w",
    "awards": 4

  }
];

export default directorsData
