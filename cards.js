const BIBLE_CARDS = [
  {
    "answer": "Манна",
    "reference": "Исход 16:31",
    "question": "Пища, которую Иегова давал израильтянам в пустыне.",
    "id": "household-1",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Амбар",
    "reference": "Луки 12:24",
    "question": "Хозяйственная постройка для хранения зерна и других припасов.",
    "id": "household-2",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Известь",
    "reference": "Второзаконие 27:2",
    "question": "Чем израильтяне должны были обмазать камни, чтобы написать на них слова Закона?",
    "id": "household-3",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Нагрудник",
    "reference": "Исход 28:15-30",
    "question": "Часть одежды первосвященника, состоящее из драгоценных камней.",
    "id": "household-4",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Кувшин",
    "reference": "Судей 7:16",
    "question": "В чем прятали факелы воины Гедеона?",
    "id": "household-5",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Печь",
    "reference": "Даниил 3:20",
    "question": "Куда бросили Седраха, Мисаха и Авденаго? 1",
    "id": "household-6",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ноша",
    "reference": "1 Самуила 17:22",
    "question": "Груз, который оставил Давид у обозного сторожа, когда пошел справиться о здоровье своих братьев.",
    "id": "household-7",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Изюм",
    "reference": "1 Самуила 25:18",
    "question": "Авигея взяла «сто лепёшок» этих сушенных ягод.",
    "id": "household-8",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Багряница / пурпур",
    "reference": "Откровение 17:4",
    "question": "Цвет дорогостоящих тканей и одежд.",
    "id": "household-9",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Поле",
    "reference": "Исаия 1:8",
    "question": "Участок земли для выращивания огурцов.",
    "id": "household-10",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Печать",
    "reference": "1 Царей 21:8",
    "question": "Это вырезали из камня и отпечаток применяли в качестве подписи.",
    "id": "household-11",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Отвар",
    "reference": "Исаия 65:4",
    "question": "Горячее жидкое кушанье, похлебка. 2",
    "id": "household-12",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Засов",
    "reference": "1 Царей 4:13",
    "question": "Устройство, которым затворяют, запирают.",
    "id": "household-13",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Каменщик",
    "reference": "2 Самуила 5:11",
    "question": "Профессия мало распространенная в Израиле и совмещенная с работой каменотеса.",
    "id": "household-14",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Наместник",
    "reference": "1 Царей 22:47",
    "question": "Царский представитель в покоренной области.",
    "id": "household-15",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Топор",
    "reference": "Луки 3:9",
    "question": "Орудие труда для рубки сучьев и деревьев.",
    "id": "household-16",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Раб",
    "reference": "Исход 21:2",
    "question": "Кем становился еврей, если он продавал себя другому еврею?",
    "id": "household-17",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бахрома",
    "reference": "Матфея 23:5",
    "question": "Отделка по краям верхней одежды. 3",
    "id": "household-18",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Плотник",
    "reference": "Марка 6:3",
    "question": "Профессия, которой Иисус Христос обучился у Иосифа.",
    "id": "household-19",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Накидка",
    "reference": "Второзаконие 8:4",
    "question": "«Все эти 40 лет *** на тебе не изнашивалась и твои ноги не опухали».",
    "id": "household-20",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рыба и лепёшки",
    "reference": "Иоанна 6:9",
    "question": "Чем Иисус чудом накормил множество людей?",
    "id": "household-21",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Арфа",
    "reference": "Псалом 137:2",
    "question": "Уведенные в вавилонский плен иудеи повесили эти музыкальные инструменты на тополях.",
    "id": "household-22",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Каменный сосуд",
    "reference": "Иоанна 2:6",
    "question": "В чем хранилась вода для омовения до и после еды?",
    "id": "household-23",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Беэр",
    "reference": "Числа 21:16",
    "question": "Как по-еврейски назывался колодец? 4",
    "id": "household-24",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пурпур",
    "reference": "Исход 26:36",
    "question": "Занавес в шатер был соткан из синей, ярко-красной и этого цвета нитей.",
    "id": "household-25",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Стол",
    "reference": "Исход 25:30",
    "question": "На что в древней скинии клали хлебы предложения?",
    "id": "household-26",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Окантовка",
    "reference": "Исход 28:32",
    "question": "Ворот ризы первосвященника из особо прочной ткани.",
    "id": "household-27",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Кувшин",
    "reference": "1 Царей 17:12",
    "question": "Большая емкость, в которой вдова из Сарепты хранила муку.",
    "id": "household-28",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бурдюк",
    "reference": "Бытие 21:14",
    "question": "Мешок из шкуры животного для хранения и перевозки жидкостей.",
    "id": "household-29",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рынок",
    "reference": "Марка 7:4",
    "question": "Место, где торгуют; базар. 5",
    "id": "household-30",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сандалий",
    "reference": "Марка 1:7",
    "question": "Ремни какой обуви по словам Иоанна Крестителя он был «недостоин развязать»?",
    "id": "household-31",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Коровий навоз",
    "reference": "Иезекииль 4:15",
    "question": "Это использовалось и как удобрение, и как топливо.",
    "id": "household-32",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Жаровня",
    "reference": "Иеремия 36:22, 23",
    "question": "Переносная металлическая емкость для обогрева в богатых домах.",
    "id": "household-33",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бахрома",
    "reference": "Матфея 23:5",
    "question": "Что книжники и фарисеи удлиняли на своих одеждах?",
    "id": "household-34",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кусок",
    "reference": "Притчи 17:1",
    "question": "«Лучше *** чёрствого хлеба и с ним спокойствие, чем дом, в котором много жертвенного мяса и при этом - ссоры».",
    "id": "household-35",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Секретарь",
    "reference": "2 Самуила 8:17",
    "question": "Личный помощник правителя. 6",
    "id": "household-36",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Мешок",
    "reference": "Бытие 42:25",
    "question": "Сделанное из ткани или кожи вместилище для хранения и перевозки сыпучих тел и мелких предметов.",
    "id": "household-37",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Повар",
    "reference": "1 Самуила 9:23",
    "question": "Еврейское слово, обозначающее эту профессию, происходит от глагола «резать скот».",
    "id": "household-38",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гомор",
    "reference": "Исход 16:36",
    "question": "Десятая часть ефы.",
    "id": "household-39",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рукопись",
    "reference": "Колоссянам 2:14",
    "question": "С этой собственноручно написанной долговой распиской Павел сравнивает Моисеев Закон.",
    "id": "household-40",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Арфа",
    "reference": "1 Самуила 16:23",
    "question": "Давид играл перед Саулом на этом музыкальном инструменте.",
    "id": "household-41",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Наемник",
    "reference": "Матфея 20:1, 2",
    "question": "Работник, нанимаемый на определенное время. 7",
    "id": "household-42",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пурпур",
    "reference": "Иеремия 10:9",
    "question": "Краска получаемая из морских моллюсков.",
    "id": "household-43",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Колесо",
    "reference": "Исход 14:25",
    "question": "Диск, служащий для приведения в движение повозки.",
    "id": "household-44",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Серп",
    "reference": "Откровение 14:14-16",
    "question": "Орудие труда, которое Иисус дает ангелам для жатвы.",
    "id": "household-45",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бубен",
    "reference": "Судей 11:34",
    "question": "С этим музыкальным инструментом в руках вышла встречать отца дочь Иеффая.",
    "id": "household-46",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Праща",
    "reference": "Судей 20:16",
    "question": "Колено Вениамина особенно хорошо владело этим видом оружия.",
    "id": "household-47",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Двор",
    "reference": "Иоанна 18:15",
    "question": "Огороженный участок земли при доме. 8",
    "id": "household-48",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свинец",
    "reference": "Числа 31:22",
    "question": "Среди металлов его обычно называли последним, так как он не высоко ценился.",
    "id": "household-49",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Меч",
    "reference": "Судей 3:21",
    "question": "Оружие судьи Аода.",
    "id": "household-50",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Веретено",
    "reference": "Притчи 31:19",
    "question": "Тонкая деревянная палочка для изготовления нитей.",
    "id": "household-51",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Корзина",
    "reference": "Матфея 14:20",
    "question": "Плетеная вещь для хранения пищевых продуктов.",
    "id": "household-52",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Удила",
    "reference": "Иакова 3:3",
    "question": "Что вкладывают в рот лошадям, чтобы они повиновались?",
    "id": "household-53",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лепёшка",
    "reference": "Иеремия 44:19",
    "question": "Мучное изделие, изображавшее \"царицу небес\". 9",
    "id": "household-54",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Покрывало",
    "reference": "2 Коринфянам 3:13",
    "question": "Что накидывал на лицо Моисей, чтобы «сыновья Израиля не глядели на конец того, что предстояло упразднить»?",
    "id": "household-55",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Известь",
    "reference": "Исаия 33:12",
    "question": "Этот измельченный камень добавляли для лучшего горения мусора.",
    "id": "household-56",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Светильник",
    "reference": "Матфея 25:1-13",
    "question": "Что должны были поправить для встречи господина десять дев из притчи Иисуса?",
    "id": "household-57",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Асфальт",
    "reference": "Исход 2:3",
    "question": "Чем мать Моисея осмолила корзину из тростника, прежде чем положить туда младенца?",
    "id": "household-58",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чечевичная похлёбка",
    "reference": "Бытие 25:33, 34",
    "question": "За что Исав продал первородство?",
    "id": "household-59",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Дверь",
    "reference": "2 Царей 4:4",
    "question": "Проем в стене для выхода и входа. 0",
    "id": "household-60",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Венец",
    "reference": "Иезекииль 23:42",
    "question": "Украшение на голову.",
    "id": "household-61",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сокровищница",
    "reference": "1 Летопись 26:20",
    "question": "Комнаты, в которых хранились храмовые сокровища.",
    "id": "household-62",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Календарь",
    "reference": "",
    "question": "Разделение года на 12 лунных месяцев.",
    "id": "household-63",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Наголенники",
    "reference": "1 Самуила 17:6",
    "question": "Медная защитная одежда ног Голиафа.",
    "id": "household-64",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Жир",
    "reference": "Левит 7:23",
    "question": "Что наряду с кровью, запрещалось употреблять в пищу?",
    "id": "household-65",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Меч",
    "reference": "Матфея 26:51",
    "question": "Оружие, которым Петр хотел защитить Иисуса. 1",
    "id": "household-66",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чистильщик",
    "reference": "Марка 9:3",
    "question": "Ремесло, задачей которого была очистка и валяние шерсти, ткани и одежды.",
    "id": "household-67",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Дом",
    "reference": "1 Царей 7:1",
    "question": "Соломон строил его 13 лет.",
    "id": "household-68",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бубен",
    "reference": "Исход 15:20",
    "question": "Ручной барабан, которым пользовались женщины во время хоровых плясок.",
    "id": "household-69",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Купцы",
    "reference": "Бытие 37:28",
    "question": "Они везли на продажу в Египет стираксу, бальзам и ладан, им был продан Иосиф.",
    "id": "household-70",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Цепь",
    "reference": "Марка 5:3",
    "question": "Человека, одержимого демоном связывали этим.",
    "id": "household-71",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Составитель мазей",
    "reference": "Исход 30:35",
    "question": "Приготовляющий мази или ароматические смеси. 2",
    "id": "household-72",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Мука",
    "reference": "1 Царей 17:14",
    "question": "Зерна, размолотые в порошок.",
    "id": "household-73",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Казнохранитель",
    "reference": "Ездра 7:21",
    "question": "Чиновник персидского царя при дворе ответственный за финансы.",
    "id": "household-74",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Щит",
    "reference": "2 Самуила 8:7",
    "question": "Металлическое или деревянное, обтянутое кожей оружие для самозащиты.",
    "id": "household-75",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Перстень",
    "reference": "Бытие 41:42",
    "question": "Что фараон снял с руки и дал Иосифу, как символ власти?",
    "id": "household-76",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Багряная",
    "reference": "Матфея 27:28",
    "question": "Цвет накидки надетой на Иисуса римскими воинами.",
    "id": "household-77",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Тюрбан",
    "reference": "Исход 28:4",
    "question": "Головной убор священника. 3",
    "id": "household-78",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кисточки",
    "reference": "Второзаконие 22:12",
    "question": "Обязательная деталь края верхнего покрывала израильтян.",
    "id": "household-79",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Печать",
    "reference": "Откровение 5:1,2",
    "question": "Чем был скреплен свиток «исписанный изнутри и снаружи» в руках у «сидящего на престоле»?",
    "id": "household-80",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Верблюжья шерсть",
    "reference": "Марка 1:6",
    "question": "Из какого материала носил одежду Иоанн Креститель?",
    "id": "household-81",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Платформа",
    "reference": "Иезекииль 1:22",
    "question": "Часть колесницы Иеговы, блеск которой подобен льду.",
    "id": "household-82",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Кимвал",
    "reference": "1 Коринфянам 13:1",
    "question": "Человек не имеющий любви сравнивается с этим музыкальным инструментом.",
    "id": "household-83",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Щёлок",
    "reference": "Иеремия 2:22",
    "question": "Простое моющее средство. 4",
    "id": "household-84",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свидетель",
    "reference": "Числа 35:30",
    "question": "Человек, дающий показания в ходе судебного разбирательства.",
    "id": "household-85",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Плеть",
    "reference": "Наум 3:2",
    "question": "Чем подгоняют коней?",
    "id": "household-86",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Налог",
    "reference": "Матфея 17:25",
    "question": "Подать или дань римскому императору.",
    "id": "household-87",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Купчая",
    "reference": "Иеремия 32:10",
    "question": "Запись о сделке в присутствии свидетелей.",
    "id": "household-88",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Брод",
    "reference": "Судей 3:28",
    "question": "Контроль над этим мелким местом в реке во время войны имел решающее значение.",
    "id": "household-89",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Весло",
    "reference": "Иезекииль 27:6",
    "question": "Приспособление для гребли в лодке. 5",
    "id": "household-90",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Паланкин",
    "reference": "Песнь песней 3:9",
    "question": "Царя Соломона носили в таком кресле из ливанских деревье рабы.",
    "id": "household-91",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Кислое вино",
    "reference": "Марка 15:36",
    "question": "Губку, смоченную этим напитком поднесли к губам Иисуса Христа.",
    "id": "household-92",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Борода",
    "reference": "2 Самуила 10:4",
    "question": "Остричь это считалось позором.",
    "id": "household-93",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свинец",
    "reference": "Иеремия 6:29",
    "question": "Об этом металле говорится как о примеси, которую отделяли от серебра.",
    "id": "household-94",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Праща",
    "reference": "1 Самуила 17:40",
    "question": "Главное оружие пастухов, для метания камней.",
    "id": "household-95",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дворец",
    "reference": "Даниила 6:18",
    "question": "Дом царя. 6",
    "id": "household-96",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Светильник",
    "reference": "Иеремия 25:10",
    "question": "Неглубокая чаша, суженная в одном или нескольких местах, внутри которой был фитиль и масло.",
    "id": "household-97",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Расписка",
    "reference": "Луки 16:6",
    "question": "Документ с подписью, удостоверяющий получение чего-либо.",
    "id": "household-98",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Дрова",
    "reference": "Притчи 26:21",
    "question": "Поленья для топки.",
    "id": "household-99",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Обоз",
    "reference": "1 Самуилаа 25:13",
    "question": "Повозки с грузом.",
    "id": "household-100",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Локоть",
    "reference": "Бытие 6:15",
    "question": "Общепринятая единица измерения длины.",
    "id": "household-101",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Диадема",
    "reference": "2 Самуила 1:10",
    "question": "Головной убор, символ власти. 7",
    "id": "household-102",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свирель",
    "reference": "Бытие 4:21",
    "question": "Первый духовой музыкальный инструмент, упомянутый в Библии.",
    "id": "household-103",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лодка",
    "reference": "Иоанна 6:22",
    "question": "Небольшое средство для плавания по рекам и озерам Израиля.",
    "id": "household-104",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лопата для веяния",
    "reference": "Матфея 3:12",
    "question": "Деревянный инструмент для подбрасывания зерна, чтобы ветер унес легкие примеси.",
    "id": "household-105",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Шлак",
    "reference": "Иезекииль 22:18",
    "question": "Отходы при плавке металла.",
    "id": "household-106",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Письмо",
    "reference": "Римлянам 16:22",
    "question": "Чем по своей структуре являются послания апостола Павла?",
    "id": "household-107",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Решетка",
    "reference": "Исход 27:4",
    "question": "Медная сетка для жертвенника. 8",
    "id": "household-108",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Секретарь",
    "reference": "2 Летопись 24:11",
    "question": "Царский чиновник, подсчитывающий деньги, пожертвованные на восстановление храма во дни Иосая.",
    "id": "household-109",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Борода",
    "reference": "Иеремия 41:5",
    "question": "Сбривание этого считалось знаком большого горя.",
    "id": "household-110",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Десятая часть",
    "reference": "Левит 27:30",
    "question": "Отчисления Иегове от урожая, скота и других доходов.",
    "id": "household-111",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Решето",
    "reference": "Амос 9:9",
    "question": "Через что пропускали обмолоченное зерно для очистки?",
    "id": "household-112",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Светильник",
    "reference": "Исход 35:14",
    "question": "Сосуда с фитилем, наполняемый елеем.",
    "id": "household-113",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Обед",
    "reference": "Луки 14:12",
    "question": "Прием пищи в середине дня. 9",
    "id": "household-114",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Нож",
    "reference": "Бытие 22:6",
    "question": "Острый предмет, который взял с собой Авраам, когда вместе с Исааком пошел принести всесожжение.",
    "id": "household-115",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Венок",
    "reference": "1 Коринфянам 9:25",
    "question": "Это вручалось победителю состязаний.",
    "id": "household-116",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Закваска",
    "reference": "Луки 13:21",
    "question": "Горьковатое вещество, состоящее из микроскопических грибков, вызывающих брожение.",
    "id": "household-117",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Рог",
    "reference": "1 Царей 1:34",
    "question": "В него трубили в торжественных случаях, например при воцарении царя.",
    "id": "household-118",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мерный шнур",
    "reference": "Исаия 44:13",
    "question": "Плотник, изготовляющий идола, протягивает его по дереву.",
    "id": "household-119",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Серп",
    "reference": "Второзаконие 23:25",
    "question": "Ручное сельскохозяйственное орудие для покоса. 0",
    "id": "household-120",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Прибор",
    "reference": "Иезекииль 9:3",
    "question": "«Он позвал человека в льняной одежде, на поясе у которого был *** писаря».",
    "id": "household-121",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рог",
    "reference": "Левит 25:9,10",
    "question": "С помощью какого музыкального инструмента объявляли о наступлении юбилейного года.",
    "id": "household-122",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Вилка",
    "reference": "1 Самуила 2:13,14",
    "question": "Трезубец, используемый для накалывания мяса во время варки при жертвоприношении.",
    "id": "household-123",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Стадий",
    "reference": "Откровение 14:20",
    "question": "Греческая мера пути, названная в честь стадиона в Олимпии.",
    "id": "household-124",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лодка",
    "reference": "Луки 5:2",
    "question": "Иисус Христос учил стоя в этом приспособлении для ловли рыбы.",
    "id": "household-125",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Новые бурдюки",
    "reference": "Марка 2:22",
    "question": "Во что наливают молодое вино? 1",
    "id": "household-126",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Динарий",
    "reference": "Матфея 22:19",
    "question": "Самая распространенная серебряная римская монета.",
    "id": "household-127",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свадебная одежда",
    "reference": "Матфея 22:11-13",
    "question": "Одежда, которую должны были одеть приглашенные на свадебный пир.",
    "id": "household-128",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Молот",
    "reference": "Исаия 41:7",
    "question": "Орудие труда каменотеса и кузнеца.",
    "id": "household-129",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ржавчина",
    "reference": "Иакова 5:3",
    "question": "Налет на металле, образующийся в результате окисления и ведущий к разрушению металла.",
    "id": "household-130",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Подневольный труд",
    "reference": "1 Царей 5:13,14",
    "question": "Соломон был вынужден обложить этим весь Израиль при строительстве храма и дворца.",
    "id": "household-131",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Лепешка",
    "reference": "1 Царей 17:12,13",
    "question": "Их выпекали из муки и масла. 2",
    "id": "household-132",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лепта",
    "reference": "Марка 12:42",
    "question": "Самая мелкая из медных еврейских монет.",
    "id": "household-133",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Венец",
    "reference": "2 Самуила 12:30",
    "question": "Полукруглый обруч, часто украшавшийся узором и драгоценными камнями.",
    "id": "household-134",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ефа",
    "reference": "Руфь 2:17",
    "question": "Сколько ячменя собрала Руфь за один день работы?",
    "id": "household-135",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Молотильное орудие",
    "reference": "Исаия 28:27",
    "question": "Несколько скрепленных досок для вылущивания зерна и резания стеблей.",
    "id": "household-136",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Письмо",
    "reference": "2 Самуила 11:14",
    "question": "Что Давид написал Иоаву, чтобы избавиться от Урии?",
    "id": "household-137",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Седло",
    "reference": "Бытие 31:34",
    "question": "Сиденье для всадника. 3",
    "id": "household-138",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кимвал",
    "reference": "1 Летопись 15:16",
    "question": "Ударный музыкальный инструмент в виде двух медных тарелок.",
    "id": "household-139",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Распорядитель",
    "reference": "Иоанна 2:8-10",
    "question": "Кто следил за гостями и едой во время большого пира?",
    "id": "household-140",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Глиняный раствор",
    "reference": "Левит 14:42",
    "question": "Чем покрывали стены внутри дома, смесь глины и воды?",
    "id": "household-141",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Лопатка",
    "reference": "Второзаконие 23:13",
    "question": "Что кроме оружия должно было быть у израильского воина?",
    "id": "household-142",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сандалия",
    "reference": "Руфь 4:7",
    "question": "Обувь, снимаемая в Израиле для подтверждения какого-либо дела.",
    "id": "household-143",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Вино",
    "reference": "Псалом 104:15",
    "question": "Это веселит сердце человека. 4",
    "id": "household-144",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чешуйчатая кольчуга",
    "reference": "1 Самуила 17:5",
    "question": "Вес этой защитной одежды Голиафа был 5000 сиклей.",
    "id": "household-145",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Ограждение",
    "reference": "Второзаконие 22:8",
    "question": "По закону на плоских крышах домов это обязательно должно было быть.",
    "id": "household-146",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Шкура",
    "reference": "Левит 8:17",
    "question": "Эта часть, приносимого в жертву за грех животного, сжигалась вне стана вместе с остатками мяса и косточками.",
    "id": "household-147",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Противень",
    "reference": "Иезекииль 4:3",
    "question": "\"Возьми себе железный ***, поставь его так, будто это железная стена между тобой и городом\".",
    "id": "household-148",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Саранча и дикий мед",
    "reference": "Марка 1:6",
    "question": "Что было пищей Иоанна Крестителя?",
    "id": "household-149",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Наследство",
    "reference": "Второзаконие 21:15-17",
    "question": "Первенец получал двойную часть этого. 5",
    "id": "household-150",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Окантовка",
    "reference": "Исход 25:11, 24, 25",
    "question": "Обрамление наверху вокруг ковчега завета и стола для хлебов предложения.",
    "id": "household-151",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Ржавчина",
    "reference": "Матфея 6:19",
    "question": "Что как и моль, истребляет «сокровища на земле»?",
    "id": "household-152",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Лук",
    "reference": "1 Царей 22:34",
    "question": "Ручное оружие для метания стрел.",
    "id": "household-153",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Драхма",
    "reference": "Неемия 7:70",
    "question": "Древняя монета, название которой встречается в Библии.",
    "id": "household-154",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Изъян",
    "reference": "Левит 22:21",
    "question": "Это делало животное непригодное для жертвоприношения.",
    "id": "household-155",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Соль",
    "reference": "Иезекииль 16:4",
    "question": "Этим обтирали при рождении ребенка. 6",
    "id": "household-156",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Щелок",
    "reference": "Малахия 3:2",
    "question": "Продукт, получаемый в результате взаимодействия золы растений и оливково масла или других жиров.",
    "id": "household-157",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свирель",
    "reference": "1 Царей 1:40",
    "question": "На каком духовом музыкальном инструменте играл народ при воцарении Соломона?",
    "id": "household-158",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Платок",
    "reference": "Луки 19:20",
    "question": "В чем лукавый раб хранил мину своего Господина?",
    "id": "household-159",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мазь",
    "reference": "Откровение 3:18",
    "question": "Лекарство, которым восстанавливали остроту зрения.",
    "id": "household-160",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Изготовление палаток",
    "reference": "Деяния 18:3",
    "question": "Этим ремеслом владел апостол Павел.",
    "id": "household-161",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Вино",
    "reference": "1 Тимофею 5:23",
    "question": "Укрепляющее средство для желудка. 7",
    "id": "household-162",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лепешка",
    "reference": "2 Самуила 13:6-8",
    "question": "Фамарь приготовила их для Амнона в форме сердца.",
    "id": "household-163",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Повозка",
    "reference": "Числа 7:3-8",
    "question": "Левиты перевозили на этом тяжелые части священного шатра во время путешествия по пустыне.",
    "id": "household-164",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Танец",
    "reference": "Иеремия 31:13",
    "question": "Исполнения группой мужчин и женщин движений в такт музыке.",
    "id": "household-165",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свидетель",
    "reference": "Второзаконие 17:6",
    "question": "Показания двух или трех их требовались при вынесении смертного приговора.",
    "id": "household-166",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Свирель",
    "reference": "Иеремия 48:36",
    "question": "Звук этого музыкального инструмента Иеремия сравнивал со стоном сердца.",
    "id": "household-167",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ефа",
    "reference": "Левит 5:11",
    "question": "Хлебная мера. 8",
    "id": "household-168",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ефод",
    "reference": "Исход 28:6-14",
    "question": "Часть одежды первосвященника, которая покрывала только грудь и спину.",
    "id": "household-169",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дневные записи дел",
    "reference": "1 Летопись 27:24",
    "question": "Официальные исторические записи, сделанные во времена Давида.",
    "id": "household-170",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Повитуха",
    "reference": "Исход 1:15",
    "question": "Женщина, принимающая роды.",
    "id": "household-171",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Статир",
    "reference": "Матфея 17:27",
    "question": "Какая монета была найдена во рту у рыбы?",
    "id": "household-172",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Весы",
    "reference": "Притчи 11:1",
    "question": "«Мошеннические *** - мерзость для Иеговы, а полновесная каменная гиря приятна ему».",
    "id": "household-173",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Нос",
    "reference": "Деяния 27:41",
    "question": "Передняя часть корабля. 9",
    "id": "household-174",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Вино",
    "reference": "Числа 6:3, 4",
    "question": "Напиток, который не должен был пить назарей «все дни своего назарейства».",
    "id": "household-175",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лук",
    "reference": "Бытие 27:3",
    "question": "Исав ходил на охоту с этим оружием.",
    "id": "household-176",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Начальник над домом",
    "reference": "1 Царей 18:3",
    "question": "Какой титул имел Авдия, спасший 100 пророков от рук Иезавели, при дворе царя Ахава?",
    "id": "household-177",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Платок",
    "reference": "Иоанна 11:44",
    "question": "При погребении им покрывали лицо умершего.",
    "id": "household-178",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Изнанка",
    "reference": "Левит 13:55",
    "question": "Внутренняя сторона одежды.",
    "id": "household-179",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Безрукавное платье",
    "reference": "Исход 28:31",
    "question": "Верхняя одежда священника, из синей нити. 0",
    "id": "household-180",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Полотенце",
    "reference": "Иоанна 13:5",
    "question": "Чем Иисус вытер ноги учеников?",
    "id": "household-181",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Вино",
    "reference": "Марка 15:23",
    "question": "Вместе с одурманивающей миррой оно служило анестезирующим средством.",
    "id": "household-182",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Одежда",
    "reference": "Луки 9:29",
    "question": "«И когда он молился, его лицо стало другим и его *** стала ослепительно белой».",
    "id": "household-183",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Якорь",
    "reference": "Деяния 27:13",
    "question": "Что удерживает судно на месте?",
    "id": "household-184",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сумка",
    "reference": "Второзаконие 25:13",
    "question": "Мешочек, в котором не должны быть «две разных гири».",
    "id": "household-185",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лепёшка",
    "reference": "1 Самуила 25:18",
    "question": "Высушенный и спресованный изюм или инжир. 1",
    "id": "household-186",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кожа",
    "reference": "Исход 25:5",
    "question": "Из этого делали предметы быта: сандалии, палатки, пояса, мехи для хранения вина.",
    "id": "household-187",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Внешний двор",
    "reference": "Псалом 84:2",
    "question": "Огороженное пространство вокруг священного шатра и храма, куда мог входить народ для жертвоприношений и молитв.",
    "id": "household-188",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Тесто",
    "reference": "Иеремия 7:18",
    "question": "Вязкая масса из муки, смешанной с водой или молоком.",
    "id": "household-189",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Подарок",
    "reference": "Откровение 11:10",
    "question": "Преподнесение, свидетельствующее о добрых отношениях между людьми.",
    "id": "household-190",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рог",
    "reference": "1 Самуила 13:3",
    "question": "В него трубили, собирая на войну.",
    "id": "household-191",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Яма",
    "reference": "2 Самуила 18:17",
    "question": "Углубление в земле. 2",
    "id": "household-192",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мешковина",
    "reference": "2 Царей 19:1",
    "question": "Одеяние из грубой ткани, которое надевали в знак траура.",
    "id": "household-193",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Кожа",
    "reference": "Левит 15:17",
    "question": "Выделанная шкура животного.",
    "id": "household-194",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Скамья",
    "reference": "1 Самуила 1:9",
    "question": "Предмет обстановки, на котором сидят.",
    "id": "household-195",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шило",
    "reference": "Исход 21:6",
    "question": "Чем прокалывал господин ухо своего раба, желавшего остаться у него навсегда?",
    "id": "household-196",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Масло",
    "reference": "Притчи 30:33",
    "question": "Пищевой продукт, образуемый путем сбивания молока или сливок.",
    "id": "household-197",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Покрывало",
    "reference": "Исаия 28:20",
    "question": "Постельная принадлежность для укрывания. 3",
    "id": "household-198",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Баговонное масло",
    "reference": "Иоанна 12:3",
    "question": "Чем Мария помазала ноги Иисуса?",
    "id": "household-199",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Свидетельство о разводе",
    "reference": "Второзаконие 24:1",
    "question": "Что муж должен был дать нежеланной жене, чтобы отпустить её?",
    "id": "household-200",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Стекло",
    "reference": "Откровение 21:18,21",
    "question": "Прозрачный твердый материал, получаемый из кварцевого песка.",
    "id": "household-201",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Виночерпий",
    "reference": "Бытие 40:2",
    "question": "Должность придворного, ответственного за снабжение царского стола напитками.",
    "id": "household-202",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Порт",
    "reference": "Деяния 28:12",
    "question": "Место, специально оборудованное для стоянки, погрузки и разгрузки судов.",
    "id": "household-203",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ключ",
    "reference": "Исаия 22:22",
    "question": "Приспособление для запирания и отпирания замка. 4",
    "id": "household-204",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ожерелье",
    "reference": "Песнь песней 4:9",
    "question": "Женское украшение на шею из жемчуга, металлических шариков, бисера и разноцветных драгоценных камней.",
    "id": "household-205",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Пояс",
    "reference": "Матфея 3:4",
    "question": "Предмет одежды, который носил Иоанн Креститель на бедрах.",
    "id": "household-206",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Вода",
    "reference": "Иоанна 2:9",
    "question": "Что на свадьбе Иисус превратил в вино?",
    "id": "household-207",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ступа",
    "reference": "Притчи 27:22",
    "question": "Деревянное, каменное или металлическое приспособление для растирания зерна.",
    "id": "household-208",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рог",
    "reference": "Иеремия 6:1",
    "question": "Стража использовала это музыкальный инструмент, предупреждая об опасности.",
    "id": "household-209",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Комната",
    "reference": "Луки 22:11",
    "question": "Помещение в доме. 5",
    "id": "household-210",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Подушка",
    "reference": "Марка 4:38",
    "question": "На чем Иисус спал в лодке, когда поднялась сильная буря?",
    "id": "household-211",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гиря",
    "reference": "Второзаконие 25:15",
    "question": "Груз определенного веса, служащий мерой при взвешивании.",
    "id": "household-212",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кожевник",
    "reference": "Деяния 9:43",
    "question": "Этим ремеслом занимались за пределами города, так как приходилось прикасаться к трупам животных для выделки шкур.",
    "id": "household-213",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Медник",
    "reference": "1 Царей 7:14",
    "question": "Ремесленник, умевший обрабатывать медь.",
    "id": "household-214",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Смола",
    "reference": "Бытие 6:14",
    "question": "Чем Ной покрыл ковчег внутри и снаружи?",
    "id": "household-215",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чернила",
    "reference": "Иеремия 36:18",
    "question": "В древности их делами из сажи, получаемой от сгорания смолы и разбавляли камедью с водой или уксусом. 6",
    "id": "household-216",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Алебастровый сосуд",
    "reference": "Марка 14:3",
    "question": "Сосуд, в котором хранится ароматическая смола, употребляемая при погребении мертвых.",
    "id": "household-217",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Вино и масло",
    "reference": "Луки 10:34",
    "question": "Чем обрабатывали раны в древности?",
    "id": "household-218",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Плесень",
    "reference": "Амос 4:9",
    "question": "Болезнь, поражающая зеленые злаки, вызывается грибками и спорами.",
    "id": "household-219",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Посох",
    "reference": "Исход 12:11",
    "question": "Что должен был держать в руках каждый еврей, когда будут есть Пасхального агнца?",
    "id": "household-220",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Талант",
    "reference": "2 Царей 23:33",
    "question": "Самая большая еврейская единица веса и денежная единица.",
    "id": "household-221",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сокровищница",
    "reference": "2 Царей 20:13",
    "question": "Здание, в котором хранились сокровища царя. 7",
    "id": "household-222",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Асфальт",
    "reference": "Бытие 11:3",
    "question": "Что использовали строители вавилонской башни вместо раствора?",
    "id": "household-223",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кузнечный мех",
    "reference": "Иеремия 6:29",
    "question": "Устройство для подачи воздуха, применявшееся при плавке руды.",
    "id": "household-224",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Основа",
    "reference": "Левит 13:51",
    "question": "Продольные нити ткани.",
    "id": "household-225",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Копье",
    "reference": "1 Самуила 17:7",
    "question": "Древко этого оружия Голиафа было как «ткацкий навой».",
    "id": "household-226",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Товар",
    "reference": "Неемия 13:16",
    "question": "Всё, что является предметом торговли.",
    "id": "household-227",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Волосы",
    "reference": "Числа 6:5",
    "question": "Это не должны были стричь назареи. 8",
    "id": "household-228",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Челнок",
    "reference": "Иов 7:6",
    "question": "При изготовлении ткани сквозь основу нить утка продевалась на этом устройстве.",
    "id": "household-229",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Глина",
    "reference": "Исаия 41:25",
    "question": "Материал, с которым работает горшечник?",
    "id": "household-230",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мина",
    "reference": "Луки 19:13",
    "question": "Крупная денежная единица равная 100 драхмам, которую господин дал своим рабам перед отъездом в дальнюю страну.",
    "id": "household-231",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лемех",
    "reference": "Исаия 2:4",
    "question": "Этот маленький плуг будут делать из мечей.",
    "id": "household-232",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Праща",
    "reference": "1 Самуила 17:49",
    "question": "Оружие, с помощью которого Давид одолел Голиафа.",
    "id": "household-233",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Колесница",
    "reference": "Исход 14:6",
    "question": "На чем фараон и его армия догоняли израильтян? 9",
    "id": "household-234",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Золотое ожерелье",
    "reference": "Даниил 5:7",
    "question": "Мужчины одевали это на шею, как знак особого отличия.",
    "id": "household-235",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Покрывала",
    "reference": "Притчи 31:22",
    "question": "«Она делает себе ***, одежда у неё из льна и пурпурной шерсти».",
    "id": "household-236",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Волосяная одежда",
    "reference": "Захария 13:4",
    "question": "Одежда, которую носили пророки.",
    "id": "household-237",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Постель",
    "reference": "Матфея 9:6",
    "question": "Исцеленный парализованный взял это в руки и пошел.",
    "id": "household-238",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рыба",
    "reference": "Числа 11:5",
    "question": "Распространенная пища в Египте.",
    "id": "household-239",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Судейское место",
    "reference": "Деяния 25:17",
    "question": "Возвышение в зале суда у римских прокураторов. 0",
    "id": "household-240",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Памятный склеп",
    "reference": "Марка 6:29",
    "question": "Место для погребения, усыпальница.",
    "id": "household-241",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Ткач",
    "reference": "Исаия 38:12",
    "question": "Ремесленник, изготовляющий ткань.",
    "id": "household-242",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Олово",
    "reference": "Иезекииль 22:18,20",
    "question": "Металл, добавляемый в медь для получения бронзы.",
    "id": "household-243",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Узда",
    "reference": "Притчи 26:3",
    "question": "Бич для коня, а что для осла?",
    "id": "household-244",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Колчан",
    "reference": "Бытие 27:3",
    "question": "Сумка или футляр для стрел.",
    "id": "household-245",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шлем",
    "reference": "1 Самуила 17:38",
    "question": "Кожаный или металлический головной убор воина. 1",
    "id": "household-246",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Тюрбан",
    "reference": "Иов 29:14",
    "question": "Головной убор левита.",
    "id": "household-247",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Окно",
    "reference": "2 Коринфянам 11:33",
    "question": "Отверстие в стене дома.",
    "id": "household-248",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Глина",
    "reference": "Исход 1:14",
    "question": "Это смешивали с соломой для изготовления кирпичей.",
    "id": "household-249",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кольцо для носа",
    "reference": "Судей 8:24-26",
    "question": "Какое украшение запросил Гедеон из добычи мадианитян?",
    "id": "household-250",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Повозка",
    "reference": "1 Самуила 6:7",
    "question": "На чем филистимляне возвратили ковчег Завета израильтянам?",
    "id": "household-251",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кормушка",
    "reference": "Луки 2:7",
    "question": "Куда положили новорожденного Иисуса? 2",
    "id": "household-252",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Ярмо",
    "reference": "Матфея 11:29,30",
    "question": "Во что Иисус Христос предлагает впрягаться вместе с ним, чтобы ноша была удобная и легкая?",
    "id": "household-253",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Взятка",
    "reference": "Исход 23:8",
    "question": "Это запрещалось принимать судьям, так как могло быть расценено как подкуп.",
    "id": "household-254",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дротик",
    "reference": "Иисус Навин 8:18",
    "question": "Что должен был протянуть Иисус Навин, что послужило знаком для засады у города Гая?",
    "id": "household-255",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Хлеб, вино и оливковое масло",
    "reference": "Псалом 104:15",
    "question": "Основные продукты питания израильтян.",
    "id": "household-256",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Серьги",
    "reference": "Исход 32:2",
    "question": "Из каких украшений Аарон отлил золотого тельца?",
    "id": "household-257",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Волосяная одежда",
    "reference": "2 Царей 1:8",
    "question": "Одежда, по которой отличали пророка Илию. 3",
    "id": "household-258",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Колодки",
    "reference": "Иеремия 20:2",
    "question": "Приспособление, в которое вставляли ноги узников, чтобы те не могли двигаться.",
    "id": "household-259",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Одежда",
    "reference": "Марка 15:24",
    "question": "Об этом бросали жребий римские воины.",
    "id": "household-260",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ворота",
    "reference": "Неемия 7:3",
    "question": "Вход в город, который запирали на ночь.",
    "id": "household-261",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сети",
    "reference": "Марка 1:19",
    "question": "Что чинили Иаков и Иоанн, когда Иисус позвал их?",
    "id": "household-262",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Остаток",
    "reference": "Второзаконие 24:19-21",
    "question": "Что из урожая доставалось пришельцу, сироте и вдове?",
    "id": "household-263",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Подставка",
    "reference": "Исход 30:18",
    "question": "На что ставился умывальник в скинии? 4",
    "id": "household-264",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Труба",
    "reference": "Числа 31:6",
    "question": "Моисею было велено изготовить для священников два этих музыкальных инструмента из серебра для сбора на войну и праздников.",
    "id": "household-265",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гомор",
    "reference": "Исход 16:16",
    "question": "Столько манны должны были собирать на одного человека.",
    "id": "household-266",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Полсикля",
    "reference": "Исход 30:13",
    "question": "Сколько должен заплатить каждый мужчина – израильтянин за свою душу в качестве выкупа?",
    "id": "household-267",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Двор",
    "reference": "Исход 27:9",
    "question": "Пространство вокруг священного шатра.",
    "id": "household-268",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Стол",
    "reference": "Иезекииль 23:41",
    "question": "В древние времена этот предмет мебели был только в домах правителей и знатных людей.",
    "id": "household-269",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Колесница",
    "reference": "Деяния 8:29",
    "question": "Эфиопский евнух ехал на этом, когда его догнал Филипп. 5",
    "id": "household-270",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Гонцы",
    "reference": "2 Летопись 30:6, 10",
    "question": "Посланники, которые быстро доставляли царские указы.",
    "id": "household-271",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Соль",
    "reference": "Марка 9:50",
    "question": "«*** хороша, но если *** потеряет силу, чем придашь ей вкус?»",
    "id": "household-272",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Корабль",
    "reference": "1 Царей 10:22",
    "question": "На чем доставляли в Израиль золото, серебро, слоновую кость, обезьян, павлинов во времена Соломона?",
    "id": "household-273",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Упряжь",
    "reference": "2 Самуила 24:22",
    "question": "Сбруя, по-другому.",
    "id": "household-274",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Отвес",
    "reference": "Захария 4:10",
    "question": "Небольшой груз на шнурке для выверки вертикального направления.",
    "id": "household-275",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шатер",
    "reference": "Исаия 54:2",
    "question": "Патриархи жили в этом переносном жилище. 6",
    "id": "household-276",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Топор",
    "reference": "2 Царей 6:6",
    "question": "Предмет, который Елисей достал из воды с помощью куска дерева.",
    "id": "household-277",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мотыга",
    "reference": "Исаия 7:25",
    "question": "Орудие труда с деревянной рукояткой и заостренным металлическим наконечником, используемый для обработки почвы.",
    "id": "household-278",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Факел",
    "reference": "Судей 7:16,20",
    "question": "Что было в кувшинах у воинов Гедеона?",
    "id": "household-279",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пастбище",
    "reference": "1 Летопись 4:39",
    "question": "Место, где пасется скот.",
    "id": "household-280",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Город",
    "reference": "Бытие 4:17",
    "question": "Первым основателем такого рода поселения был Каин.",
    "id": "household-281",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Костер",
    "reference": "Иезекииль 24:9",
    "question": "Горящая куча дров, хвороста. 7",
    "id": "household-282",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сикль",
    "reference": "Исход 38:24-29",
    "question": "В каких единицах веса измерялось количество золота, серебра и меди употребляемое для строительства скинии?",
    "id": "household-283",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ярмо",
    "reference": "Исаия 58:6",
    "question": "Деревянный хомут, с помощью которого запрягали двух животных в плуг или повозку.",
    "id": "household-284",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гробница",
    "reference": "Иов 21:32",
    "question": "Место захоронения на востоке.",
    "id": "household-285",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Столб",
    "reference": "Бытие 35:20",
    "question": "Что Иаков поставил над гробом Рахили?",
    "id": "household-286",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бедро",
    "reference": "Бытие 24:2",
    "question": "Поясница и задняя часть туловища ниже поясницы.",
    "id": "household-287",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кошелек",
    "reference": "Марка 6:8",
    "question": "Мешочек для денег. 8",
    "id": "household-288",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Корабль",
    "reference": "1 Царей 9:26-28",
    "question": "Что построил Соломон в Ецион–Гавере на берегу моря?",
    "id": "household-289",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Горшок",
    "reference": "Судей 6:19",
    "question": "Глиняный сосуд для приготовления и хранения пищи.",
    "id": "household-290",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дворец правителя",
    "reference": "Матфея 27:27",
    "question": "Служебная резиденция римского наместника.",
    "id": "household-291",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Очаг",
    "reference": "Исаия 30:14",
    "question": "Место для разведения огня в доме.",
    "id": "household-292",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шалаш",
    "reference": "Исаия 1:8",
    "question": "Ночное убежище сторожа, охраняющего в саду спелые плоды.",
    "id": "household-293",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Соль",
    "reference": "Иов 6:6",
    "question": "Что придает вкус пищи? 9",
    "id": "household-294",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Горящий уголь",
    "reference": "Левит 16:12",
    "question": "Что клали в сосуд для огня для возжигания курений?",
    "id": "household-295",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Косяк",
    "reference": "Исход 12:22",
    "question": "Деревянная боковая опора дверного проема.",
    "id": "household-296",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пакля",
    "reference": "Исаия 1:31",
    "question": "Отходы от льна или конопли, короткие легковоспламеняющиеся волокна.",
    "id": "household-297",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Соль",
    "reference": "Левит 2:13",
    "question": "Не одно жертвоприношение не обходилось без этого продукта питания.",
    "id": "household-298",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шатер",
    "reference": "2 Царей 7:7",
    "question": "Место пребывания царя и воинов в стане во время походов.",
    "id": "household-299",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кузнец",
    "reference": "Бытие 4:22",
    "question": "Первое ремесло, которое называется в Библии. 0",
    "id": "household-300",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Коробочка с отрывками из Писаний",
    "reference": "Матфея 23:5",
    "question": "Перед молитвой фарисеи привязывали это ко лбу в них находились полоски пергамента с текстами Закона.",
    "id": "household-301",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Скамейка",
    "reference": "2 Летопись 9:18",
    "question": "Подставка для ног у престола правителя.",
    "id": "household-302",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Груз",
    "reference": "Деяния 21:3",
    "question": "Товар, предметы, принимаемые для перевозки.",
    "id": "household-303",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бахрома",
    "reference": "Матфея 14:36",
    "question": "К какой части одежды Иисуса было достаточно прикоснуться больным, чтобы совершенно выздороветь?",
    "id": "household-304",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Слоновая кость",
    "reference": "1 Царей 10:18",
    "question": "Из какого особого материала был сделан престол Соломона и обложен золотом.",
    "id": "household-305",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Священный шатер",
    "reference": "Исход 40:34",
    "question": "Переносной храм для поклонения. 1",
    "id": "household-306",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Командир",
    "reference": "Деяния 21:31",
    "question": "Командующий римским гарнизоном.",
    "id": "household-307",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Плавильный сосуд",
    "reference": "Притчи 27:21",
    "question": "Глиняный сосуд для плавки металлов.",
    "id": "household-308",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Столб",
    "reference": "2 Самуила 18:18",
    "question": "Что Авессалом еще при жизни поставил, чтобы «сохранить память имени» своего?",
    "id": "household-309",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Хлеб",
    "reference": "Луки 22:19",
    "question": "«Взял ***, воздал благодарность Богу, разломил его и дал им».",
    "id": "household-310",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Корзина",
    "reference": "Иеремия 24:2",
    "question": "В чем лежали смоквы в видении Иеремии?",
    "id": "household-311",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рыба",
    "reference": "Луки 24:42",
    "question": "Пища, которой ученики угощали воскрешего Иисуса. 2",
    "id": "household-312",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Косяк",
    "reference": "Исход 21:6",
    "question": "Рабу, не желавшему быть отпущенным на свободу, прокалывали ухо подведя к этой части двери.",
    "id": "household-313",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "День Приготовления",
    "reference": "Луки 23:54",
    "question": "Этот день предшествовал субботе. Израильтяне делали в него необходимые приготовления.",
    "id": "household-314",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Гончар",
    "reference": "Иеремия 18:3",
    "question": "Материалом для работы этого ремесленника является глина.",
    "id": "household-315",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чаша",
    "reference": "Матфея 26:39,42",
    "question": "С чем сравнивает Иисус Христос волю Иеговы в своей молитве в Гефиманском саду?",
    "id": "household-316",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пазуха",
    "reference": "Исход 4:6",
    "question": "Складка одежды поверх пояса, служившая одновременно карманом.",
    "id": "household-317",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сосед",
    "reference": "Притчи 27:10",
    "question": "Человек, живущий поблизости, который может вовремя придти на помощь. 3",
    "id": "household-318",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Давильня",
    "reference": "Исаия 63:3",
    "question": "Емкость в которой давят виноград.",
    "id": "household-319",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Дощечка",
    "reference": "Луки 1:63",
    "question": "Пластина, которую попросил Захария, чтобы написать имя своего сына.",
    "id": "household-320",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Форма",
    "reference": "Наум 3:14",
    "question": "В чем делали кирпичи?",
    "id": "household-321",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Краска",
    "reference": "Иеремия 22:14",
    "question": "Вещество, придающее чему-либо цвет.",
    "id": "household-322",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гумно",
    "reference": "Руфь 3:2",
    "question": "Ровное место, где провеивали зерно.",
    "id": "household-323",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ловушка",
    "reference": "Псалом 140:5",
    "question": "Приспособление для ловли животных или птиц. 4",
    "id": "household-324",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Уголь",
    "reference": "Исаия 44:19",
    "question": "Его использовали для приготовления пищи, для выпечки хлеба и жарки мяса.",
    "id": "household-325",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "След",
    "reference": "Песнь песней 1:8",
    "question": "Отпечаток, который оставляют при ходьбе человек или животное.",
    "id": "household-326",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чернила",
    "reference": "2 Иоанна 12",
    "question": "Этим писали на бумаге.",
    "id": "household-327",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Башня",
    "reference": "Псалом 48:12",
    "question": "Укрепленная часть городской стены для защиты города.",
    "id": "household-328",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Обнаженный",
    "reference": "2 Самуила 6:20",
    "question": "Как назывался тот, кто снимал верхнюю одежду и оставался в нижнем одеянии.",
    "id": "household-329",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Пекарь",
    "reference": "Осия 7:4; Иеремия 37:21",
    "question": "Профессия, выпекающих хлеб. 5",
    "id": "household-330",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сковорода",
    "reference": "Левит 2:5",
    "question": "Лист железа, предназначенный для выпечки или жарки продуктов питания.",
    "id": "household-331",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Столб",
    "reference": "Бытие 28:18",
    "question": "Чем Иаков сделал камень, который был у него под головой?",
    "id": "household-332",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Уста",
    "reference": "Притчи 10:32",
    "question": "Часть человеческого лица, символизирующая речь.",
    "id": "household-333",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Корма",
    "reference": "Марка 4:38",
    "question": "Как называется задняя часть лодки?",
    "id": "household-334",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чаша",
    "reference": "Откровение 16:1",
    "question": "«Идите и вылейте на землю семь *** Божьего гнева».",
    "id": "household-335",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гостеприимство",
    "reference": "Евреям 13:2",
    "question": "Традиция приглашать странника в свой дом. 6",
    "id": "household-336",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Гумно",
    "reference": "Иов 39:12",
    "question": "Площадка для молотьбы, ток.",
    "id": "household-337",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сосуд для огня",
    "reference": "Числа 4:14; 16:6, 17",
    "question": "Предмет, похожий на сковороду, используемый в служении священниками.",
    "id": "household-338",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Крыша",
    "reference": "Матфея 8:8",
    "question": "«В ответ сотник сказал: Господин! Я недостоин, чтобы ты вошел под *** моего дома».",
    "id": "household-339",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Парус",
    "reference": "Деяния 27:40",
    "question": "Полотнище, укрепленное на мачте судна.",
    "id": "household-340",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Синагога",
    "reference": "Марка 1:21",
    "question": "Особое здание для собрания иудеев и чтения закона, появившееся после вавилонского плена.",
    "id": "household-341",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Шалаш",
    "reference": "Неемия 8:14",
    "question": "Небольшая жилая постройка из веток и листьев. 7",
    "id": "household-342",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Скрижали",
    "reference": "Исход 31:18",
    "question": "Каменные плиты, на которых были записаны десять заповедей.",
    "id": "household-343",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Верхняя комната",
    "reference": "Даниил 6:10",
    "question": "Помещение, где Даниил молился три раза в день.",
    "id": "household-344",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Дидрахма",
    "reference": "Матфея 17:24",
    "question": "Подать, которую потребовали у Петра собиратели подати.",
    "id": "household-345",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Таз",
    "reference": "Иоанна 13:5",
    "question": "Во что Иисус налил воды, чтобы вымыть ученикам ноги?",
    "id": "household-346",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Котел",
    "reference": "2 Царей 4:38",
    "question": "Металлический сосуд округлой формы для варки пищи на костре.",
    "id": "household-347",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Корзина",
    "reference": "Числа 6:15",
    "question": "В чем приносили хлебные приношения? 8",
    "id": "household-348",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Факел",
    "reference": "Судей 15:4",
    "question": "Самсон привязал это к хвостам лисиц.",
    "id": "household-349",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Загон",
    "reference": "Аввакум 3:17",
    "question": "Огороженное место для скота.",
    "id": "household-350",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Гражданские управляющие",
    "reference": "Деяния 16:20,35",
    "question": "Чиновники, возглавлявшие администрацию римского провинциального города.",
    "id": "household-351",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Уксус",
    "reference": "Псалом 69:21",
    "question": "Пищевой продукт, получаемый из содержащих алкоголь жидкостей путем брожения.",
    "id": "household-352",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кувшин",
    "reference": "Иоанна 4:28",
    "question": "Что самаритянка оставила у колодца?",
    "id": "household-353",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пепел",
    "reference": "2 Самуила 13:19",
    "question": "Чем посыпали голову в знак траура? 9",
    "id": "household-354",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мясо",
    "reference": "Бытие 1:29",
    "question": "Пища, которая не предназначалась для первых людей.",
    "id": "household-355",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дань",
    "reference": "2 Царей 23:33",
    "question": "Подать с побежденного народа.",
    "id": "household-356",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ладонь",
    "reference": "Исход 25:23-25",
    "question": "В этом измерялась высота венца вокруг стола для хлебов предложения.",
    "id": "household-357",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Плуг",
    "reference": "Луки 9:62",
    "question": "«Никто, положивший руку свою на *** и оглядывающийся на то, что позади, не пригоден для Царства Бога».",
    "id": "household-358",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кров",
    "reference": "1 Тимофею 6:8",
    "question": "«Имея пропитание, одежду и ***, мы будем этим довольны».",
    "id": "household-359",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Седло",
    "reference": "Бытие 31:34",
    "question": "Подо что Рахиль спрятала идолов своего отца? 0",
    "id": "household-360",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сотник",
    "reference": "Деяния 10:1",
    "question": "Низшее офицерское звание римского войска.",
    "id": "household-361",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шкура",
    "reference": "Бытие 27:16",
    "question": "Иаков скрыл под этим свою гладкую кожу шеи и рук, когда вошел к Исааку за благословением.",
    "id": "household-362",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бат",
    "reference": "Ездра 7:22",
    "question": "Мера для жидкости.",
    "id": "household-363",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Привратники",
    "reference": "1 Летопись 9:22,25",
    "question": "В обязанности этих 212 левитов входило день и ночь нести службу у ворот храма, у сокровищниц и у кладовых.",
    "id": "household-364",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Постель",
    "reference": "1 Царей 17:19",
    "question": "Илья положил на это сына вдовы из Сарепты.",
    "id": "household-365",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Жатва",
    "reference": "Бытие 8:22",
    "question": "Уборка зерновых культур. 1",
    "id": "household-366",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Крупа",
    "reference": "2 Самуила 17:19",
    "question": "Что женщина насыпала на покрывало, закрывающее устье колодца, спасая Ионафана и Ахимааса?",
    "id": "household-367",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Привратник",
    "reference": "Неемия 7:1,3",
    "question": "В обязанности этой должности входило своевременно запирать и открывать ворота.",
    "id": "household-368",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Сикль",
    "reference": "Исход 30:13",
    "question": "Денежная единица, составляющая 20 гер.",
    "id": "household-369",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Стол",
    "reference": "Луки 7:36",
    "question": "Низкий предмет мебели, вокруг которого возлежали гости.",
    "id": "household-370",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Факел",
    "reference": "Иоанна 18:3",
    "question": "Связка прутьев, обмотанная паклей или тряпками, пропитанными жиром или смолой.",
    "id": "household-371",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дома души",
    "reference": "Исаия 3:20",
    "question": "Как назывался флакончик для духов? 2",
    "id": "household-372",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Зеркало",
    "reference": "1 Коринфянам 13:12",
    "question": "Отполированная поверхность, отражающая находящиеся перед ней предметы.",
    "id": "household-373",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пожертвование",
    "reference": "Исход 25:2",
    "question": "Подать, которая предназначена для Иеговы, святилища или священника.",
    "id": "household-374",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Чаша",
    "reference": "Исход 25:29",
    "question": "Сосуд из золота ковшеобразной формы, который применяли священники при служении.",
    "id": "household-375",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дворец правителя",
    "reference": "Марка 15:16",
    "question": "Место, где воины издевались над Иисусом Христом.",
    "id": "household-376",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Цепь",
    "reference": "Деяния 12:6",
    "question": "Апостол Петр был скован этим между двумя воинами.",
    "id": "household-377",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сторож",
    "reference": "Исаия 21:6",
    "question": "Стерегущий то, что находится под его охраной. 3",
    "id": "household-378",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Жезл",
    "reference": "Псалом 110:2",
    "question": "Палка до 1 метра длиной, символ власти.",
    "id": "household-379",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Список",
    "reference": "Исход 38:21",
    "question": "Документ, содержащий перечень каких-либо сведений.",
    "id": "household-380",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Блюдо",
    "reference": "Исход 25:29",
    "question": "Широкий открытый сосуд, использовавшийся как в святилище, так и в доме.",
    "id": "household-381",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Крыша",
    "reference": "Луки 5:19",
    "question": "Куда забрались люди несшие парализованного человека и искавшие способ положить его перед Иисусом?",
    "id": "household-382",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ложе",
    "reference": "Эсфирь 1:6",
    "question": "Это было золотое и серебряное, стояло на помостах во дворе царя Артаксеркса.",
    "id": "household-383",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Вино и крепкие напитки",
    "reference": "Судей 13:4",
    "question": "Что Бог запретил употреблять жене Маноя? 4",
    "id": "household-384",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Сыр",
    "reference": "1 Самуила 17:18",
    "question": "Что Давид должен был отнести тысяченачальнику, когда пришел к братьям в стан?",
    "id": "household-385",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Залог",
    "reference": "Второзаконие 24:10",
    "question": "Предмет, который должник оставляет своему заимодавцу как гарантию возврата долга.",
    "id": "household-386",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Бат",
    "reference": "1 Царейа 7:26",
    "question": "Медное море вмещало две тысячи этих единиц измерения.",
    "id": "household-387",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чаша",
    "reference": "Бытие 44:2-6",
    "question": "Предмет, с помощью которого Иосиф проверял своих братьев.",
    "id": "household-388",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пришелец",
    "reference": "Числа 9:14",
    "question": "Не израильтянин, живущий среди народа Бога и соблюдающий Закон.",
    "id": "household-389",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Парус",
    "reference": "Деяния 27:40",
    "question": "«Двигатель» судна времён Иисуса Христа. 5",
    "id": "household-390",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лепёшка",
    "reference": "2 Царей 20:7",
    "question": "Спрессованные смоквы, которые приложили как лекарство к нарыву царю Езекии.",
    "id": "household-391",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Плеть",
    "reference": "Иоанна 19:1",
    "question": "Кожаные ремни для избиения, в которые были вплетены кости и свинцовые шарики.",
    "id": "household-392",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Крюк",
    "reference": "Иезекииль 29:4",
    "question": "Металлический стержень с загнутым концом.",
    "id": "household-393",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Купец",
    "reference": "2 Летопись 9:14",
    "question": "Торговец, буквально означает «разъезжающий с места на место».",
    "id": "household-394",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чаша",
    "reference": "Матфея 10:42",
    "question": "Сосуд для вина и других напитков.",
    "id": "household-395",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Стена",
    "reference": "2 Коринфянам 11:33",
    "question": "По этой части здания Павел был спущен из окна. 6",
    "id": "household-396",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Крючок",
    "reference": "Матфея 17:27",
    "question": "Рыболовная снасть.",
    "id": "household-397",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Кувшин",
    "reference": "1 Царей 18:33",
    "question": "Сосуд для ношения и хранения жидкостей или сыпучих веществ.",
    "id": "household-398",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Рубашка",
    "reference": "Исход 28:40",
    "question": "Длинная одежда, в которую Моисей одел сыновей Аарона.",
    "id": "household-399",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Стенобитное орудие",
    "reference": "Иезекииль 21:22",
    "question": "Орудие для разрушения стен.",
    "id": "household-400",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Жёрнов",
    "reference": "Луки 17:2",
    "question": "Мельничный круг для размола зерна.",
    "id": "household-401",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пришельцы / рабы",
    "reference": "Второзаконие 10:19",
    "question": "В Египте израильтяне были ими. 7",
    "id": "household-402",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Заплата",
    "reference": "Луки 5:36",
    "question": "Кусок ткани, нашиваемый на разорванное место.",
    "id": "household-403",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Масло",
    "reference": "1 Царей 17:14",
    "question": "Что наряду с мукой Иегова дал вдове из Сарепты для пропитания?",
    "id": "household-404",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ведро",
    "reference": "Исаия 40:15",
    "question": "Сосуд, капле из которого пророк уподобил все народы.",
    "id": "household-405",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Машина на башнях",
    "reference": "2 Летопись 26:15",
    "question": "Оружие для метания стрел и каменных ядер.",
    "id": "household-406",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Гнёзда",
    "reference": "Исход 28:20",
    "question": "Золотые углубления, в которые вставлялись камни с именами сынов Израиля на нагруднике Аарона.",
    "id": "household-407",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Прозелит",
    "reference": "Деяния 13:43",
    "question": "Язычник, который принял веру израильтян. 8",
    "id": "household-408",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Крыша",
    "reference": "2 Самуила 11:2",
    "question": "Давид находился там, когда увидел купающуюся Вирсавию.",
    "id": "household-409",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Резчик",
    "reference": "Исход 28:11",
    "question": "Ремесленник, который вырезал «имена сынов Израилевых» на камне.",
    "id": "household-410",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сумка",
    "reference": "1 Самуила 17:49",
    "question": "Мешок из дубленой козьей шкуры, который носили на ремне через плечо или за спиной.",
    "id": "household-411",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лютни",
    "reference": "1 Самуила 18:6",
    "question": "Музыкальный инструмент, на котором играли женщины, встречая Давида с победы над Филистимлянами.",
    "id": "household-412",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Ведро",
    "reference": "Иоанна 4:11",
    "question": "Сосуд для зачерпывания воды из колодца.",
    "id": "household-413",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Животноводство / скотоводство",
    "reference": "Бытие 47:3-6",
    "question": "Основное занятие патриархов по разведению скота. 9",
    "id": "household-414",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Гиря",
    "reference": "Второзаконие 25:15",
    "question": "Груз определенного веса, служащий мерой при взвешивании.",
    "id": "household-415",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Накидка",
    "reference": "2 Тимофею 4:13",
    "question": "Одежда, которую апостол Павел оставил в Троаде у Карпа.",
    "id": "household-416",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Браслеты",
    "reference": "Бытие 24:22",
    "question": "Украшения на руки, подаренное Ревеке Елиезером, слугой Авраама.",
    "id": "household-417",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Молот",
    "reference": "Иеремия 50:23",
    "question": "Большой тяжелый молоток.",
    "id": "household-418",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Чан",
    "reference": "Исход 30:18-21",
    "question": "Священники должны были умывать в нем руки и ноги, прежде чем преступить к служению.",
    "id": "household-419",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Молоко",
    "reference": "Притчи 27:27",
    "question": "Бывает коровье, овечье и козье. 0",
    "id": "household-420",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Крыша",
    "reference": "Неемия 8:16",
    "question": "На этой плоской части дома сооружали кущи.",
    "id": "household-421",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Слоновая кость",
    "reference": "1 Царей 22:39",
    "question": "Какой особый материал использовался для строительства дома царя Ахава?",
    "id": "household-422",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Амбар",
    "reference": "Бытие 41:56",
    "question": "Помещение, где по повелению Иосифа хранили урожай зерна.",
    "id": "household-423",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пядь",
    "reference": "Исход 28:15,16",
    "question": "Нагрудник первосвященника имел такую длину и ширину.",
    "id": "household-424",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Волос и ногтей",
    "reference": "Второзаконие 21:12",
    "question": "Чего должна была лишиться пленница, чтобы стать женой израильтянина?",
    "id": "household-425",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Уста / губы",
    "reference": "Даниил 10:16",
    "question": "Чего коснулся ангел Даниила горящим углем? 1",
    "id": "household-426",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Меха",
    "reference": "Иеремия 6:29",
    "question": "Устройство для раздувания огня в горне.",
    "id": "household-427",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Пришельцы",
    "reference": "Левит 25:45,46",
    "question": "В отличии от израильтян их в юбилейный год не отпускали, они оставались рабами вечно.",
    "id": "household-428",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Кувшин",
    "reference": "Бытие 24:45",
    "question": "Сосуд, с которым Ревекка пришла к источнику почерпнуть воды.",
    "id": "household-429",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Окно",
    "reference": "Иисус Навин 2:15",
    "question": "Через что Раав спустила по веревке израильских разведчиков?",
    "id": "household-430",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Суббота",
    "reference": "Исход 20:8-11",
    "question": "День недели, в который израильтяне должны были отдыхать от обыденных дел и посвящать его духовному.",
    "id": "household-431",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Дичь",
    "reference": "Бытие 27:3, 4",
    "question": "Пища, которая была по вкусу Исааку. 2",
    "id": "household-432",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мясо",
    "reference": "Числа 11:33",
    "question": "Пища, которая была ещё в зубах израильтян, когда Господь поразил их за их ропот.",
    "id": "household-433",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лодка",
    "reference": "Матфея 4:21",
    "question": "Частная собственность Зеведея, средство для водного промысла.",
    "id": "household-434",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Уголь",
    "reference": "Притчи 26:21",
    "question": "Остаток от сжигаемых дров, используемых для обогрева.",
    "id": "household-435",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лепёшка",
    "reference": "1 Летопись 16:3",
    "question": "Чем Давид угощал народ, празднуя возвращение ковчега из Филистимского стана?",
    "id": "household-436",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Нижняя одежда",
    "reference": "Иоанна 19:23, 24",
    "question": "Одежда Иисуса, о которой воины, пригвоздившие его, бросали жребий.",
    "id": "household-437",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Сотник",
    "reference": "Матфея 8:5",
    "question": "Начальник военного подразделения из 100 человек. 3",
    "id": "household-438",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мука",
    "reference": "Судей 6:19",
    "question": "Из чего гостеприимный Гедеон приготовил лепёшки пришедшему к нему Ангелу?",
    "id": "household-439",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Свёрток",
    "reference": "Иоанна 19:39",
    "question": "Что принес с собой Никодим для погребения Иисуса?",
    "id": "household-440",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Мешковина",
    "reference": "2 Самуила 21:10",
    "question": "Траурная одежда, которую разостлала Рицпа на сколе, охраняя тела ее убитых сыновей.",
    "id": "household-441",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Туника",
    "reference": "Исаия 3:22",
    "question": "Изящные женские платья, которые по словам Исаии, носили надменные дочери Сиона.",
    "id": "household-442",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Сыр",
    "reference": "Иов 10:10",
    "question": "Молочный продукт, с которым Иов связывает свое появление на свет.",
    "id": "household-443",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Шатёр",
    "reference": "Судей 4:18",
    "question": "Место убежища Сисары, которое он нашел у Иаили. 4",
    "id": "household-444",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Щипцы",
    "reference": "Исаия 6:6",
    "question": "Чем серафим взял раскалённый уголь с жертвенника?",
    "id": "household-445",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Хлеб и вино",
    "reference": "Бытие 14:18",
    "question": "С чем Мелхиседек встречал Авраама, возвращающегося домой после поражения им Кедорлаомера?",
    "id": "household-446",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Рога",
    "reference": "Исход 27:2",
    "question": "Что было на четырёх углах жертвенника?",
    "id": "household-447",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Спица",
    "reference": "1 Царей 7:33",
    "question": "Металлический прут, скрепляющий обот колеса с осью.",
    "id": "household-448",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Борода",
    "reference": "2 Самуила 20:9",
    "question": "За что взял Иоав Амессая перед тем, как поразить его?",
    "id": "household-449",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Посох",
    "reference": "Захария 8:4",
    "question": "Палка для опоры при ходьбе. 5",
    "id": "household-450",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Жаренные зерна, лепёшки и сыр",
    "reference": "1 Самуила 17:18",
    "question": "Что входило в подарок начальнику над тысячью, переданное ему Иессеем через Давида?",
    "id": "household-451",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Верёвка",
    "reference": "Исход 35:18",
    "question": "Очень толстая, грубая пряжа из нескольких прядей, употребляемая для хозяйственных нужд.",
    "id": "household-452",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Милло/ дом Насыпи",
    "reference": "2 Царей 12:20",
    "question": "Дом, в котором слуги убили царя Иоаса.",
    "id": "household-453",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "hard"
  },
  {
    "answer": "Мешок",
    "reference": "Бытие 42:25",
    "question": "Что Иосиф приказал наполнить хлебом для своих братьев?",
    "id": "household-454",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Коров",
    "reference": "1 Царей 4:22",
    "question": "Мера, которой выдавали и отмеривали муку, идущую на продовольствие Соломона.",
    "id": "household-455",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Лён",
    "reference": "Матфея 27:59",
    "question": "Чем Иосиф обвил тело Иисуса? 6",
    "id": "household-456",
    "category": "household",
    "categoryName": "Предметы быта",
    "difficulty": "easy"
  },
  {
    "answer": "Египет",
    "reference": "Бытие 12:10",
    "question": "Первая мировая держава.",
    "id": "geography-1",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иавок",
    "reference": "Бытие 32:22-24",
    "question": "Левый приток Иордана, вблизи него Иаков всю ночь боролся с ангелом.",
    "id": "geography-2",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Офра",
    "reference": "Судей 8:27",
    "question": "Город, в котором жил Гедеон.",
    "id": "geography-3",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифсаида",
    "reference": "Иоанна 1:44",
    "question": "Рыбацкий городок на северном берегу Галилейского озера, недалеко от Иордана. Родина Филиппа, Андрея и Петра.",
    "id": "geography-4",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ривла",
    "reference": "1 Царей 25:6,7",
    "question": "Город, куда был приведен царь Седекия на суд к Навуходоносору.",
    "id": "geography-5",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авана",
    "reference": "1 Царей 5:12",
    "question": "Река, протекающая через Дамаск. 1",
    "id": "geography-6",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ситтим",
    "reference": "Иисус Навин 2:1",
    "question": "Израильтяне расположились здесь станом перед входом в Ханаан. Иисус Навин послал отсюда двух разведчиков в Иерихон.",
    "id": "geography-7",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Листра",
    "reference": "Деяния 16:1,2",
    "question": "Родина Тимофея.",
    "id": "geography-8",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Запад",
    "reference": "Даниил 8:5",
    "question": "Сторона света, откуда пришел козел в видении Даниила.",
    "id": "geography-9",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тов",
    "reference": "Судей 11:3",
    "question": "В этой области жил Иеффай, один из судей Израиля.",
    "id": "geography-10",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Изреель",
    "reference": "1 Царей 21:1,2",
    "question": "В этом городе был виноградник Навуфея, который хотел заполучить себе Ахав.",
    "id": "geography-11",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифлеем",
    "reference": "1 Самуила 16:1-13",
    "question": "Родной город Давида. 2",
    "id": "geography-12",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аиаф",
    "reference": "Исаия 10:24,28",
    "question": "Город, который ассирийцы во время похода на Иерусалим захватили первым.",
    "id": "geography-13",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галаад / Сторожевая Башня",
    "reference": "Бытие 31:48, 49",
    "question": "Место, где Иаков и Лаван заключили договор.",
    "id": "geography-14",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Пергам",
    "reference": "Откровение 2:12-17",
    "question": "Здесь был построен первый в истории Рима храм, посвященный императору Августу. Иисус назвал этот город «престолом сатаны».",
    "id": "geography-15",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мадиам",
    "reference": "Исход 2:15",
    "question": "Моисей убежал сюда после убийства египтянина.",
    "id": "geography-16",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фавор",
    "reference": "Судей 4:6",
    "question": "Гора в восточной Галилее; Девора призвала Варака взойти на эту гору с 10000 воинов из сыновей Неффалима и сыновей Завулона.",
    "id": "geography-17",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кедрон",
    "reference": "Иоанна 18:1",
    "question": "Долина, отделяющая Иерусалим с востока от Масличной горы. 3",
    "id": "geography-18",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Еммаус",
    "reference": "Луки 24:13",
    "question": "Воскресший Иисус явился двум своим ученикам, шедшим в эту деревню, расположенную в 11 км от Иерусалима.",
    "id": "geography-19",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иаван",
    "reference": "Бытие 10:2",
    "question": "Более раннее название Греции.",
    "id": "geography-20",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гаваон",
    "reference": "1 Царей 3:4",
    "question": "В этом городе стоял главный жертвенник, куда Соломон ходил поклоняться Богу.",
    "id": "geography-21",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авел-Беф-Мааха",
    "reference": "2 Самуила 20:15-22",
    "question": "Женщина из этого города уговорила народ и они отсекли голову Савы и бросили ее Иоаву.",
    "id": "geography-22",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Енном",
    "reference": "Иисус Навин 15:8",
    "question": "Долина на южной окраине Иерусалима, от которой произошло название геенна.",
    "id": "geography-23",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сур",
    "reference": "Бытие 16:7",
    "question": "Пустыня на северо-западе Синайского полуострова, куда сбежала Агарь. 4",
    "id": "geography-24",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Птолемаида",
    "reference": "Деяния 21:7",
    "question": "Апостол Павел прибыл сюда на корабле из Тира, в последний раз направляясь в Иерусалим.",
    "id": "geography-25",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Салмон",
    "reference": "Деяния 27:7",
    "question": "Мимо этого мыса на восточном берегу острова Крит проплывал Павел на пути в Рим, чтобы предстать перед судом.",
    "id": "geography-26",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гихон",
    "reference": "1 Царей 1:33,34",
    "question": "Вблизи этого источника Соломон по приказу царя Давида был помазан на царство.",
    "id": "geography-27",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Адрамит",
    "reference": "Деяния 27:2",
    "question": "Путешествуя в Рим апостол Павел отправился из этого порта вблизи Трои и Троады.",
    "id": "geography-28",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Великое море",
    "reference": "Числа 34:6",
    "question": "Библейское название Средиземного моря.",
    "id": "geography-29",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иордан",
    "reference": "2 Царей 5:9,10",
    "question": "Для исцеления от проказы Нееман должен был омыться в водах этой реки. 5",
    "id": "geography-30",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мориа",
    "reference": "Бытие 22:2",
    "question": "Гористая местность, на которой Авраам должен был принести в жертву своего сына Исаака.",
    "id": "geography-31",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Речная долина",
    "reference": "1 Самуила 17:40",
    "question": "Место, где Давид взял пять гладких камней.",
    "id": "geography-32",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Дамаск",
    "reference": "2 Царей 5:11,12",
    "question": "Древний город, столица Сирии, родной город Неемана.",
    "id": "geography-33",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Киссон",
    "reference": "Судей 5:21",
    "question": "Небольшой ручей, пресекающий равнину Мегиддо. При разливе его вод прибрежная земля превращалась в болото.",
    "id": "geography-34",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амаликитяне",
    "reference": "Числа 14:45",
    "question": "Племя, вместе с хананеями гнавшие ропотников- израильтян даже до Хормы.",
    "id": "geography-35",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кесария",
    "reference": "Деяния 21:8",
    "question": "Родной город благовестника Филиппа. 6",
    "id": "geography-36",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эшкол",
    "reference": "Числа 13:24, 25",
    "question": "Из этой долины вблизи Хеврона разведчики принесли образцы плодов. Её название означает «виноградная лоза».",
    "id": "geography-37",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эфес",
    "reference": "Деяния 19:35",
    "question": "Город – служитель богини Артемиды.",
    "id": "geography-38",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Крит / Кафтор",
    "reference": "Второзаконие 2:23",
    "question": "Гористый остров в восточной части Средиземного моря. Родина филистимлян.",
    "id": "geography-39",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Скала",
    "reference": "1 Самуила 14:4",
    "question": "Каменная гора с острыми выступами.",
    "id": "geography-40",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гессур",
    "reference": "2 Самуила 3:3; 13:38",
    "question": "Область и город в южной Сирии. Авессалом убежал в этот город к родственникам своей матери, когда убил своего брата Амнона.",
    "id": "geography-41",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авел-Мехола",
    "reference": "1 Царей 19:16",
    "question": "Родной город пророка Елисея. 7",
    "id": "geography-42",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иордан",
    "reference": "Иисус Навин 3:11",
    "question": "Река, протекающая вблизи Иерихона.",
    "id": "geography-43",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Агава",
    "reference": "Ездра 8:21",
    "question": "Река, у которой Ездра провозгласил пост перед дорогой в Иерусалим.",
    "id": "geography-44",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Азека",
    "reference": "Иисус Навин 10:10",
    "question": "Вблизи этого города Иисус Навин прекратил преследовать 5 амморейских царей, напавших на Гаваон.",
    "id": "geography-45",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Оно",
    "reference": "Неемия 6:2",
    "question": "Долина, на которую Санаваллат и Гешем звали Неемию, замышляя сделать ему зло.",
    "id": "geography-46",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гева",
    "reference": "1 Самуила 13:16",
    "question": "Саул расположился здесь, когда филистимляне стояли в Михмасе.",
    "id": "geography-47",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Море",
    "reference": "Бытие 12:6",
    "question": "Большие деревья у города Сихем. 8",
    "id": "geography-48",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кедрон",
    "reference": "2 Царей 23:4",
    "question": "Террасы, в которых царь Иосия сжег «все вещи, сделанные для Ваала и для священного столба и для всего небесного воинства».",
    "id": "geography-49",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Луз",
    "reference": "Бытие 28:19",
    "question": "Древнее название Вефиля.",
    "id": "geography-50",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Антиохия Писидийская",
    "reference": "Деяния 13:14",
    "question": "Павел и Варнава посетили этот город во время своего первого миссионерского путешествия, и проповедовали в нем в синагоге.",
    "id": "geography-51",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Мальта",
    "reference": "Деяния 28:1",
    "question": "У берегов этого острова потерпел крушение корабль, на котором Павла везли на суд в Рим.",
    "id": "geography-52",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Содом",
    "reference": "Бытие 13:12",
    "question": "Город, в котором поселился Лот.",
    "id": "geography-53",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Селевкия",
    "reference": "Деяния 13:4",
    "question": "Морской порт сирийской столицы Антиохии. Отсюда Павел и Варнава отплыли на Кипр. 9",
    "id": "geography-54",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кипр",
    "reference": "Деяния 4:36",
    "question": "Остров в Средиземном море, родина Варнавы.",
    "id": "geography-55",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рамоф-Галаад",
    "reference": "2 Царей 9:1-3",
    "question": "В этом городе начальник войска Ииуй был помазан на царство.",
    "id": "geography-56",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ермон",
    "reference": "Псалом 42:6",
    "question": "Гора высотой 2750 м, вершина которой почти круглый год покрыта снегом.",
    "id": "geography-57",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Понт",
    "reference": "1 Петра 1:1",
    "question": "Петр направил в эту область на южном берегу Черного моря свое первое послание.",
    "id": "geography-58",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Беф-Сан",
    "reference": "1 Самуила 31:10-12",
    "question": "После гибели Саула и Ионафана, их тела были повешены на стене этого филистимского города.",
    "id": "geography-59",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лаодикия",
    "reference": "Откровение 3:14-22",
    "question": "Город в Ликийской долине. Христианам из его собрания Иисус советовал быть горячими или холодными. 0",
    "id": "geography-60",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Мамре",
    "reference": "Бытие 13:18",
    "question": "Большие деревья, вблизи Хеврона,где Авраам и позднее Исаак часто ставили шатры.",
    "id": "geography-61",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дофан",
    "reference": "Бытие 37:17:28",
    "question": "Город, где братья продали Иосифа купцам- измаильтянам.",
    "id": "geography-62",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Азот",
    "reference": "Деяния 8:40",
    "question": "После проповеди эфиопскому евнуху Филипп оказался в этом городе.",
    "id": "geography-63",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Паддан-Арам",
    "reference": "Бытие 25:20",
    "question": "Область в Северной Месопотамии. Центром области был город Харран, где жили родственники Авраама.",
    "id": "geography-64",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Галаад",
    "reference": "Судей 11:1",
    "question": "Родной город судьи Иеффая.",
    "id": "geography-65",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кадес",
    "reference": "Числа 20:1",
    "question": "Название места, где умерла Мариамь. 1",
    "id": "geography-66",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тофет",
    "reference": "2 Царей 23:10",
    "question": "Место в долине Енномовой, где идолопоклонники приносили в жертву детей.",
    "id": "geography-67",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кесария",
    "reference": "Деяния 23:33",
    "question": "Римские правители Иудеи предпочитали жить в городе, куда был отправлен Павел на суд к Феликсу.",
    "id": "geography-68",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Адам",
    "reference": "Иисус Навин 3:16",
    "question": "Место, возле которого остановилась река Иордан, и израильтянам смогли войти в Ханаан.",
    "id": "geography-69",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пещера",
    "reference": "Бытие 23:17",
    "question": "Углубление в скале, которое использовали для погребения.",
    "id": "geography-70",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Листра",
    "reference": "Деяния 14:8-10",
    "question": "Город, где Павел исцелил человека, который никогда не ходил.",
    "id": "geography-71",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сеир",
    "reference": "Бытие 36:8",
    "question": "Гористая местность, где поселился Исав. 2",
    "id": "geography-72",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Антипатрида",
    "reference": "Деяния 23:31",
    "question": "По дороге в Кесарию Павел и его охрана переночевали в городе, названном царем Иродом в честь его отца.",
    "id": "geography-73",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ар",
    "reference": "Числа 21:14",
    "question": "Город на реке Арнон, столица Моава.",
    "id": "geography-74",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гаваон",
    "reference": "ИисусНавин 9:3-16",
    "question": "Жители этого города хитростью заключили союз с Иисусом Навином.",
    "id": "geography-75",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эдом",
    "reference": "Бытие 36:31",
    "question": "Здесь поселились потомки Исава.",
    "id": "geography-76",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Колоссы",
    "reference": "Колоссянам 1:2",
    "question": "Хотя сам Павел никогда не был в этом городе в в римской провинции Асии, одно из своих посланий он адресовал собранию этого города.",
    "id": "geography-77",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоппия",
    "reference": "Деяния 9:36-43",
    "question": "Здесь жила Тавифа – женщина, которую воскресил апостол Павел. 3",
    "id": "geography-78",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рама",
    "reference": "Иеремия 40:1",
    "question": "Навузардан освободил Иеремию из этого города, где он был в плену.",
    "id": "geography-79",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Капернаум",
    "reference": "Марка 1:21",
    "question": "Город в Галилее, который был домом Иисуса Христа.",
    "id": "geography-80",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сава",
    "reference": "1 Царей 10:1-10",
    "question": "Царица из этой страны на юге Аравии пришла услышать мудрость Соломона.",
    "id": "geography-81",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Беф-Орон",
    "reference": "Иисус Навин 16:3-5",
    "question": "Эти два города: верхний и нижний, господствовали над Аилонской долиной.",
    "id": "geography-82",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сихем",
    "reference": "1 Царей 12:1",
    "question": "В каком городе десять израильских колен отвергли правление Ровоама?",
    "id": "geography-83",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эдом",
    "reference": "Числа 20:21",
    "question": "Горная страна к югу от Мертвого моря. 4",
    "id": "geography-84",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лаис",
    "reference": "Судей 18:27",
    "question": "Ханаанский город, захваченный «сынами Дановыми» и переименованный в Дан.",
    "id": "geography-85",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гефсимания",
    "reference": "Матфея 26:36",
    "question": "Сад под Иерусалимом. Иисус часто бывал здесь своими учениками.",
    "id": "geography-86",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Фирца",
    "reference": "1 Царей 14:17",
    "question": "Родина Иеровоама. Он сделал ее столицей Израильского царства.",
    "id": "geography-87",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Смирна",
    "reference": "Откровение 2:8-11",
    "question": "В книге «Откровение» это собрание Иисус только хвалил.",
    "id": "geography-88",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кармил",
    "reference": "1 Царей 18:19",
    "question": "На этой горе пророк Илья вызвал на поединок пророков Ваала.",
    "id": "geography-89",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аиалон",
    "reference": "Иисус Навин 19:42; 21:24",
    "question": "Аморрейский город, доставшийся по жребию племени Дана, но отданный затем левитам. 5",
    "id": "geography-90",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кана",
    "reference": "Иоанна 2:1,2",
    "question": "Галилейский город, в котором Иисус присутствовал на свадьбе.",
    "id": "geography-91",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Элам",
    "reference": "Даниил 8:2",
    "question": "Область, столицей которой был город Сузы.",
    "id": "geography-92",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аравия",
    "reference": "Галатам 1:17",
    "question": "Туда пошел Савл, когда был избран Богом.",
    "id": "geography-93",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галгал",
    "reference": "2 Царей 4:38-41",
    "question": "Елисей спас здесь от смерти «сынов пророческих», отведавших ядовитой похлебки.",
    "id": "geography-94",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Македония",
    "reference": "Деяния 16:9",
    "question": "В видении Павла человек из этой области в северной Греции просил прийти и помочь.",
    "id": "geography-95",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Тарс",
    "reference": "Деяния 21:39",
    "question": "Родной город Павла. 6",
    "id": "geography-96",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Секелаг",
    "reference": "1 Летопись 12:1",
    "question": "Город, в котором Давид укрывался от Саула.",
    "id": "geography-97",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кархемис",
    "reference": "2 Летопись 35:20",
    "question": "Хеттейский город на реке Евфрат, игравший важную роль в этом регионе.",
    "id": "geography-98",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иерихон",
    "reference": "Луки 19:1-10",
    "question": "Самаритянин оказывает помощь ограбленному иудею на дороге из Иерусалима в этот город.",
    "id": "geography-99",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рефаим",
    "reference": "2 Самуила 5:18",
    "question": "Долина к юго-востоку от Иерусалима. Здесь царь Давид одержал победу над филистимлянами.",
    "id": "geography-100",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Виффагия",
    "reference": "Матфея 21:1-3",
    "question": "Деревня, восточный пригород Иерусалима. Иисус послал сюда учеников за молодым ослом, на котором въехал в город.",
    "id": "geography-101",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Деир",
    "reference": "Даниил 3:1",
    "question": "Равнина, на которой Навуходоносор поставил золотой истукан. 7",
    "id": "geography-102",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Синай",
    "reference": "Исход 19:1,2",
    "question": "Название горы и окружающей пустыни, где Иегова заключил завет с израильтянами.",
    "id": "geography-103",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Газер",
    "reference": "1 Царей 9:16",
    "question": "Соломон получил этот город в приданное, женившись на дочери фараона.",
    "id": "geography-104",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Офра",
    "reference": "Судей 6:11",
    "question": "Город, где жил Гедеон и где ему явился ангел.",
    "id": "geography-105",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вефиль",
    "reference": "Бытие 28:11-19",
    "question": "Это место, где Иакову приснилась лестница, спускающаяся с небес на землю - «дом Бога».",
    "id": "geography-106",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кесария",
    "reference": "Деяния 25:4-6",
    "question": "Портовый город на Средиземном море, построенный царем Иродом Великим, названный в честь римского императора Августа Цезаря.",
    "id": "geography-107",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лахис",
    "reference": "2 Царей 14:19",
    "question": "Город, куда убежал царь Амасия и где он был умерщвлен. 8",
    "id": "geography-108",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерусалим",
    "reference": "Матфея 23:37",
    "question": "Город, по словам Иисуса, «убивающий пророков и побивающий камнями посланных к нему».",
    "id": "geography-109",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сион",
    "reference": "Второзаконие 4:48",
    "question": "Иное название горы Ермон.",
    "id": "geography-110",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифания",
    "reference": "Иоанна 12:1-3",
    "question": "В этой деревне жили Лазарь, Марфа и Мария.",
    "id": "geography-111",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эн-Рогель",
    "reference": "1 Царей 1:9,18",
    "question": "Колодец на южной окраине Иерусалима, где Адония еще до смерти своего отца Давида провозгласил себя царем.",
    "id": "geography-112",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кириаф-Иарим",
    "reference": "1 Самуила 7:1,2",
    "question": "В этом городе 20 лет хранился ковчег завета, пока царь Давид не перенес его в Иерусалим.",
    "id": "geography-113",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Арнон",
    "reference": "Числа 21:13",
    "question": ".Река, впадающая с востока в Мертвое море. По ней проходила граница между аморреями и моавитянами. 9",
    "id": "geography-114",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ецион-Гавер",
    "reference": "1 Царей 9:26",
    "question": "Царь Соломон построил здесь торговый флот.",
    "id": "geography-115",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Александрия",
    "reference": "Деяния 27:6",
    "question": "Крупный египетский портовый город в дельте Нила, основанный Александром Македонским.",
    "id": "geography-116",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сигор",
    "reference": "Бытие 19:22",
    "question": "Город, в котором спасся Лот во время уничтожения Содома и Гоморры.",
    "id": "geography-117",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерусалим",
    "reference": "2 Самуила 5:4-6",
    "question": "Давид захватил эту крепость и сделал ее столицей.",
    "id": "geography-118",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Маон",
    "reference": "1 Самуила 23:25",
    "question": "Пустыня, где Давид скрывался от Саула.",
    "id": "geography-119",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Долина Ила",
    "reference": "1 Самуила 17:2",
    "question": "Долина, где Давид сразил Голиафа. 0",
    "id": "geography-120",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Одоллам",
    "reference": "2 Самуила 23:13",
    "question": "Пещера, в которой Давид скрывался от Саула.",
    "id": "geography-121",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гай",
    "reference": "Иисус Навин 8:1-25",
    "question": "Чтобы захватить этот город Иисус Навин сделал засаду позади него по указанию Иеговы.",
    "id": "geography-122",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кеиль",
    "reference": "1 Самуила 23:1-13",
    "question": "Город в 11 км к северо-западу от Хеврона. Давид спас его от нападения филистимлян и сам скрывался в нем от Саула.",
    "id": "geography-123",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Цора",
    "reference": "Судей 13:2-7",
    "question": "Место рождения Самсона.",
    "id": "geography-124",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Путеол",
    "reference": "Деяния 28:13,14",
    "question": "Как назывался итальянский порт, где Павел остановился на неделю у сохристиан, когда плыл, чтобы предстать перед кесарем.",
    "id": "geography-125",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Савеяне",
    "reference": "Иов 1:15",
    "question": "Они угнали скот Иова и убили его слуг. 1",
    "id": "geography-126",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рим",
    "reference": "Деяния 28:16",
    "question": "Город, в котором Павел жил в заключении.",
    "id": "geography-127",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Адрия",
    "reference": "Деяния 27:27",
    "question": "Общее название группы морей, где корабль Павла носило перед кораблекрушением.",
    "id": "geography-128",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пергия",
    "reference": "Деяния 13:13",
    "question": "Апостол Павел прибыл в этот город из Пафоса во время своего первого миссионерского путешествия.",
    "id": "geography-129",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерихон",
    "reference": "Иисус Навин 2:1,6",
    "question": "Город, где жила Раав, которая скрыла израильских разведчиков.",
    "id": "geography-130",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Киннерефское море",
    "reference": "Числа 34:11",
    "question": "Первое название Галилейского озера, данное по имени городка на его западном берегу.",
    "id": "geography-131",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Едрея",
    "reference": "Второзаконие 3:1",
    "question": "Место, вблизи которого израильтяне на пути в Обетованную землю разгромили войско Ога, царя Васана. 2",
    "id": "geography-132",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иазер",
    "reference": "Числа 21:32",
    "question": "Амморейский город, находившийся к востоку от Иордана, был захвачен израильтянами и отошел племени Гада.",
    "id": "geography-133",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сарепта",
    "reference": "1 Царей 17:9",
    "question": "Во время засухи пророк Илья жил здесь у вдовы.",
    "id": "geography-134",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Масличная гора",
    "reference": "Деяния 1:12",
    "question": "Холм высотой 830 м на востоке от Иерусалима и отделенный от города потоком Кедрон.",
    "id": "geography-135",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Тивериада",
    "reference": "Иоанна 6:23",
    "question": "Город на западном берегу Галилейского озера, названный в честь императора Тиберия. Иисус это город не посещал.",
    "id": "geography-136",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Вифлеем",
    "reference": "Матфея 2:1",
    "question": "Город, в котором родился Иисус Христос.",
    "id": "geography-137",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерусалим",
    "reference": "Неемия 1:3, 4",
    "question": "Город, стены которого восстанавливали под руководством Неемии. 3",
    "id": "geography-138",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Бахурим",
    "reference": "2 Самуила 17:18",
    "question": "В этом селении скрывались от преследования воинов Авессалома Ионафан и Ахимаас.",
    "id": "geography-139",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Раамсес",
    "reference": "Исход 1:11",
    "question": "Из этого города начался выход израильтян из Египта.",
    "id": "geography-140",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Коринф",
    "reference": "Деяние 18:1",
    "question": "Город, на узком перешейке между Эгейским и Адриатическим морями. Павел оставался здесь во время своего второго миссионерского путешествия.",
    "id": "geography-141",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хоразин",
    "reference": "Матфея 11:21",
    "question": "Жителей этого города на берегу Галилейского моря Иисус осудил за то, что они не раскаялись.",
    "id": "geography-142",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иаван",
    "reference": "Иезекииль 27:13",
    "question": "В Библии так называется Греция и греки.",
    "id": "geography-143",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Газа",
    "reference": "Судей 16:2,3",
    "question": "Город, ворота, которого унес Самсон. 4",
    "id": "geography-144",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ивлеам",
    "reference": "2 Царей 9:27",
    "question": "Город к юго-востоку от Мегиддо, где Ииуй убил иудейского царя Охозию.",
    "id": "geography-145",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Азия",
    "reference": "Деяния 19:10",
    "question": "Римская провинция с главным городом Эфес. Здесь проходила большая часть миссионерской деятельности Павла.",
    "id": "geography-146",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Долина",
    "reference": "Бытие 11:2",
    "question": "Длинная полоса земли между горами.",
    "id": "geography-147",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Капернаум",
    "reference": "Луки 7:1-10",
    "question": "В этом городе жил Римский офицер, слугу которого исцелил Иисус.",
    "id": "geography-148",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кун",
    "reference": "1 Летопись 18:8",
    "question": "Город Адраазаров, где Давид взял много меди, из которой сделали море, столбы и сосуды для храма.",
    "id": "geography-149",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Александрия",
    "reference": "Деяния 18:24",
    "question": "Родной город Аполосса. 5",
    "id": "geography-150",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Син",
    "reference": "Исход 16:1, 13-31",
    "question": "Пустыня, где израильтяне впервые ели манну и где вступил в силу закон о субботе.",
    "id": "geography-151",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нил",
    "reference": "Исход 2:5,6",
    "question": "В водах какой реки нашли корзину с Моисеем?",
    "id": "geography-152",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амаликитяне",
    "reference": "Исход 17:8,11",
    "question": "Народ, воевавший с израильтянами в пустыне.",
    "id": "geography-153",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Фригия",
    "reference": "Деяния 16:6",
    "question": "Область в центре Малой Азии. Ее главными городами были Антиохия Писидийская и Икония.",
    "id": "geography-154",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иордан",
    "reference": "Марка 1:5",
    "question": "Название этой реки означает «нисходящий». Река протекает по глубочайшей на земле естественной впадине.",
    "id": "geography-155",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифезда",
    "reference": "Иоанна 5:2",
    "question": "Купальня в Иерусалиме с пятью колоннадами. 6",
    "id": "geography-156",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Египет",
    "reference": "1 Царей 10:28",
    "question": "Страна, из которой царю Соломону доставляли лошадей.",
    "id": "geography-157",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иопия",
    "reference": "Деяния 10:5-16",
    "question": "В этом городе Петр увидел свой сон о «чистых» и «нечистых» животных.",
    "id": "geography-158",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Македа",
    "reference": "Иисус Навин 10:16-18",
    "question": "В пещере вблизи этого города Иисус Навин казнил пятерых аморрейских царей.",
    "id": "geography-159",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Секелаг",
    "reference": "1 Самуила 27:6",
    "question": "Царь Гефа Анхус отдал этот город Давиду, когда тот жил в изгнании.",
    "id": "geography-160",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифлеем",
    "reference": "Руфь 1:22",
    "question": "В этом городе жили Руфь и Ноеминь.",
    "id": "geography-161",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Афек",
    "reference": "2 Царей 13:14,17",
    "question": "Место, где согласно пророчеству Елисея, Израильский царь Иоас должен был поразить сириян. 7",
    "id": "geography-162",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пустыня / пустынная равнина",
    "reference": "Исаия 35:1",
    "question": "«*** и безводная местность будут ликовать, *** будет веселиться и цвести, как шафран».",
    "id": "geography-163",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Азот",
    "reference": "1 Самуила 5:1-5",
    "question": "Один из главных филистимских городов. Захватив ковчег завета филистимляне поместили его в этом городе в храме Дагона.",
    "id": "geography-164",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ливна",
    "reference": "Иисус Навин 10:28, 29",
    "question": "Город, против которого Иисус Навин воевал после взятия Македа.",
    "id": "geography-165",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иевусеи",
    "reference": "2 Самуила 5:6",
    "question": "Народ, изгнанный Давидом из Иерусалима.",
    "id": "geography-166",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галаад / Сторожевая башня",
    "reference": "Бытие 31:48, 49",
    "question": "Название места, где Иаков и Лаван заключили договор.",
    "id": "geography-167",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Офир",
    "reference": "1 Царей 9:28",
    "question": "Страна, знаменитая своим золотом. 8",
    "id": "geography-168",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аримафея",
    "reference": "Матфея 27:57,58",
    "question": "Родина Иосифа, владельца гробницы в которой был похоронен Иисус Христос.",
    "id": "geography-169",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сарды",
    "reference": "Откровение 3:1-6",
    "question": "Собранию этого города, где процветали красильное и ткацкое ремесла, было адресовано одно из посланий Иисуса.",
    "id": "geography-170",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тир",
    "reference": "2 Летопись 2:3",
    "question": "Город, царь которого посылает Давиду и Соломону строительные материалы.",
    "id": "geography-171",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Самария",
    "reference": "1 Царей 16:24",
    "question": "Какой город, построенный царем Амврием, был столицей северного царства Израиля.",
    "id": "geography-172",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дамаск",
    "reference": "Деяния 9:3",
    "question": "Город, на пути в который ослеп Савл.",
    "id": "geography-173",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пенуэл",
    "reference": "Бытие 32:30, 31",
    "question": "Место вблизи потока Иавок. Здесь Иаков боролся с ангелом. 9",
    "id": "geography-174",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Филиппы",
    "reference": "Деяния 16:12",
    "question": "Город в Македонии, названный в честь царя Филиппа. Павла и Силу здесь незаконно бросили в темницу.",
    "id": "geography-175",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сирия",
    "reference": "Исаия 17:3",
    "question": "Столицей этой страны, лежавшей к северо-востоку от Израиля, был Дамаск.",
    "id": "geography-176",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахайя",
    "reference": "2 Коринфянам 1:1",
    "question": "В I веке н.э. римская провинция на юге Греции со столицей в Коринфе.",
    "id": "geography-177",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Он",
    "reference": "Бытие 41:45",
    "question": "Древний египетский город, центр культа бога Ра. Иосиф женился на дочери жреца из этого города.",
    "id": "geography-178",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галгал",
    "reference": "Иисус Навин 4:19",
    "question": "Первая стоянка евреев за Иорданом.",
    "id": "geography-179",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эфес",
    "reference": "Откровение 2:1",
    "question": "Самый значительный город римской провинции Асии. 0",
    "id": "geography-180",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сокхоф",
    "reference": "Исход 12:37",
    "question": "«Сыновья Израиля отправились из Рамсеса в ***».",
    "id": "geography-181",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хорив",
    "reference": "Исход 3:1,2",
    "question": "Гора Божья, у которой ангел явился Моисею.",
    "id": "geography-182",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Астароф",
    "reference": "Второзаконие1:4",
    "question": "Столица васанского царя Ога. Позднее город из удела левитов.",
    "id": "geography-183",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Села / Иокфеил",
    "reference": "2 Царей 14:7",
    "question": "Столица Эдома. Название означает «скала», потому что город был высечен из скалы.",
    "id": "geography-184",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кесария Филиппова",
    "reference": "Матфея 16:13-16",
    "question": "Город у подножья горы Ермон. Сын Ирода Филипп изменил его название в честь Цезаря Августа, поэтому город получил двойное название.",
    "id": "geography-185",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Верия",
    "reference": "Деяния 17:10,11",
    "question": "Павел хвалил жителей этого города за то, что исследуя Писания они убеждались в истинности его проповеди. 1",
    "id": "geography-186",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дофка",
    "reference": "Числа 33:12,13",
    "question": "Это место, где израильтяне поставили стан, придя из пустыни Син и отправились в Алуш.",
    "id": "geography-187",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Евфрат",
    "reference": "Бытие 15:18",
    "question": "Эта река начинается на востоке современной Турции и течет на юго-восток, в персидский залив.",
    "id": "geography-188",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Атталия",
    "reference": "Деяния 14:24,25",
    "question": "Порт в Памфилии на южном побережье Малой Азии. Павел посетил его во время своего первого миссионерского путешествия.",
    "id": "geography-189",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Уц",
    "reference": "Иов 1:1",
    "question": "Земля, где жил Иов.",
    "id": "geography-190",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рама",
    "reference": "Иеремия 31:15",
    "question": "По пророчеству Иеремии в этом городе был слышен плач Рахили о её детях.",
    "id": "geography-191",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гозан",
    "reference": "2 Царей 17:6",
    "question": "Река в северо-восточной Сирии. На ней стоял город Хавор. 2",
    "id": "geography-192",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кедес",
    "reference": "Судей 4:9,10",
    "question": "Родина судьи Варака.",
    "id": "geography-193",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Месопотамия",
    "reference": "Судей 3:8",
    "question": "Земля между реками Тигр и Евфрат. Центр нескольких древнейших цивилизаций.",
    "id": "geography-194",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ахор",
    "reference": "Иисус Навин 7:24",
    "question": "«Долина беды» вблизи Иерихона, где Ахан и его семья были убиты за непослушание Божьему повелению.",
    "id": "geography-195",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Маханаим",
    "reference": "Бытие 32:2",
    "question": "Город в Галааде, недалеко от потока Иавок. Здесь Иакову перед встречей с Исавом явились ангелы.",
    "id": "geography-196",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Мегиддо",
    "reference": "2 Царей 23:29",
    "question": "Здесь скончался царь Иосия, пытавшийся остановить войско египетского фараона Нехо.",
    "id": "geography-197",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерихон",
    "reference": "Иисус Навин 6:1, 2",
    "question": "Первый хананейский город, завоеванный израильтянами. 3",
    "id": "geography-198",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зиф",
    "reference": "1 Самуила 23:19,24",
    "question": "Город, жители которого предали Давида Саулу.",
    "id": "geography-199",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Антиохия Сирийская",
    "reference": "Деяния 11:26",
    "question": "Один из 16 городов носивших это имя. Здесь верующие в Иисуса Христа впервые стали называться христианами.",
    "id": "geography-200",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Десятиградие",
    "reference": "Марка 5:20",
    "question": "Союз десяти городов на восточном берегу Иордана во времена Иисуса Христа.",
    "id": "geography-201",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Самария",
    "reference": "1 Царей 16:24",
    "question": "Гора, на которой был построен город Самария.",
    "id": "geography-202",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гелвуй",
    "reference": "1 Самуила 31:1,8",
    "question": "На этой горе в сражении с филистимлянами погибли Саул и Ионафан.",
    "id": "geography-203",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Песок",
    "reference": "Иеремия 5:22",
    "question": "Что служит «границей морю»? 4",
    "id": "geography-204",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фарсис",
    "reference": "Иона 1:3",
    "question": "Отдаленная страна, куда намеревался бежать пророк Иона.",
    "id": "geography-205",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вавилон",
    "reference": "Бытие 11:9",
    "question": "Город, на реке Евфрат, название которого означает «смешение».",
    "id": "geography-206",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рим",
    "reference": "Деяния 28:14",
    "question": "Город в Италии на реке Тибр.",
    "id": "geography-207",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Махпела",
    "reference": "Бытие 23:9",
    "question": "Авраам купил у хеттеянина участок земли с этой пещерой для захоронения Сары.",
    "id": "geography-208",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Асор",
    "reference": "Судей 4:2",
    "question": "Город, в котором царствовал Ханаанский царь Иавин.",
    "id": "geography-209",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кириаф-Арба",
    "reference": "Бытие 23:2",
    "question": "Старое название Хеврона. 5",
    "id": "geography-210",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сузы",
    "reference": "Эсфирь 1:2",
    "question": "Где разворачиваются события книги Эсфирь?",
    "id": "geography-211",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Патмос",
    "reference": "Откровение1:9",
    "question": "Остров в Эгейском море, где престарелый апостол Иоанн имел видения, описанные в книге Откровение.",
    "id": "geography-212",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Изреель",
    "reference": "1 Царей 18:45, 46",
    "question": "У израильского царя Ахава был дворец в этом городе.",
    "id": "geography-213",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифиния",
    "reference": "Деяния 16:7",
    "question": "Римская провинция в северо-западной части Малой Азии. Святой дух запретил Павлу проповедовать здесь.",
    "id": "geography-214",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мегиддо",
    "reference": "Откровение 16:16",
    "question": "Название горы входит в символическое имя места последней войны Бога с силами Сатаны.",
    "id": "geography-215",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Маон",
    "reference": "1 Самуила 25:2",
    "question": "Город, где жил Навал, муж Авигеи. 6",
    "id": "geography-216",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Но-Аммон",
    "reference": "Наум 3:8",
    "question": "Город на реке Нил, древняя столица Верхнего Египта.",
    "id": "geography-217",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ареопаг",
    "reference": "Деяния 17:19",
    "question": "Часть афинского Акрополя, от которой получил свое название городской суд.",
    "id": "geography-218",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Наин",
    "reference": "Луки 7:11-15",
    "question": "Город, из которого был юноша, воскрешенный Иисусом.",
    "id": "geography-219",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Енон",
    "reference": "Иоанна 3:23",
    "question": "Место, недалеко от Салима, где крестил Иоанн Креститель.",
    "id": "geography-220",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дофан",
    "reference": "2 Царей 6:11-19",
    "question": "Город, в котором находился пророк Елисей, когда сирийское войско было поражено слепотою.",
    "id": "geography-221",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вавилон",
    "reference": "Иеремия 29:3",
    "question": "Город, в котором царствовал Навуходоносор. 7",
    "id": "geography-222",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гива",
    "reference": "1 Самуила 10:26",
    "question": "Родной город царя Саула.",
    "id": "geography-223",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лодевар",
    "reference": "2 Самуила 9:4-6",
    "question": "Город, в котором какое-то время жил Мемфивосфей, сын Ионафана.",
    "id": "geography-224",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Есевон",
    "reference": "Числа 21:25-30",
    "question": "Город к востоку от Иордана, принадлежавший вначале моавитянам, а затем племени Рувима и Гада.",
    "id": "geography-225",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Харод",
    "reference": "Судей 7:1-8",
    "question": "Источник, возле которого Гедеон выбирал воинов для своего отряда, наблюдая как они пьют.",
    "id": "geography-226",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Газа",
    "reference": "Судей 16:21, 30",
    "question": "Город, в котором погиб Самсон, отомстив филистимлянам.",
    "id": "geography-227",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Равва",
    "reference": "2 Самуила 11:1, 21",
    "question": "Амонитская столица, при осаде которой был убит Урия. 8",
    "id": "geography-228",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Глубина",
    "reference": "Иов 36:30",
    "question": "Расстояние от поверхности до дна.",
    "id": "geography-229",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Назарет",
    "reference": "Луки 2:51,52",
    "question": "Город, в котором вырос Иисус Христос.",
    "id": "geography-230",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хеврон",
    "reference": "Числа 13:22",
    "question": "Этот город был отдан одному из двенадцати разведчиков, посланных Моисеем.",
    "id": "geography-231",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гевал",
    "reference": "Иезекииль 27:9",
    "question": "Древний финикийский город на побережье средиземного моря. Пророк Иезекииль пророчествуя против Тира, упоминал его.",
    "id": "geography-232",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Финик",
    "reference": "Деяния 27:12",
    "question": "Самая безопасная гавань на Крите, где Павел предлагал перезимовать, но его не послушали, и корабль потерпел кораблекрушение.",
    "id": "geography-233",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерихон",
    "reference": "Иисус Навин 3:16",
    "question": "Город, охранявший броды на Иордане во времена хананеев. 9",
    "id": "geography-234",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ниневия",
    "reference": "Иона 1:2",
    "question": "Город, куда был послан проповедовать Иона.",
    "id": "geography-235",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сихарь",
    "reference": "Иоанна 4:5, 6",
    "question": "Самарянский город, находившийся поблизости от колодца Иакова.",
    "id": "geography-236",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Киликия",
    "reference": "Деяния 21:39",
    "question": "Римская провинция на юге Малой Азии. Главным ее городом был Тарс.",
    "id": "geography-237",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Герар",
    "reference": "Бытие 20:1,2",
    "question": "Царь этого города Авимелех хотел жениться на Сарре, которую Авраам назвал своей сестрой.",
    "id": "geography-238",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Персия",
    "reference": "Даниил 10:1",
    "question": "Государство, цари которого завоевали Мидию, сокрушили Вавилон и создали империю, просуществовавшую более двухсот лет.",
    "id": "geography-239",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хораф",
    "reference": "1 Царей 17:3-7",
    "question": "Поток, где во время засухи Иегова кормил и поил Илию. 0",
    "id": "geography-240",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Асс",
    "reference": "Деяния 20:13",
    "question": "Город, куда спутники Павла отправились на корабле, а сам Павел пошел пешком.",
    "id": "geography-241",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иавис-Галаад",
    "reference": "1 Самуила 31:11-13",
    "question": "Жители это города рисковали жизнью, чтобы забрать тело Саула со стены в Беф-Сане, в благодарность за давнюю помощь Саула.",
    "id": "geography-242",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ор",
    "reference": "Числа 33:39",
    "question": "Гора, на которой умер Аарон.",
    "id": "geography-243",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рама",
    "reference": "1 Самуила 25:1",
    "question": "Родной город Самуила.",
    "id": "geography-244",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Финикия",
    "reference": "Деяния 21:2",
    "question": "Маленькое государство на восточном побережье Средиземного моря. Главными его городами были Тир, Сидон, Библ.",
    "id": "geography-245",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Газа",
    "reference": "Деяния 8:26, 27",
    "question": "Филипп по дороге в этот город встретил эфиопского евнуха. 1",
    "id": "geography-246",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Идумея",
    "reference": "Марка 3:8",
    "question": "Западный берег Иордана, в засушливых областях южной Палестины. Родина царя Ирода.",
    "id": "geography-247",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Афины",
    "reference": "Деяния 17:15-34",
    "question": "Свою проповедь Павел начал с увиденного им в этом городе жертвенника, посвященного «Неведомому Богу».",
    "id": "geography-248",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Понт",
    "reference": "Деяния 18:2",
    "question": "Акила был родом из этой местности.",
    "id": "geography-249",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Негев",
    "reference": "Бытие 24:62",
    "question": "Пустынная область на крайнем юге Израиля. Авраам и Исаак разбивали здесь свои шатры.",
    "id": "geography-250",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гаризим",
    "reference": "Второзаконие 27:12",
    "question": "С этой горы зачитывались благословения израильскому народу.",
    "id": "geography-251",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фиатиры",
    "reference": "Деяния 16:14, 15",
    "question": "Лидия, торговавшая багряницей, была жительницей этого города. 2",
    "id": "geography-252",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сиддим",
    "reference": "Бытие 14:3",
    "question": "Долина, где происходит первое сражение, описанное в Библии.",
    "id": "geography-253",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ароер",
    "reference": "Второзаконие 2:36",
    "question": "Город на берегу реки Арнон. На южной границе Израиля, на территории колена Рувима.",
    "id": "geography-254",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пустыня",
    "reference": "Числа 14:33",
    "question": "По чему израильтяне кочевали 40 лет?",
    "id": "geography-255",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иавис-Галаад",
    "reference": "Судей 21:8-14",
    "question": "В эпоху Судей жители этого города были истреблены, в наказание за отказ от участия в войне против Вениамина.",
    "id": "geography-256",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Галилея",
    "reference": "Луки 4:14",
    "question": "Местность, где прошла большая часть служения Иисуса Христа.",
    "id": "geography-257",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Раамсес",
    "reference": "Бытие 47:11",
    "question": "Город в Египте, в которой Иосиф поселил своего отца и братьев. 3",
    "id": "geography-258",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кипр",
    "reference": "Деяния 13:4",
    "question": "Место, которое Павел и Варнава посетили первым, отправившись проповедовать не евреям.",
    "id": "geography-259",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Массифа",
    "reference": "Судей 20:1",
    "question": "Во времена судей и Самуила здесь происходили собрания всех израильских племен.",
    "id": "geography-260",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ховар",
    "reference": "Иезекииль 1:1-3",
    "question": "Иезекииль получил видение на берегу этой реки, когда был в вавилонском плену.",
    "id": "geography-261",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Салим",
    "reference": "Бытие 14:18",
    "question": "В каком древнем городе Мелхиседек был царем и священником?",
    "id": "geography-262",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Восор",
    "reference": "1 Самуила 30:9",
    "question": "Преследуя амаликитян, Давид с воинами пришли к потоку *** и усталые остановились там.",
    "id": "geography-263",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аэндор",
    "reference": "1 Самуила 28:7",
    "question": "Город, где жила волшебница, к которой ходил Саул. 4",
    "id": "geography-264",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Естаол",
    "reference": "Судей 13:25",
    "question": "Вблизи какого города Самсон впервые испытал на себе действие духа Бога.",
    "id": "geography-265",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ассирия",
    "reference": "2 Царей 17:6",
    "question": "Государство, завоевавшее десятиколенное Израильское царство.",
    "id": "geography-266",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сарон",
    "reference": "1 Летопись 27:29",
    "question": "Израильская прибрежная равнина. Она простирается от Иопии до Кесарии.",
    "id": "geography-267",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фаран",
    "reference": "Бытие 21:20,21",
    "question": "Пустыня, где вырос сын Агари Измаил.",
    "id": "geography-268",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Икония",
    "reference": "Деяния 14:1",
    "question": "Город в Галилеи, в котором после служения Павла и Варнавы «стали верующими великое множество и иудеев, и греков».",
    "id": "geography-269",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Соленое море",
    "reference": "Бытие 14:3",
    "question": "Большое озеро с чрезвычайной концентрацией соли в его водах. 5",
    "id": "geography-270",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сихем",
    "reference": "Иисус Навин 24:1",
    "question": "После завоевания Ханаана Иисус Навин собрал всех израильтян в этом городе подтвердить обещание поклоняться только Иегове.",
    "id": "geography-271",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лидда",
    "reference": "Деяния 9:32-35,38",
    "question": "Город к юго-востоку от Иопии. Апостол Петр исцелил здесь парализованного Энея.",
    "id": "geography-272",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вирсавия",
    "reference": "Бытие 21:29-31",
    "question": "Город название, которого означает \"колодец клятвы\" или \"колодец семи\".",
    "id": "geography-273",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Массифа",
    "reference": "1 Самуила 10:17-21",
    "question": "Здесь Самуил представил народу Саула, как царя.",
    "id": "geography-274",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фаанах",
    "reference": "Судей 5:19",
    "question": "Город на краю Изреельской долины. Вблизи него Варак одержал победу над Сисарой.",
    "id": "geography-275",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нево",
    "reference": "Второзаконие 32:48,49",
    "question": "Перед смертью Моисей взошел на эту гору и увидел всю Обетованную землю. 6",
    "id": "geography-276",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нил",
    "reference": "Исаия 19:6",
    "question": "Река в Египте.",
    "id": "geography-277",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Красное море",
    "reference": "Исход 13:18; 14:15, 16",
    "question": "Воды этого моря расступились перед израильтянами.",
    "id": "geography-278",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Эн-Геди",
    "reference": "1 Самуила 24:1-5",
    "question": "В пещере, находящейся в этой местности Давид отрезал край одежды у Саула.",
    "id": "geography-279",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Васан",
    "reference": "Псалом 22:12; Исаия 2:13",
    "question": "Плодородная область к востоку от Галилейского озера славившаяся своим скотоводством и дубовыми рощами.",
    "id": "geography-280",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рамоф-Галаад",
    "reference": "1 Царей 22:1-37",
    "question": "Где был убит в сражении израильский царь Ахав?",
    "id": "geography-281",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Михмас",
    "reference": "1 Самуила 13:11",
    "question": "Вторгшиеся в Израиль филистимляне расположили здесь свой лагерь, угрожая столице царя Саула, Гиве. 7",
    "id": "geography-282",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сеннаар",
    "reference": "Бытие 10:10",
    "question": "Земля, в которой царствовал Нимрод.",
    "id": "geography-283",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кадес",
    "reference": "Числа 20:1-12",
    "question": "Здесь Моисей и Аарон высекли воду из скалы, не явив святости Иеговы.",
    "id": "geography-284",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Силом",
    "reference": "Иисус Навин 18:1",
    "question": "Город, в котором израильтяне поставили священный шатер после завоевания Ханаана.",
    "id": "geography-285",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Троада",
    "reference": "Деяния 16:8,9",
    "question": "Портовый город в Малой Азии, где в видении Павла македонянин просил о помощи.",
    "id": "geography-286",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сокхоф",
    "reference": "Судей 8:4-6",
    "question": "Город, жители которого отказались дать пищу Гедеону и его войску, преследовавшему мадианитян.",
    "id": "geography-287",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гоморра",
    "reference": "Бытие 19:28",
    "question": "Вместе с Содомом этот город был уничтожен огнем. 8",
    "id": "geography-288",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галилея",
    "reference": "Луки 3:1",
    "question": "Область, правителе которой при цезаре Тиберии был Ирод.",
    "id": "geography-289",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерихон",
    "reference": "2 Царей 2:4,5",
    "question": "Во времена Илии и Елисея в этом городе жила большая община пророков.",
    "id": "geography-290",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Номва",
    "reference": "1 Самуила 21:1",
    "question": "Спасаясь от царя Саула, Давид получил помощь у священника Ахимелеха, жившего в этом городе.",
    "id": "geography-291",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фегор",
    "reference": "Числа 23:28",
    "question": "Вершина, на которую «взял Валак Валаама», чтобы тот проклял израильтян.",
    "id": "geography-292",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пифом и Раамсес",
    "reference": "Исход 1:11",
    "question": "Города, построенные по приказу египетского фараона рабами-израильтянами.",
    "id": "geography-293",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Филадельфия",
    "reference": "Откровение 3:7-13",
    "question": "Название этого города означает «братолюбие». 9",
    "id": "geography-294",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Гевал",
    "reference": "Второзаконие 27:13",
    "question": "С этой горы зачитывались проклятия израильскому народу.",
    "id": "geography-295",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мемфис",
    "reference": "Иезекииль 30:13",
    "question": "Древняя столица Египта.",
    "id": "geography-296",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ханаан",
    "reference": "Бытие 12:5-7",
    "question": "Земля, которую Бог обещал дать израильтянам.",
    "id": "geography-297",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тир",
    "reference": "Исаия 23:1,2",
    "question": "Город-государство и крупный порт, имевший две гавани: одна - на материке, а другая – на расположенном поблизости острове.",
    "id": "geography-298",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фессалоника",
    "reference": "Деяния 17:10, 11",
    "question": "Главный город Македонии. Из-за ярости местных иудеев Павел был вынужден покинуть его и уйти в Верию.",
    "id": "geography-299",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Анафоф",
    "reference": "Иеремия 1:1",
    "question": "Место рождения пророка Иеремии. 0",
    "id": "geography-300",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сидон",
    "reference": "1 Царей 16:31",
    "question": "Финикийский портовый город. Родина Иезавели, жены царя Ахава.",
    "id": "geography-301",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хиддекель / Тигр",
    "reference": "Даниил 10:4",
    "question": "Река, на берегу которой у Даниила было видение.",
    "id": "geography-302",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Азот, Геф, Екрон",
    "reference": "1 Самуила 5:1-12",
    "question": "Филистимские города, в которых некоторое время находился Божий ковчег.",
    "id": "geography-303",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Писидия",
    "reference": "Деяния 14:24",
    "question": "Гористая область в южной части Малой Азии. Павел проходил эту страну во время своего первого миссионерского путешествия.",
    "id": "geography-304",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гесем",
    "reference": "Бытие 45:10",
    "question": "Плодородная область Египта, где поселилась семья Иакова, приглашенная Иосифом.",
    "id": "geography-305",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вефиль",
    "reference": "1 Царей 12:26-29",
    "question": "Иеровоам воздвиг в этом городе и в Дане золотого тельца. 1",
    "id": "geography-306",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гефянин",
    "reference": "2 Самуила 15:22",
    "question": "Как называется житель Гефа?",
    "id": "geography-307",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фамнав-Сараи",
    "reference": "Иисус Навин 19:50",
    "question": "Город, выделенный в личное владение Иисусу Навину.",
    "id": "geography-308",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Нод",
    "reference": "Бытие 4:16",
    "question": "Земля на востоке от Эдема, в которой поселился изгнанный Богом Каин.",
    "id": "geography-309",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Милеет",
    "reference": "Деяния 20:17",
    "question": "Старейшины эфесского собрания прибыли в этот порт, чтобы увидеть Павла и выслушать его прощальное наставление.",
    "id": "geography-310",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дан",
    "reference": "1 Царей 12:30",
    "question": "Город на севере Израиля, где стоял один из теленков.",
    "id": "geography-311",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Цора / Естаол",
    "reference": "Судей 13:24, 25",
    "question": "Где родился и похоронен Самсон? 2",
    "id": "geography-312",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Греция",
    "reference": "Даниил 8:21",
    "question": "Пятая мировая держава.",
    "id": "geography-313",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сихем",
    "reference": "Бытие 12:6,7",
    "question": "Вблизи этого города Бог сказал Аврааму: «Я дам эту землю твоему потомству».",
    "id": "geography-314",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Харран",
    "reference": "Бытие 11:31",
    "question": "Здесь, выйдя из Ура, поселился отец Авраама, Фарра со своей семьей.",
    "id": "geography-315",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аиалон",
    "reference": "Иисус Навин 10:12",
    "question": "Долина, где произошло крупное сражение между израильтянами и аморреями, во время которого остановилось солнце.",
    "id": "geography-316",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Элам",
    "reference": "Даниил 8:2",
    "question": "Область к востоку от Вавилонии. Ее столицей был город Сузы.",
    "id": "geography-317",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аскалон",
    "reference": "Судей 14:19",
    "question": "Город, в котором Самсон убил 30 человек. 3",
    "id": "geography-318",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фесви",
    "reference": "1 Царей 17:1",
    "question": "Родной город пророка Ильи.",
    "id": "geography-319",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Цоан",
    "reference": "Числа 13:22; Исаия 19:11",
    "question": "Древний город в Египте, который был построен на семь лет позже Хеврона.",
    "id": "geography-320",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гива",
    "reference": "Судей 19:14-25",
    "question": "Город в колене Вениамина, жители которого вели себя подобно содомлянам.",
    "id": "geography-321",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вефсамис",
    "reference": "1 Самуила 6:9-19",
    "question": "Когда филистимляне возвратили иудеям ковчег завета, коровы привезли его в этот город.",
    "id": "geography-322",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Эфес",
    "reference": "1 Коринфянам 16:8",
    "question": "Город, где было написано первое послание Коринфянам.",
    "id": "geography-323",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Моав",
    "reference": "Руфь 1:1-4",
    "question": "Эта страна была родиной Руфи. 4",
    "id": "geography-324",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хеврон",
    "reference": "2 Самуила 2:1",
    "question": "До взятия Давидом Иерусалима этот город был его столицей.",
    "id": "geography-325",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Силоам",
    "reference": "Иоанна 9:7",
    "question": "Купальня, в которой Иисус предложил умыться исцеленному им слепому.",
    "id": "geography-326",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лахис",
    "reference": "2 Царей 18:17",
    "question": "Город, из которого Сеннахирим послал рабсака к Езекии в Иерусалим.",
    "id": "geography-327",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Троада",
    "reference": "Деяния 16:11",
    "question": "Портовый город в Малой Азии, из которого Павел впервые отплыл в Европу.",
    "id": "geography-328",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кедрон",
    "reference": "2 Самуила 15:23",
    "question": "Давид пересек поток в этой долине, когда бежал из Иерусалима от восставшего Авессалома.",
    "id": "geography-329",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Геннисарет",
    "reference": "Луки 5:1",
    "question": "Другое название Галилейского озера. 5",
    "id": "geography-330",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кирена",
    "reference": "Матфея 27:32",
    "question": "Симон, которого заставили нести столб Иисуса, родом из этого города.",
    "id": "geography-331",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ур",
    "reference": "Бытие 11:31",
    "question": "Родной город Авраама.",
    "id": "geography-332",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Равнины Моава",
    "reference": "Числа 22:1",
    "question": "Местность к востоку от Иордана, где израильтяне расположились перед тем, как вступить в Ханаан.",
    "id": "geography-333",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Фекоа",
    "reference": "2 Самуила 14:2",
    "question": "Мудрая женщина из этого города просила царя Давида, чтобы тот позволил своему сыну Авессалому вернуться в Иерусалим.",
    "id": "geography-334",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ливан",
    "reference": "1 Царей 5:9",
    "question": "Земля, откуда Соломон получал кедры и кипарисы для строительства Храма.",
    "id": "geography-335",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гозан",
    "reference": "2 Царей 17:6",
    "question": "Река в Ассирии, куда были отведены в плен израильтяне. 6",
    "id": "geography-336",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вирсавия",
    "reference": "1 Царей 19:3",
    "question": "Самый южный из израильских городов, расположенный на краю пустыни Негев.",
    "id": "geography-337",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Хорошие Пристани",
    "reference": "Деяния 27:8-11",
    "question": "В этот порт на южном побережье Крита заходил корабль, на котором везли в Рим Павла.",
    "id": "geography-338",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Геф",
    "reference": "1 Самуила 17:4",
    "question": "Родной город Голиафа.",
    "id": "geography-339",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тафнис",
    "reference": "Иереемия 43:6-9",
    "question": "После взятия Иерусалима вавилонянами пророка Иеремию увели в этот египетский город.",
    "id": "geography-340",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галатия",
    "reference": "Галатам 1:1,2",
    "question": "Римская провинция в центральной части Малой Азии. К христианам этой местности было адресовано письмо Павла.",
    "id": "geography-341",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кесария",
    "reference": "Деяния 10:1",
    "question": "Город, где жил Корнилий – римский сотник, первый христианин не еврей. 7",
    "id": "geography-342",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иевус",
    "reference": "Иисус Навин 15:63",
    "question": "Старое название Иерусалима.",
    "id": "geography-343",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кириаф-Иарим",
    "reference": "1 Летопись 13:6",
    "question": "Здесь, на холме, в доме Аминадава, находился доставленный из Вефсамиса ковчег завета пока Давид не перенес его в Иерусалим.",
    "id": "geography-344",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Бахурим",
    "reference": "2 Самуила 16:5",
    "question": "Небольшое селение в уделе колена Вениамина. Здесь жил Шимей, злословивший царя Давида.",
    "id": "geography-345",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Арарат",
    "reference": "Бытие 8:4",
    "question": "Горная страна, где остановился ковчег.",
    "id": "geography-346",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пафос",
    "reference": "Деяния 13:6,7",
    "question": "Город на Кипре, во времена апостола Павла здесь находилась резиденция римского проконсула.",
    "id": "geography-347",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ваал-Перацим",
    "reference": "1 Летопись 14:9-11",
    "question": "Место в долине Рефаим, где Иегова помог Давиду победить филистимлян, разнеся врагов его перед Давидом \"как вода прорывает преграду\". 8",
    "id": "geography-348",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Кос",
    "reference": "Деяния 21:1",
    "question": "Апостол Павел проплывал мимо этого остроа у побережья Малой Азии, следуя из Милета в Родос.",
    "id": "geography-349",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хамат и Арпад",
    "reference": "2 Царей 18:34; 19:13",
    "question": "Рабсак называл эти города-государства в Сирии, когда хотел унизить Бога Иерусалима.",
    "id": "geography-350",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Беэр-Лахай-Рои",
    "reference": "Бытие 16:7-14",
    "question": "У этого колодца Агари, бежавшей от Сары, явился ангел Иеговы и повелел ей вернуться к хозяйке.",
    "id": "geography-351",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Пи-Гахироф",
    "reference": "Исход 14:2,9",
    "question": "Место последней стоянки израильтян перед переходом через Чермное море.",
    "id": "geography-352",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иллирик",
    "reference": "Римлянам 15:19",
    "question": "Павел дошел до этого города из Македонии во время своего 3-го миссионерского путешествия.",
    "id": "geography-353",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ассирия",
    "reference": "Бытие 10:11",
    "question": "Город, земля и царство получившие свое название от главного бога Ашшура. 9",
    "id": "geography-354",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Экбатана",
    "reference": "Ездра 6:2",
    "question": "Столица Мидии, где в архиве был обнаружен указ Кира, дающий право иудеям восстановливать храм.",
    "id": "geography-355",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Хамат",
    "reference": "1 Царей 8:65; 2 Летопись 8:4",
    "question": "Город являющийся северной границей земли Обетованной.",
    "id": "geography-356",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Бефшитта",
    "reference": "Судей 7:22",
    "question": "До этого города бежали мадианитяне в битве с Гедеоном.",
    "id": "geography-357",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Роглим",
    "reference": "2 Самуила 19:31,32",
    "question": "Родина Верзеллия, пожилого человека, помогавшего Давиду продовольствием.",
    "id": "geography-358",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рефидим",
    "reference": "Исход 17: 8-16",
    "question": "Стан в пустыне, где для победы над амаликитянами Моисей держал руки к небу.",
    "id": "geography-359",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Етам",
    "reference": "Судей 15:8, 11",
    "question": "Скала, в ущелье которой сидел Самсон. 0",
    "id": "geography-360",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Офел",
    "reference": "Неемия 3:26",
    "question": "Холм в Иерусалиме, между городом Давида и храмом.",
    "id": "geography-361",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Киброт-Гаттаава",
    "reference": "Числа 11:33,34",
    "question": "Стан израильтян в пустыне, где похоронили прихотливый народ, желавший мяса.",
    "id": "geography-362",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Аморреи",
    "reference": "Бытие 15:16",
    "question": "Народ, который должны были предать заклятию, когда их грех \"достигнет полноты\".",
    "id": "geography-363",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сунем",
    "reference": "2 Царей 4:8",
    "question": "Родина женщины, принявшей Елисея под кров своего дома.",
    "id": "geography-364",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Бероф",
    "reference": "2 Самуила 8:7,8",
    "question": "Город, царя Адраазара, где Давид взял много меди в качестве военного трофея.",
    "id": "geography-365",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Голгофа",
    "reference": "Матфея 27:33-37",
    "question": "Место возле Иерусалима, где был распят Иисус. 1",
    "id": "geography-366",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Беэр-Лахай-Рои",
    "reference": "Бытие 24:62; 25:11",
    "question": "Местность рядом с египетской границей, где жил Исаак.",
    "id": "geography-367",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сиракузы",
    "reference": "Деяния 28:12",
    "question": "Портовый город на побережье Сицилии, где Павел провел три дня путешествуя в Рим.",
    "id": "geography-368",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Итурея",
    "reference": "Луки 3:1",
    "question": "Филипп был правителем этой области, когда Иисус начал свое служение.",
    "id": "geography-369",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Асироф",
    "reference": "Числа 11:35 - 13:1",
    "question": "Израильский стан, где Мариамь была наказана проказой.",
    "id": "geography-370",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мерра",
    "reference": "Исход 15:23",
    "question": "Оазис в пустыне, где после перехода через Чермное море израильтяне нашли горькую воду.",
    "id": "geography-371",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Харошеф-Гоим",
    "reference": "Судей 4:2, 13, 16",
    "question": "В этом городе жил ханаанский военачальник Сисара. 2",
    "id": "geography-372",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Египет",
    "reference": "Исход 12:40, 41; Исаия 31:1",
    "question": "Страна, которую покинули израильтяне, но которая не покинула их.",
    "id": "geography-373",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сарды",
    "reference": "Откровение 3:1",
    "question": "Город, где находилось собрание, которое, будучи мертвым, называло себя живым.",
    "id": "geography-374",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галилея",
    "reference": "Иоанна 7:52",
    "question": "Северная часть Палестины, находящаяся в презрении у остальных евреев.",
    "id": "geography-375",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Реховоф",
    "reference": "Бытие 26:22",
    "question": "Третий колодец, выкопанный Исааком, означает \"просторы\".",
    "id": "geography-376",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Неаполь",
    "reference": "Деяния 16:11",
    "question": "Приморский город Македонии, где апостол Павел впервые высадился в Европе.",
    "id": "geography-377",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гахила",
    "reference": "1 Самуила 26:1",
    "question": "На этом холме Давид прятался от Саула. 3",
    "id": "geography-378",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сидон",
    "reference": "Деяния 27:3",
    "question": "Город на пути в Италию , в котором Юлий разрешил Павлу \"пойти к друзьям, чтобы они позаботились о нём\".",
    "id": "geography-379",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дингава",
    "reference": "Бытие 36:32",
    "question": "Главный Идумейский город, резиденция царя Белы.",
    "id": "geography-380",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мерива",
    "reference": "Числа 20:13",
    "question": "Местность, где евреи в конце странствования получили воду из скалы.",
    "id": "geography-381",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сорек",
    "reference": "Судей 16:4",
    "question": "Долина реки, где жила Далида.",
    "id": "geography-382",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ермон",
    "reference": "Псалом 133:3",
    "question": "Величественный горный хребет в Сирии, который часто воспевается на страницах Библии.",
    "id": "geography-383",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иордан",
    "reference": "Иисус Навин 4:3",
    "question": "Река, со дна которой Бог повелел взять камни. 4",
    "id": "geography-384",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вифания",
    "reference": "Иоанна 1:28",
    "question": "Местность, где Иоанн Креститель крестил народ.",
    "id": "geography-385",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тавера",
    "reference": "Числа 11:1-3",
    "question": "Место, где огонь от Иеговы вспыхнул и стал пожирать роптавших израильтян.",
    "id": "geography-386",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эн-Мишпат",
    "reference": "Бытие 14:7",
    "question": "Прежнее название источника Кадес.",
    "id": "geography-387",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Силом",
    "reference": "Иисус Навин 18:1, 6",
    "question": "Город, в котором Иисус Навин произвел раздел земли по коленам.",
    "id": "geography-388",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сиддим",
    "reference": "Бытие 14:10",
    "question": "Долина, богатая месторождениями асфальта, в которой было много смоляных ям.",
    "id": "geography-389",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кармил",
    "reference": "1 Самуила 15:12",
    "question": "Гора, на которой Саул поставил себе памятник. 5",
    "id": "geography-390",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галгал",
    "reference": "1 Самуила 13:8, 9",
    "question": "Местность, где Саул, не дождавшись Самуила, принёс жертву.",
    "id": "geography-391",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иерихон",
    "reference": "Иисус Навин 6:1, 20",
    "question": "Город, стены которого рухнули от послушания осаждающих.",
    "id": "geography-392",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фасги",
    "reference": "Числа 23:14",
    "question": "Вершина горы Нево, на которой Валак построил семь жертвенников, готовясь к проклятию Израиля.",
    "id": "geography-393",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Масличная гора",
    "reference": "2 Самуила 15:30",
    "question": "Гора, на которую пошел Давид, узнав о заговоре Авессалома.",
    "id": "geography-394",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Мероз",
    "reference": "Судей 5:23",
    "question": "Город, который проклинали в своей хвалебной песне Девора и Варак.",
    "id": "geography-395",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Васан",
    "reference": "Псалом 68:15",
    "question": "Гористая область на востоке от Иордана. 6",
    "id": "geography-396",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Соляная долина",
    "reference": "1 Летопись 18:12, 13",
    "question": "Долина, в которой Давид поразил восемнадцать тысяч эдомитян.",
    "id": "geography-397",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Рим",
    "reference": "Деяния 18:2",
    "question": "Город, из которого Клавдий повелел удалиться всем Иудеям.",
    "id": "geography-398",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амана / Антиливан",
    "reference": "Песнь песней 4:8",
    "question": "Южная вершина одной из Ливанских гор, воспетая Соломоном в Песне песней.",
    "id": "geography-399",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Галгал",
    "reference": "2 Царей 2:1",
    "question": "Откуда шли Илья с Елисеем, когда «Иегова собрался поднять в вихре Илью»?",
    "id": "geography-400",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иавок",
    "reference": "Второзаконие 2:37",
    "question": "Поток, текущий с востока на север от Галаада и впадающий в Иордан.",
    "id": "geography-401",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кармил",
    "reference": "1 Самуила 25:40",
    "question": "Гора, на которой жила будущая жена Давида. 7",
    "id": "geography-402",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Бухта",
    "reference": "Деяния 27:39",
    "question": "Часть водного пространства, которую усмотрели корабельщики перед тем, как они выброшены были на остров Мелит.",
    "id": "geography-403",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галгал",
    "reference": "Иисус Навин 4:20",
    "question": "Где был воздвигнут памятник в знак чудесного перехода через Иордан?",
    "id": "geography-404",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рамоф-Галаад",
    "reference": "2 Царей 8:28",
    "question": "Город, в котором сирийцами был ранен израильский царь Иорам.",
    "id": "geography-405",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Массифа",
    "reference": "Судей 11:34",
    "question": "Город в Галааде - родина судьи Иеффая.",
    "id": "geography-406",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сигор",
    "reference": "Бытие 14:2",
    "question": "Второе название города Бела.",
    "id": "geography-407",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Римляне",
    "reference": "Иоанна 11:48",
    "question": "Народ, который по словам старших священников, овладеет их местом и народом, если все поверят в Иисуса. 8",
    "id": "geography-408",
    "category": "geography",
    "categoryName": "География Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вашти",
    "reference": "Эсфирь 1:9-22",
    "question": "Царица Персии, отказавшаяся повиноваться своему мужу.",
    "id": "people-1",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Валтасар",
    "reference": "Даниил 5:1, 5, 6",
    "question": "При виде одного чуда колени у него стали биться одно о другое.",
    "id": "people-2",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Дарий",
    "reference": "Ездра 6:1-12",
    "question": "Как звали персидского царя, который нашел указ Кира и позволил восстановить храм Иеговы?",
    "id": "people-3",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Захария",
    "reference": "Захария 1:1",
    "question": "Пророк и священник, призывавший народ восстановить Храм Иеговы.",
    "id": "people-4",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иеровоам II",
    "reference": "2 Царей 14:23-29",
    "question": "Царь Израиля, сын Иоаса; правил сорок один год, вернув многие ранее утраченные земли.",
    "id": "people-5",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Аарон",
    "reference": "Исход 4:14",
    "question": "Старший брат Моисея. 1",
    "id": "people-6",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дарий",
    "reference": "Даниил 5:31",
    "question": "«*** мидянин принял царство, когда ему было около 62 лет».",
    "id": "people-7",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Асир",
    "reference": "Бытие 49:20",
    "question": "Сын Иакова, о котором отец пророчески сказал, что «он будет поставлять царские лакомства».",
    "id": "people-8",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Захария",
    "reference": "Луки 1:18-23",
    "question": "Он стал немым, потому что не поверил Гавриилу.",
    "id": "people-9",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иавин",
    "reference": "Судей 4:2",
    "question": "Ханаанский царь, в руки которого Бог отдал непокорных израильтян и начальником войска его был Сисара.",
    "id": "people-10",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Крисп",
    "reference": "Деяния 18:8",
    "question": "Начальник Иудейской синагоги в Коринфе, уверовавший в Иисуса.",
    "id": "people-11",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аарон",
    "reference": "Исход 28:1",
    "question": "Первый израильский первосвященник. 2",
    "id": "people-12",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ила",
    "reference": "1 Царей 16:8",
    "question": "Сын Ваасы, воцарившийся в Израиле в 26-ой год правления Асы над Иудой.",
    "id": "people-13",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Валаам",
    "reference": "Числа 22:10,11",
    "question": "Он не обратил внимание на предупреждения ангела и на жалобы ослицы.",
    "id": "people-14",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аввакум",
    "reference": "Аввакум 2:2,3",
    "question": "Пророк, обещавший, что день Иеговы придет и не опоздает.",
    "id": "people-15",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лотан",
    "reference": "Бытие 36:20,29",
    "question": "Сын хорреянина Сеира, шейх в земле Эдом.",
    "id": "people-16",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Девора",
    "reference": "Судей 4:1- 5:31",
    "question": "Пророчица, предсказавшая, что Сисара будет убит женщиной.",
    "id": "people-17",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зеведей",
    "reference": "Матфея 4:21-22",
    "question": "Рыбак, отец апостолов Иакова и Иоанна. 3",
    "id": "people-18",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Корей",
    "reference": "Числа 16:1-35",
    "question": "Левит, который возглавил бунт против Моисея и Аарона.",
    "id": "people-19",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лука",
    "reference": "2 Тимофею 4:10, 11",
    "question": "Христианин, не оставивший Павла, когда другие покинули его.",
    "id": "people-20",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Август Цезарь",
    "reference": "Луки 2:1",
    "question": "Римский император, по приказу которого проводилась перепись населения, во время которой родился Иисус.",
    "id": "people-21",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Давид",
    "reference": "1 Самуила 17:12",
    "question": "Он был сын ефрафянина Иессея из Вифлеема, что в Иуде.",
    "id": "people-22",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Валак",
    "reference": "Числа 22:2-24:25",
    "question": "Царь Моава, воспользовавшийся услугами Валаама.",
    "id": "people-23",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Захария",
    "reference": "Луки 3:2",
    "question": "Отец Иоанна Крестителя. 4",
    "id": "people-24",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авесса",
    "reference": "1 Самуила 26:7; 1 Летопись 2:15,16",
    "question": "Племянник Давида, ходивший с ним в стан царя Саула.",
    "id": "people-25",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нахон",
    "reference": "2 Самуила 6:6",
    "question": "Имя, давшее название гумну, возле которого Иегова поразил Озу.",
    "id": "people-26",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анхус",
    "reference": "1 Самуила 21:10-15",
    "question": "Царь филистимского города Гефа, где Давид дважды спасался от Саула.",
    "id": "people-27",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Давид",
    "reference": "2 Самуила 5:2,4",
    "question": "Второй царь Израиля.",
    "id": "people-28",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Менаим",
    "reference": "2 Царей 15:19,20",
    "question": "Один из последних царей Израиля, который заплатил ассирийскому царю, чтобы остаться на престоле.",
    "id": "people-29",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зелфа",
    "reference": "Бытие 30:9-13",
    "question": "Служанка Лии, мать Гада и Асира. 5",
    "id": "people-30",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Симон",
    "reference": "Деяния 8:9-24",
    "question": "Он пытался купить за деньги силу, которую дал Бог апостолам.",
    "id": "people-31",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Валтасар",
    "reference": "Даниил 1:7",
    "question": "Вавилонское имя Даниила.",
    "id": "people-32",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Валла",
    "reference": "Бытие 30:3-8; 35:22",
    "question": "Служанка Рахили, мать Дана и Неффалима. Рувим за прелюбодеяние с ней был лишен права первородства.",
    "id": "people-33",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авдемелех",
    "reference": "Иеремия 38:7-13",
    "question": "Слуга царя Седекии спасший пророка Иеремию.",
    "id": "people-34",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иаиль",
    "reference": "Судей 5:24-27",
    "question": "Жена кенеянина Хевера, убившая Сисару колышком от шатра.",
    "id": "people-35",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Манассия",
    "reference": "Бытие 41:51",
    "question": "Старший сын Иосифа, родившийся в Египте. 6",
    "id": "people-36",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иаир",
    "reference": "Луки 8:41,42",
    "question": "Начальник синагоги, дочь которого воскресил Иисус.",
    "id": "people-37",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зимри",
    "reference": "Числа 25:14",
    "question": "Имя израильтянина, пораженного Финеесом за совершенный в стане блуд с мадианитянкой.",
    "id": "people-38",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Симеон",
    "reference": "Луки 2:25,26",
    "question": "Бог сказал ему, что он не умрет, пока не увидит своими глазами Христа.",
    "id": "people-39",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Димитрий",
    "reference": "Деяния 19:24-40",
    "question": "Серебряных дел мастер из Эфеса.",
    "id": "people-40",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Манассия",
    "reference": "2 Летопись 33:11-13",
    "question": "Он был взят в плен в Вавилон, а потом отпущен в Иерусалим, где и закончилось его правление как царя.",
    "id": "people-41",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Авденаго",
    "reference": "Даниил 1:7",
    "question": "Вавилонское имя Азарии. 7",
    "id": "people-42",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Михаил",
    "reference": "Откровение 12:7",
    "question": "Его имя означает «кто, как Бог».",
    "id": "people-43",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Навузардан",
    "reference": "2 Царей 25:8",
    "question": "Слуга царя Навуходоносора, начальник телохранителей.",
    "id": "people-44",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иаков",
    "reference": "Бытие 25:33",
    "question": "Брат Исава, выкупивший у него первородство.",
    "id": "people-45",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Овадий",
    "reference": "1 Царей 18:1-16",
    "question": "Начальник над домом царя Ахава, который прятал в пещерах сто пророков Иеговы по пятьдесят человек и кормил их.",
    "id": "people-46",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахия",
    "reference": "1 Царей 11:29-39",
    "question": "Пророк из Силома, который разорвал свою одежду на 12 частей перед будущим царем Иеровоамом и дал ему 10 частей.",
    "id": "people-47",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Симон",
    "reference": "Матфея 4:18",
    "question": "Второе имя апостола Петра. 8",
    "id": "people-48",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авдий",
    "reference": "Авдий",
    "question": "Пророк, писатель Библии, пророчествовал об Эдоме.",
    "id": "people-49",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Варавва",
    "reference": "Матфея 27:15-26",
    "question": "Осужденный на смерть и помилованный разбойник.",
    "id": "people-50",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Илий",
    "reference": "1 Самуила 2:27-29",
    "question": "Какой первосвященник был осужден за то, что чтил своих сыновей больше, чем Иегову?",
    "id": "people-51",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Даниил",
    "reference": "Даниил 6:1-28",
    "question": "Его бросали в ров со львами, но Бог спас его.",
    "id": "people-52",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Меродах",
    "reference": "Исаия 39:1",
    "question": "Царь Вавилона, приславший послов к царю Езекии.",
    "id": "people-53",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Стефан",
    "reference": "Деяния 7:59",
    "question": "Первый христианский мученик. 9",
    "id": "people-54",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Дина",
    "reference": "Бытие 34:1",
    "question": "Дочь Иакова.",
    "id": "people-55",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Овед-Эдом",
    "reference": "2 Самуила 6:10-12",
    "question": "В доме этого человека царь Давид временно поместил ковчег завета после поражения Озы.",
    "id": "people-56",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Варак",
    "reference": "Судей 4:9",
    "question": "Начальник войска Израиля, которому не досталась слава победителя.",
    "id": "people-57",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Наум",
    "reference": "Наум 1:1",
    "question": "Пророк из Елкоса; пророчествовал против Ниневии.",
    "id": "people-58",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сисара",
    "reference": "Судей 4:2",
    "question": "Начальник войска ханаанского царя Иавина.",
    "id": "people-59",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иафет",
    "reference": "Бытие 5:32",
    "question": "Старший сын Ноя. 0",
    "id": "people-60",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иезавель",
    "reference": "1 Царей 16:30,31",
    "question": "Её дочь убила своих родственников и захватила престол в Иудее. Но так же, как и дочь, её постигла жестокая смерть.",
    "id": "people-61",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Диотреф",
    "reference": "3 Иоанна 9",
    "question": "Любящий первенствовать.",
    "id": "people-62",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахаз",
    "reference": "2 Царей 16:8",
    "question": "Иудейский царь, подаривший ассирийскому царю серебро и золото из храма Иеговы.",
    "id": "people-63",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зоровавель",
    "reference": "Ездра 2:1, 2",
    "question": "Внук царя Иехонии, возглавивший возвращение иудеев из Вавилона.",
    "id": "people-64",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Варнава",
    "reference": "Деяния 4:36",
    "question": "Прозвище Иосифа родом с Кипра, означающее - «сын утешения».",
    "id": "people-65",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авель",
    "reference": "Евреям11:4",
    "question": "«Верой *** принес Богу жертву более ценную, чем Каин». 1",
    "id": "people-66",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авель",
    "reference": "Бытие 4:1-8",
    "question": "Второй сын Адама и Евы.",
    "id": "people-67",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Доик",
    "reference": "1 Самуила 21:7; 22:9-19",
    "question": "Эдомитянин предавший и казнивший Ахимелеха и его родственников за помощь Давиду.",
    "id": "people-68",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Симон",
    "reference": "Матфея 27:32",
    "question": "Кириянин, которому приказали нести столб Иисуса Христа.",
    "id": "people-69",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Миха",
    "reference": "Судей 17:5",
    "question": "Человек, пытавшийся устроить у себя дом Божий.",
    "id": "people-70",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иессей",
    "reference": "Руфь 4:21,22",
    "question": "Внук Руфи и Вооза, отец царя Давида.",
    "id": "people-71",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Наама",
    "reference": "1 Царей 14:21",
    "question": "Мать Ровоама, сына Соломона. 2",
    "id": "people-72",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Варфоломей",
    "reference": "Матфея 10:3",
    "question": "Апостол Иисуса, которого привел к нему Филипп.",
    "id": "people-73",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Каин",
    "reference": "Бытие 4:5",
    "question": "Человек, чей дар Бог не принял.",
    "id": "people-74",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ева",
    "reference": "1 Тимофею 2:13",
    "question": "Второй, созданный на земле человек.",
    "id": "people-75",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авенир",
    "reference": "1 Самуила 14:50",
    "question": "Двоюродный брат и начальник войска царя Саула.",
    "id": "people-76",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иеровоам I",
    "reference": "1 Царей 11:31",
    "question": "Первый царь Израильского царства, образовавшегося из десяти отделившихся колен.",
    "id": "people-77",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Михей (Михей 5:2",
    "reference": "",
    "question": "Пророк, предсказавший где родится Мессия. 3",
    "id": "people-78",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иеффай",
    "reference": "Судей 11:30-40",
    "question": "Судья Израиля, обещавший в случае победы принести в жертву первое существо, которое выйдет из ворот дома.",
    "id": "people-79",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вафуил",
    "reference": "Иоиль 1:1",
    "question": "Кто был отцом пророка Иоиля?",
    "id": "people-80",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авесса",
    "reference": "1 Самуила 26:6",
    "question": "Племянник и один из полководцев царя Давида, брат Иоава.",
    "id": "people-81",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Евника",
    "reference": "2 Тимофею 1:5",
    "question": "Мать Тимофея.",
    "id": "people-82",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иевосфей",
    "reference": "2 Самуила 2:8-10",
    "question": "Один из сыновей царя Саула; после гибели отца по воле начальника его войска Авенира стал царем Израиля.",
    "id": "people-83",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Надав",
    "reference": "Исход 6:23",
    "question": "Брат Авиуда, Елеазара и Ифамара. 4",
    "id": "people-84",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Еводия",
    "reference": "Филиппийцам 4:2,3",
    "question": "Павел увещал Синтихию и её иметь в Господе одни и те же мысли.",
    "id": "people-85",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Венадад",
    "reference": "1 Царей 20:1,20",
    "question": "Сирийский царь, который при помощи 32 других царей осадил Самарию, но потерпел поражение от израильского царя Ахава.",
    "id": "people-86",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авессалом",
    "reference": "2 Самуила 13:1",
    "question": "Сын царя Давида, восставший против него.",
    "id": "people-87",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сихем",
    "reference": "Бытие 34:2",
    "question": "Сын Еммора, который завладел дочерью Иакова.",
    "id": "people-88",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Неффалим",
    "reference": "Бытие 30:7,8",
    "question": "Второй сын Валлы, служанки Рахили. Его имя означает «моя борьба».",
    "id": "people-89",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Моав",
    "reference": "Бытие 19:34, 37",
    "question": "Сын старшей дочери Лота. 5",
    "id": "people-90",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вирсавия",
    "reference": "Матфея 1:6",
    "question": "В родословной Иисуса упоминается эта женщина, но её имя не написано.",
    "id": "people-91",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Евтих",
    "reference": "Деяния 20:7-12",
    "question": "Юноша, которого воскресил Павел.",
    "id": "people-92",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ави / Авия",
    "reference": "2 Царей 18:2; 2 Летопись 29:1",
    "question": "Как звали мать хорошего царя Езекии?",
    "id": "people-93",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иехония",
    "reference": "2 Царей 24:8-16",
    "question": "Царь Иудеи, который был уведен в плен царем Навуходоносором.",
    "id": "people-94",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лисий",
    "reference": "Деяние 24:22",
    "question": "Римский военачальник, занимавшийся делом Павла и спасший его от разъяренной толпы.",
    "id": "people-95",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Каин",
    "reference": "Бытие 4:1",
    "question": "Первенец Адама и Евы. 6",
    "id": "people-96",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вооз",
    "reference": "Руфь 4:13",
    "question": "Муж Руфи.",
    "id": "people-97",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авиафар",
    "reference": "1 Самуила 22:20-23",
    "question": "Спасшийся сын Ахимилеха, священника при царе Сауле.",
    "id": "people-98",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нимфа",
    "reference": "Колоссянам 4:15",
    "question": "Христианка, жившая в Лаодикии или Колоссах, в доме которой проходили встречи.",
    "id": "people-99",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Онисифор",
    "reference": "2 Тимофею 1:16-18",
    "question": "Христианин, ободривший апостола Павла в римской тюрьме.",
    "id": "people-100",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ииуй",
    "reference": "2 Царей 9:5-10",
    "question": "Помазав его на царство, пророк Елисей приказал ему уничтожить потомков царя Ахава и царицы Иезавель.",
    "id": "people-101",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Еглон",
    "reference": "Судей 3:17,21",
    "question": "Моавитский царь, которого убил Аод. 7",
    "id": "people-102",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Публий",
    "reference": "Деяния 28:7",
    "question": "«Главный на острове Мальта человек», оказавший гостеприимство Павлу и его спутникам.",
    "id": "people-103",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Илья",
    "reference": "1 Царей 17: 1",
    "question": "Израильский пророк; через него Бог сказал царю Ахаву, что накажет страну великой засухой.",
    "id": "people-104",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Осия",
    "reference": "Осия 1:1",
    "question": "Этот пророк проповедовал во времена завоевания Самарии ассирийцами.",
    "id": "people-105",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гавриил",
    "reference": "Луки 1:19,26",
    "question": "Он приносил вести Даниилу, Захарии, а также матери Еммануила.",
    "id": "people-106",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авиафар",
    "reference": "1 Царей 1:7",
    "question": "Первосвященник, помогавший Адонии, сыну Давида взойти на престол.",
    "id": "people-107",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Едом",
    "reference": "Бытие 36:1",
    "question": "Под каким вторым именем был известен Исав, брат Иакова? 8",
    "id": "people-108",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ездра",
    "reference": "Неемия 12:1",
    "question": "Священник, вернувшийся из Вавилонского плена вместе с Зоровавелем.",
    "id": "people-109",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рецин",
    "reference": "Исаия 7:1,8",
    "question": "Сирийский царь, вступивший в заговор с израильским царем Факеем.",
    "id": "people-110",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авигея",
    "reference": "1 Самуила 25:32, 33",
    "question": "Мудрая женщина, удержавшая Давида от пролития крови.",
    "id": "people-111",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Илья",
    "reference": "1 Царей 18:19-39",
    "question": "Израильский пророк, показавший народу, что Иегова, а не Ваал истинный Бог.",
    "id": "people-112",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тувалкаин",
    "reference": "Бытие 4:22",
    "question": "Сын Ламеха и Циллы, который «был ковачем всех орудий из меди и железа».",
    "id": "people-113",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Гад",
    "reference": "Бытие 30:9-11",
    "question": "Седьмой сын Иакова; его имя означает «удача». 9",
    "id": "people-114",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рода",
    "reference": "Деяние 12:13",
    "question": "Имя служанки, которая первая увидела освобожденного чудом Петра.",
    "id": "people-115",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авимилех",
    "reference": "Судей 8:35; 9:1-6",
    "question": "Сын Гедеона, убивший своих братьев, чтобы стать царем.",
    "id": "people-116",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иоанн Креститель",
    "reference": "Матфея 3:1-6",
    "question": "Пророк, приготовивший народ к приходу Иисуса Христа.",
    "id": "people-117",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Езекия",
    "reference": "2 Царей 19:14",
    "question": "Царь Иудеи, сын царя Ахаза, развернувший письма от Сеннахирима в доме Иеговы.",
    "id": "people-118",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кир",
    "reference": "Исаия 44:28",
    "question": "Персидский царь, освободивший пленных иудеев.",
    "id": "people-119",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гадасса",
    "reference": "Эсфирь 2:7",
    "question": "Еврейское имя Эсфири. 0",
    "id": "people-120",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анания",
    "reference": "Деяния 5:1-11",
    "question": "Вместе со своей женой Сапфирой он утаил часть денег, вырученных от продажи земли.",
    "id": "people-121",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елеазар",
    "reference": "Числа 20:26",
    "question": "Сын и приемник Аарона.",
    "id": "people-122",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авирон",
    "reference": "Числа 16:1,2",
    "question": "Вместе с Кореем и Дафаном возглавили восстание против Моисея.",
    "id": "people-123",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Навин",
    "reference": "1 Летопись 7:27",
    "question": "Отец приемника Моисея.",
    "id": "people-124",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лидия",
    "reference": "Деяния 16:14,15",
    "question": "Богатая женщина из Фиатиры, проявившая гостеприимство к Павлу и Луке.",
    "id": "people-125",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоав",
    "reference": "2 Самуила 8:16",
    "question": "Племянник и начальник войска царя Давида. 1",
    "id": "people-126",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Измаил",
    "reference": "Бытие 16:15",
    "question": "Сын Авраама и Агари.",
    "id": "people-127",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ависага",
    "reference": "1 Царей 1:3,4",
    "question": "Красивая девушка из Сунама, прислуживавшая царю Давиду в его старости.",
    "id": "people-128",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нахор",
    "reference": "Бытие 11:24, 25",
    "question": "Отец Фарры и дед Авраама.",
    "id": "people-129",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Орна",
    "reference": "2 Самуила 24:16",
    "question": "Карающий ангел остановился у гумна этого жителя Иерусалима.",
    "id": "people-130",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Галлион",
    "reference": "Деяния 18:12,13",
    "question": "Проконсул Ахайи, к судейскому месту которого иудеи привели Павла, обвиняя его.",
    "id": "people-131",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елеазар",
    "reference": "Исход 6:25",
    "question": "Сын Аарона, отец Финееса. 2",
    "id": "people-132",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Левий",
    "reference": "Бытие 29:34",
    "question": "Третий сын Иакова и Лии. Его потомки служили при шатре и Храме.",
    "id": "people-133",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авия",
    "reference": "1 Царей 14:1-13",
    "question": "Сын царя Иеровоама I, умер ребенком, потому что в нем «нашлось нечто доброе пред Иеговой».",
    "id": "people-134",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Израиль",
    "reference": "Бытие 32:22-29",
    "question": "Измененное имя Иакова, означающее «борющийся с Богом».",
    "id": "people-135",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Факей",
    "reference": "2 Царей 16:5",
    "question": "Нечестивый царь Израиля в союзе с сирийским царем Рецином напал на Иудею.",
    "id": "people-136",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елиав",
    "reference": "Второаконие 11:6",
    "question": "Отец Дафана и Авирона, восставших против Моисея.",
    "id": "people-137",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гамалиил",
    "reference": "Деяния 22:3",
    "question": "Фарисей, учитель Закона; у его ног учился Павел. 3",
    "id": "people-138",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иисус Навин",
    "reference": "Числа 27:15-23",
    "question": "Вождь Израиля, приемник Моисея.",
    "id": "people-139",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Савл",
    "reference": "Деяние 13:2, 4",
    "question": "Кто вместе с Варнавой был послан в Селевкию и на Кипр?",
    "id": "people-140",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гедеон",
    "reference": "Судей 7:1-25",
    "question": "Судья, победивший войско мадианитян с 300 израильтянами.",
    "id": "people-141",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кис",
    "reference": "1 Самуила 10:21",
    "question": "Отец Саула.",
    "id": "people-142",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Товия",
    "reference": "Неемия 2:10",
    "question": "Аммонитскмй раб, препятствовавший восстановлению Иерусалима?",
    "id": "people-143",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авия",
    "reference": "1 Царей 15:1, 2",
    "question": "Сын иудейского царя Ровоама. Правил три года. 4",
    "id": "people-144",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гедеон",
    "reference": "Судей 6:25-32",
    "question": "За то, что разрушил жертвенник Ваалу, он получил прозвище Иероваал.",
    "id": "people-145",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елиав",
    "reference": "1 Самуила 17:13",
    "question": "Самый старший из братьев Давида.",
    "id": "people-146",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тертулл",
    "reference": "Деяния 24:1",
    "question": "Оратор, выступавший в суде перед правителем Феликсом против апостола Павла.",
    "id": "people-147",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авраам",
    "reference": "Бытие 17:4,5",
    "question": "Его имя означает «отец множества».",
    "id": "people-148",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоаким",
    "reference": "2 Царей 23:34,35",
    "question": "Царь Иудеи, сын Иосии; египетский царь Нехао обязал его платить дань.",
    "id": "people-149",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Салманасаар",
    "reference": "2 Царей 17:3",
    "question": "Как звали нескольких ассирийских царей? 5",
    "id": "people-150",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Гиезий",
    "reference": "2 Царей 5:20-27",
    "question": "Слуга пророка Елисея, наказанный за свою жадность проказой.",
    "id": "people-151",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елиуй",
    "reference": "Иов 32:2",
    "question": "«Его гнев вспыхнул на Иова за то, что он объявлял праведной свою душу, а не Бога».",
    "id": "people-152",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоханан",
    "reference": "Иеремия 40:13-16",
    "question": "Он предупредил правителя Иудеи Годолию о готовящимся против него заговоре.",
    "id": "people-153",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Олдама",
    "reference": "2 Царей 22:14-20",
    "question": "Пророчица, к которой приходил за советом священник Хелкия.",
    "id": "people-154",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Навуфей",
    "reference": "1 Царей 21:1",
    "question": "Человек, убитый по приказу Иезавели за свой виноградник.",
    "id": "people-155",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авраам",
    "reference": "Иакова 2:23",
    "question": "Человек, который был назван другом Бога. 6",
    "id": "people-156",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Агарь",
    "reference": "Бытие 16:15",
    "question": "Наложница Авраама, родившая Измаила.",
    "id": "people-157",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахимилех",
    "reference": "1 Самуила 21-22",
    "question": "Священник из Номвы, который помог царю Давиду, накормив его священными хлебами.",
    "id": "people-158",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Елизавета",
    "reference": "Луки 1:57, 60",
    "question": "Мать Иоанна Крестителя.",
    "id": "people-159",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иоахаз",
    "reference": "2 Царей 13:1-9",
    "question": "Царь Израиля, сын царя Ииуя; в войнах с сирийскими царями Азаилом и Венададом потерпел сокрушительное поражение.",
    "id": "people-160",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иодай",
    "reference": "2 Летопись 22:11",
    "question": "Первосвященник, спасший от расправы Гофолии своего племянника, младенца Иоаса.",
    "id": "people-161",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Навуходоносор",
    "reference": "2 Царей 25:1",
    "question": "Царь Вавилона, разрушивший Иерусалим. 7",
    "id": "people-162",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ханаан",
    "reference": "Бытие 9:25",
    "question": "«Да будет проклят ***! Пусть он будет последним рабом у своих братьев».",
    "id": "people-163",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Осия",
    "reference": "2 Царей 17:1",
    "question": "Последний царь десятиколенного царства Израиль.",
    "id": "people-164",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоас",
    "reference": "2 Летопись 22:11,12; 23:20-24:1",
    "question": "Ему не было и года, когда он оказался в храме и там оставался шесть лет.",
    "id": "people-165",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Агав",
    "reference": "Деяния 21:10-14",
    "question": "Христианин, предсказавший Павлу, что его арестуют в Иерусалиме.",
    "id": "people-166",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елисей",
    "reference": "2 Царей 2:15",
    "question": "Преемник пророка Ильи.",
    "id": "people-167",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Голиаф",
    "reference": "1 Самуила 17:1-51",
    "question": "Великан из Гефа, побежденный Давидом. 8",
    "id": "people-168",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вениамин",
    "reference": "Бытие 35:16-19",
    "question": "Рахиль умерла при рождении его.",
    "id": "people-169",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Санаваллат",
    "reference": "Неемия 4:1",
    "question": "Самарянский правитель, пытавшийся помешать Неемии восстановить стены Иерусалима.",
    "id": "people-170",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Гофолия",
    "reference": "2 Царей 11:1-16",
    "question": "Единственная иудейская царица, убившая всех детей принадлежавших к царскому роду, кроме Иоаса.",
    "id": "people-171",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аггей",
    "reference": "Аггей 1:1",
    "question": "Пророк, вернувшийся из Вавилонского плена, призывавший народ восстановить храм Иеговы.",
    "id": "people-172",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Урия",
    "reference": "2 Царей 16:11",
    "question": "Священник, построивший жертвенник по образцу из Дамаска, который ему дал царь Ахаз.",
    "id": "people-173",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елкана",
    "reference": "1 Самуила 1:19,20",
    "question": "Отец Самуила. 9",
    "id": "people-174",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гофониил",
    "reference": "Судей 1:13; 3:7-11",
    "question": "Первый из судей израильских; племянник и зять Халева.",
    "id": "people-175",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Аголиав",
    "reference": "Исход 38:22,23",
    "question": "Помощник Веселиила в резьбе по камню и работе из золота и серебра.",
    "id": "people-176",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Енох",
    "reference": "Евреям 11:5",
    "question": "«Верой *** перенесен был, так что не видел смерти».",
    "id": "people-177",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоанн",
    "reference": "Иоанна 19:26, 27",
    "question": "Кого Иисус Христос попросил позаботиться о своей матери?",
    "id": "people-178",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Урия",
    "reference": "Иеремия 26:20-23",
    "question": "Сын Шемаии, пророчествовавший во имя Иеговы и убитый царем Иоакимом.",
    "id": "people-179",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Елиезер",
    "reference": "Бытие 15:2",
    "question": "Старший слуга Авраама. 0",
    "id": "people-180",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иов",
    "reference": "Иов 1:1",
    "question": "Праведник, не знавший причин своих страданий, но не отказавшийся от Бога.",
    "id": "people-181",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Епафрас",
    "reference": "Колоссянам 1:7",
    "question": "Верный служитель Христа, проповедовавший колоссянам благую весть.",
    "id": "people-182",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоиль",
    "reference": "Иоиль 1:1",
    "question": "Пророк, сын Вафуила; в своей книге он описал опустошительное нашествие саранчи и ужасную засуху.",
    "id": "people-183",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лаван",
    "reference": "Бытие 24:29",
    "question": "Брат Ревекки.",
    "id": "people-184",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Агур",
    "reference": "Притчи 30:1, 8",
    "question": "Человек, просивший Бога не давать ему нищеты и богатства.",
    "id": "people-185",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мара",
    "reference": "Руфь 1:20",
    "question": "Женское имя, означающее «горькая». 1",
    "id": "people-186",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эсфирь",
    "reference": "Эсфирь 2:7,17; 3:12,13; 4:12-17; 8:3-8",
    "question": "По приказу мужа её должны были убить, но она осталась в живых благодаря совету своего двоюродного брата.",
    "id": "people-187",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ионафан",
    "reference": "1 Самуила 18:1-4",
    "question": "Старший сын царя Саула и друг Давида.",
    "id": "people-188",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Веор",
    "reference": "Числа 22:5",
    "question": "Отец Валаама.",
    "id": "people-189",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сапфира",
    "reference": "Деяния 5:1, 2",
    "question": "Жена Анании, продавшего имущество и с ее ведома утаившего часть цены.",
    "id": "people-190",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лазарь",
    "reference": "Иоанна 11:1-44",
    "question": "Человек, который был мертв четыре дня.",
    "id": "people-191",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ада",
    "reference": "Бытие 36:2, 4",
    "question": "Жена Исава, мать Елифаза. 2",
    "id": "people-192",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вереника",
    "reference": "Деяния 25:13",
    "question": "Сестра Ирода Агриппы II.",
    "id": "people-193",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Адам",
    "reference": "Бытие 3:24",
    "question": "Имя человека, который был изгнан из Эдемского сада.",
    "id": "people-194",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Охозия",
    "reference": "1 Царей 22:51, 52",
    "question": "Нечестивый царь Израиля; сын Ахава и Иезавели.",
    "id": "people-195",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лазарь",
    "reference": "Луки 16:19-31",
    "question": "Нищий, который после смерти «был отнесен ангелами к груди Авраама».",
    "id": "people-196",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Валтасар",
    "reference": "Даниил 5:1-31",
    "question": "Правитель Вавилона, погибший при взятии города мидянами и персами.",
    "id": "people-197",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Есевон",
    "reference": "Судей 12:7, 8",
    "question": "Судья сменивший Иеффая. 3",
    "id": "people-198",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Адония",
    "reference": "1 Царей 1:5",
    "question": "Четвертый сын царя Давида. После смерти отца пытался захватить престол.",
    "id": "people-199",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Салпаад",
    "reference": "Числа 26:33",
    "question": "Отец, дочери которого получили наделы земли от Иисуса Навина.",
    "id": "people-200",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ламех",
    "reference": "Бытие 4:18-24",
    "question": "Потомок Каина; первый, кто взял двух жен.",
    "id": "people-201",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ефрем",
    "reference": "Бытие 41:14",
    "question": "Младший сын Иосифа, родоначальник большого потомства.",
    "id": "people-202",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Верзеллий",
    "reference": "2 Самуила 17:27-29",
    "question": "Галаадитянин из Роглима, кормивший Давида и его людей во время восстания Авессалома.",
    "id": "people-203",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Малахия",
    "reference": "Малахия 1:1",
    "question": "Последний из пророков Еврейских Писаний. 4",
    "id": "people-204",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иосафат",
    "reference": "1 Царей 22:41-46",
    "question": "Сын иудейского царя Асы; уничтожил идолов и изгнал блудников, но допустил ошибку, заключив мир с Ахавом.",
    "id": "people-205",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Азаил",
    "reference": "1 Царей 19:15-17",
    "question": "Слуга Венадада, которого Иегова повелел Илье помазать царем над Сирией.",
    "id": "people-206",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Веселиил",
    "reference": "Исход 17:11,12; 35:30,31",
    "question": "Его дедушка поддерживал руку Моисея, а он помогал в строительстве скинии.",
    "id": "people-207",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Завулон",
    "reference": "Бытие 49:13",
    "question": "Сын Иакова и Лии. Его потомки жили на берегу моря до Сидона.",
    "id": "people-208",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Маной",
    "reference": "Судей 13:2-24",
    "question": "Отец Самсона.",
    "id": "people-209",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Охозия",
    "reference": "2 Царей 8:26",
    "question": "Иудейский царь, сын Гофолии. 5",
    "id": "people-210",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Самегар",
    "reference": "Судей 3:31",
    "question": "Судья Израиля, побивший 600 филистимлян воловьим рожном.",
    "id": "people-211",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Азария",
    "reference": "2 Царей 14:21; 2 Летопись 26:1",
    "question": "Царь Иудеи, его второе имя Озия, возгордившись, он пришел в храм Иеговы воскурять фимиам, за что был наказан проказой.",
    "id": "people-212",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иона",
    "reference": "Матфея 12:40",
    "question": "Пророк, который был во чреве огромной рыбы три дня и три ночи.",
    "id": "people-213",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лия",
    "reference": "Бытие 35:23",
    "question": "Жена Иакова, родившая ему первенца.",
    "id": "people-214",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Закхей",
    "reference": "Луки 19:1-10",
    "question": "Сборщик налогов из Иерихоне; залез на дерево, чтобы увидеть Иисуса.",
    "id": "people-215",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вилдад",
    "reference": "Иов 2:11",
    "question": "Шухитянин, один из трех ненастоящих друзей Иова. 6",
    "id": "people-216",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Салмон",
    "reference": "Руфь 4:21",
    "question": "Отец Вооза.",
    "id": "people-217",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ламех",
    "reference": "Бытие 5:28, 29",
    "question": "Отец Ноя.",
    "id": "people-218",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иона",
    "reference": "Матфея 16:17",
    "question": "Отец Симона Петра.",
    "id": "people-219",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зимри",
    "reference": "1 Царей 16:8-20",
    "question": "Начальник над половиной колесниц, убивший царя Илу и царствовавший 7дней.",
    "id": "people-220",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Акила",
    "reference": "Деяния 18:1-3",
    "question": "Христианин, друг Павла, вместе с ним и женой они шили палатки.",
    "id": "people-221",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вирсавия",
    "reference": "2 Самуила 11:1-27",
    "question": "Жена Урии Хеттеянина. 7",
    "id": "people-222",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Юлий",
    "reference": "Деяния 27:1, 3",
    "question": "Римский сотник, сопровождавший Павла в Рим.",
    "id": "people-223",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рабсак",
    "reference": "2 Царей 19:4",
    "question": "Посланец ассирийского царя к Езекии.",
    "id": "people-224",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мардохей",
    "reference": "Эсфирь 2:5-7",
    "question": "Двоюродный брат и опекун Эсфири.",
    "id": "people-225",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Корнилий",
    "reference": "Деяния 10:1-48",
    "question": "Римский сотник, первый христианин из язычников.",
    "id": "people-226",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ионадав",
    "reference": "2 Царей 10:15",
    "question": "Человек, примкнувший к Ииую, когда тот ехал истреблять служителей Ваала.",
    "id": "people-227",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Алфей",
    "reference": "Матфея 10:3",
    "question": "Отец апостола Иакова. 8",
    "id": "people-228",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Феглаффелласар",
    "reference": "2 Царей 16:7",
    "question": "Ассирийский царь, у которого иудейский царь Ахаз просил помощи.",
    "id": "people-229",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иосиф",
    "reference": "Бытие 46:20",
    "question": "Отец Манассии и Ефрема.",
    "id": "people-230",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Саломия",
    "reference": "Матфея 20:20",
    "question": "Жена Зеведея, просившая почетных мест для своих сыновей.",
    "id": "people-231",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ананий",
    "reference": "Неемия 7:2",
    "question": "Брат Неемии.",
    "id": "people-232",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аман",
    "reference": "Эсфирь 7:4, 6",
    "question": "Непримиримый враг евреев во времена эсфири.",
    "id": "people-233",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нават",
    "reference": "1 Царей 11:26",
    "question": "Отец царя Иеровоама. 9",
    "id": "people-234",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ровоам",
    "reference": "1 Царей 12:1-25",
    "question": "Сын царя Соломона; во дни его правления царство разделилось на Израиль и Иуду.",
    "id": "people-235",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лоида",
    "reference": "2 Тимофею 1:5",
    "question": "Бабушка Тимофея.",
    "id": "people-236",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амасия",
    "reference": "2 Царей 12:21",
    "question": "Царь Иудеи, взошедший на престол после того, как его отца Иоаса убили собственные слуги.",
    "id": "people-237",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Шимей",
    "reference": "2 Самуила 16:5, 6",
    "question": "Он злословил царя Давида во время восстания Авессалома.",
    "id": "people-238",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мариам",
    "reference": "Исход 15:20",
    "question": "Сестра Моисея и Аарона.",
    "id": "people-239",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иосиф",
    "reference": "Деяния 1:23-26",
    "question": "Жребий апостольства выпал не ему. 0",
    "id": "people-240",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амасия",
    "reference": "Амос 7:10-17",
    "question": "Священник в Вефиле, противник пророка Амоса.",
    "id": "people-241",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Руфь",
    "reference": "Матфея 1:5",
    "question": "Моавитянка, удостоившаяся чести стать прародительницей Иисуса Христа.",
    "id": "people-242",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мария",
    "reference": "Луки 1:27",
    "question": "Девственница, обрученная с Иосифом.",
    "id": "people-243",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Шаллум",
    "reference": "2 Царей 15:10-15",
    "question": "Кто убил Захарию, чтобы стать царем Израиля, а через месяц сам был убит Менаимом?",
    "id": "people-244",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тавифа / Дорка",
    "reference": "Деяния 9:36-41",
    "question": "Она шила одежду. Оба её имени означают \"Газель\", и она была воскрешена.",
    "id": "people-245",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иосиф",
    "reference": "Матфея 1:16",
    "question": "Муж Марии и приемный отец Иисуса Христа. 1",
    "id": "people-246",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рувим",
    "reference": "Бытие 35:23",
    "question": "Первенец Иакова.",
    "id": "people-247",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амврий",
    "reference": "1 Царей 16:15, 16",
    "question": "Сначала начальник войска израильского царя Илы, когда того убили, его провозгласили царем.",
    "id": "people-248",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мария",
    "reference": "Луки 10:38-42",
    "question": "Одна из сестер Лазаря, которая «избрала лучшее».",
    "id": "people-249",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иосиф",
    "reference": "Иоанна 19:38-42",
    "question": "Член Синедриона из Аримафеи. После распятия Иисуса он добился у Пилата разрешения похоронить его в своей гробнице.",
    "id": "people-250",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сергей Павел",
    "reference": "Деяния 13:7-12",
    "question": "Проконсул Кипра, «поверил, потому что был изумлён учением Иеговы».",
    "id": "people-251",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Петр",
    "reference": "Иоанна 18:10",
    "question": "Апостол, который отсек ухо рабу первосвященника. 2",
    "id": "people-252",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иосия",
    "reference": "2 Царей 22:1-6",
    "question": "После убийства его отца Амона он взошел на престол в восьмилетнем возрасте.",
    "id": "people-253",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амессай",
    "reference": "2 Самуила 17:25",
    "question": "Начальник мятежного войска Авессалома, сына Давида.",
    "id": "people-254",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мария",
    "reference": "Иоанна 20:1, 2",
    "question": "Женщина, первая узнавшая, что Иисус воскрес.",
    "id": "people-255",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пилат",
    "reference": "Иоанна 19:15, 16",
    "question": "Римский правитель Иудеи, предавший Иисуса Христа на распятие.",
    "id": "people-256",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Факия",
    "reference": "2 Царей 15:22-25",
    "question": "Царь Израиля, сын Менаима, погиб от руки своего военачальника Факея.",
    "id": "people-257",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сеннахирим",
    "reference": "2 Царей 19:36, 37",
    "question": "Царь Ассирии, убитый своими сыновьями. 3",
    "id": "people-258",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иофор / Рагуил",
    "reference": "Исход 3:1; Числа 10:29",
    "question": "Мадиамский священник, тесть Моисея.",
    "id": "people-259",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Амон",
    "reference": "2 Царей 21:18-26",
    "question": "Царь Иудеи, сын царя Манассии, убитый дворцовыми слугами.",
    "id": "people-260",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сива",
    "reference": "2 Самуила 9:2, 3",
    "question": "Слуга царя Саула, рассказавший Давиду, что жив сын Ионафана.",
    "id": "people-261",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Марк",
    "reference": "Марка 14:51",
    "question": "Автор второй книги Греческих Писаний.",
    "id": "people-262",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Февда",
    "reference": "Деяния 5:34-39",
    "question": "Гамалиил привел в пример этого предводителя еврейских повстанцев.",
    "id": "people-263",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тимофей",
    "reference": "Деяния 16:1-3",
    "question": "Сын христианки иудейки и грека. 4",
    "id": "people-264",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ирод",
    "reference": "Матфея 14:1-11",
    "question": "Правитель Галилеи, обезглавивший Иоанна Крестителя.",
    "id": "people-265",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хирам",
    "reference": "1 Царей 5:1",
    "question": "Царь Тира, друг Давида и Соломона. Поставлял древесину для строительства храма.",
    "id": "people-266",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тит",
    "reference": "Титу 1:4, 5",
    "question": "Ему было поручено назначать старших мужчин на Крите.",
    "id": "people-267",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сигон",
    "reference": "Числа 21:21",
    "question": "Амморейский царь, которого убил Моисей.",
    "id": "people-268",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амнон",
    "reference": "2 Самуила 13:28, 29",
    "question": "Первенец Давида, убитый Авессаломом за сестру Фамарь.",
    "id": "people-269",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фамарь",
    "reference": "Бытие 38:6, 29, 30",
    "question": "Невестка Иуды, мать Фареса и Зары. 5",
    "id": "people-270",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иродиада",
    "reference": "Марка 6:17",
    "question": "Жена Ирода Антипы.",
    "id": "people-271",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Фива",
    "reference": "Римлянам 16:1, 2",
    "question": "Христианка из города Кенхрей; она передала послание Римлянам адресатам.",
    "id": "people-272",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сила",
    "reference": "Деяния 16:19-26",
    "question": "Вместе с Павлом он был чудом освобожден из тюрьмы.",
    "id": "people-273",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хирам",
    "reference": "1 Царей 7:13, 14; 2 Летопись 2:12-14",
    "question": "Он служил языческому царю, но его навыки пригодились при строительстве храма.",
    "id": "people-274",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Марфа",
    "reference": "Иоанна 11:1",
    "question": "Сестра Лазаря и Марии.",
    "id": "people-275",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амос",
    "reference": "Исаия 1:1",
    "question": "Отец пророка Исаии. 6",
    "id": "people-276",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амос",
    "reference": "Амос 7:14",
    "question": "Человек, которого Бог призвал в пророки, когда он пас стада и собирал сикоморы.",
    "id": "people-277",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Онан",
    "reference": "Бытие 38:8, 9",
    "question": "Сын Иуды, не пожелавший восстановить семя брату своему.",
    "id": "people-278",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Шифра и Фуа",
    "reference": "Исход 1:15",
    "question": "Назовите повивальных бабок евреянок в Египте.",
    "id": "people-279",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Матфей",
    "reference": "Матфея 9:9",
    "question": "Апостол, автор первой книги Греческих Писаний.",
    "id": "people-280",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Исаак",
    "reference": "Бытие 21:1-7",
    "question": "Его имя означает «смех», так как родители не поверили в возможность его рождения.",
    "id": "people-281",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сим",
    "reference": "Бытие 10:21",
    "question": "Сын Ноя, отец «сынов Еверовых». 7",
    "id": "people-282",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Шафан",
    "reference": "2 Царей 22:8-10",
    "question": "Писарь царя Иосии, он доложил царю о находке свитка с законами Бога при ремонте храма.",
    "id": "people-283",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Симеон",
    "reference": "Бытие 42:24",
    "question": "Иосиф оставил его заложником, чтобы братья привели Вениамина.",
    "id": "people-284",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Пашхур",
    "reference": "Иеремия 20:1-6",
    "question": "Священник, который заковал Иеремию в колодки.",
    "id": "people-285",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Матфий",
    "reference": "Деяния 1:21-26",
    "question": "Получивший апостольство вместо Иуды Искариота.",
    "id": "people-286",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Амрам",
    "reference": "Исход 6:20",
    "question": "Отец Моисея.",
    "id": "people-287",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Исав",
    "reference": "Бытие 25:25-34",
    "question": "Продавший первородство своему брату. 8",
    "id": "people-288",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Шешбацар",
    "reference": "Ездра 1:8-11",
    "question": "Кир вручил ему сокровища Иерусалимского храма при возвращении пленников из Вавилона.",
    "id": "people-289",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Фамарь",
    "reference": "2 Самуила 13:1-19",
    "question": "Дочь царя Давида, обесчещенная своим сводным братом Амноном.",
    "id": "people-290",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Потифар",
    "reference": "Бытие 37:36",
    "question": "Египетский чиновник, купивший Иосифа.",
    "id": "people-291",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Исаия",
    "reference": "Исаия 1:1",
    "question": "Пророк, сын Амоса; его имя означает «спасение Иеговы».",
    "id": "people-292",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анамеил",
    "reference": "Иеремия 32:6-9",
    "question": "Двоюродный брат пророка Иеремии, у которого он купил поле.",
    "id": "people-293",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мафусал",
    "reference": "Бытие 5:21-27",
    "question": "Человек, который прожил дольше всех. 9",
    "id": "people-294",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сиф",
    "reference": "Бытие 4:25",
    "question": "Сын Адама и Евы, который родился им вместо Авеля.",
    "id": "people-295",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рахиль",
    "reference": "Бытие 29:30",
    "question": "Любимая жена Иакова.",
    "id": "people-296",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анания",
    "reference": "Иеремия 28:1",
    "question": "Лжепророк, предсказавший народу Иудеи, что освобождение из вавилонского плена произойдет через два года.",
    "id": "people-297",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иссахар",
    "reference": "Бытие 30:17, 18; 49:14, 15",
    "question": "Пятый сын Лии от Иакова; в благословении Отца он назван «осёл с крепкими костями, лежащий между двумя сидельными вьюками».",
    "id": "people-298",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мелхиседек",
    "reference": "Бытие 14:18-20",
    "question": "Царь и священник в Салиме.",
    "id": "people-299",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Фарра",
    "reference": "Бытие 11:24, 26",
    "question": "Сын Нахора, отец Нахора. 0",
    "id": "people-300",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иуда",
    "reference": "Бытие 29:35; 37:26, 27",
    "question": "Четвертый сын Иакова и Лии. Он был инициатором продажи Иосифа в рабство.",
    "id": "people-301",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анания",
    "reference": "Деяния 23:2, 3",
    "question": "Первосвященник, присутствовавший на допросе Павла перед Синедрионом.",
    "id": "people-302",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мелхола",
    "reference": "1 Самуила 14:49",
    "question": "Младшая дочь царя Саула, жена Давида.",
    "id": "people-303",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ревекка",
    "reference": "Бытие 25:21-23",
    "question": "От двух сыновей, которых она родила, произошли два народа.",
    "id": "people-304",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Феликс",
    "reference": "Деяния 24:24-26",
    "question": "Римский правитель, желавший получить взятку от заключенного в тюрьму Павла.",
    "id": "people-305",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Софония",
    "reference": "Софония 1:1",
    "question": "Пророк времен царя Иосии; потомок царя Езекии. 1",
    "id": "people-306",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сусаким",
    "reference": "1 Царей 14:25",
    "question": "Египетский фараон, выступивший против Иерусалима на пятом году царствования Ровоама.",
    "id": "people-307",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мемфивосфей",
    "reference": "2 Самуила 9:6, 7",
    "question": "К кому обращены слова Давида: «Не бойся, потому что я непременно проявлю к тебе любящую доброту ради твоего отца Ионафана»?",
    "id": "people-308",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ревекка",
    "reference": "Бытие 24:29",
    "question": "Сестра Лавана.",
    "id": "people-309",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иуда",
    "reference": "Луки 6:16",
    "question": "Сын Иакова, апостол Иисуса.",
    "id": "people-310",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Тихик",
    "reference": "Эфесянам 6:21, 22; Колоссянам 4:7-9",
    "question": "Павел попросил Онисима и его доставить письма в Эфес и Колоссы.",
    "id": "people-311",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахав",
    "reference": "1 Царей 18:20",
    "question": "Израильский царь, во дни которого пророк Илья доказал всем, что Иегова единственный истинный Бог. 2",
    "id": "people-312",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анания",
    "reference": "Деяния 9:10-17",
    "question": "Христианин из Дамаска, который был послан к ослепшему Савлу.",
    "id": "people-313",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Вааса",
    "reference": "1 Царей 15:27, 28",
    "question": "Царь Израиля, захвативший власть путем заговора у царя Надава.",
    "id": "people-314",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нимрод",
    "reference": "Бытие 10:10, 11",
    "question": "Выходец из земли Сеннаар, построивший Ниневию.",
    "id": "people-315",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иуда",
    "reference": "Матфея 10:4",
    "question": "Апостол, предавший Иисуса Христа.",
    "id": "people-316",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Финеес",
    "reference": "Числа 25:11",
    "question": "Священник, отвративший ярость Иеговы от сынов Израилевых.",
    "id": "people-317",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Никодим (Иоанна 19:39) 53",
    "reference": "",
    "question": "Член Синедриона, приходивший ночью к Иисусу. 3",
    "id": "people-318",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Асенефа",
    "reference": "Бытие 41:45",
    "question": "Как звали жену Иосифа, которую дал ему фараон?",
    "id": "people-319",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ной",
    "reference": "Бытие 5:29",
    "question": "Его имя означает «утешение».",
    "id": "people-320",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Соломон",
    "reference": "1 Царей 6:1",
    "question": "Сын Давида, построивший храм Иеговы.",
    "id": "people-321",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Орфа",
    "reference": "Руфь 1:4",
    "question": "Невестка Ноемини, оставившая её.",
    "id": "people-322",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фома",
    "reference": "Иоанна 20:24",
    "question": "Апостол Иисуса Христа, которого называли «Близнецом».",
    "id": "people-323",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мисах",
    "reference": "Даниил 1:7",
    "question": "Вавилонское имя Мисаила. 4",
    "id": "people-324",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Димас",
    "reference": "2 Тимофею 4:10",
    "question": "Ранее помощник апостола Павла, «полюбивший нынешнюю систему вещей».",
    "id": "people-325",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анна",
    "reference": "1 Самуила 1:1, 2, 20",
    "question": "Жена Елканы.",
    "id": "people-326",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ихавод",
    "reference": "1 Самуила 4:19-21",
    "question": "Сын невестки священника Илия, имя этого сына означает «где слава?».",
    "id": "people-327",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мерари",
    "reference": "Числа 3:36",
    "question": "Потомки этого сына Левия переносили рамы, жерди и столбы священного шатра.",
    "id": "people-328",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Неемия",
    "reference": "Неемия 2:1",
    "question": "Виночерпий царя Артаксеркса.",
    "id": "people-329",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Моисей",
    "reference": "Исход 2:10",
    "question": "Его имя означает «спасенный из воды». 5",
    "id": "people-330",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Анна",
    "reference": "Луки 2:36-38",
    "question": "Вдова, которая была пророчицей, когда Иисуса принесли в храм.",
    "id": "people-331",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Овид",
    "reference": "Руфь 4:22",
    "question": "Дед царя Давида.",
    "id": "people-332",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Филимон",
    "reference": "Филимону 1:1",
    "question": "Хозяин беглого раба Онисима.",
    "id": "people-333",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Навал",
    "reference": "1 Самуила 25:39",
    "question": "Человек, злобу которого Иегова обратил на его же голову.",
    "id": "people-334",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Клеопа",
    "reference": "Луки 24:18",
    "question": "Какой ученик спросил Иисуса: «Ты, наверное, пришелец и живешь в Иерусалиме, ни с кем не общаясь?Ты что не знаешь о том, что произошло в городе в эти дни»?",
    "id": "people-335",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хеттура",
    "reference": "Бытие 25:1-4",
    "question": "Жена Авраама после смерти Сарры. 6",
    "id": "people-336",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аса",
    "reference": "1 Царей 15:8, 9, 13",
    "question": "Царь Иуды, преемник Авии, лишивший свою мать Ану звания царицы за то, что она сделала истукан Астарты.",
    "id": "people-337",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гаий",
    "reference": "3 Иоанна 1:1",
    "question": "Христианин, которому Иоанн адресовал свое третье послание.",
    "id": "people-338",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Саул",
    "reference": "1 Самуила 9:2",
    "question": "Первый царь Израиля.",
    "id": "people-339",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахиил",
    "reference": "1 Царей 16:34",
    "question": "Кто восстановил и заново отстроил Иерихон?",
    "id": "people-340",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Урия",
    "reference": "2 Самуила 11:3",
    "question": "Первый муж Вирсавии.",
    "id": "people-341",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Феофил",
    "reference": "Луки 1:3",
    "question": "Кому Лука адресовал свое Евангелие? 7",
    "id": "people-342",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Севна",
    "reference": "Исаия 36:3",
    "question": "Писарь царя Езекии, посланный на переговоры с рабсаком.",
    "id": "people-343",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Оза",
    "reference": "1 Летопись 13:10",
    "question": "Человек, который поражен Иеговой за прикосновение к ковчегу Соглашения.",
    "id": "people-344",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нафан",
    "reference": "2 Самуила 12:7",
    "question": "Пророк, обличивший Давида за грех с Вирсавией.",
    "id": "people-345",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Филипп",
    "reference": "Иоанна 6:5-7",
    "question": "Иисус обратился к нему: «Где нам купить хлеба, чтобы они могли поесть»?",
    "id": "people-346",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аполлос",
    "reference": "Деяния 18:24",
    "question": "Христианин, обладавший красноречием.",
    "id": "people-347",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Соломон",
    "reference": "1 Летопись 29:1",
    "question": "Избранный Богом сын Давида. 8",
    "id": "people-348",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Онисим",
    "reference": "Филимону 10-16",
    "question": "Он сбежал от своего хозяина, но вернулся в нему, став христианином.",
    "id": "people-349",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Андрей",
    "reference": "Иоанна 1:39, 40",
    "question": "Один из двоих, кто первый последовал за Иисусом, брат Симона Петра.",
    "id": "people-350",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хусий",
    "reference": "2 Самуила 15:32-34",
    "question": "Друг царя Давида; он помог расстроить советы Ахитофела.",
    "id": "people-351",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Садок",
    "reference": "2 Самуила 15:27; 1 Царей 2:35",
    "question": "Священник во времена Давида и Соломона.",
    "id": "people-352",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иаков",
    "reference": "Матфея 10:2,3; Марка 6:3; Луки 6:16",
    "question": "В Христианских Греческих Писаниях упоминаются четыре человека с этим именем.",
    "id": "people-353",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нимрод",
    "reference": "Бытие 10:8, 9",
    "question": "Сильный охотник, противящийся Иегове. 9",
    "id": "people-354",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Каиафа",
    "reference": "Матфея 26:3",
    "question": "Первосвященник во дни служения Иисуса на земле.",
    "id": "people-355",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гедалия",
    "reference": "2 Царей 25:22-26",
    "question": "Навуходоносор назначил его правителем Иудеи после завоевания Иерусалима.",
    "id": "people-356",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нимрод",
    "reference": "Бытие 10:8,10",
    "question": "Основатель Вавилона.",
    "id": "people-357",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аод",
    "reference": "Судей 3:14, 15",
    "question": "Левша, избавивший израильтян от 18-летнего моавитского рабства.",
    "id": "people-358",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Павел",
    "reference": "Римлянам 1:1",
    "question": "Большая часть Греческих Писаний записана этим человеком.",
    "id": "people-359",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Садок",
    "reference": "1 Царей 1:39",
    "question": "Священник, помазавший Соломона на царство. 0",
    "id": "people-360",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Седрах",
    "reference": "Даниил 1:7",
    "question": "Вавилонское имя Анании.",
    "id": "people-361",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хелкия",
    "reference": "2 Царей 22:4-7",
    "question": "Первосвященник во дни царя Иосии, занимавшийся ремонтом храма.",
    "id": "people-362",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ванея",
    "reference": "1 Царей 1:32-35",
    "question": "Вместе с Садоком и Нафаном он помог Соломону взойти на престол.",
    "id": "people-363",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Павел / Савл",
    "reference": "Деяния 9:3-18",
    "question": "Кто «прозрел», когда ослеп?",
    "id": "people-364",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Анна",
    "reference": "Иоанна 18:13-24",
    "question": "Бывший первосвященник; допрашивал Иисуса Христа, перед тем как отправить его к Каиафе.",
    "id": "people-365",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ноеминь",
    "reference": "Руфь 2:1",
    "question": "Жена Елимелеха; свекровь Руфи. 1",
    "id": "people-366",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фест",
    "reference": "Деяния 24:27",
    "question": "Римский правитель Палестины, смешивший Феликса.",
    "id": "people-367",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Асаф",
    "reference": "1 Летопись 25:1; Псалом 73",
    "question": "Левит, руководивший пением в храме при царе Давиде. Автор нескольких псалмов.",
    "id": "people-368",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иуст",
    "reference": "Колоссянам 4:11",
    "question": "Так называли Иисуса, сотрудника Павла, который был для него поддержкой.",
    "id": "people-369",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ада",
    "reference": "Бытие 4:19",
    "question": "После Евы она была первой женщиной, имя которой упоминается в Библии.",
    "id": "people-370",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лот",
    "reference": "2 Петра 2:7",
    "question": "Праведник, «угнетенный необузданностью распутного поведения людей и избавленный Богом».",
    "id": "people-371",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сепфора",
    "reference": "Исход 2:21",
    "question": "Жена Моисея. 2",
    "id": "people-372",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Хам",
    "reference": "Бытие 10:6-20",
    "question": "Третий сын Ноя; предок египтян, эфиопов, ливийцев и хананеев.",
    "id": "people-373",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Седекия",
    "reference": "2 Царей 25:7",
    "question": "Последний царь Иудеи; ослеплен и уведен в плен в Вавилон.",
    "id": "people-374",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нееман",
    "reference": "2 Царей 5:1",
    "question": "Сирийский полководец, исцеленный от проказы пророком Елисеем.",
    "id": "people-375",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахан",
    "reference": "Иисус Навин 7:1",
    "question": "Израильтянин совершивший преступление, «взяв из того, что нужно было придать уничтожению».",
    "id": "people-376",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аполлос",
    "reference": "1 Коринфянам 3:6",
    "question": "«Я сажал, а он поливал». Кто он?",
    "id": "people-377",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мерова",
    "reference": "1 Самуила 14:49",
    "question": "Старшая дочь царя Саула. 3",
    "id": "people-378",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Самсон",
    "reference": "Судей 14:5, 6",
    "question": "Самый сильный человек.",
    "id": "people-379",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иаков",
    "reference": "Деяния 12:1, 2",
    "question": "Апостол Иисуса, которого по приказу Ирода убили мечом.",
    "id": "people-380",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Варух",
    "reference": "Иеремия 36:1-32",
    "question": "Верный друг пророка Иеремии, помогавший записывать ему слова Иеговы.",
    "id": "people-381",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахитофел",
    "reference": "2 Самуила 15:12; 16:23",
    "question": "Советник и друг Давида, ставший впоследствии его врагом.",
    "id": "people-382",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Раав",
    "reference": "Евреям 11:31",
    "question": "« Верой ***, блудница, не погибла, потому что приняла разведчиков с миром».",
    "id": "people-383",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аран",
    "reference": "Бытие 11:29",
    "question": "Отец Милки и Иски, брат Авраама. 4",
    "id": "people-384",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аристарх",
    "reference": "Деяния 27:2",
    "question": "Христианин, македонянин из Фессалоники, сопровождавший Павла в Рим на суд.",
    "id": "people-385",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Иоседек",
    "reference": "Захария 6:11",
    "question": "Отец первосященника Иисуса.",
    "id": "people-386",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иеремия",
    "reference": "Иеремия 1:1-7",
    "question": "Пророк, сын священника Хелкии; еще совсем молодым призван Богом на служение.",
    "id": "people-387",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авигея",
    "reference": "1 Самуила 25:32, 33",
    "question": "Имя её второго мужа означает \"возлюбленый\", а имя первого -\"безумный\".",
    "id": "people-388",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Самуил",
    "reference": "1 Самуила 1:20",
    "question": "Сын Елканы и Анны.",
    "id": "people-389",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Далида",
    "reference": "Судей 16:4-21",
    "question": "Женщина, предавшая Самсона. 5",
    "id": "people-390",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Халев",
    "reference": "Числа 13:6",
    "question": "Один из соглядатаев земли Обетованной, из колена Иудина.",
    "id": "people-391",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иезекииль",
    "reference": "Иезекииль 1:1-3",
    "question": "Пророк, сын священника Вузия; переселен Навуходоносором в Вавилон.",
    "id": "people-392",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Артаксеркс",
    "reference": "Ездра 4:7",
    "question": "Персидский царь, во времена которого Ездра и Неемия вернулись из вавилонского плена.",
    "id": "people-393",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Сарра",
    "reference": "Бытие 21:3",
    "question": "Мать Исаака.",
    "id": "people-394",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахимаас",
    "reference": "2 Самуила 18:19",
    "question": "Сын первосвященника Садока, доставлявший Давиду сведения во время восстания Авессалома.",
    "id": "people-395",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Орфа и Руфь",
    "reference": "Руфь 1:4",
    "question": "Невестки Ноемини. 6",
    "id": "people-396",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Офни и Финеес",
    "reference": "1 Самуила 1:3; 2:12",
    "question": "Как звали недобросовестных сыновей священника Илии.",
    "id": "people-397",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Приска / Прискилла",
    "reference": "Римлянам 16:3, 4",
    "question": "Вместе со своим мужем она рисковала жизнью, помогая Павлу.",
    "id": "people-398",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Варсава / Иуст / Иосиф",
    "reference": "Деяния 1:23-26",
    "question": "Жребий показал, что не он должен быть апостолом.",
    "id": "people-399",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Суламита",
    "reference": "Песнь Песней 1:1-5",
    "question": "Она описала себя как очень смуглую девушку. Её любви добивался царь.",
    "id": "people-400",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Махлон",
    "reference": "Руфь 4:9,10",
    "question": "Он был израильтянином, но не стал прародителем Мессии. Его жена не была израильтянкой, но стала прародительницей Мессии.",
    "id": "people-401",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ионафан",
    "reference": "1 Самуила 14:27",
    "question": "Он ел мед вопреки клятве своего отца. 7",
    "id": "people-402",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Давид",
    "reference": "2 Самуила 23:15-17",
    "question": "Его друзья принесли ему попить воды, но он вылил ее на землю, как кровь.",
    "id": "people-403",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Симон, кожевник",
    "reference": "Деяния 10:5, 6",
    "question": "Он жил у моря, и однажды у него гостил известный человек, который любил рыбачить. У них одинаковые имена.",
    "id": "people-404",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Филипп",
    "reference": "Деяния 8:26, 27",
    "question": "Кто проповедовал эфиопскому евнуху?",
    "id": "people-405",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Михей",
    "reference": "Судей 17:1-3",
    "question": "Он сознался, что украл 1100 серебрянных монет у своей матери, и затем их ей вернул.",
    "id": "people-406",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ровоам",
    "reference": "2 Летопись 10:3-14",
    "question": "Он советовался со старцами и юношами, но прислушался к последним.",
    "id": "people-407",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фарес и Зарра",
    "reference": "Бытие 38:29, 30",
    "question": "Имена близнецов, которых Фамарь родила Иуде. 8",
    "id": "people-408",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Елифаз",
    "reference": "Иов 4:1,13-18",
    "question": "Получив видение от злого духа, он решил, что Бог не доверяет своим служителям.",
    "id": "people-409",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Петр",
    "reference": "",
    "question": "Он написал часть Библии в Вавилоне, когда Иерусалим находился под властью римлян.",
    "id": "people-410",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Агарь",
    "reference": "Галатам 4:22-25",
    "question": "Апостол Павел уподобил ей завет, гору Синай и город Иерусалим.",
    "id": "people-411",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Епафрас",
    "reference": "Колоссянам 4:12, 13",
    "question": "Возвратясь из Колосс, он усердствовал в молитве за собрания в Лаодикии и Иераполе.",
    "id": "people-412",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Исав",
    "reference": "Бытие 26:34",
    "question": "У него было несколько жен, одну из них звали Иегудифа.",
    "id": "people-413",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Каин",
    "reference": "Бытие 4:17",
    "question": "Он был первым человеком, построившим город. 9",
    "id": "people-414",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гаий",
    "reference": "3 Иоанна 1:1, 3-6",
    "question": "Иоанн похвалил его за гостеприимство и любовь.",
    "id": "people-415",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Енох",
    "reference": "Иуды 14",
    "question": "Хотя он седьмой от Адама, его пророчество записано в книге Иуды.",
    "id": "people-416",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Марк",
    "reference": "Колоссянам 4:10; 1 Петра 5:13",
    "question": "Он был двоюродным братом Варнавы, и Петр называл его своим сыном.",
    "id": "people-417",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лоида",
    "reference": "2 Тимофею 1:5",
    "question": "Павел похвалил её и её дочь за нелицемерную веру.",
    "id": "people-418",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Раав",
    "reference": "Иакова 2:25",
    "question": "Иаков сказл, что она была объявлена праведной, потому что гостеприимно приняла посланных.",
    "id": "people-419",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лемуил",
    "reference": "Притчи 31:1",
    "question": "Его мама давала ему серьезные наставления. 0",
    "id": "people-420",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Самуил",
    "reference": "1 Самуила 8:10, 11",
    "question": "Судья и пророк, руководивший собранием, на котором были записаны \"права царя\".",
    "id": "people-421",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Корей",
    "reference": "1 Летопись 6:1, 33, 37; Псалом 42:0",
    "question": "Родственник Моисея, сыновья которого являются авторами многих замечательных псалмов.",
    "id": "people-422",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Филимон",
    "reference": "Филимону 1:1",
    "question": "Колосский христианин, которому Павел посвятил одно из своих посланий.",
    "id": "people-423",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зеведей",
    "reference": "Матфея 4:21",
    "question": "Отец, который не препятствовал своим сыновьям следовать за Господом.",
    "id": "people-424",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аннон",
    "reference": "2 Самуила 10:4",
    "question": "Царь Аммонитский, который обрил послов Давидовых.",
    "id": "people-425",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Нехо",
    "reference": "2 Летопись 35:20, 23, 24",
    "question": "Египетский царь, умертвивший царя Иосию. 1",
    "id": "people-426",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Одед",
    "reference": "2 Летопись 28:9-11",
    "question": "Пророк, побудивший войско Факея отпустить пленных Иудеев.",
    "id": "people-427",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эсфирь",
    "reference": "Эсфирь 2:7",
    "question": "Сирота, воспитанница двоюродного брата.",
    "id": "people-428",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лаван",
    "reference": "Бытие 31:27",
    "question": "Родственник Иакова, который хотел \"отпустить его с радостью и с песнями, с бубном и арфой\".",
    "id": "people-429",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гирсам",
    "reference": "Исход 2:22",
    "question": "Первый сын Моисея, имя которого означает \"пришелец\".",
    "id": "people-430",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Давид",
    "reference": "1 Самуила 16:18, 19",
    "question": "Царь Израильский, которого еще с ранней юности возлюбил Бог и дал ему имя, означающее \"возлюбленный\".",
    "id": "people-431",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иаир",
    "reference": "Эсфирь 2:5-7",
    "question": "Дядя Эсфири. 2",
    "id": "people-432",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Зара",
    "reference": "Бытие 38:30",
    "question": "Имя ребёнка, родившегося с красной нитью на руке.",
    "id": "people-433",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иоаким",
    "reference": "Иеремия 36:1, 23",
    "question": "Царь, сжегший свиток со словами Божьими.",
    "id": "people-434",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иахазиил",
    "reference": "2 Летопись 20:14",
    "question": "Имя сына Захарии, через которого Бог ответил на молитву Иосафата, царя Иудейского.",
    "id": "people-435",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Матфей",
    "reference": "Матфея 9:9",
    "question": "Человек, который услышав призыв Иисуса \"встал и последовал за ним\".",
    "id": "people-436",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ездра",
    "reference": "Ездра 7:1",
    "question": "Благочестивый ученый священник, живший в Вавилоне при царе Артаксерксе.",
    "id": "people-437",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахса",
    "reference": "Иисус Навин 15:16",
    "question": "Имя дочери Халева. 3",
    "id": "people-438",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ионадав",
    "reference": "2 Самуила 13:3",
    "question": "Сын Шимы, давший своему двоюродному брату Амнону лукавый совет.",
    "id": "people-439",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Силуан",
    "reference": "Деяния 15:27; 1 Фессалоникийцам 1:1",
    "question": "Лука называет его греческим именем Сила. Каким именем Петр и Павел в своих письмах называют его?",
    "id": "people-440",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иосиф",
    "reference": "Бытие 45:8",
    "question": "Раб, ставший отцом фараону.",
    "id": "people-441",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аман",
    "reference": "Эсфирь 6:6-11",
    "question": "Кто провозглашал о Мардохее: «Вот что делают для человека, которого царь желает почтить».",
    "id": "people-442",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кедорлаомер",
    "reference": "Бытие 14:1, 17",
    "question": "Царь побежденный Аврамом.",
    "id": "people-443",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Адам",
    "reference": "1 Коринфянам 15:22",
    "question": "Имя человека, в котором \"все умирают\". 4",
    "id": "people-444",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Венадад",
    "reference": "1 Царей 20:20, 23",
    "question": "Царь, слуги которого после одного из поражений сказали: \"Бог их - Бог гор, а не равнин\".",
    "id": "people-445",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Лапидоф",
    "reference": "Судей 4:4",
    "question": "Муж пророчицы Деворы.",
    "id": "people-446",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Аса",
    "reference": "1 Царей 15:14",
    "question": "Иерусалимский царь, сердце которого \"было полностью с Иеговой все дни его жизни\".",
    "id": "people-447",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иаков",
    "reference": "Бытие 28:18, 19",
    "question": "Патриарх, переименовавший город Луз в Вефиль.",
    "id": "people-448",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Самуил",
    "reference": "1 Самуила 1:24-28",
    "question": "Пророк Божий, который с ранних детских лет нес служение в храме.",
    "id": "people-449",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ирод",
    "reference": "Деяния 12:21-23",
    "question": "Царь, который умер, быв изъеден червями. 5",
    "id": "people-450",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Гедеон",
    "reference": "Судей 6:11",
    "question": "Судья Израильский, которого призвал Иегова, когда он молотил пшеницу в давильне своего отца.",
    "id": "people-451",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Давид",
    "reference": "1 Самуила 16:13",
    "question": "Царь, помазанный на царство задолго до своего воцарения.",
    "id": "people-452",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иорам",
    "reference": "2 Царей 3:1, 2",
    "question": "Сын Ахава, уничтоживший священную колонну Ваала, сделанного его отцом.",
    "id": "people-453",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авдон",
    "reference": "Судей 12:13, 14",
    "question": "Судья Израиля родом из Пирафона, имевший 40 сыновей и 30 внуков.",
    "id": "people-454",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Шеломиф",
    "reference": "Левит 24:11",
    "question": "Израильтянка, сын которой хулил имя Иеговы.",
    "id": "people-455",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Еман",
    "reference": "Псалом 88:0",
    "question": "Певец, автор 88 псалма. 6",
    "id": "people-456",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Онисим",
    "reference": "Колосянам 4:9",
    "question": "Имя «верного и дорогого брата», которого апостол Павел послал вместе с Тихиком к колоссянам.",
    "id": "people-457",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Эней",
    "reference": "Деяния 9:32-35, 38",
    "question": "Как звали парализованного вгороде Лидде, которого вылечил Петр?",
    "id": "people-458",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Малх",
    "reference": "Иоанна 18:10",
    "question": "Раб, которого Иисус избавил от увечья.",
    "id": "people-459",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сепфора",
    "reference": "Исход 4:25",
    "question": "Женщина, произведшая обрезание своему сыну.",
    "id": "people-460",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иасон",
    "reference": "Деяния 17:1-7",
    "question": "Христианин, принявший Павла и Силу в свой дом в Фессалонике.",
    "id": "people-461",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Адраазар",
    "reference": "1 Летопись 18:3",
    "question": "Противник Давида, царь Сувы. 7",
    "id": "people-462",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Ахио",
    "reference": "2 Самуила 6:3",
    "question": "Имя сына Аминодава, который со своим братом Озою вел колесницу с ковчегом Божиим.",
    "id": "people-463",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Мария",
    "reference": "Луки 1:34-36",
    "question": "Близкая родственница Елизаветы.",
    "id": "people-464",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Рехав",
    "reference": "2 Царей 10:15",
    "question": "Отец Ионадава, который помог царю Ииую убить пророков Ваала.",
    "id": "people-465",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Фалтий",
    "reference": "1 Самуила 25:44",
    "question": "Ему Саул отдал свою дочь Мелхолу, бывшую прежде женой Давида.",
    "id": "people-466",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ефрон",
    "reference": "Бытие 23:8",
    "question": "Человек, у которого Авраам приобрел поле.",
    "id": "people-467",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Кааф",
    "reference": "Исход 6:18, 20",
    "question": "Дед Моисея. 8",
    "id": "people-468",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Сафат",
    "reference": "Числа 13:5",
    "question": "Представитель колена Симеонова, посланный в числе других высмотреть землю Ханаанскую.",
    "id": "people-469",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Моисей",
    "reference": "Исход 17:11",
    "question": "Кто помог выиграть битву поднятием рук?",
    "id": "people-470",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Ахав",
    "reference": "1 Царей 16:30",
    "question": "Он \"поступал в галазах Иеговы хуже всех, кто был до него\".",
    "id": "people-471",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Навуфей",
    "reference": "1 Царей 21:1-14",
    "question": "Человек, который не пожелал уступить наследство отца своего, за что был побит камнями.",
    "id": "people-472",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Иисус",
    "reference": "Аггей 1:1",
    "question": "Сын и преемник первосвященника Иоседека.",
    "id": "people-473",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "easy"
  },
  {
    "answer": "Авессалом",
    "reference": "2 Самуила 18:9",
    "question": "Человек, которого погубили его волосы. 9",
    "id": "people-474",
    "category": "people",
    "categoryName": "Люди Библии",
    "difficulty": "hard"
  },
  {
    "answer": "Верблюд",
    "reference": "Бытие 24:14-21",
    "question": "Животное, при помощи которого выбрали невесту для Исаака.",
    "id": "nature-1",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Гадюка",
    "reference": "Римлянам 3:13",
    "question": "Какую змею упомянул Павел в послании к Римлянам?",
    "id": "nature-2",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Огурец",
    "reference": "Числа 11:5",
    "question": "Израильтяне роптали о нехватке этого зеленого вкусного овоща.",
    "id": "nature-3",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Нард",
    "reference": "Иоанна 12:3",
    "question": "Ароматной жидкостью из корневищ этого растения Мария помазала ноги Иисуса.",
    "id": "nature-4",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Страус",
    "reference": "Иов 39:13-18",
    "question": "Птица, которая не умеет летать, но очень быстро бегает.",
    "id": "nature-5",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Лоза",
    "reference": "Иоанна 15:1",
    "question": "«Я – истинная виноградная ***». 1",
    "id": "nature-6",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Ягнёнок",
    "reference": "Исход 12:2-6",
    "question": "Кто приносился в жертву на Пасху?",
    "id": "nature-7",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Виноград",
    "reference": "Числа 13:23, 24",
    "question": "Ветвь с кистью этих ягод двое соглядатаев несли на шесте.",
    "id": "nature-8",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Свинья",
    "reference": "Луки 15:15",
    "question": "Пасти стадо этих животных считалось презрейнишим занятием.",
    "id": "nature-9",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Шафран",
    "reference": "Песнь Песней 4:14",
    "question": "Выжатое масло из этого луковичного растения с бледно-зелеными узкими листьями и фиолетовыми цветами добавляли в благовонную воду.",
    "id": "nature-10",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Черный коршун",
    "reference": "Иов 28:7",
    "question": "Эта нечистая птица хорошо видит свою мелкую добычу и падает на неё \"камнем\" с неба.",
    "id": "nature-11",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Первые плоды",
    "reference": "Исход 23:19",
    "question": "Как в Библии называются начатки урожая? 2",
    "id": "nature-12",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Сорняки / плевелы",
    "reference": "Матфея 13:36—38",
    "question": "Расстение, которое только созревшее можно отличить от пшеницы по характерным семенам черного цвета и меньшего размера.",
    "id": "nature-13",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Раскидистое дерево",
    "reference": "Второзаконие 12:2",
    "question": "Народы служили своим богам \"на высоких горах, на холмах и под каждым ***\".",
    "id": "nature-14",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Гранат",
    "reference": "Числа 13:23",
    "question": "У этого дерева красные плоды с жесткой кожурой наполненные кисло-сладким соком.",
    "id": "nature-15",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Коршун",
    "reference": "Второзаконие 14:13",
    "question": "Небольшая хищная птица, питающаяся падалью.",
    "id": "nature-16",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Верблюд",
    "reference": "Бытие 37:25",
    "question": "Главная особенность этого животного долго обходиться без воды.",
    "id": "nature-17",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Таракан",
    "reference": "Иоиль 1:4",
    "question": "В пророчестве Иоиля эти насекомые доедали после личинок саранчи. 3",
    "id": "nature-18",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Аист",
    "reference": "Псалом 104:17",
    "question": "Белые или черные перелетные птицы, мигрирующие большими стаями.",
    "id": "nature-19",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Стриж",
    "reference": "Исаия 38:14",
    "question": "Жалобный крик этой птицы сравнивается со стонами царя Езекии во время болезни.",
    "id": "nature-20",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Бобы",
    "reference": "2 Самуила 17:28",
    "question": "Плоды этого огородного стручкового растения были в числе продуктов, принесенных Давиду во время войны с Авессаломом.",
    "id": "nature-21",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Свинья",
    "reference": "2 Петра 2:22",
    "question": "Это животное любит валяться в грязи.",
    "id": "nature-22",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Маслины",
    "reference": "Иеремия 11:16",
    "question": "Плоды похожие на сливу вначале зеленые, затем становятся темно-синими и, созревая, чернеют.",
    "id": "nature-23",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Инжир",
    "reference": "Бытие 3:7",
    "question": "Из листьев какого растения была сшита первая одежда? 4",
    "id": "nature-24",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Большое дерево",
    "reference": "Судей 9:6",
    "question": "Около этого дерева жители Сихема поставили Авимелеха царем.",
    "id": "nature-25",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Кориандр",
    "reference": "Исход 16:31",
    "question": "Приправа, с которой сравниваются крупинки манны.",
    "id": "nature-26",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Куропатка",
    "reference": "Иеремия 17:11",
    "question": "Человек, приобретающий богатство неправдою уподобляется этой птице сидящей на яйцах, которые не высиживала.",
    "id": "nature-27",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Бревно",
    "reference": "Луки 6:42",
    "question": "Ствол большого срубленного дерева без веток и верхушки.",
    "id": "nature-28",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Рыба",
    "reference": "Матфея 17:27",
    "question": "«Возьми первую пойманную ***, и когда откроешь ей рот, найдешь статир».",
    "id": "nature-29",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Баран",
    "reference": "Левит 5:15",
    "question": "Это животное человек приносил в жертву повинности. 5",
    "id": "nature-30",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Ива",
    "reference": "Иезекииль 17:5",
    "question": "Дерево, растущее у воды.",
    "id": "nature-31",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Петух",
    "reference": "Марка 13:35",
    "question": "Крик этой птицы служил сигналом начала третьей стражи: от полночи до трех часов утра.",
    "id": "nature-32",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Свинья",
    "reference": "Исаия 65:3,4",
    "question": "Принесение в жертву и употребление этого нечистого животного приравнивалось к идолослужению.",
    "id": "nature-33",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Горькая зелень",
    "reference": "Исход 12:8",
    "question": "Эти приправы к пасхальному аганцу напоминали о горьком времени, проведенном в Египте.",
    "id": "nature-34",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Лев",
    "reference": "Исаия 65:25",
    "question": "В новом мире это хищное животное будет есть солому как бык.",
    "id": "nature-35",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Крапива",
    "reference": "Софония 2:9",
    "question": "Эта жгучая трава символизирует запустение. 6",
    "id": "nature-36",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Мирра",
    "reference": "Исход 30:23",
    "question": "Самая лучшая смола этого колючего кустарника вытекала сама и использовалась для святого масла помазания.",
    "id": "nature-37",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Ящерица",
    "reference": "Левит 11:30",
    "question": "Геккон, хамелеон, тритон – назовите вид рептилий.",
    "id": "nature-38",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Виноградная лоза",
    "reference": "Захария 8:12",
    "question": "Из ягод этого растения получают то, что «веселит сердце человека».",
    "id": "nature-39",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Лягушка",
    "reference": "Исход 8:2-10",
    "question": "Земноводное, заполонившее Египет по слову Моисея.",
    "id": "nature-40",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Лисица",
    "reference": "Судей 15:4,5",
    "question": "Самсон связал им хвосты и привязал факелы, чтобы погубить поля филистимлян.",
    "id": "nature-41",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Конь",
    "reference": "Второзаконие 17:16",
    "question": "Царь не должен был умножать себе этих животных. 7",
    "id": "nature-42",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Колючий кустарник",
    "reference": "Судей 9:15, 16",
    "question": "Ничем не примечательное растение, представлявшее царя Авимелеха.",
    "id": "nature-43",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Лев",
    "reference": "Притчи 30:29, 30",
    "question": "Животное, имеющее «величавую поступь», «сильнейший среди зверей».",
    "id": "nature-44",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Пшеница",
    "reference": "Судей 6:11",
    "question": "Ангел пришел к Гедеону, когда он молотил в давильне зерна этого злака.",
    "id": "nature-45",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Бальзам",
    "reference": "Иеремия 46:11",
    "question": "«Поднимись в Галаад и возьми ***. Нет для тебя исцеления».",
    "id": "nature-46",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Пальма",
    "reference": "Иоанна 12:13",
    "question": "Ветви этого дерева держали люди, когда Иисус въезжал в Иерусалим как царь.",
    "id": "nature-47",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Крыло",
    "reference": "Матфея 23:37",
    "question": "Курица собирает под него своих цыплят. 8",
    "id": "nature-48",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Тополь",
    "reference": "Левит 23:40",
    "question": "Ветви этого дерева использовались для изготовления кущей или шатров.",
    "id": "nature-49",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Ласточка",
    "reference": "Псалом 84:3",
    "question": "Она устраивает свои гнезда под крышами храмов и домов.",
    "id": "nature-50",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Яблоко",
    "reference": "Притчи 25:11",
    "question": "Этот плод в серебряном сосуде сравнивается со словом, сказанным вовремя.",
    "id": "nature-51",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Арбуз",
    "reference": "Числа 11:5",
    "question": "Египетское бахчевое растение, которое долго помнили израильтяне.",
    "id": "nature-52",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Голубка",
    "reference": "Песнь Песней 6:9",
    "question": "Возлюбленный Суламиты называет её ласково этой птицей за нежность и чистоту.",
    "id": "nature-53",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Баран",
    "reference": "Бытие 31:38",
    "question": "Самец овцы. 9",
    "id": "nature-54",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Зреющий виноград",
    "reference": "Исаия 18:5",
    "question": "«Еще до сбора урожая, когда закончится цветение и цветок превратится в *** ».",
    "id": "nature-55",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Лесной кабан",
    "reference": "Псалом 80:13",
    "question": "Это парнокопытное животное разрывает землю, отыскивая себе корни для пищи, портя деревья.",
    "id": "nature-56",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Пеликан",
    "reference": "Софония 2:13, 14",
    "question": "Величественные здания Ниневии превратились бы в пристанища ежей и этих птиц.",
    "id": "nature-57",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Иссоп",
    "reference": "Псалом 51:7",
    "question": "Это растение использовалось при церемонии очищения людей, которые болели проказой.",
    "id": "nature-58",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Лен",
    "reference": "Иезекииль 44:17",
    "question": "Священники должны были носить одежду, сотканную из этого растения с волокнистым стеблем.",
    "id": "nature-59",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Левиафан",
    "reference": "Иов 41:1",
    "question": "«Можешь ли ты рыболовным крючком вытащить ***». 0",
    "id": "nature-60",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Бегемот",
    "reference": "Иов 40:15",
    "question": "«Вот ***, которого Я создал, как и тебя. Он ест зеленую траву, как бык».",
    "id": "nature-61",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Гранат",
    "reference": "Исход 28:33",
    "question": "На подоле ризы первосвященника эти плоды чередовались с колокольчиками.",
    "id": "nature-62",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Лягушка",
    "reference": "Псалом 78:45",
    "question": "Это земноводное неприхотливо в еде, в основном это вредители растений.",
    "id": "nature-63",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Кора",
    "reference": "Бытие 30:37",
    "question": "Наружная ткань ствола, стебля и корня древесных растений.",
    "id": "nature-64",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "easy"
  },
  {
    "answer": "Мандрагоры",
    "reference": "Бытие 30:14",
    "question": "Этому растению приписывается благоприятное воздействие на плодовитость женщины.",
    "id": "nature-65",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "Верблюд (Луки 18:25) 11 . Алоэ",
    "reference": "Псалом 45:8",
    "question": "«Легче *** пройти через ушко швейной иглы». 1",
    "id": "nature-66",
    "category": "nature",
    "categoryName": "Растения и животные",
    "difficulty": "hard"
  },
  {
    "answer": "1077 г. до н. э.",
    "reference": "2 Самуила 2:4",
    "question": "В каком году Давид становится царем над Иудой в Хевроне?",
    "id": "chronology-1",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "48 лет",
    "reference": "Ездра 6:15; 7:7",
    "question": "Сколько лет проходит со дня восстановления Иерусалима до прихода Ездры и других израильтян из Вавилона?",
    "id": "chronology-2",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "4026 г. до н.э.",
    "reference": "Бытие 2:7",
    "question": "В каком году был создан первый человек?",
    "id": "chronology-3",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "997 г. до н. э.",
    "reference": "1 Царей 12:19, 20",
    "question": "В каком году царство разделилось на Израильское и Иудейское?",
    "id": "chronology-4",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней",
    "reference": "Иезекииль 4:6",
    "question": "Сколько дней Иезекииль должен был пролежать на правом боку за «преступления дома Иуды»?",
    "id": "chronology-5",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1657 г. до н.э.",
    "reference": "Бытие 50: 26",
    "question": "В каком году умер Иосиф? 1",
    "id": "chronology-6",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 1450 г. до н.э.",
    "reference": "Иисус Навин 24:26",
    "question": "Когда было завершено написание книги Иисусом Навином?",
    "id": "chronology-7",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "969 лет",
    "reference": "Бытие 5:27",
    "question": "Самая продолжительная человеческая жизнь за всю историю человечества?",
    "id": "chronology-8",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 947 г. до н. э.",
    "reference": "1 Царей 16:22, 23",
    "question": "С какого года Амврий царствует над Израилем один?",
    "id": "chronology-9",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "60 лет",
    "reference": "Бытие 25:26",
    "question": "Сколько лет было Исааку, когда родились Исав и Иаков?",
    "id": "chronology-10",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "12 нисана",
    "reference": "Луки 22:1—6",
    "question": "Какого нисана Иуда заключает сделку со священниками, чтобы предать Иисуса?",
    "id": "chronology-11",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Третий день творения",
    "reference": "Бытие 1:9-12",
    "question": "Когда была создана суша и зелень? 2",
    "id": "chronology-12",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1553 г. до н.э.",
    "reference": "Исход 2:11,14,15",
    "question": "В каком году Моисей убегает от фараона в Мадиамскую землю?",
    "id": "chronology-13",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Четвертый день творения",
    "reference": "Бытие 1:14-19",
    "question": "В какой день творения стали видимы с земли солнце, луна и звезды?",
    "id": "chronology-14",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "15 день 1го месяца 1513 г. до н.э.",
    "reference": "Числа 33:3",
    "question": "В какой день израильтяне вышли из Рамсеса(Египет)?",
    "id": "chronology-15",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1781 г. до н.э.",
    "reference": "Бытие 28:2",
    "question": "В каком году Иаков бежит от Исава в Паддан-Арам?",
    "id": "chronology-16",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "468 г. до н. э.",
    "reference": "Ездра 7:7",
    "question": "В каком году Ездра и священники возвращаются в Иерусалим?",
    "id": "chronology-17",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "360 дней",
    "reference": "",
    "question": "Продолжительность года по лунному календарю. 3",
    "id": "chronology-18",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 10 лет",
    "reference": "Руфь 1:4",
    "question": "Сколько лет семья Ноемини прожила в земле Моавитской?",
    "id": "chronology-19",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "600 лет",
    "reference": "Бытие 7:11",
    "question": "Сколько лет было Ною, когда начался потоп?",
    "id": "chronology-20",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 52—56 гг. н. э.",
    "reference": "Деяния 18:23—21:19",
    "question": "В каких годах состоялось третье миссионерское путешествие Павла?",
    "id": "chronology-21",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "936 г. до н. э.",
    "reference": "1 Царей 22:41, 42",
    "question": "В каком году Иосафат становится иудейским царем после Асы?",
    "id": "chronology-22",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Кислев / 20 год Артаксеркса – 453 г. до н.э.",
    "reference": "Неемия 1:1-3",
    "question": "В каком году и месяце Неемия узнал о положении израильтян и Иерусалима?",
    "id": "chronology-23",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "137 лет",
    "reference": "Исход 6:16",
    "question": "Сколько лет прожил Левий? 4",
    "id": "chronology-24",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "123 года",
    "reference": "Числа 33:39",
    "question": "Сколько лет прожил Аарон?",
    "id": "chronology-25",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "80 лет",
    "reference": "Исход 7:7",
    "question": "Сколько лет было Моисею, когда он говорил с фараоном?",
    "id": "chronology-26",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "997 г. до н. э.",
    "reference": "1 Царей 11:43",
    "question": "В каком году Ровоам становится царем после Соломона?",
    "id": "chronology-27",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Второй день творения",
    "reference": "Бытие 1:6, 7",
    "question": "Когда Иегова создал твердь или пространство, которое отделяло воду от воды?",
    "id": "chronology-28",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "В элуле",
    "reference": "Неемия 6:15",
    "question": "В каком месяце по еврейскому календарю Неемия закончил восстановление Иерусалимской стены?",
    "id": "chronology-29",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "520 г. до н. э.",
    "reference": "Аггей 1:1",
    "question": "В каком году Аггей завершает книгу Аггея? 5",
    "id": "chronology-30",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "8 лет",
    "reference": "Судей 12:13-15",
    "question": "Сколько лет Авдон, сын Гиллела из колена Ефрема был судьей Израиля?",
    "id": "chronology-31",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "До 1000 г. до н. э.",
    "reference": "Экклезиаст 1:1",
    "question": "В каком году Соломон завершает книгу Экклезиаст?",
    "id": "chronology-32",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 года",
    "reference": "1 Царей 18:1",
    "question": "Сколько лет длился голод в Израиле во дни пророка Илии?",
    "id": "chronology-33",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 96 г. н. э.",
    "reference": "Откровение 1:9",
    "question": "В каком году Иоанн на Патмосе пишет Откровение?",
    "id": "chronology-34",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "130 лет",
    "reference": "Бытие 5:3",
    "question": "Сколько лет было Адаму, когда он родил Сифа?",
    "id": "chronology-35",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "133 года",
    "reference": "Исход 6:18",
    "question": "Сколько лет прожил Кааф? 6",
    "id": "chronology-36",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1878 г. до н. э.",
    "reference": "Бытие 25:20",
    "question": "В каком году был заключен брак между Исааком и Ревеккой?",
    "id": "chronology-37",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "Судей 13:1",
    "question": "Сколько лет Израиль угнетали филистимляне во дни судьи Самсона?",
    "id": "chronology-38",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 56—58 гг. н. э.",
    "reference": "Луки 1:1, 2",
    "question": "В каких годах Лука пишет Евангелие от Луки?",
    "id": "chronology-39",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "36 г. н. э.",
    "reference": "Деяния 10:1, 45",
    "question": "В каком году Петр приходит к Корнилию, первому из необрезанных верующих, которому был открыт путь в христианское собрание?",
    "id": "chronology-40",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 917 г. до н. э.",
    "reference": "2 Царей 3:1",
    "question": "В каком году Иорам (израильский) становится единоличным израильским царем после Охозии?",
    "id": "chronology-41",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Первый день творения",
    "reference": "Бытие 1:3",
    "question": "В какой день творения Иегова создал свет? 7",
    "id": "chronology-42",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Пятый день творения",
    "reference": "Бытие 1:20-23",
    "question": "Когда были созданы птицы и рыбы?",
    "id": "chronology-43",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "12 лет",
    "reference": "2 Царей 3:1",
    "question": "Сколько лет Иорам (израильский) царствовал в Израиле?",
    "id": "chronology-44",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7ой год 10 месяц",
    "reference": "Эсфирь 2:16",
    "question": "В какой год и месяц правления Ахашвероша Эсфирь стала его женой?",
    "id": "chronology-45",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 60—65 гг. н. э.",
    "reference": "Марка",
    "question": "В каких годах Марк пишет Евангелие от Марка?",
    "id": "chronology-46",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 1078 г. до н.э.",
    "reference": "1 Самуила 31:6",
    "question": "В каком году завершилось написание книги 1 Самуила?",
    "id": "chronology-47",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "Исход 16:35",
    "question": "Сколько лет израильтяне ели манну? 8",
    "id": "chronology-48",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Вечером",
    "reference": "Исход 12:18",
    "question": "Когда у израильтян начинался следующий день?",
    "id": "chronology-49",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Нисан / первый",
    "reference": "Эсфирь 3:7",
    "question": "В каком месяце пред Аманом бросали жребий, чтобы определить, когда истребить иудеев?",
    "id": "chronology-50",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "До 648 г. до н. э.",
    "reference": "Софония 1:1",
    "question": "В каком году Софония завершает книгу Софонии?",
    "id": "chronology-51",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 100 г. н. э.",
    "reference": "2 Фессалоникийцам 2:7",
    "question": "В каком году умер Иоанн, последний из апостолов?",
    "id": "chronology-52",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "8 лет",
    "reference": "Судей 3:8",
    "question": "Сколько лет израильтяне были под гнетом Хусарсафема, царя Месопотамского во дни судей?",
    "id": "chronology-53",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "930 лет",
    "reference": "Бытие 5:5",
    "question": "Сколько лет прожил Адам? 9",
    "id": "chronology-54",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "20 лет",
    "reference": "1 Самуила 7:2",
    "question": "Сколько лет ковчег Откровения находился в Кириаф- Иариме во дни Самуила?",
    "id": "chronology-55",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "Бытие 25:20",
    "question": "Сколько лет было Исааку, когда он женился на Ревекке?",
    "id": "chronology-56",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "3096 г. до н.э.",
    "reference": "Бытие 5:5",
    "question": "В каком году умер Адам?",
    "id": "chronology-57",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 41 г.н.э.",
    "reference": "Матфея",
    "question": "В каком году была записана первая книга Греческих Писаний?",
    "id": "chronology-58",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "63 г. до н. э.",
    "reference": "Откровение 17:10",
    "question": "В каком году Рим становится шестой мировой державой и правит над Иерусалимом?",
    "id": "chronology-59",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "110 лет",
    "reference": "Иисус Навин 24:29",
    "question": "Сколько лет прожил Иисус Навин? 0",
    "id": "chronology-60",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "3 года",
    "reference": "1 Царей 15:1, 2",
    "question": "Сколько лет Авия, сын Ровоама, правил в Иерусалиме?",
    "id": "chronology-61",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1ый день 5ого месяца 40го года по выходу из Египта",
    "reference": "Числа 33:38, 39",
    "question": "Когда Аарон умер на горе Ор?",
    "id": "chronology-62",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 628 г. до н. э.",
    "reference": "Аввакум 1:1",
    "question": "В каком году Аввакум завершает книгу Аввакума?",
    "id": "chronology-63",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "10 день 1го месяца 1473 г. до н.э.",
    "reference": "Иисус Навин 4:19",
    "question": "В какой день, какого месяца и года израильтяне вступили в Обетованную землю под руководством Иисуса Навина?",
    "id": "chronology-64",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "30 дней",
    "reference": "",
    "question": "Продолжительность месяца по лунному календарю.",
    "id": "chronology-65",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Шестой день творения",
    "reference": "Бытие 1:24,25,31",
    "question": "Когда были созданы животные? 1",
    "id": "chronology-66",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 дней",
    "reference": "Исход 12:15",
    "question": "Сколько дней израильтяне должны были есть пресных хлеб – опресноки?",
    "id": "chronology-67",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 лет",
    "reference": "2 Царей 11:21",
    "question": "Сколько лет было Иоасу, сыну Охозии, когда он воцарился над Иудеей?",
    "id": "chronology-68",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "300 лет",
    "reference": "Судей 11:26",
    "question": "Сколько лет ко времени судьи Иеффая Израиль уже жил в Обетованной земле?",
    "id": "chronology-69",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1335 дней",
    "reference": "Даниил 12:12",
    "question": "«Счастлив тот, кто ожидает и кто достигнет *** дней» по пророчеству Даниила?",
    "id": "chronology-70",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 49—52 гг. н. э.",
    "reference": "Деяния 15:36—18:22",
    "question": "В каких годах состоялось второе миссионерское путешествие Павла?",
    "id": "chronology-71",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "65 лет",
    "reference": "Бытие 5:21",
    "question": "Сколько лет было Еноху, когда он родил Мафусала? 2",
    "id": "chronology-72",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "В 1ый день 11го месяца 40 года",
    "reference": "Второзаконие 1:1-5",
    "question": "Когда израильтяне подошли к Обетованной земле на равнины Моава?",
    "id": "chronology-73",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "29 лет",
    "reference": "2 Царей 18:1, 2",
    "question": "Сколько лет Езекия, сын Ахаза, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-74",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 лет",
    "reference": "Бытие 29:18",
    "question": "Сколько лет Иаков был готов отслужить за Рахиль?",
    "id": "chronology-75",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "52 дня",
    "reference": "Неемия 6:15",
    "question": "Сколько дней восстанавливали стены Иерусалима?",
    "id": "chronology-76",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "После 443 г. до н. э.",
    "reference": "Малахия 1:1",
    "question": "В каком году Малахия завершает книгу Малахии?",
    "id": "chronology-77",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2970 г. до н.э.",
    "reference": "Бытие 5:28, 29",
    "question": "В каком году родился Ной? 3",
    "id": "chronology-78",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "55 лет",
    "reference": "2 Царей 21:1",
    "question": "Сколько лет Манассия, сын Езекии, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-79",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "17 лет",
    "reference": "1 Царей 14:21",
    "question": "Сколько лет правил Ровоам, сын Соломона, в Иудее?",
    "id": "chronology-80",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "Бытие 26:34",
    "question": "Сколько лет было Исаву, когда он женился на ханнанейках?",
    "id": "chronology-81",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "12 г. н. э.",
    "reference": "Луки 2:41—43",
    "question": "В каком году Иисус будучи подростком остался в Иерусалимском храме на празднике Пасхи?",
    "id": "chronology-82",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 65 г. н. э.",
    "reference": "Иуды 1, 17, 18",
    "question": "В каком году Иуда, брат Иисуса, пишет Письмо Иуды?",
    "id": "chronology-83",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3039 г. до н.э.",
    "reference": "Бытие 5:23, 24",
    "question": "В каком году Енох был «взят Богом»? 4",
    "id": "chronology-84",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "6 лет",
    "reference": "2 Царей 11:1—3",
    "question": "Сколько лет был скрываем в доме Господнем Иоас, сын Охозии, от Гофолии?",
    "id": "chronology-85",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "3 дня",
    "reference": "Неемия 2:11",
    "question": "Когда Неемия прибыл в Иерусалим, сколько дней он не приступал к делам?",
    "id": "chronology-86",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1774 г. до н.э.",
    "reference": "Бытие 29:23-30",
    "question": "В каком году Иаков женится на Лии и Рахили?",
    "id": "chronology-87",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "647 г. до н. э.",
    "reference": "Иеремия 1:1, 2, 9",
    "question": "В каком году Иеремия уполномочен быть пророком?",
    "id": "chronology-88",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 976 г. до н. э.",
    "reference": "1 Царей 14:20",
    "question": "В каком году Надав становится израильским царем после Иеровоама?",
    "id": "chronology-89",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "365 лет",
    "reference": "Бытие 5:23",
    "question": "Сколько лет прожил Енох? 5",
    "id": "chronology-90",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "8 лет",
    "reference": "2 Царей 8:16, 17",
    "question": "Сколько лет Иорам, сын Иософатов, правил в Иерусалиме?",
    "id": "chronology-91",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "8 день от рождения",
    "reference": "Бытие 21:4",
    "question": "В каком возрасте было положено обрезать израильских мальчиков?",
    "id": "chronology-92",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "В 32 году",
    "reference": "Неемия 13:6",
    "question": "В каком году правления Артаксеркса Неемия ходил к царю, но потом вновь вернулся в Иерусалим?",
    "id": "chronology-93",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "Судей 3:11",
    "question": "Сколько лет «земля покоилась» при судье Гофонииле, сыне Кеназа?",
    "id": "chronology-94",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 56 г. н. э.",
    "reference": "Римлянам 16:1",
    "question": "В каком году Павел пишет письмо Римлянам из Коринфа?",
    "id": "chronology-95",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1513 г. до н.э.",
    "reference": "Исход 12:11",
    "question": "В каком году была отпразднована первая Пасха? 6",
    "id": "chronology-96",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 49 г. н. э.",
    "reference": "Деяния 15:28, 29",
    "question": "В каком году было принято решение, что верующим из других народов не нужно обрезываться?",
    "id": "chronology-97",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 месяца",
    "reference": "Ездра 10:16, 17",
    "question": "Сколько времени вернувшиеся из вавилонского плена исследовали тех, кто взял иноплеменных жен под руководством Ездры?",
    "id": "chronology-98",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "23 года",
    "reference": "Судей 10:1, 2",
    "question": "Сколько лет судьей Израиля был Фола, сын Фуи из колена Иссахарова?",
    "id": "chronology-99",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 дней",
    "reference": "Левит 13:4, 5",
    "question": "На сколько дней священник заключал больного на карантин при подозрении на проказу?",
    "id": "chronology-100",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "182 года",
    "reference": "Бытие 5:28",
    "question": "Сколько лет было Ламеху, когда он родил Ноя?",
    "id": "chronology-101",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "1 Царей 2:10, 11",
    "question": "Сколько всего лет царствовал Давид? 7",
    "id": "chronology-102",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "6 дней",
    "reference": "Исход 16:4, 5, 26",
    "question": "Сколько дней в неделю можно было собирать манну?",
    "id": "chronology-103",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Нисан / март-апрель",
    "reference": "Неемия 2:1",
    "question": "В каком месяце вышло распоряжение о восстановлении Иерусалима?",
    "id": "chronology-104",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "25 лет",
    "reference": "1 Царей 22:41, 42",
    "question": "Сколько лет Иосафат, сын Асы, правил в Иерусалиме?",
    "id": "chronology-105",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "18 лет",
    "reference": "Судей 10:7,8",
    "question": "Сколько лет филистимляне и аммонитяне притесняли жителей Галаада во дни Иеффая?",
    "id": "chronology-106",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2490 г. до н.э.",
    "reference": "Бытие 6:3",
    "question": "В каком году был высказан приговор Бога в отношении человечества перед потопом?",
    "id": "chronology-107",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1914 год",
    "reference": "Луки 21:24",
    "question": "Когда закончились времена, назначенные народам? 8",
    "id": "chronology-108",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "3 дня",
    "reference": "Иисус Навин 2:16, 22",
    "question": "Сколько дней по совету Раав двое разведчиков скрывались на горе от преследующих?",
    "id": "chronology-109",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 460 г. до н. э.",
    "reference": "2 Летопись 36:22",
    "question": "В каком году Ездра завершает 1 и 2 Летопись?",
    "id": "chronology-110",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "455 г. до н. э.",
    "reference": "Неемия 1:1; 2:1, 11; 6:15",
    "question": "В каком году Неемия отстраивает стены Иерусалима?",
    "id": "chronology-111",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "До 62 г. н. э.",
    "reference": "Иакова 1:1",
    "question": "В каком году Иаков, брат Иисуса, пишет Письмо Иакова из Иерусалима?",
    "id": "chronology-112",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2 года",
    "reference": "1 Царей 22:51",
    "question": "Сколько лет Охозия, сын Ахава, царствовал над Израилем?",
    "id": "chronology-113",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2370 г. до н.э.",
    "reference": "Бытие 7:6,11",
    "question": "В каком году начался потоп? 9",
    "id": "chronology-114",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 60—61 гг. н. э.",
    "reference": "Филимону 1",
    "question": "В каких годах Павел пишет из Рима письмо Филимону?",
    "id": "chronology-115",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "80 дней",
    "reference": "Левит 12:5, 6",
    "question": "Сколько длились дни очищения женщины, если она рожала девочку?",
    "id": "chronology-116",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "30лет",
    "reference": "2 Самуила 5:4",
    "question": "Сколько лет было Давиду, когда он воцарился?",
    "id": "chronology-117",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "628 г. до н. э.",
    "reference": "2 Царей 23:31",
    "question": "В каком году Иоахаз, преемник Иосии, воцарился над Иудой?",
    "id": "chronology-118",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "4 месяца",
    "reference": "Ездра 7:8, 9",
    "question": "Сколько времени Ездра и израильтяне находятся в пути из Вавилона до Иерусалима?",
    "id": "chronology-119",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "150 дней",
    "reference": "Бытие 7:24",
    "question": "Сколько дней вода стояла над землей во дни Ноя? 0",
    "id": "chronology-120",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 дней",
    "reference": "Бытие 7:10",
    "question": "Сколько Ной и его семья ждали в ковчеге, когда начнется потоп?",
    "id": "chronology-121",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "В первый год",
    "reference": "Ездра 1:1",
    "question": "В каком году своего правления Персидский царь Кир дает разрешение о возвращении Иудеев?",
    "id": "chronology-122",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Сиван / третий",
    "reference": "Эсфирь 8:9",
    "question": "В каком месяце были написаны письма Мардохеем для защиты Иудеев от истребления?",
    "id": "chronology-123",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "10ый день",
    "reference": "Исход 12:2, 3",
    "question": "В какой день первого месяца израильтяне должны были подготовить агнца?",
    "id": "chronology-124",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "913 г. до н. э.",
    "reference": "2 Царей 8:16, 17",
    "question": "В каком году Иорам (иудейский) «воцарился» при жизни Иосафата?",
    "id": "chronology-125",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "6 лет",
    "reference": "Судей 12:7",
    "question": "Сколько лет Иеффай был судьей Израиля? 1",
    "id": "chronology-126",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "14, 15 Адара",
    "reference": "Эсфирь 9:21, 22",
    "question": "Когда Иудеи отмечали праздник Пурим?",
    "id": "chronology-127",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "Второзаконие 29:5",
    "question": "Сколько лет Израильтяне ходили по пустыне под руководством Моисея?",
    "id": "chronology-128",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "18 лет",
    "reference": "Судей 3:14",
    "question": "Сколько лет израильтяне служили Еглону, царю Моавитскому?",
    "id": "chronology-129",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 дней",
    "reference": "Левит 8:33-36",
    "question": "Сколько дней длилось посвящение Аарона и его сынов в священники?",
    "id": "chronology-130",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "В 7ом месяце",
    "reference": "Бытие 8:4",
    "question": "В каком месяце ковчег остановился на горах Араратских?",
    "id": "chronology-131",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 61—64 гг. н. э.",
    "reference": "Титу 1:5",
    "question": "В каких годах Павел пишет Титу из Македонии? 2",
    "id": "chronology-132",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 месяцев",
    "reference": "1 Самуила 6:1",
    "question": "Сколько времени ковчег Откровения пробыл у филистимлян во дни Самуила?",
    "id": "chronology-133",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней",
    "reference": "Левит 12:2-4",
    "question": "Сколько длились дни очищения женщины, если она рожала мальчика?",
    "id": "chronology-134",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2 г. до н. э.",
    "reference": "Луки 1:57",
    "question": "В каком году родился Иоанн Креститель?",
    "id": "chronology-135",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "33 г. н. э. 6 сивана",
    "reference": "Деяния 2:1—17, 38",
    "question": "Назовите дату излития духа на 120 учеников Иисуса.",
    "id": "chronology-136",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней",
    "reference": "Бытие 8:6",
    "question": "Через сколько дней после остановки ковчега Ной выпустил ворона?",
    "id": "chronology-137",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 475 г. до н. э.",
    "reference": "Эсфирь 3:7; 9:32",
    "question": "В каком году Мардохей завершает книгу Эсфирь? 3",
    "id": "chronology-138",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 460 г. до н. э.",
    "reference": "Ездра 1:1",
    "question": "В каком году Ездра завершает книгу Ездры?",
    "id": "chronology-139",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Авив / нисан",
    "reference": "Исход 13:4",
    "question": "В каком месяце израильтяне вышли из Египта?",
    "id": "chronology-140",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней и ночей",
    "reference": "Матфея 4:1, 2",
    "question": "Сколько времени Иисус постился в Иудейской пустыне?",
    "id": "chronology-141",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "35 лет",
    "reference": "1 Царей 22:41, 42",
    "question": "Сколько лет было Иосафату, сыну Асы, когда он воцарился в Иерусалиме?",
    "id": "chronology-142",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 62—64 гг. н. э.",
    "reference": "1 Петра 1:1; 5:13",
    "question": "В каких годах Петр пишет 1 Петра из Вавилона?",
    "id": "chronology-143",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "15 нисана 1473 г. до н.э.",
    "reference": "Иисус Навин 5:10-12",
    "question": "Когда перестала падать манна? 4",
    "id": "chronology-144",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "628 г. до н. э.",
    "reference": "2 Царей 23:36",
    "question": "В каком году Иоаким становится иудейским царем после Иоахаза?",
    "id": "chronology-145",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2 дня / 13 и 14 Адара",
    "reference": "Эсфирь 9:18",
    "question": "Сколько дней иудеям было разрешено истреблять своих врагов в Сузах во дни царя Ахашвероша?",
    "id": "chronology-146",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "6 лет",
    "reference": "1 Царей 16:22, 23",
    "question": "Сколько лет Амврий царствовал в Фирце?",
    "id": "chronology-147",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 61 г. н. э.",
    "reference": "Евреям 13:24; 10:34",
    "question": "В каком году Павел пишет письмо Евреям из Рима?",
    "id": "chronology-148",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "На пятидесятый",
    "reference": "Левит 23:16",
    "question": "На какой день после принесения первых снопов приносили новое хлебное приношение?",
    "id": "chronology-149",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1 лунный год и 10 дней / 370 дней",
    "reference": "Бытие 8:13, 14",
    "question": "Сколько времени провел Ной и его семья в ковчеге? 5",
    "id": "chronology-150",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "100 лет",
    "reference": "Бытие 21:5",
    "question": "Сколько лет было Аврааму, когда он родил Исаака?",
    "id": "chronology-151",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 906 г. до н. э.",
    "reference": "2 Царей 8:25, 26",
    "question": "В каком году Охозия становится иудейским царем после Иорама?",
    "id": "chronology-152",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "13 Адара",
    "reference": "Эсфирь 9:1",
    "question": "Какого числа и месяца Иудеи встали на свою защиту во дни Мардохея и Эсфири?",
    "id": "chronology-153",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 65 г. н. э.",
    "reference": "2 Тимофею 4:16—18",
    "question": "В каком году Павел пишет 2 Тимофею из Рима?",
    "id": "chronology-154",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "11 лет правления судей",
    "reference": "Руфь",
    "question": "Сколько лет охватывает книга Руфь?",
    "id": "chronology-155",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1 месяц 1512 года",
    "reference": "Левит",
    "question": "Какой период времени охватывает книга Левит? 6",
    "id": "chronology-156",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 919 г. до н. э.",
    "reference": "1 Царей 22:51, 52",
    "question": "В каком году Охозия становится единоличным израильским царем после Ахава?",
    "id": "chronology-157",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Адар / двенадцатый",
    "reference": "Эсфирь 3:13",
    "question": "В каком месяце по указанию Амана должны были истребить иудеев?",
    "id": "chronology-158",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "10 день 7 месяца",
    "reference": "Левит 16:29, 30",
    "question": "Когда отмечался день искупления или очищения от грехов?",
    "id": "chronology-159",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 460 г. до н. э.",
    "reference": "Псалмы",
    "question": "Когда окончательно была составлена книга Псалмов?",
    "id": "chronology-160",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40-й день",
    "reference": "Деяния 1:3—9",
    "question": "На какой день после своего воскресения Иисус вознесся на небо?",
    "id": "chronology-161",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1918 г. до н.э.",
    "reference": "Бытие 21:2, 5",
    "question": "В каком году родился Исаак? 7",
    "id": "chronology-162",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 лет",
    "reference": "1 Царей 6:38",
    "question": "Сколько лет Соломон строил храм в Иерусалиме?",
    "id": "chronology-163",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "3 месяца",
    "reference": "2 Самуила 6:11",
    "question": "Сколько времени ковчег Иеговы был в доме гефянина Овед-Эдома после неудачной попытки Давида отвезти его в Иерусалим?",
    "id": "chronology-164",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "16 нисана",
    "reference": "Левит 23:10, 15",
    "question": "Какого числа и в каком месяце был праздник принесения первых снопов или первых плодов?",
    "id": "chronology-165",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2369 г. до н.э.",
    "reference": "Бытие 8:13, 9:16",
    "question": "В каком году Бог заключил соглашение с Ноем, подтверждением чего была радуга?",
    "id": "chronology-166",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "661 г. до н. э.",
    "reference": "2 Царей 21:19",
    "question": "В каком году Амон становится иудейским царем после Манассии?",
    "id": "chronology-167",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 64 г. н. э.",
    "reference": "2 Петра 1:1",
    "question": "В каком году Петр пишет 2 Петра из Вавилона? 8",
    "id": "chronology-168",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "22 года",
    "reference": "1 Царей 16:29",
    "question": "Сколько лет Ахав, сын Амврия, царствовал над Израилем в Самарии?",
    "id": "chronology-169",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "518 г. до н. э.",
    "reference": "Захария 1:1",
    "question": "В каком году Захария завершает книгу Захарии?",
    "id": "chronology-170",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "14 нисана / первого месяца",
    "reference": "Левит 23:5",
    "question": "Какого числа и в каком месяце израильтяне отмечали Пасху?",
    "id": "chronology-171",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "33 года",
    "reference": "2 Самуила 5:5",
    "question": "Сколько лет Давид царствовал в Иерусалиме?",
    "id": "chronology-172",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 47—48 гг. н. э.",
    "reference": "Деяния 13:1—14:28",
    "question": "В каком году Павел начинает свое первое миссионерское путешествие?",
    "id": "chronology-173",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "127 лет",
    "reference": "Бытие 23:1",
    "question": "Сколько лет прожила Сарра? 9",
    "id": "chronology-174",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 98 г.н.э.",
    "reference": "Иоанна 21:24",
    "question": "В каком году было написано последнее из четырех Евангелий?",
    "id": "chronology-175",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 дней и ночей",
    "reference": "Иов 2:13",
    "question": "Сколько времени три ненастоящих друга Иова сидели молча возле него?",
    "id": "chronology-176",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 940 г. до н. э.",
    "reference": "1 Царей 16:29",
    "question": "В каком году Ахав становится израильским царем после Амврия?",
    "id": "chronology-177",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 лет и 6 месяцев",
    "reference": "2 Самуила 2:11",
    "question": "Сколько времени Давид правил в Хевроне над домом Иудиным?",
    "id": "chronology-178",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "15 нисана / первого месяца",
    "reference": "Левит 23:6",
    "question": "Какого числа и в каком месяце был праздник опресноков или пресных лепешек?",
    "id": "chronology-179",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1858 г. до н.э.",
    "reference": "Бытие 25:26",
    "question": "В каком году родились близнецы Исав и Иаков? 0",
    "id": "chronology-180",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 859 г. до н. э.",
    "reference": "2 Царей 13:10",
    "question": "В каком году Иоас становится единоличным израильским царем после Иоахаза?",
    "id": "chronology-181",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2 месяца / жатва ячменя и пшеницы",
    "reference": "Руфь 2:23",
    "question": "Сколько времени Руфь находилась со служанками Вооза на полях?",
    "id": "chronology-182",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Новолуние",
    "reference": "1 Самуила 20:24",
    "question": "В какой период (фазу Луны) Саул заметил отсутствие Давида за столом?",
    "id": "chronology-183",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 51 г. н. э.",
    "reference": "2 Фессалоникийцам 1:1",
    "question": "В каком году Павел пишет 2 Фессалоникийцам из Коринфа?",
    "id": "chronology-184",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "31 год",
    "reference": "2 Царей 22:1",
    "question": "Сколько лет Иосия, сын Аммона, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-185",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1667 г. до н.э. - 1553 г. до н. э.",
    "reference": "Иов 1:8",
    "question": "В какой период времени жил Иов? 1",
    "id": "chronology-186",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "98 лет",
    "reference": "1 Самуила 4:15-18",
    "question": "Сколько лет прожил первосвященник Илий?",
    "id": "chronology-187",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "858 г. до н. э.",
    "reference": "2 Царей14:1, 2",
    "question": "В каком году Амасия становится иудейским царем после Иоаса?",
    "id": "chronology-188",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3ий месяц",
    "reference": "Исход 19:1, 2",
    "question": "В каком месяце после выхода из Египта израильтяне пришли к горе Синай?",
    "id": "chronology-189",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "618 г. до н. э.",
    "reference": "2 Царей 24:6, 8",
    "question": "В каком году Иехония становится иудейским царем после Иоакима?",
    "id": "chronology-190",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 1473 г. до н. э.",
    "reference": "Иов 42:16, 17",
    "question": "В каком году Моисей завершает книгу Иов?",
    "id": "chronology-191",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "950 лет",
    "reference": "Бытие 9:29",
    "question": "Сколько лет прожил Ной? 2",
    "id": "chronology-192",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 844 г. до н. э.",
    "reference": "2 Царей 14:23",
    "question": "В каком году Иеровоам II становится израильским царем после Иоаса?",
    "id": "chronology-193",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 778 г. до н. э.",
    "reference": "Исаия 1:1; 6:1",
    "question": "В каком году Исаия начинает пророчествовать?",
    "id": "chronology-194",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "607 г. до н. э.",
    "reference": "2 Царей 25:8—10",
    "question": "В каком году разрушены вавилонянами храм и город Иерусалим?",
    "id": "chronology-195",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 дня",
    "reference": "Исход 19:11, 15, 16",
    "question": "Сколько дней дал Иегова, чтобы израильтяне подготовились ко встречи с ним у горы Синай?",
    "id": "chronology-196",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "1 Самуила 4:18",
    "question": "Сколько лет первосвященник Илий был судьей Израиля?",
    "id": "chronology-197",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "100 лет",
    "reference": "Бытие 11:10",
    "question": "Сколько лет было Симу, когда родился Арфаксад? 3",
    "id": "chronology-198",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2 года",
    "reference": "Бытие 11:10",
    "question": "Сколько времени прошло после потопа, когда родился первый ребенок?",
    "id": "chronology-199",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "6 дней",
    "reference": "Исход 24:15, 16",
    "question": "Сколько дней Моисей находился на горе Синай в ожидании, когда Иегова заговорит с ним?",
    "id": "chronology-200",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 дней",
    "reference": "1 Самуила 17:16",
    "question": "Сколько дней Голиаф выставлял себя пред израильтянами?",
    "id": "chronology-201",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "829 г. до н. э.",
    "reference": "2 Царей 15:1, 2",
    "question": "В каком году Озия (Азария) становится иудейским царем после Амасии?",
    "id": "chronology-202",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7ой месяц 607 г. до н. э.",
    "reference": "2 Царей 25:25, 26",
    "question": "В каком году и месяце евреи покидают иудейскую землю захваченную вавилонянами?",
    "id": "chronology-203",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "После 732 г. до н. э.",
    "reference": "Исаия 1:1",
    "question": "В каком году Исаия завершает книгу Исаии? 4",
    "id": "chronology-204",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "205 лет",
    "reference": "Бытие 11:32",
    "question": "Сколько лет прожил Фарра отец Аврама?",
    "id": "chronology-205",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 791 г. до н. э.",
    "reference": "2 Царей 15:13, 17",
    "question": "В каком году Шаллум становится израильским царем после Захарии?",
    "id": "chronology-206",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "70 лет",
    "reference": "Иеремия 29:10",
    "question": "Сколько лет израильтяне находились в Вавилонском плену?",
    "id": "chronology-207",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "580 г. до н. э.",
    "reference": "2 Царей 25:27",
    "question": "В каком году Иеремия завершает книги 1 и 2 Царей?",
    "id": "chronology-208",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1117 г. до н.э.",
    "reference": "1 Самуила 10:1, 24",
    "question": "В каком году Самуил помазал Саула в цари над Израилем?",
    "id": "chronology-209",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней",
    "reference": "Исход 24:18",
    "question": "Сколько времени Моисей провел на горе Синай? 5",
    "id": "chronology-210",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "20 лет",
    "reference": "2 Летопись 8:1",
    "question": "Сколько всего лет Соломон строил дом Иеговы и свой?",
    "id": "chronology-211",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 791 г. до н. э.",
    "reference": "2 Царей 15:14, 17",
    "question": "В каком году Менаим становится израильским царем после Шаллума?",
    "id": "chronology-212",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1943 г. до н.э.",
    "reference": "Бытие 12:4, 7",
    "question": "В каком году Аврам перешел реку Евфрат на пути в Ханаан?",
    "id": "chronology-213",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1го авива / нисана 1512 г.до н.э.",
    "reference": "Исход 40:2, 17",
    "question": "В каком году, месяце и дне было завершено строительство священного шатра?",
    "id": "chronology-214",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "После 1070 г. до н. э.",
    "reference": "2 Самуила 6:15",
    "question": "В каком году ковчег Откровения был перенесен в Иерусалим?",
    "id": "chronology-215",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "607 г. до н. э.",
    "reference": "Плач Иеремии, вступление в Септуагинте",
    "question": "В каком году Иеремия пишет книгу Плач Иеремии? 6",
    "id": "chronology-216",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1 день 7го месяца / тишри",
    "reference": "Левит 23:24",
    "question": "Какого числа и в каком месяце был праздник трубного звука?",
    "id": "chronology-217",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "75 лет",
    "reference": "Бытие 12:4",
    "question": "Сколько лет было Авраму, когда он вышел из Харрана?",
    "id": "chronology-218",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 дней",
    "reference": "1 Самуила 10:8, 13:8",
    "question": "Сколько дней Саул должен был ждать Самуила в Галгале?",
    "id": "chronology-219",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "625 г. до н. э.",
    "reference": "Иеремия 25:1",
    "question": "В каком году Навуходоносор (II) становится вавилонским царем?",
    "id": "chronology-220",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 780 г. до н. э.",
    "reference": "2 Царей 15:23",
    "question": "В каком году Факия становится израильским царем после Менаима?",
    "id": "chronology-221",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "16 нисана 33 г. н. э.",
    "reference": "Матфея 28:1—10",
    "question": "Назовите дату воскресения Иисуса. 7",
    "id": "chronology-222",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1107 г. до н.э.",
    "reference": "1 Самуила 16:10",
    "question": "В каком году в Вифлееме родился Давид?",
    "id": "chronology-223",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "86 лет",
    "reference": "Бытие 16:15,16",
    "question": "Сколько лет было Аврааму, когда родился Измаил?",
    "id": "chronology-224",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "537 г. до н. э.",
    "reference": "2 Летопись 36:22, 23",
    "question": "В каком году вышел указ Кира Персидского, позволяющий иудеям вернуться в Иерусалим?",
    "id": "chronology-225",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "5ый день 4ый месяц",
    "reference": "Иезекииль 1:1—28",
    "question": "В каком месяце и кого дня Иезекииль видит видение небесной колесницы Иеговы?",
    "id": "chronology-226",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 778 г. до н. э.",
    "reference": "2 Царей15:27",
    "question": "В каком году Факей становится израильским царем после Факии?",
    "id": "chronology-227",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "15 день 7го месяца / тишри",
    "reference": "Левит 23:34",
    "question": "Когда начинался праздник шалашей? 8",
    "id": "chronology-228",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1919 г. до н.э.",
    "reference": "Бытие 17:1, 10, 24",
    "question": "В каком году Бог заключил с Авраамом соглашение об обрезании?",
    "id": "chronology-229",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Седьмой месяц",
    "reference": "Ездра 3:1, 6",
    "question": "В каком месяце сыны Израилевы начали возносить всесожжения Иегове после возвращения из Вавилонского плена?",
    "id": "chronology-230",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "617 г. до н. э.",
    "reference": "Даниил 1:1—4",
    "question": "В каком году Навуходоносор уводит первых иудейских пленных в Вавилон?",
    "id": "chronology-231",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 758 г. до н. э.",
    "reference": "2 Царей 15:30",
    "question": "В каком году Осия «воцарился» над Израилем?",
    "id": "chronology-232",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "9 месяцев и 20 дней",
    "reference": "2 Самуила 24:8",
    "question": "Сколько времени Иоав по повелению Давида исчислял израильтян?",
    "id": "chronology-233",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 дней",
    "reference": "Левит 23:34",
    "question": "Сколько дней длился праздник шалашей? 9",
    "id": "chronology-234",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "6 лет",
    "reference": "Левит 25:3, 4",
    "question": "С какой периодичностью израильтяне должны были засеивать поля, обрезать виноград и собирать выращенное ими?",
    "id": "chronology-235",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "17 лет",
    "reference": "2 Царей 13:1",
    "question": "Сколько лет Иоахаз, сын Ииуя, царствовал над Израилем в Самарии?",
    "id": "chronology-236",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "14 лет",
    "reference": "Иезекииль 40:1",
    "question": "Через сколько лет после уничтожения Иерусалима Иезекииль видит видение духовного храма?",
    "id": "chronology-237",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "609 г. до н. э.",
    "reference": "2 Царей 25:1, 2",
    "question": "В каком году Навуходоносор в третий раз идет против Иуды и начинает осаду Иерусалима?",
    "id": "chronology-238",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "99 лет",
    "reference": "Бытие 17:24",
    "question": "Сколько лет было Аврааму при обрезании?",
    "id": "chronology-239",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1 год 4 месяца",
    "reference": "1 Самуила 27:7",
    "question": "Сколько времени Давид прожил в стране Филистимской? 0",
    "id": "chronology-240",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "После 1070 г. до н. э.",
    "reference": "2 Самуила 7:12-16",
    "question": "В каком году с Давидом было заключено соглашение о царстве?",
    "id": "chronology-241",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "10 дней",
    "reference": "Даниил 1:12—15",
    "question": "Сколько дней длился опыт над Даниилом, Аннией, Мисаилом и Азарией о замене по их просьбе царской пищи на воду и овощи?",
    "id": "chronology-242",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "13 лет",
    "reference": "Бытие 17:25",
    "question": "Сколько лет было Измаилу при обрезании?",
    "id": "chronology-243",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "50ый год",
    "reference": "Левит 25:10-13",
    "question": "Какой по счету год у израильтян назывался юбилейным?",
    "id": "chronology-244",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "522 г. до н. э.",
    "reference": "Ездра 4:23, 24",
    "question": "В каком году на строительство храма накладывается запрет?",
    "id": "chronology-245",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 591 г. до н. э.",
    "reference": "Иезекииль 40:1; 29:17",
    "question": "В каком году Иезекииль завершает книгу Иезекииля? 1",
    "id": "chronology-246",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "777 г. до н. э.",
    "reference": "2 Царей 15:32, 33",
    "question": "В каком году Иоафам становится иудейским царем после Озии (Азарии)?",
    "id": "chronology-247",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "11 нисана",
    "reference": "Марка 12:41—44",
    "question": "Какого нисана Иисус похвалил вдову за принесенную ею лепту в сокровищницу храма?",
    "id": "chronology-248",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "16 лет",
    "reference": "2 Царей13:10",
    "question": "Сколько лет Иоас, сын Иоахаза, царствовал над Израилем в Самарии?",
    "id": "chronology-249",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1512г. до н.э.",
    "reference": "Левит 27:34; Числа 1:1",
    "question": "В каком году было завершено написание книг Исход и Левит?",
    "id": "chronology-250",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "480 году",
    "reference": "1 Царей 6:1",
    "question": "В каком году по выходу израильтян из земли Египетской Соломон начал строительство храма?",
    "id": "chronology-251",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1919 г. до н.э.",
    "reference": "Бытие 19:24",
    "question": "В каком году были уничтожены города Содом и Гоморра? 2",
    "id": "chronology-252",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "84 года",
    "reference": "Бытие 29:23-30",
    "question": "Сколько лет было Иакову, когда он женился на Лии и Рахили?",
    "id": "chronology-253",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1512 г. до н.э. 1 день 2го месяца",
    "reference": "Числа 1:1-3",
    "question": "Когда было сделано первое исчисление израильтян Моисеем?",
    "id": "chronology-254",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 761 г. до н. э.",
    "reference": "2 Царей 16:1, 2",
    "question": "В каком году Ахаз становится иудейским царем после Иоафама?",
    "id": "chronology-255",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "6ой месяц",
    "reference": "Луки 1:24-27",
    "question": "В какой месяц беременности Елисаветы ангел сообщил Марии, что она будет матерью Иисуса?",
    "id": "chronology-256",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "539 г. до н. э.",
    "reference": "Даниил 5:30, 31",
    "question": "В каком году Мидо-Персия становится четвертой мировой державой?",
    "id": "chronology-257",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 1040 г. до н. э.",
    "reference": "2 Самуила 24:18",
    "question": "В каком году Гад и Нафан завершают вторую книгу Самуила? 3",
    "id": "chronology-258",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "В 14 день второго месяца",
    "reference": "Числа 9:10-12",
    "question": "Когда израильтяне, которые были нечисты или в дороге должны были отмечать Пасху?",
    "id": "chronology-259",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1767 г. до н.э.",
    "reference": "Бытие 30:23, 24",
    "question": "В каком году родился Иосиф?",
    "id": "chronology-260",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "29 лет",
    "reference": "2 Царей 14:1, 2",
    "question": "Сколько лет Амасия, сын Иоаса, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-261",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "515 г. до н. э.",
    "reference": "Ездра 6:14, 15",
    "question": "В каком году Зоровавель завершает строительство второго храма?",
    "id": "chronology-262",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "30 дней",
    "reference": "Даниил 6:7",
    "question": "В течении какого периода по указу царя Дария никто «не должен был просить другого бога или человека»?",
    "id": "chronology-263",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1037 г. до н. э.",
    "reference": "1 Царей 1:39; 2:12",
    "question": "В каком году Соломон становится царем Израиля после Давида? 4",
    "id": "chronology-264",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 1 октября 2 г. до н. э.",
    "reference": "Луки 2:1—7",
    "question": "Назовите приблизительную дату рождения Иисуса?",
    "id": "chronology-265",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "20ый день 2го месяца 2го года",
    "reference": "Числа 10:11, 12",
    "question": "Когда облако над священным шатром впервые указало израильтянам, что пора двинуться в путь?",
    "id": "chronology-266",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "406 г. до н. э.",
    "reference": "Даниил 9:25",
    "question": "В каком году восстановление Иерусалима, по всей вероятности, завершено?",
    "id": "chronology-267",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Через 3 года",
    "reference": "1 Царей 2:39-46",
    "question": "Через сколько лет Шимей, злословящий Давида, нарушил обещание, данное Соломону не покидать Иерусалим?",
    "id": "chronology-268",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "740 г. до н. э.",
    "reference": "2Царей 17:6, 13, 18",
    "question": "В каком году Ассирия покоряет Израиль и захватывает Самарию?",
    "id": "chronology-269",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "20 лет",
    "reference": "Бытие 31:38",
    "question": "Сколько лет Иаков прослужил у Лавана? 5",
    "id": "chronology-270",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "62 седьмины",
    "reference": "Даниил 9:25",
    "question": "Какой пророческий период должен прийти непосредственно перед появлением Мессии?",
    "id": "chronology-271",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "16 дней",
    "reference": "2 Летопись 29:17",
    "question": "Сколько дней священники освящали дом Иеговы во дни царя Езекии?",
    "id": "chronology-272",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "16 лет",
    "reference": "2 Царей 14:21",
    "question": "Сколько лет было Азарии (Озии), сыну Амасии, когда его воцарили в Иерусалиме?",
    "id": "chronology-273",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "4ый год второй месяц / зиф",
    "reference": "1 Царей 6:37",
    "question": "В какой год и месяц своего правления Соломон положил основание храму?",
    "id": "chronology-274",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1761 г. до н.э.",
    "reference": "Бытие 31:18, 41",
    "question": "В каком году Иаков возвращается в Ханаан из Харрана?",
    "id": "chronology-275",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "120 лет",
    "reference": "Второзаконие 31:2, 34:7",
    "question": "Сколько лет прожил Моисей? 6",
    "id": "chronology-276",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "180 лет",
    "reference": "Бытие 35:28, 29",
    "question": "Сколько лет прожил Исаак?",
    "id": "chronology-277",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "41 год",
    "reference": "2 Царей 14:23",
    "question": "Сколько лет Иеровоам I, сын Иоаса, царствовал над Израилем в Самарии?",
    "id": "chronology-278",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "8-й день",
    "reference": "Луки 2:21",
    "question": "На какой день от рождения Иисус был обрезан?",
    "id": "chronology-279",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 55 г. н. э.",
    "reference": "1 Коринфянам 15:32",
    "question": "В каком году Павел пишет 1 Коринфянам из Эфеса?",
    "id": "chronology-280",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней",
    "reference": "Числа 13:3, 25",
    "question": "Сколько дней 12 разведчиков осматривали Ханаанскую землю?",
    "id": "chronology-281",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 536 г. до н. э.",
    "reference": "Даниил 10:1",
    "question": "В каком году Даниил завершает книгу Даниила? 7",
    "id": "chronology-282",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 года",
    "reference": "2 Царей 24:1",
    "question": "Сколько лет Иоаким, сын Иосии, был подвластным Навуходоносору?",
    "id": "chronology-283",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1473 г.до н.э.",
    "reference": "Числа 35:1; 36:13",
    "question": "В каком году Моисей заканчивает книгу Числа?",
    "id": "chronology-284",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1027 г. до н. э.",
    "reference": "1 Царей 6:38",
    "question": "В каком году строительство храма в Иерусалиме при Соломоне завершено?",
    "id": "chronology-285",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1738 г. до н.э.",
    "reference": "Бытие 35:28, 29",
    "question": "В каком году умер Исаак?",
    "id": "chronology-286",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "52 года",
    "reference": "2 Царей 15:1, 2",
    "question": "Сколько лет Озия (Азария), сын Амасии, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-287",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "29 г. н. э.",
    "reference": "Луки 3:1, 2, 23",
    "question": "В каком году Иисус начинает свое служение? 8",
    "id": "chronology-288",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Осенью 29 г. н.э.",
    "reference": "Луки 3:21—23",
    "question": "Когда произошло крещение и помазание Иисуса?",
    "id": "chronology-289",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 месяца",
    "reference": "2 Царей 24:6, 8",
    "question": "Сколько времени Иехония, сын Иоакима, царствовал над Иудой?",
    "id": "chronology-290",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1473 г.до н.э.",
    "reference": "Второзаконие 1:1, 3",
    "question": "В каком году Моисей записал книгу Второзаконие?",
    "id": "chronology-291",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "17 лет",
    "reference": "Бытие 37:2, 28",
    "question": "Сколько лет было Иосифу, когда братья продали его в рабство?",
    "id": "chronology-292",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "11ый год восьмой месяц / бул",
    "reference": "1 Царей 6:38",
    "question": "В какой год и месяц своего правления Соломон окончил строительство храма?",
    "id": "chronology-293",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 792 г. до н. э.",
    "reference": "2 Царей 15:8",
    "question": "В каком году Захария правит над Израилем? 9",
    "id": "chronology-294",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2 года",
    "reference": "Бытие 41:1",
    "question": "Сколько лет прошло между снами виночерпия и хлебодара и сном фараона?",
    "id": "chronology-295",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2 месяца 1473 г. до н.э.",
    "reference": "Второзаконие 1:1, 3",
    "question": "Какой период времени охватывает книга Второзаконие?",
    "id": "chronology-296",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 536 / 537 г. до н. э.",
    "reference": "Даниил 10:1",
    "question": "В каком году Даниил получил пророческое сообщение, значение которого распространялось на многие годы вперед?",
    "id": "chronology-297",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "745 г. до н. э.",
    "reference": "2 Царей 18:1, 2",
    "question": "В каком году Езекия становится иудейским царем после Ахаза?",
    "id": "chronology-298",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "13 лет",
    "reference": "1 Царей 7:1",
    "question": "Сколько лет Соломон строил свой дом?",
    "id": "chronology-299",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "70 г. н. э.",
    "reference": "Луки 19:42—44",
    "question": "В каком году Иерусалим и его храм разрушены римлянами? 0",
    "id": "chronology-300",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1473 г. до н.э.",
    "reference": "Второзаконие 29:1, 5",
    "question": "В каком году было заключено соглашение с Израилем в земле Моав, подобный соглашению на Хориве?",
    "id": "chronology-301",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "14 дней",
    "reference": "1 Царей 8:65",
    "question": "Сколько времени длился праздник освящения храма Соломона?",
    "id": "chronology-302",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "13 нисана",
    "reference": "Луки 22:7—13",
    "question": "Какого нисана начались приготовления к последней Пасхе Иисуса?",
    "id": "chronology-303",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 лет",
    "reference": "Бытие 41:30",
    "question": "Сколько лет длился голод в Египте во дни Иосифа?",
    "id": "chronology-304",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "10 лет",
    "reference": "2 Царей 15:14, 17",
    "question": "Сколько лет Менаим, сын Гадия из Фирцы, убив Шаллуима, царствовал над Израилем в Самарии?",
    "id": "chronology-305",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "После 745 г. до н. э.",
    "reference": "Осия 1:1",
    "question": "В каком году Осия завершает книгу Осии? 1",
    "id": "chronology-306",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "14 нисана 33 г. н. э.",
    "reference": "Луки 22:20; 23:33",
    "question": "Назовите дату, когда Иисус становится жертвой, служащей основанием для нового соглашения?",
    "id": "chronology-307",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "16 лет",
    "reference": "2 Царей 15:32, 33",
    "question": "Сколько лет Иоафам, сын Озии (Азарии), царствовал над Иудой в Иерусалиме?",
    "id": "chronology-308",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "30 лет",
    "reference": "Бытие 41:46",
    "question": "Сколько лет было Иосифу, когда он предстал перед фараоном?",
    "id": "chronology-309",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "993 г. до н. э.",
    "reference": "1 Царей 14:25, 26",
    "question": "В каком году Сусаким вторгается в Иуду и забирает сокровища из храма?",
    "id": "chronology-310",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "37 лет",
    "reference": "2 Царей 25:27",
    "question": "Сколько лет Иехония, сын Иоакима, царь Иудейский провел в темничном доме Вавилонского царя?",
    "id": "chronology-311",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 820 г. до н. э.",
    "reference": "Иоиль 1:1",
    "question": "Предположительное время написания книги Иоиля. 2",
    "id": "chronology-312",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "30 дней",
    "reference": "Второзаконие 34:8",
    "question": "Сколько дней на равнинах Моава израильтяне оплакивали Моисея?",
    "id": "chronology-313",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "1 Царей 11:42",
    "question": "Сколько лет правил Соломон?",
    "id": "chronology-314",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 55 г. н. э.",
    "reference": "2 Коринфянам 2:12, 13",
    "question": "В каком году Павел пишет 2 Коринфянам из Македонии?",
    "id": "chronology-315",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "20 лет",
    "reference": "2 Царей 15:25, 27",
    "question": "Сколько лет Факей, сын Ремалии, убив Факия, царствовал над Израилем в Самарии?",
    "id": "chronology-316",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "130 лет",
    "reference": "Бытие 47:9",
    "question": "Сколько лет было Иакову, когда он пришел со своей семьей в Египет?",
    "id": "chronology-317",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 804 г. до н. э.",
    "reference": "Амос 1:1",
    "question": "В каком году Амос завершает книгу Амоса? 3",
    "id": "chronology-318",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 50—52 гг. н. э.",
    "reference": "Галатам 1:1",
    "question": "В каких годах Павел пишет письмо Галатам из Коринфа или из сирийской Антиохии?",
    "id": "chronology-319",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2 года",
    "reference": "Бытие 45:6",
    "question": "Сколько лет голода прошло, когда братья Иосифа пришли в Египет покупать хлеб?",
    "id": "chronology-320",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "16 лет",
    "reference": "2 Царей 16:1, 2",
    "question": "Сколько лет Ахаз, сын Иоафама, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-321",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 607 г. до н. э.",
    "reference": "Авдий 1",
    "question": "В каком году Авдий пишет книгу Авдия?",
    "id": "chronology-322",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "22 года",
    "reference": "1 Царей 14:20",
    "question": "Сколько лет правил Иероваам I над отделившимися десятью коленами Израиля?",
    "id": "chronology-323",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "613 г. до н. э.",
    "reference": "Иезекииль 1:1—3",
    "question": "В каком году Иезекииль начинает пророчествовать? 4",
    "id": "chronology-324",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "536 г. до н. э.",
    "reference": "Ездра 3:8—10",
    "question": "В каком году Зоровавель закладывает основание храма?",
    "id": "chronology-325",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "41 год",
    "reference": "1 Царей 14:21",
    "question": "Сколько лет было Ровоаму, сыну Соломона, когда он воцарился?",
    "id": "chronology-326",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1728 г. до н.э.",
    "reference": "Бытие 46:26; 47:9",
    "question": "В каком году Иаков со своей семьей приходит в Египет?",
    "id": "chronology-327",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 дней",
    "reference": "Иисус Навин 6:1-3",
    "question": "Сколько дней израильтяне должны были обходить Иерихон?",
    "id": "chronology-328",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "9 лет",
    "reference": "2 Царей 17:1",
    "question": "Сколько лет Осия, сын Илы, последний царь Израиля царствовал в Самарии?",
    "id": "chronology-329",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 844 г. до н. э.",
    "reference": "Иона 1:1, 2",
    "question": "В каком году Иона завершает книгу Ионы? 5",
    "id": "chronology-330",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 дней",
    "reference": "Числа 12:10, 15",
    "question": "Сколько времени Мариам была в наказание покрыта проказой?",
    "id": "chronology-331",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1467 г. до н.э.",
    "reference": "Иисус Навин 11:23; 14:10",
    "question": "В каком году в основном закончилось завоевание Ханаанской земли под предводительством Иисуса Навина?",
    "id": "chronology-332",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "15 нисана",
    "reference": "Матфея 27:62—66",
    "question": "Какого числа священники и фарисеи ставят у гробницы Иисуса стражу?",
    "id": "chronology-333",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "732 г. до н. э.",
    "reference": "2 Царей 18:13",
    "question": "В каком году Сеннахирим нападает на Иуду?",
    "id": "chronology-334",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "980 г. до н. э.",
    "reference": "1 Царей 15:1, 2",
    "question": "В каком году Авия становится иудейским царем после Ровоама?",
    "id": "chronology-335",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "17 лет",
    "reference": "Бытие 47:28",
    "question": "Сколько лет патриарх Иаков прожил в Египте со своей семьей? 6",
    "id": "chronology-336",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "14 нисана 33 г. н. э.",
    "reference": "Иоанна 13:1—5",
    "question": "Назовите дату, когда Иисус моет своим апостолам ноги.",
    "id": "chronology-337",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "62 года",
    "reference": "Даниил 5: 31",
    "question": "Сколько лет было Дарию Мидянину, когда он стал правителем Мидо-Персии?",
    "id": "chronology-338",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "716 г. до н. э.",
    "reference": "2 Царей 21:1",
    "question": "В каком году Манассия становится иудейским царем после Езекии?",
    "id": "chronology-339",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "977 г. до н. э.",
    "reference": "1 Царей15:9, 10",
    "question": "В каком году Аса становится иудейским царем после Авии?",
    "id": "chronology-340",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "Иисус Навин 14:7",
    "question": "Сколько лет было Халеву, одному из разведчиков, когда он осматривал землю?",
    "id": "chronology-341",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "147 лет",
    "reference": "Бытие 47:28",
    "question": "Сколько лет прожил Иаков? 7",
    "id": "chronology-342",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "85 лет",
    "reference": "Иисус Навин 14:10, 13, 14",
    "question": "Сколько лет было Халеву, одному из разведчиков, когда он получил свое наследственное владение?",
    "id": "chronology-343",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "41 год",
    "reference": "1 Царей 15:9, 10",
    "question": "Сколько лет Аса, сын Авии, правил в Иерусалиме?",
    "id": "chronology-344",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "659 г. до н.э.",
    "reference": "2 Царей 22:1",
    "question": "В каком году Иосия становится иудейским царем после Аммона?",
    "id": "chronology-345",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Через 12 месяцев",
    "reference": "Даниил 4:29",
    "question": "Через сколько времени сбылся сон Навуходоносора о том, что он на «семь времен» примет звериный облик?",
    "id": "chronology-346",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 г. до н. э.",
    "reference": "Луки 1:5—25",
    "question": "В каком году ангел предсказал Захарии рождение Иоанна Крестителя?",
    "id": "chronology-347",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1711 г.до н.э.",
    "reference": "Бытие 47:28",
    "question": "В каком году умер Иаков? 8",
    "id": "chronology-348",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "110 лет",
    "reference": "Бытие 50:22, 26",
    "question": "Сколько лет прожил Иосиф?",
    "id": "chronology-349",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "975 г. до н. э.",
    "reference": "1 Царей 15:33",
    "question": "В каком году Вааса становится израильским царем после Навата?",
    "id": "chronology-350",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 месяца",
    "reference": "2 Царей 23:31",
    "question": "Сколько времени Иоахаз, сын Иосии, царствовал над Иудой?",
    "id": "chronology-351",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "В первый год",
    "reference": "Даниил 9:1, 2",
    "question": "В какой год правления Дария Мидянина Даниил понял, что семидяситилетний срок опустошения Иерусалима подходит к концу?",
    "id": "chronology-352",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "До 717 г. до н. э.",
    "reference": "Михей 1:1",
    "question": "В каком году Михей завершает книгу Михея?",
    "id": "chronology-353",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "80 лет",
    "reference": "Судей 3:30",
    "question": "Сколько лет «покоилась земля» при судье Аоде? 9",
    "id": "chronology-354",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "350лет",
    "reference": "Бытие 9:28",
    "question": "Сколько лет Ной жил после потопа?",
    "id": "chronology-355",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "3 месяца",
    "reference": "Исход 2:2",
    "question": "Сколько времени родители скрывали маленького Моисея?",
    "id": "chronology-356",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "6 месяцев",
    "reference": "2 Царей 15:8",
    "question": "Сколько времени Захария,сын Иеровоама II, последний из рода Ииуя, царствовал над Израилем в Самарии?",
    "id": "chronology-357",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "24 года",
    "reference": "1 Царей 15:33",
    "question": "Сколько лет Вааса, сын Ахии, из дома Иссахарова правил в Фирце?",
    "id": "chronology-358",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "11 лет",
    "reference": "2 Царей 24:17, 18",
    "question": "Сколько лет Седекия (Матфания), сын Иосии, царствовал над Иудой?",
    "id": "chronology-359",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "До 632 г. до н. э.",
    "reference": "Наум 1:1",
    "question": "В каком году Наум завершает книгу Наума? 0",
    "id": "chronology-360",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 60—61 гг. н. э.",
    "reference": "Эфесянам 3:1",
    "question": "В каких годах Павел пишет из Рима письмо Эфесянам?",
    "id": "chronology-361",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "632 г. до н. э.",
    "reference": "Наум 3:7",
    "question": "В каком году произошел захват Ниневии халдеями и мидянами?",
    "id": "chronology-362",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "617 г. до н. э.",
    "reference": "2 Царей 24:12, 18",
    "question": "В каком году Седекия становится иудейским царем?",
    "id": "chronology-363",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1034 г. до н. э.",
    "reference": "1 Царей 6:1",
    "question": "В каком году Соломон начинает строительство храма?",
    "id": "chronology-364",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "Судей 5:31",
    "question": "Сколько лет «на земле был мир» во дни Деворы и Варака?",
    "id": "chronology-365",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1593 г. до н.э.",
    "reference": "Исход 2:2, 10",
    "question": "В каком году родился Моисей? 1",
    "id": "chronology-366",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "Исход 2:11, 14, 15; Деяния 7:23",
    "question": "Сколько лет было Моисею, когда он убежал из Египта в Мадиам?",
    "id": "chronology-367",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 952 г. до н. э.",
    "reference": "1 Царей 16:8",
    "question": "В каком году Ила становится израильским царем после Ваасы?",
    "id": "chronology-368",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "15 лет",
    "reference": "2 Царей 20:6",
    "question": "Сколько лет жизни Иегова добавил умерающему от болезни царю Езекии?",
    "id": "chronology-369",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1 г. до н. э. или 1 г. н. э.",
    "reference": "Матфея 2:1,13—23",
    "question": "В каком году родители маленького Иисуса, спасая ему жизнь, убегают в Египет?",
    "id": "chronology-370",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 лет",
    "reference": "Судей 6:1",
    "question": "Сколько лет израильтяне были под гнетом мадианитян и амаликитян во дни судей?",
    "id": "chronology-371",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 60—61 гг. н. э.",
    "reference": "Филиппийцам 4:22",
    "question": "В каких годах Павел пишет из Рима письмо Филиппийцам? 2",
    "id": "chronology-372",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "83 лет",
    "reference": "Исход 7:7",
    "question": "Сколько лет было Аарону, когда он говорил с фараоном?",
    "id": "chronology-373",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "40 лет",
    "reference": "Судей 8:28",
    "question": "Сколько лет «покоилась земля» во дни Гедеона?",
    "id": "chronology-374",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1290 дней",
    "reference": "Даниил 12:11",
    "question": "Сколько дней по пророчеству Даниила должно пройти «со времени прекращения постоянного жертвоприношения»?",
    "id": "chronology-375",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 60—61 гг. н. э.",
    "reference": "Колоссянам 4:18",
    "question": "В каких годах Павел пишет из Рима письмо Колоссянам?",
    "id": "chronology-376",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "20 лет",
    "reference": "Судей 4:1-3",
    "question": "Сколько лет угнетал израильтян Иавин, царь Ханаанский?",
    "id": "chronology-377",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2 года",
    "reference": "1 Царей 16:8",
    "question": "Сколько лет царствовал Вааса над Израилем в Фирце? 3",
    "id": "chronology-378",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 50 г. н. э.",
    "reference": "1 Фессалоникийцам 1:1",
    "question": "В каком году Павел пишет 1 Фессалоникийцам из Коринфа?",
    "id": "chronology-379",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "390 дней",
    "reference": "Иезекииль 4:4, 5",
    "question": "Сколько дней Иезекииль должен был пролежать на левом боку за «преступления дома Израиля»?",
    "id": "chronology-380",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1 месяц",
    "reference": "2 Царей 15:10, 13",
    "question": "Сколько времени Шаллум, сын Иависа, убив царя Захарию, царствовал над Израилем в Самарии?",
    "id": "chronology-381",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 951 г. до н. э.",
    "reference": "1 Царей 16:15",
    "question": "В каком году Зимри становится израильским царем после Илы?",
    "id": "chronology-382",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 дня",
    "reference": "Исход 10:22",
    "question": "Сколько дней длилась тьма в девятую казнь на земле Египетской?",
    "id": "chronology-383",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "28 лет",
    "reference": "2 Царей 10:35, 36",
    "question": "Сколько лет над Израилем правил Ииуй? 4",
    "id": "chronology-384",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "620 г. до н. э.",
    "reference": "2 Царей 24:1",
    "question": "В каком году Навуходоносор делает Иоакима подвластным себе царем?",
    "id": "chronology-385",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Девятый / кислев",
    "reference": "Иеремия 36:22, 23",
    "question": "В каком месяце царь Иоаким сжег в жаровне свиток пророка Иеремии?",
    "id": "chronology-386",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "22 года",
    "reference": "Судей 10:3",
    "question": "Сколько лет судьей Израиля был галаадитянин Иаир?",
    "id": "chronology-387",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "7 дней",
    "reference": "1 Царей 16:15",
    "question": "Сколько времени Зимри царствовал в Фирце?",
    "id": "chronology-388",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Два",
    "reference": "Судей 11:37-39",
    "question": "Сколько месяцев дочь Иеффая плакала из-за того, что останется девственницей?",
    "id": "chronology-389",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 98 г. н. э.",
    "reference": "1, 2 и 3 Иоанна",
    "question": "В каком году написание Библии завершено? 5",
    "id": "chronology-390",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 951 г. до н. э.",
    "reference": "1 Царей 16:21",
    "question": "В каком году Амврий и Фамний становятся израильскими царями после Зимри?",
    "id": "chronology-391",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "12 лет",
    "reference": "2 Царей 21:1",
    "question": "Сколько лет было Манассия, когда он становится иудейским царем после Езекии?",
    "id": "chronology-392",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 61—64 гг. н. э.",
    "reference": "1 Тимофею 1:3",
    "question": "В каких годах Павел пишет 1 Тимофею из Македонии?",
    "id": "chronology-393",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "14 день",
    "reference": "Исход 12:6",
    "question": "В какой день первого месяца израильтяне должны были съесть пасхального агнца?",
    "id": "chronology-394",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 717 г. до н. э.",
    "reference": "Притчи 25:1",
    "question": "В каком году завершено составление книги Притчей?",
    "id": "chronology-395",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "4 дня в году",
    "reference": "Судей 11:40",
    "question": "Как часто девушки навещали дочь судьи Иеффая? 6",
    "id": "chronology-396",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "11 лет",
    "reference": "2 Царей 23:36",
    "question": "Сколько лет Иоаким (Елиаким), сын Иосии, царствовал над Иудой?",
    "id": "chronology-397",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Полночь",
    "reference": "Исход 12:29",
    "question": "В какое время суток карающий ангел прошел по Египетской земле?",
    "id": "chronology-398",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "11 нисана 33 г.н.э.",
    "reference": "Матфея 24:1—3",
    "question": "Назовите дату, когда Иисус предсказал падение Иерусалима.",
    "id": "chronology-399",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "7 лет",
    "reference": "Судей 12:8, 9",
    "question": "Сколько лет Есевон из Вифлеема был судьей Израиля?",
    "id": "chronology-400",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1 год",
    "reference": "2 Царей 8:25, 26",
    "question": "Сколько лет Охозия, сын Иоарама, правил в Иерусалиме?",
    "id": "chronology-401",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 1020 г. до н. э.",
    "reference": "Песнь песней, заглавие",
    "question": "В каком году Соломон завершает Песнь Песней? 7",
    "id": "chronology-402",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "430 лет",
    "reference": "Исход 12:40, 41; Галатам 3:17",
    "question": "Сколько лет длился период между соглашением, заключенным с Авраамом и выходом израильтян из Египта?",
    "id": "chronology-403",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "25 ияра 33 г. н. э.",
    "reference": "Луки 24:50—53",
    "question": "Назовите дату вознесенияе Иисуса.",
    "id": "chronology-404",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "2 года",
    "reference": "2 Царей 21:19",
    "question": "Сколько лет Аммон, сын Манассии, царствовал над Иудой в Иерусалиме?",
    "id": "chronology-405",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 905 г. до н. э.",
    "reference": "2 Царей 9:24, 27; 10:36",
    "question": "В каком году Ииуй становится израильским царем после Иорама?",
    "id": "chronology-406",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "9 нисана 33 г. н. э.",
    "reference": "Иоанна 12:1, 12-14",
    "question": "Когда состоялся торжественный въезд Христа в Иерусалим?",
    "id": "chronology-407",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "10 лет",
    "reference": "Судей 12:11",
    "question": "Сколько лет Еглон Завулонянен был судьей Израиля? 8",
    "id": "chronology-408",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "8 лет",
    "reference": "2 Царей 22:1",
    "question": "Сколько лет было Иосии, сыну Аммона, когда он начал царствовать над Иудой?",
    "id": "chronology-409",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2ой год",
    "reference": "Даниил 2:1",
    "question": "В какой год царствования Навуходоносора ему приснился огромный истукан?",
    "id": "chronology-410",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "20 лет",
    "reference": "Судей 16:30, 31",
    "question": "Сколько лет Самсон был судьей Израиля?",
    "id": "chronology-411",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "1513 г. до н.э.",
    "reference": "Исход 14:27-30",
    "question": "В каком году израильтяне получили избавление от Египетского рабства?",
    "id": "chronology-412",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Около 905 г. до н. э.",
    "reference": "2 Царей 11:1—3",
    "question": "В каком году Царица Гофолия незаконно захватывает иудейский престол?",
    "id": "chronology-413",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "После 443 г. до н. э.",
    "reference": "Неемия 5:14",
    "question": "В каком году Неемия завершает книгу Неемии? 9",
    "id": "chronology-414",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "898 г. до н. э.",
    "reference": "2 Царей 12:1",
    "question": "В каком году Иоас становится иудейским царем после Охозии?",
    "id": "chronology-415",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "3 дня",
    "reference": "Исход 15:22-24",
    "question": "Через сколько времени после спасения у Красного моря израильтяне возроптали, что нет воды?",
    "id": "chronology-416",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "23 года",
    "reference": "Иеремия 25:1-3",
    "question": "Сколько лет пророчествовал Иеремия до прихода к власти Навуходоносора?",
    "id": "chronology-417",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "10ый день 10го месяца",
    "reference": "Иеремия 52:4",
    "question": "В каком месяце и какого дня началась осада Иерусалима Навуходоносором?",
    "id": "chronology-418",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 дней",
    "reference": "Бытие 7:12",
    "question": "Сколько дней и ночей лился дождь на землю во дни Ноя?",
    "id": "chronology-419",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Около 1100 г. до н.э.",
    "reference": "Судей 21:25",
    "question": "Когда Самуил завершил написание книги Судей? 0",
    "id": "chronology-420",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "В начале жатвы ячменя / нисан - март",
    "reference": "Руфь 1:22",
    "question": "В какое время года Ноеминь и Руфь вернулись в Вифлеем?",
    "id": "chronology-421",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "332 г. до н. э.",
    "reference": "Даниил 8:21",
    "question": "С какого года Греция становится пятой мировой державой и правит над Иудеей?",
    "id": "chronology-422",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1 г. до н. э. или 1 г. н. э.",
    "reference": "Матфея 2:1—12",
    "question": "В каком году астрологи посетили маленького Иисуса?",
    "id": "chronology-423",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "876 г. до н. э.",
    "reference": "2 Царей 13:1",
    "question": "В каком году Иоахаз становится израильским царем после Ииуя?",
    "id": "chronology-424",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "120 лет",
    "reference": "Бытие 6:3",
    "question": "Сколько лет Бог отвел развращенному человечеству во дни Ноя?",
    "id": "chronology-425",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "15 день 2го месяца 1513 г.до н.э.",
    "reference": "Исход 16:1,14,15",
    "question": "Когда впервые появилась манна? 1",
    "id": "chronology-426",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "36 г. н. э.",
    "reference": "Даниил 9:24—27",
    "question": "В каком году закончились 70 годовых недель?",
    "id": "chronology-427",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "(Даниил 4:16; Откровению 12:6, 14) 2520 лет",
    "reference": "",
    "question": "Сколько лет по пророчеству Даниила народы будут жить без вмешательства Бога?",
    "id": "chronology-428",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "14 лет",
    "reference": "Галатам 2:1",
    "question": "Через сколько лет после того как Павел стал христианином, он вновь приходит в Иерусалим?",
    "id": "chronology-429",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "9ый день 4го месяца",
    "reference": "Иеремия 52:6, 7",
    "question": "В каком месяце и какого дня царь и его слуги сделали пролом в стене и пытались сбежать от осады Иерусалима Навуходоносором?",
    "id": "chronology-430",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "8 нисана / за 6 дней",
    "reference": "Иоанна 12:1",
    "question": "За сколько дней до последней Пасхи Иисус приходит в Вифанию?",
    "id": "chronology-431",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "1 год 6 месяцев",
    "reference": "Деяния 18:1, 11",
    "question": "Сколько времени Павел проповедовал в Коринфе? 2",
    "id": "chronology-432",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "21 день",
    "reference": "Даниил 10:13",
    "question": "На сколько дней был задержан ангел, идущий в ответ на молитву Даниила?",
    "id": "chronology-433",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2 года",
    "reference": "Иеремия 28:1-4, 10, 11",
    "question": "Через сколько лет ложный пророк Анания обещает сломать ярмо Навуходоносора и вернуть пленных?",
    "id": "chronology-434",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "2300 дней",
    "reference": "Даниил 8:13, 14",
    "question": "Сколько длился пророческий период, в течение которого святое место по словам пророка Даниила было приведено в должное состояние?",
    "id": "chronology-435",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "В том же году в 7ом месяце",
    "reference": "Иеремия 28:15-17",
    "question": "Как скоро умирает пророк Анания после своего ложного пророчества?",
    "id": "chronology-436",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "40 лет",
    "reference": "2 Царей 12:1",
    "question": "Сколько лет царствовал Иоас в Иерусалиме?",
    "id": "chronology-437",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "easy"
  },
  {
    "answer": "Матфея-около 41 г.н.э.; Луки-около 56—58 гг. н. э.; Марка-около. 60-65 г. н.э.; Иоанна-около 98 г.н.э.",
    "reference": "",
    "question": "Перечислите Евангелия по порядку их написания. 3",
    "id": "chronology-438",
    "category": "chronology",
    "categoryName": "Хронология",
    "difficulty": "hard"
  },
  {
    "answer": "Бытие",
    "reference": "",
    "question": "В этой книге повествуется о том, как появилась Вселенная и человек.",
    "id": "erudite-1",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Дело",
    "reference": "Псалом 135:15",
    "question": "«Идолы народов — серебро и золото, *** рук человеческих».",
    "id": "erudite-2",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Косяк",
    "reference": "Второзаконие 6:9",
    "question": "Где должны были израильтяне написать Божьи заповеди?",
    "id": "erudite-3",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Чтить",
    "reference": "Эфесянам 6:2,3",
    "question": "Греческий глагол буквально означает \"считать драгоценным\".",
    "id": "erudite-4",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Справедливость",
    "reference": "Луки 18:7",
    "question": "Греческое слово «дикаиосине» означает способность поступать правильно.",
    "id": "erudite-5",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ав",
    "reference": "Ездра 7:8",
    "question": "Пятый месяц еврейского календаря. 1",
    "id": "erudite-6",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пятидесятница",
    "reference": "Деяния 2:1",
    "question": "Название этого праздника происходит от греческого слова, означающего «пятидесятый».",
    "id": "erudite-7",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Исход",
    "reference": "",
    "question": "В этой книге повествуется об удивительных чудесах, непревзойденных законах и сооружении священного шатра.",
    "id": "erudite-8",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Таммуз",
    "reference": "Иеремия 52:6",
    "question": "Четвертый месяц еврейского календаря.",
    "id": "erudite-9",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Добродетель",
    "reference": "2 Петра 1:5",
    "question": "Моральное достоинство, благость, поведение и мышление, соответствующие нормам того, что правильно.",
    "id": "erudite-10",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Лицемерие",
    "reference": "Луки 12:1",
    "question": "Фарисейская закваска.",
    "id": "erudite-11",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Аваддон",
    "reference": "Откровение 9:11",
    "question": "«По-еврейски ***, а по-гречески Аполион». 2",
    "id": "erudite-12",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Авва",
    "reference": "Марка 14:36",
    "question": "Арамейское слово, означающее «отец» и используемое как нежное обращение к отцу.",
    "id": "erudite-13",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Дорожить",
    "reference": "Матфея 10:37",
    "question": "Высоко ценить, заботливо ухаживать.",
    "id": "erudite-14",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Левит",
    "reference": "",
    "question": "Эта книга обсуждает главным образом служение Левитов.",
    "id": "erudite-15",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Праздник пресных лепешек",
    "reference": "Второзаконие 16:3",
    "question": "Этот Праздник начинался сразу после Пасхи, он напоминал израильтянам о том, как они были освобождены из Египта, и ели «хлеб бедствия».",
    "id": "erudite-16",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Хризолит",
    "reference": "Иезекииль 1:16",
    "question": "Какому драгоценному камню были подобны колеса «Галгал» в видении Иезекииля?",
    "id": "erudite-17",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ложе",
    "reference": "Евреям 13:4",
    "question": "Это должно быть не оскверненным. 3",
    "id": "erudite-18",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Косяк и перекладины",
    "reference": "Исход 12:22",
    "question": "Что израильтяне должны были помазать кровью, чтобы не погибнуть в Египте?",
    "id": "erudite-19",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "День искупления / очищения",
    "reference": "Левит 23:27-32",
    "question": "Это был единственный обязательный пост, который требовался по Моисееву закону, в этот день израильтяне ‘смиряли души свои’.",
    "id": "erudite-20",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Соль",
    "reference": "Матфея 5:13",
    "question": "С каким продуктом питания Иисус сравнивает своих учеников?",
    "id": "erudite-21",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Числа",
    "reference": "",
    "question": "Свое название эта книга берет от двух исчислений израильтян.",
    "id": "erudite-22",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Август",
    "reference": "Луки 2:1",
    "question": "Титул императора Рима.",
    "id": "erudite-23",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Почки",
    "reference": "Левит 9:10",
    "question": "Приносившийся в жертву парный орган животного. 4",
    "id": "erudite-24",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Добродетельная жена",
    "reference": "Притчи 31:28",
    "question": "«Встают её сыновья - и называют её счастливой, ее муж - и хвалит её». Кого?",
    "id": "erudite-25",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Преданность Богу",
    "reference": "1Тимофею 2:2",
    "question": "Выражение передает мысль: «жить так, как Бог хочет, чтобы мы жили».",
    "id": "erudite-26",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Тевет",
    "reference": "Эсфирь 2:16",
    "question": "Десятый месяц еврейского календаря.",
    "id": "erudite-27",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Друг",
    "reference": "Притчи 17:17",
    "question": "Кто любит во всякое время?",
    "id": "erudite-28",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Второзаконие",
    "reference": "",
    "question": "Эта книга повторение или разъяснение Закона, который призывает израильтян любить Иегову и повиноваться ему в Обетованной земле.",
    "id": "erudite-29",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Любовь",
    "reference": "Колоссянам 3:14",
    "question": "Она — «совершенные узы единства». 5",
    "id": "erudite-30",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Красный",
    "reference": "Исаия 63:2, 3",
    "question": "Название этого цвета в еврейском языке происходит от слова \"кровь\".",
    "id": "erudite-31",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Потоп",
    "reference": "Бытие 7:10-20",
    "question": "Половодье мирового размера.",
    "id": "erudite-32",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Угли",
    "reference": "Римлянам 12:20",
    "question": "Что человек собирает на голову врага, когда побеждает зло добром.",
    "id": "erudite-33",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иисус Навин",
    "reference": "",
    "question": "Эта книга описывает завоевание и распределение по жребию Обетованной земли.",
    "id": "erudite-34",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Авив",
    "reference": "Исход 13:4",
    "question": "Другое название нисана - первого месяца еврейского календаря.",
    "id": "erudite-35",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Деньги",
    "reference": "Бытие 23:16",
    "question": "Мы считаем это, а в древности взвешивали на весах. 6",
    "id": "erudite-36",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Судей",
    "reference": "",
    "question": "Книга рассказывает о двенадцати назначенных Иеговой людях для освобождения Израиля.",
    "id": "erudite-37",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Преданность Богу",
    "reference": "1Тимофею 4:8",
    "question": "Это, в отличие от физических упражнений, полезно для всего.",
    "id": "erudite-38",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Агат",
    "reference": "Исход 28:19",
    "question": "Полудрагоценный камень, названный по одному из его месторождений на реке Ахат в Сицилии.",
    "id": "erudite-39",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Спор",
    "reference": "Евреям 6:16",
    "question": "Словесное состязание при несогласии двух сторон.",
    "id": "erudite-40",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Агапе",
    "reference": "1 Иоанна 5:3",
    "question": "Это сила любить нелюбимых, людей, которые тебе не по душе.",
    "id": "erudite-41",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Живот",
    "reference": "Числа 5:27",
    "question": "Что опухало у жены нарушевшей верность? 7",
    "id": "erudite-42",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Адар",
    "reference": "Эсфирь 3:7",
    "question": "Двенадцатый месяц еврейского календаря.",
    "id": "erudite-43",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Руфь",
    "reference": "",
    "question": "Единственная книга, названная по имени женщины- неизраильтянки.",
    "id": "erudite-44",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Мать",
    "reference": "Откровение 17:5",
    "question": "Кем является Вавилон Великий «блудницам и мерзостям земным»?",
    "id": "erudite-45",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Доброта",
    "reference": "Римлянам 11:22",
    "question": "Стремление делать хорошее другим.",
    "id": "erudite-46",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Терпеть",
    "reference": "1 Коринфянам 4:12",
    "question": "Греческий глагол «хипомено» буквально означает «оставаться, вместо того, чтобы бежать, стойко держаться, выдерживать».",
    "id": "erudite-47",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Праздник шалашей",
    "reference": "Левит 23:34",
    "question": "В течение этого праздника израильтяне жили в жилищах, которые делались из веток и листьев деревьев. 8",
    "id": "erudite-48",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Достоинство",
    "reference": "Евреям 11:38",
    "question": "Совокупность высоких моральных качеств, а так же уважение этих качеств в самом себе.",
    "id": "erudite-49",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Пророк",
    "reference": "Деяния 3:21",
    "question": "Кто объявляет вести, происхождение которых приписывается Богу?",
    "id": "erudite-50",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "1 Самуила",
    "reference": "",
    "question": "Эта книга рассказывает о четырех вождях Израиля: двое были судьями, двое — царями; двое повиновались Иегове, двое — нет.",
    "id": "erudite-51",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Акростих",
    "reference": "Псалом 36",
    "question": "Стиль написания, когда каждая строка начинается со следующей буквы еврейского алфавита.",
    "id": "erudite-52",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ссора",
    "reference": "Притчи 17:14",
    "question": "Чему не надо давать разгораться?",
    "id": "erudite-53",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Треск",
    "reference": "Экклезиаст 7:6",
    "question": "«Смех глупого как *** колючего хвороста под котлом». 9",
    "id": "erudite-54",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Рост",
    "reference": "1 Самуила 17:4",
    "question": "Отличительная особенность Голиафа.",
    "id": "erudite-55",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Праведность",
    "reference": "1 Петра 3:14",
    "question": "Старание делать больше, с заботой о других и желанием приносить им пользу и помогать.",
    "id": "erudite-56",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Алмаз",
    "reference": "Иезекииль 3:9",
    "question": "Очень твердый драгоценный камень.",
    "id": "erudite-57",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "2 Самуила",
    "reference": "",
    "question": "В этой книге описывается, как истерзанная междоусобицами страна объединяется под правлением доблестного воина и царя.",
    "id": "erudite-58",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Десять",
    "reference": "Откровение 2:10",
    "question": "Число, которое в книге Откровение служит для совокупности или полноты чего-либо материального, земного.",
    "id": "erudite-59",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Луна",
    "reference": "Псалом 104:19",
    "question": "Небесное тело, которое Иегова сотворил для указания времен. 0",
    "id": "erudite-60",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Суббота",
    "reference": "Исход 31:16, 17",
    "question": "Что является знамением между Иеговой и сынами Израилевыми навеки?",
    "id": "erudite-61",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Лицо",
    "reference": "Бытие 4:6, 7",
    "question": "Что мрачнеет у человека, если он не делает добро?",
    "id": "erudite-62",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Доверие",
    "reference": "",
    "question": "Убежденность в чьей-либо искренности, честности, добросовестности и основанное на них отношение к кому-либо.",
    "id": "erudite-63",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Альфа",
    "reference": "Откровение 21:6",
    "question": "«Я есть *** и Омега, начало и конец».",
    "id": "erudite-64",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "1 Царей",
    "reference": "",
    "question": "В этой книге рассказывается о жизни Соломона, о разделении народа после его смерти и о 14 царях, которые правили после в Израиле и в Иуде.",
    "id": "erudite-65",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Правильно",
    "reference": "Иакова 4:17",
    "question": "Кто сознательно не делает так, на том грех. 1",
    "id": "erudite-66",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "2 Царей",
    "reference": "",
    "question": "В этой книге повествуется о 29 царях — 12 царях северного царства Израиль и 17 царях южного царства Иуда.",
    "id": "erudite-67",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Дух",
    "reference": "Иоанна 4:24",
    "question": "Настроенность или влияющий фактор, который наполняют чью-то душу и управляет ею.",
    "id": "erudite-68",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Аметист",
    "reference": "Исход 28:18; Откровение 21:20",
    "question": "Камень из третьего ряда в наперснике первосвященника и двенадцатый в основании стены Нового Иерусалима.",
    "id": "erudite-69",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сын",
    "reference": "Бытие 27:1",
    "question": "Им был Исав по отношению к Исааку.",
    "id": "erudite-70",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Проклятие",
    "reference": "Второзаконие 30:19",
    "question": "Противоположность благословения.",
    "id": "erudite-71",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Малое",
    "reference": "Луки 16:10",
    "question": "Что-то незначительное, в чем, однако, тоже нужно быть верным. 2",
    "id": "erudite-72",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Суета",
    "reference": "Экклезиаст 1:2",
    "question": "Пустота, тщетность, глупость, бессмысленность и безысходность.",
    "id": "erudite-73",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "1 Летопись",
    "reference": "",
    "question": "В этой книге записаны родословные списки и история Иудейского царства, но почти полностью опускается история десятиколенного царства.",
    "id": "erudite-74",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ра или Амон-Ра",
    "reference": "",
    "question": "Бог солнца в Египте.",
    "id": "erudite-75",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Лицемер",
    "reference": "Матфея 7:5",
    "question": "Кто замечает соломинку в глазу другого, а в своем глазу не видит бревна?",
    "id": "erudite-76",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Аминь",
    "reference": "1 Царей 1:36",
    "question": "Слово, означающее «непременно, да будет так, истинно».",
    "id": "erudite-77",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Добро",
    "reference": "Галатам 6:9",
    "question": "Это нужно делать не переставая. 3",
    "id": "erudite-78",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ангел",
    "reference": "Откровение 1:20",
    "question": "Невидимые духовные создания, обладающие силой и разумом.",
    "id": "erudite-79",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Донесение",
    "reference": "Иеремия 20:10",
    "question": "Тайное обвинительное сообщение представителю власти.",
    "id": "erudite-80",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "2 Летопись",
    "reference": "",
    "question": "Эта книга для вернувшихся из вавилонского плена израильтян описывает события, происходившие при правлении царей из рода Давида.",
    "id": "erudite-81",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Тишри / этаним",
    "reference": "1 Царей 8:2",
    "question": "Седьмой месяц еврейского календаря.",
    "id": "erudite-82",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Лоб",
    "reference": "1 Самуила 17:4, 49",
    "question": "В это место Давид поразил Голиафа.",
    "id": "erudite-83",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Рабство",
    "reference": "Исход 2:23",
    "question": "Состояние полной зависимости, подчиненности. 4",
    "id": "erudite-84",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "При Ровоаме",
    "reference": "1 Царей 14:26, 27",
    "question": "При каком иудейском царе золотые щиты, сделанные Соломоном, были заменены на медные?",
    "id": "erudite-85",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Мед",
    "reference": "Судей 14:9",
    "question": "Что ел Самсон изо рта льва?",
    "id": "erudite-86",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Духовность",
    "reference": "Матфея 5:3",
    "question": "Восприимчивость или привязанность к религиозным ценностям.",
    "id": "erudite-87",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ездра",
    "reference": "",
    "question": "Книга рассказывает о возвращении из вавилонского плена и восстановлении чистого поклонения в Иерусалиме.",
    "id": "erudite-88",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Тайна",
    "reference": "Даниил 2:19",
    "question": "Нечто неразгаданное или сокрытое до определенного времени.",
    "id": "erudite-89",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Багряный",
    "reference": "Откровение 17:3",
    "question": "Цвет зверя, на котором сидела блудница Вавилон Великий. 5",
    "id": "erudite-90",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Жадность",
    "reference": "Эфесянам 5:3",
    "question": "Неумеренное или чрезмерное желание иметь больше чего-либо.",
    "id": "erudite-91",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Рвение",
    "reference": "Псалом 69:9",
    "question": "Крайнее усердие в чем-нибудь.",
    "id": "erudite-92",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Три",
    "reference": "Откровение 16:13, 19",
    "question": "Число, которое в книге Откровение служит для подчеркивания, усиления образа.",
    "id": "erudite-93",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Благодарность",
    "reference": "Псалом 92:1",
    "question": "Чувство признательности к кому-нибудь за оказанное добро, внимание, услугу.",
    "id": "erudite-94",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Неемия",
    "reference": "",
    "question": "Книга рассказывает о восстановлении стены Иерусалима после возвращения израильтян из Вавилона.",
    "id": "erudite-95",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Кроткий ответ",
    "reference": "Притчи 15:1",
    "question": "Ранящее слово возбуждает гнев, а это отвращает ярость. 6",
    "id": "erudite-96",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Эсфирь",
    "reference": "",
    "question": "Книга является подкрепляющим веру сообщением о том, как спасся целый народ благодаря Божьей помощи и вере молодой женщины.",
    "id": "erudite-97",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Проклинать",
    "reference": "Римлянам 12:14",
    "question": "Плохо говорить о ком-либо или зло высказываться против него, злословить, унижать.",
    "id": "erudite-98",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Богоненавистник",
    "reference": "Римлянам 1:30",
    "question": "Человек, не любящий Бога.",
    "id": "erudite-99",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Теократия",
    "reference": "",
    "question": "Форма правления Бога - это слово не встречается в Библии, но точно описывает государственный строй древнего Израиля.",
    "id": "erudite-100",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Назорей",
    "reference": "Судей 13:5",
    "question": "Им был Самсон от самого чрева матери.",
    "id": "erudite-101",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Жертвовать",
    "reference": "",
    "question": "Отдавать что-то ценное или отказываться от него. 7",
    "id": "erudite-102",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Мене",
    "reference": "Даниил 5:26",
    "question": "Слово, означающее «Бог сосчитал дни твоего царства и положил ему конец».",
    "id": "erudite-103",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ева",
    "reference": "Бытие 3:20",
    "question": "Как по-еврейски «живущая»?",
    "id": "erudite-104",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Беззаконие",
    "reference": "Евреям 1:9",
    "question": "Это слово применяли для обозначения \"зла, вызванного неправильным использованием силы\".",
    "id": "erudite-105",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Приветствие",
    "reference": "1 Коринфянам 16:21",
    "question": "Поцелуи, объятия и долгий разговор, которым сопровождается встреча двух знакомых.",
    "id": "erudite-106",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Путь",
    "reference": "Притчи 4:18",
    "question": "«*** праведных — как сияющий свет, который становится всё ярче и ярче до наступления полного",
    "id": "erudite-107",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иов",
    "reference": "",
    "question": "Эта книга подтверждает существование сатаны как личности, в ней сообщается о том, что сатана говорил с Иеговой Богом. 8",
    "id": "erudite-108",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Мужество",
    "reference": "2 Коринфянам 5:6",
    "question": "Это душевная стойкость, присутствие духа в опасности или в беде, смелость,храбрость, бесстрашие.",
    "id": "erudite-109",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Благоразумный",
    "reference": "Титу 3:2",
    "question": "Буквальное значение \"уступчивый\", выражает чуткость, смотрящую на факты рассудительно.",
    "id": "erudite-110",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Псалмы",
    "reference": "",
    "question": "Это самая большая книга Библии, состоящая в основном из песен хвалы нашему Создателю.",
    "id": "erudite-111",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Разумный",
    "reference": "1 Коринфянам 1:19",
    "question": "Перевод греческого слова «логикос», которое означает рациональный или умный.",
    "id": "erudite-112",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Брат",
    "reference": "Притчи 18:24",
    "question": "Кто бывает менее привязан, нежели друг.",
    "id": "erudite-113",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Желудок",
    "reference": "1 Тимофею 5:23",
    "question": "Ради чего Павел советовал Тимофею «употреблять немного вина»? 9",
    "id": "erudite-114",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Жизнь",
    "reference": "Притчи 4:13",
    "question": "«Держись наставления, и не отпускай его, храни его, потому что оно — твоя ***».",
    "id": "erudite-115",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Рубин",
    "reference": "Исход 28:17",
    "question": "Драгоценный камень красного цвета, первый из первого ряда в наперснике первосвященника.",
    "id": "erudite-116",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Надежда",
    "reference": "1 Коринфянам 9:10",
    "question": "Это должены иметь и пашущие, и молотящие.",
    "id": "erudite-117",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Притчи",
    "reference": "",
    "question": "Эта книга состоит из лаконичных изречений, в которых используются подобия или сравнения.",
    "id": "erudite-118",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Убеждать",
    "reference": "Деяния 18:13",
    "question": "Греческое слово главным образом означает «уверять, изменять чье-либо мнение путем логичных здравых рассуждений».",
    "id": "erudite-119",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Крючок",
    "reference": "Иов 41:1",
    "question": "Рыболовная снасть, которой нельзя вытащить левиафана. 0",
    "id": "erudite-120",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Милосердие",
    "reference": "1 Петра 2:10",
    "question": "Чувство сожаления о страданиях других.",
    "id": "erudite-121",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Беззаконник",
    "reference": "2 Фессалоникийцам 2:8",
    "question": "Человек, который не удерживается или не руководствуется законом.",
    "id": "erudite-122",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Принесение первых плодов",
    "reference": "Левит 23:10—14",
    "question": "Во время этого праздника Иегове приносили сноп из ячменя, культуры, созревавшей в Израиле первой.",
    "id": "erudite-123",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Сто",
    "reference": "1 Самуила 18:25",
    "question": "Сколько краеобрезаний филистимлян Саул потребовал от Давида за Мелхолу?",
    "id": "erudite-124",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Экклезиаст",
    "reference": "",
    "question": "Книга содержит в себе практические советы, помогающие определить, что в жизни действительно ценно, а что бессмысленно.",
    "id": "erudite-125",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Лягушки",
    "reference": "Исход 8:5—14",
    "question": "Вторая казнь, посланная Богом на Египет. 1",
    "id": "erudite-126",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Песнь песней",
    "reference": "",
    "question": "Книга является произведением возвышенной любовной поэзии с глубоким пророческим значением.",
    "id": "erudite-127",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Жемчужина",
    "reference": "Матфея 13:46",
    "question": "Что купец из наглядного примера Иисуса купил, продав все, что было у него?",
    "id": "erudite-128",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Мрак",
    "reference": "Притчи 4:19",
    "question": "С чем сравнивается путь нечестивых?",
    "id": "erudite-129",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Раскаяние",
    "reference": "2 Коринфянам 7:10",
    "question": "Почувствовать сожаление, вследствие угрызения совести из-за неправильных действий в прошлом.",
    "id": "erudite-130",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Благоухание",
    "reference": "2 Коринфянам 2:14",
    "question": "Бог распространяет это через христиан в триумфальном шествии.",
    "id": "erudite-131",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Мясо",
    "reference": "1 Коринфянам 8:13",
    "question": "Павел сказал, что не будет есть это вовек, чтобы не соблазнить брата. 2",
    "id": "erudite-132",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Радость",
    "reference": "Луки 2:10",
    "question": "Восхитительное чувство, которое вызывается ожиданием или приобретением чего-то хорошего.",
    "id": "erudite-133",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Исаия",
    "reference": "",
    "question": "Разъясняя вопросы о личности Мессии, Иисус и его апостолы чаще всего цитировали именно эту библейскую книгу.",
    "id": "erudite-134",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Медного Змея",
    "reference": "2 Царей 18:4",
    "question": "Что, сделанное Моисеем для спасения людей от смерти уничтожил царь Езекия?",
    "id": "erudite-135",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Душа",
    "reference": "Матфея 10:28",
    "question": "Внутренний мир человека, его глубокие чувства.",
    "id": "erudite-136",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Бахрома / Кисти",
    "reference": "Числа 15:38-40",
    "question": "Какая часть одежды служила израильтянам напоминанием исполнять Божьи заповеди?",
    "id": "erudite-137",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Подземелье",
    "reference": "Даниил 6:16",
    "question": "Туда бросили Даниила на растерзание львам. 3",
    "id": "erudite-138",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Стена",
    "reference": "Откровение 21:17,18",
    "question": "Что в видении Иоанна это было высотой в 144 локтя и построено из яшмы?",
    "id": "erudite-139",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Крыша",
    "reference": "Притчи 19:13",
    "question": "«Глупый сын – несчастье для отца, и сварливая жена – что протекающая ***».",
    "id": "erudite-140",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иеремия",
    "reference": "",
    "question": "Книги 1 и 2 Царей и эта книга во многом являются взаимным дополнением и придают друг другу законченность.",
    "id": "erudite-141",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Постоянство",
    "reference": "Даниил 6:16,20",
    "question": "Непрерывность, буквально \"двигаться по кругу\".",
    "id": "erudite-142",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Бремя",
    "reference": "Иеремия 23:33",
    "question": "Слово имеет два значения: важное объявление от Бога и то, что отягощает и вконец измучивает.",
    "id": "erudite-143",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Жребием",
    "reference": "Числа 26:55, 56",
    "question": "Каким образом Обетованную землю разделили между 12 коленами? 4",
    "id": "erudite-144",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Нечестивый",
    "reference": "Иезекииль 3:18",
    "question": "Кого должен был вразумлять Иезекииль?",
    "id": "erudite-145",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Незаслуженная доброта",
    "reference": "Римлянам 11:6",
    "question": "Еврейское слово означает неизменную любовь, которая проявляется к кому-нибудь до тех пор, пока не будет достигнута цель.",
    "id": "erudite-146",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Простить",
    "reference": "1 Иоанна 1:9",
    "question": "Избавиться от чувства негодования, буквально «отпустить».",
    "id": "erudite-147",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Иезекииль",
    "reference": "",
    "question": "В этой книге неоднократно повторяется: «Узнают народы, что я Иегова».",
    "id": "erudite-148",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Страх",
    "reference": "Луки 1:12",
    "question": "Какое чувство охватило священника Захарию, когда ему в храме явился ангел?",
    "id": "erudite-149",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Оливковое масло",
    "reference": "Псалом 141:5",
    "question": "«Будет исправлять меня [праведник] - это как *** на мою голову». 5",
    "id": "erudite-150",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Жребия",
    "reference": "Деяния 1:26",
    "question": "При помощи чего был избран апостол Матфий вместо Иуды Искариота?",
    "id": "erudite-151",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Счастье",
    "reference": "Деяния 20:35",
    "question": "Чувство глубокого довольства и радости.",
    "id": "erudite-152",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Благословение",
    "reference": "Бытие 27:36",
    "question": "«Он уже забрал моё право первородства, а теперь забрал и моё ***».",
    "id": "erudite-153",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Николай",
    "reference": "Откровение 2:6",
    "question": "Человек, чьим именем называлась секта, дела которой не одобрял Христос.",
    "id": "erudite-154",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Плач Иеремии",
    "reference": "",
    "question": "Книга представляет собой плачевную песнь, в которой выражается глубокая скорбь о бедствии, постигшем избранный Божий народ.",
    "id": "erudite-155",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Надежда",
    "reference": "Римлянам 8:24",
    "question": "Что, по словам Павла, не является настоящим, если это видимо? 6",
    "id": "erudite-156",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Даниил",
    "reference": "",
    "question": "Эта книга является, по сути, заранее написанной мировой историей.",
    "id": "erudite-157",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Уста",
    "reference": "Притчи 10:19",
    "question": "«При многословии не избежать греха, а тот, кто сдерживает свои ***, поступает благоразумно».",
    "id": "erudite-158",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Жемчужина",
    "reference": "Откровение 21:21",
    "question": "Из чего были ворота Небесного Иерусалима в видении Иоанна?",
    "id": "erudite-159",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Бросал пур / жребий",
    "reference": "Эсфирь 3:7",
    "question": "Что делал Аман, чтобы определить благоприятный день для уничтожения евреев в Персидской империи?",
    "id": "erudite-160",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Пятка",
    "reference": "Бытие 25:26",
    "question": "За это держался Иаков, когда родился.",
    "id": "erudite-161",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Рыдание",
    "reference": "Иоанна 16:20",
    "question": "Сильный плач, вызванный горем, душевным страданием. 7",
    "id": "erudite-162",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Тело",
    "reference": "Луки 12:23",
    "question": "Что ценнее одежды?",
    "id": "erudite-163",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Осия",
    "reference": "",
    "question": "Книга является символической драмой, в основу которой легли события из семейной жизни самого пророка.",
    "id": "erudite-164",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Проповедник",
    "reference": "Деяния 21:8, 9",
    "question": "Миссия Филиппа, имевшего четырех дочерей пророчествующих.",
    "id": "erudite-165",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Имущество",
    "reference": "Псалом 73:12",
    "question": "Что увеличивают нечестивые, которых «ничто не беспокоит»?",
    "id": "erudite-166",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Белый",
    "reference": "Откровение 6:11",
    "question": "Цвет одежды, символизирующий чистоту и праведность.",
    "id": "erudite-167",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Еффафа",
    "reference": "Марка 7:34",
    "question": "«Откройся» по-еврейски. 8",
    "id": "erudite-168",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Главный управляющий",
    "reference": "Иеремия 20:1",
    "question": "Должность, занимаемая Пашхуром при храме во дни Иеремии.",
    "id": "erudite-169",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Много",
    "reference": "Луки 12:48",
    "question": "Сколько потребуют от того, кому дано много?",
    "id": "erudite-170",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иоиль",
    "reference": "",
    "question": "В книге пророка описывается, как одно за другим происходит нашествие насекомых, которые опустошают землю.",
    "id": "erudite-171",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Раз в год",
    "reference": "Евреям 9:7",
    "question": "Как часто израильский первосвященник заходил в Святое святых?",
    "id": "erudite-172",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Жир",
    "reference": "Исход 29:13",
    "question": "Что символизировало самое лучшее из приносимого в жертву?",
    "id": "erudite-173",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Жертва",
    "reference": "Псалом 51:17",
    "question": "Этим является для Бога «сокрушенный дух». 9",
    "id": "erudite-174",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Рыбья часть",
    "reference": "1 Самуила 5:2, 4",
    "question": "Что осталось от Дагона, когда в его храме находился ковчег Божий?",
    "id": "erudite-175",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Пурим",
    "reference": "Эсфирь 9:24, 26",
    "question": "Иудейский праздник, название которого происходит от слова со значением «жребий».",
    "id": "erudite-176",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ненавидеть",
    "reference": "1 Иоанна 3:15",
    "question": "Сильное чувство неприязни или сильного отвращения к кому-нибудь или чему-нибудь.",
    "id": "erudite-177",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Амос",
    "reference": "",
    "question": "Вначале пророк в своей книге объявил Божий приговор в отношении шести соседних государств, затем он обращает внимание на Иуду.",
    "id": "erudite-178",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Будущее",
    "reference": "Деяния 16:16",
    "question": "Время и события, которые последуют за настоящим.",
    "id": "erudite-179",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Забава",
    "reference": "Притчи 10:23",
    "question": "Чем для глупого является преступное деяние? 0",
    "id": "erudite-180",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пурпурный и ярко-красный",
    "reference": "Исход 36:35",
    "question": "Краски каких цветов широко применялись для принадлежностей скинии?",
    "id": "erudite-181",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Заботы",
    "reference": "Луки 21:34",
    "question": "Болезненное или тревожное душевное беспокойство из-за нависшего или предчувствуемого несчастья.",
    "id": "erudite-182",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вера",
    "reference": "Евреям 11:1",
    "question": "«Обоснованное ожидание того, на что надеются».",
    "id": "erudite-183",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Нисан",
    "reference": "Неемия 2:1",
    "question": "Первый месяц еврейского календаря.",
    "id": "erudite-184",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Авдий",
    "reference": "",
    "question": "Это самая короткая из всех книг Еврейских Писаний.",
    "id": "erudite-185",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Слепота",
    "reference": "2 Царей 6:18",
    "question": "Чем по слову Елисея Иегова поразил врагов? 1",
    "id": "erudite-186",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иона",
    "reference": "",
    "question": "Эта книга описывает особое приключение пророка, который «был во внутренностях рыбы три дня и три ночи».",
    "id": "erudite-187",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вред",
    "reference": "Притчи 11:15",
    "question": "Что причиняет себе человек, который «поручается за постороннего»?",
    "id": "erudite-188",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ревность",
    "reference": "1 Коринфянам 10:22",
    "question": "Настойчивое требование поклоняться исключительно Иегове.",
    "id": "erudite-189",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Огненно-красный",
    "reference": "Откровение 12:3",
    "question": "Какого цвета символический дракон Сатана Дьявол?",
    "id": "erudite-190",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Три дня тьмы",
    "reference": "Исход 10:21—23",
    "question": "Девятая казнь, посланная Богом на Египет.",
    "id": "erudite-191",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ветер",
    "reference": "Экклезиаст 11:4",
    "question": "Наблюдающий его не будет сеять. 2",
    "id": "erudite-192",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ропот",
    "reference": "Исход 16:8",
    "question": "Недовольство, выраженное не вполне открыто.",
    "id": "erudite-193",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Михей",
    "reference": "",
    "question": "Книга этого пророка предсказывает место рождения Мессии.",
    "id": "erudite-194",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вода превратилась в кровь",
    "reference": "Исход 7:19—21",
    "question": "Первая казнь, посланная Богом на Египет.",
    "id": "erudite-195",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Шлак",
    "reference": "Псалом 119:119",
    "question": "Нечестивые сравниваются с этим отходом при плавке металла.",
    "id": "erudite-196",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Мастерство",
    "reference": "Экклезиаст 4:4",
    "question": "Знания и навыки, вынесенные из практической деятельности.",
    "id": "erudite-197",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Удила",
    "reference": "2 Царей 19:28",
    "question": "Что Иегова вложил в рот царю Сеннахириму? 3",
    "id": "erudite-198",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Бул / мархешван",
    "reference": "1 Царей 6:38",
    "question": "Восьмой месяц еврейского календаря.",
    "id": "erudite-199",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Закваске",
    "reference": "Матфея 16:11, 12",
    "question": "Чему уподобил Иисус учение фарисеев и саддукеев из-за его разлагающего влияния?",
    "id": "erudite-200",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Наум",
    "reference": "",
    "question": "Книга этого пророка предсказывает гибель Ниневии - коварного врага Израиля.",
    "id": "erudite-201",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Трава",
    "reference": "Псалом 72:16",
    "question": "«Урожай царя будет велик, как лес на Ливане, и в городах умножатся люди, как *** на земле».",
    "id": "erudite-202",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Нос",
    "reference": "Песнь песней 7:4",
    "question": "Эта часть лица Суламиты уподобляется башне Ливанской, обращенной к Дамаску?",
    "id": "erudite-203",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Уныние",
    "reference": "Иакова 4:9",
    "question": "Подавленное состояние духа, печаль. 4",
    "id": "erudite-204",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Видение",
    "reference": "Даниил 8:15",
    "question": "«Когда я, Даниил, видел *** и старался найти понимание - вот, передо мной встал кто-то, похожий на человека».",
    "id": "erudite-205",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Книга войн Иеговы",
    "reference": "Числа 21:14",
    "question": "Сборник описаний военных походов и других сражений израильтян.",
    "id": "erudite-206",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Угроза",
    "reference": "Деяние 9:1",
    "question": "Запугивание, обещание причинить зло.",
    "id": "erudite-207",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Аввакум",
    "reference": "",
    "question": "В книге этого пророка освещаются две превосходные истины: Иегова Бог — Владыка Вселенной, и праведник живет благодаря вере.",
    "id": "erudite-208",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пазуха",
    "reference": "Притчи 6:27",
    "question": "Куда нельзя взять огонь, чтоб не прожечь одежду?",
    "id": "erudite-209",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Саранча",
    "reference": "Исход 10:14",
    "question": "Восьмая казнь, посланная Богом на Египет. 5",
    "id": "erudite-210",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Игольное ушко",
    "reference": "Матфея 19:24",
    "question": "Через что легче пройти верблюду, чем богатому войти в Царство Бога?",
    "id": "erudite-211",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Война",
    "reference": "1 Царей 22:1",
    "question": "Вооруженная борьба между народами.",
    "id": "erudite-212",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вытерла его ноги",
    "reference": "Иоанна 12:3",
    "question": "Что сделала Мария своими волосами после того, как помазала ноги Иисуса дорогим ароматным маслом?",
    "id": "erudite-213",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Рог",
    "reference": "Даниил 8:21",
    "question": "Этим был представлен первый царь Греции.",
    "id": "erudite-214",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Софония",
    "reference": "",
    "question": "Пророк сообщает, что Иегова всегда предупреждал свой народ о том, что собирался предпринять через пророков.",
    "id": "erudite-215",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Роса",
    "reference": "Числа 11:9",
    "question": "«Когда ночью на лагерь опускалась ***, опускалась и манна». 6",
    "id": "erudite-216",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Аггей",
    "reference": "",
    "question": "Книга этого пророка употребляет имя Иеговы 35 раз и 14 из них — в выражении «Иегова воинств» .",
    "id": "erudite-217",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ободрение",
    "reference": "Римлянам 1:12",
    "question": "На греческом языке это означает «призыв быть рядом» и несет идею увещевания и утешения.",
    "id": "erudite-218",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Внушить",
    "reference": "Второзаконие 6:6, 7",
    "question": "На еврейском языке это слово означает - научить с помощью повторения.",
    "id": "erudite-219",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Розга",
    "reference": "Притчи 22:15",
    "question": "«Глупость привязалась к сердцу мальчика, но воспитательная *** удалит её от него».",
    "id": "erudite-220",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Хлеб",
    "reference": "Матфея 6:11",
    "question": "Что в основной молитве Иисуса символизирует еду в целом?",
    "id": "erudite-221",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Защита",
    "reference": "Притчи 18:10",
    "question": "Предохранение от какого-либо пагубного воздействия. 7",
    "id": "erudite-222",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Веадар",
    "reference": "",
    "question": "Дополнительный месяц, который прибавлялся 7 раз в 19 лет к обычному месяцу.",
    "id": "erudite-223",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Отмена",
    "reference": "Даниил 6:12",
    "question": "Чего не допускал «закон мидян и персов»?",
    "id": "erudite-224",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Огонь, дым и сера",
    "reference": "Откровение 9:17",
    "question": "Что в видении Иоанна выходило из пастей коней с головами львов?",
    "id": "erudite-225",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Самообладание",
    "reference": "1 Коринфянам 9:25",
    "question": "Способность взять себя в руки, помогающая проявлять сдержанность в мыслях, словах и поведении.",
    "id": "erudite-226",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Черный",
    "reference": "Откровение 6:5, 6",
    "question": "Конь этого цвета символизирует голод в Откровении.",
    "id": "erudite-227",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Захария",
    "reference": "",
    "question": "Книга этого пророка призывала евреев укрепиться и мужественно поставить поклонение Иегове на первое место. 8",
    "id": "erudite-228",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Знание",
    "reference": "Псалом 19:2",
    "question": "«Дени один за другим изливают речь, и ночи одна за другой открывают ***».",
    "id": "erudite-229",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Малахия",
    "reference": "",
    "question": "Заключительная книга Еврейских Писаний.",
    "id": "erudite-230",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Свидетель",
    "reference": "Бытие 31:48",
    "question": "В этой роли может выступать какой-либо предмет, «присутствовавший» при заключении договора и служивший напоминанием о происшедшем.",
    "id": "erudite-231",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Тьма",
    "reference": "Бытие 1:2",
    "question": "Что было на поверхности водной пучины, когда «земля была бесформенна и пуста»?",
    "id": "erudite-232",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вера",
    "reference": "Римлянам 4:9",
    "question": "Что вменилось Аврааму в праведность?",
    "id": "erudite-233",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Отступничество",
    "reference": "2 Фессалоникийцам 2:3",
    "question": "Греческое слово буквально означает «стоящий в стороне от» в смысле «изменивший, оставивший, восставший». 9",
    "id": "erudite-234",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Зевс",
    "reference": "Деяния 14:12",
    "question": "Имя греческого бога, за которого жители Листры приняли Варнаву.",
    "id": "erudite-235",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Утешение",
    "reference": "2 Коринфянам 1:4",
    "question": "Наделить мужеством, силой или дать надежду, облегчить кому-то горе или унять тревогу.",
    "id": "erudite-236",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Матфея",
    "reference": "",
    "question": "Благая весть, содержащая многочисленные пророчества из Еврейских Писаний.",
    "id": "erudite-237",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пот",
    "reference": "Луки 22:44",
    "question": "Что у Иисуса было как капли крови, когда он молился в ночь перед арестом?",
    "id": "erudite-238",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Обижать",
    "reference": "Исход 22:22, 23",
    "question": "Что нельзя было делать с вдовой и сиротой?",
    "id": "erudite-239",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пыль превратилась в мошек",
    "reference": "Исход 8:17",
    "question": "Третья из казней, которые Бог навел на Египет. 0",
    "id": "erudite-240",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Видимость",
    "reference": "Колоссянам 2:23",
    "question": "Что-то внешнее, что производит обманчивое впечатление.",
    "id": "erudite-241",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Река",
    "reference": "Исаия 48:18",
    "question": "«О, если бы ты был внимательным к моим заповедям! Тогда твой мир стал бы как ***».",
    "id": "erudite-242",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Стена",
    "reference": "Притчи 18:11; Экклезиаст 10:8",
    "question": "Богатый сравнивает с этим свое имение; а кто это проламывает, того может укусить змея.",
    "id": "erudite-243",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Фарисей",
    "reference": "Матфея 23:26",
    "question": "Буквальное название этого религиозного течения во дни Иисуса означает «отделившиеся».",
    "id": "erudite-244",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иосиф Флавий",
    "reference": "",
    "question": "Иудейский историк.",
    "id": "erudite-245",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Марка",
    "reference": "",
    "question": "Самая кроткая Благая весть. 1",
    "id": "erudite-246",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Самаритянин",
    "reference": "Иоанна 8:48",
    "question": "Слово, обозначающее национальность, которым фарисеи хотели оскорбить Иисуса.",
    "id": "erudite-247",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Гнойные нарывы",
    "reference": "Исход 9:8—11",
    "question": "Шестая казнь, посланная Богом на Египет.",
    "id": "erudite-248",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Усердие",
    "reference": "2 Коринфянам 8:22",
    "question": "Сердечное расположение, рвение.",
    "id": "erudite-249",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Изделие",
    "reference": "Римлянам 9:20",
    "question": "Что не может спорить с тем, кто его сделал?",
    "id": "erudite-250",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Туман",
    "reference": "Иакова 4:14",
    "question": "С чем Иаков сравнивал короткую жизнь человека?",
    "id": "erudite-251",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Луки",
    "reference": "",
    "question": "Исторически точно составленная Благая весть. 2",
    "id": "erudite-252",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Облако",
    "reference": "Исход 40:36",
    "question": "«Когда *** поднималось от священного шатра, сыновья Израиля сворачивали лагерь».",
    "id": "erudite-253",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Влечение",
    "reference": "Бытие 3:16",
    "question": "Желание, граничащее с болезненностью.",
    "id": "erudite-254",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Самонадеянность",
    "reference": "Иакова 4:16",
    "question": "Свойство сердца человека, который слишком много себе позволяет, делая то, на что не имеет права.",
    "id": "erudite-255",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Зеркало",
    "reference": "Иакова 1:23-25",
    "question": "Слово Бога сравнивается с этим предметом, в котором можно разглядеть себя.",
    "id": "erudite-256",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сапфир",
    "reference": "Иезекииль 1:26",
    "question": "Из какого драгоценного камня был престол Иеговы в видении Иезекииля?",
    "id": "erudite-257",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иоанна",
    "reference": "",
    "question": "Эта Благяа весть написана позже остальных. 3",
    "id": "erudite-258",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Деяния",
    "reference": "",
    "question": "Эта книга наиболее точная история проповеднической деятельности ранних христиан.",
    "id": "erudite-259",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Светильник",
    "reference": "Исход 40:24; 1 Царей 7:49",
    "question": "В священном шатре он стоял один, а в храме Соломона их было десять.",
    "id": "erudite-260",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Озеро огненное",
    "reference": "Откровение 20:14",
    "question": "Куда будут брошены смерть и гадес?",
    "id": "erudite-261",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ярмо",
    "reference": "Матф.11:29, 1 Царей 12:4",
    "question": "Что Соломон возложил на израильтян, а Иисус Христос предлагал людям взять на себя?",
    "id": "erudite-262",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Воанергес",
    "reference": "Марка 3:17",
    "question": "Прозвище Иоанна и Иакова, означающее «сыновья грома».",
    "id": "erudite-263",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Филистимлянин",
    "reference": "1 Самуила 17:8",
    "question": "Национальность Голиафа. 4",
    "id": "erudite-264",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Изумруд",
    "reference": "Откровение 4:3",
    "question": "Драгоценный камень, с которым Иоанн сравнил радугу вокруг Божьего престола в видении.",
    "id": "erudite-265",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Римлянам",
    "reference": "",
    "question": "В письме Павел описывал ситуацию, характерную только для его времени: Иегова только что упразднил один завет и заключил новый.",
    "id": "erudite-266",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Воскресение",
    "reference": "Иоанна 5:29",
    "question": "Это перевод греческого слова «анастасис», которое буквально означает «встать снова».",
    "id": "erudite-267",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Эпидемия скота",
    "reference": "Исход 9:1—7",
    "question": "Пятая казнь, посланная Богом на Египет.",
    "id": "erudite-268",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Отступник",
    "reference": "Исаия 9:17",
    "question": "Человек, оставляющий истинное поклонение.",
    "id": "erudite-269",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Терпение",
    "reference": "Иакова 5:7",
    "question": "Способность \"спокойно ждать чего-то\" или проявлять \"выдержку при провокации или напряжении\". 5",
    "id": "erudite-270",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Гангрена",
    "reference": "2 Тимофею 2:17",
    "question": "Слово отступников будет распространяться подобно этой болезни.",
    "id": "erudite-271",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Свинец",
    "reference": "Исход 15:10",
    "question": "С каким металлом сравнивается гибель войска фараона в Красном море?",
    "id": "erudite-272",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "1 Коринфянам",
    "reference": "",
    "question": "В письме к собранию этого города Павел писал о лишении общения, потому что там допускалась чудовищная безнравственность.",
    "id": "erudite-273",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Палестина",
    "reference": "",
    "question": "Какое название Обетованной земли не встречается в Библии?",
    "id": "erudite-274",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Пена",
    "reference": "Марка 9:20",
    "question": "Что пускал одержимый духом ребенок?",
    "id": "erudite-275",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Участвует",
    "reference": "Откровение 20:6",
    "question": "«Счастлив и свят, кто *** в первом воскресении». 6",
    "id": "erudite-276",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Исправляйте",
    "reference": "Галатам 6:1",
    "question": "Греческое слово означающее «восстановить на правильное место, привести в правильное расположение».",
    "id": "erudite-277",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "2 Коринфянам",
    "reference": "",
    "question": "В этом письме Павел обсудил шаги, предпринятые для сохранения собрания чистым, поощрил желание жертвовать и защитил свое положение как",
    "id": "erudite-278",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Слюна",
    "reference": "1 Самуила 21:12, 13",
    "question": "Что Давид «пускал по бороде», когда притворился безумным перед царем Гефским?",
    "id": "erudite-279",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Лисица",
    "reference": "Луки 13:31, 32",
    "question": "Так был прозван Ирод за свою хитрость.",
    "id": "erudite-280",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Друг",
    "reference": "2 Самуила 15:37",
    "question": "Кем Хусий был для Давида?",
    "id": "erudite-281",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ясно",
    "reference": "Экклезиаст 2:14",
    "question": "Как видит мудрый? 7",
    "id": "erudite-282",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Чудо",
    "reference": "Псалом 71:7",
    "question": "Событие, которое невозможно объяснить на основании известных законов природы.",
    "id": "erudite-283",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Искушение",
    "reference": "1 Тимофею 6:9",
    "question": "Во что впадают желающие обогащаться?",
    "id": "erudite-284",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Пища",
    "reference": "1 Коринфянам 8:8",
    "question": "Это необходимо человеку для жизни, но не «принесет расположения Бога».",
    "id": "erudite-285",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Галатам",
    "reference": "",
    "question": "В письме подчеркивалось, что блага, тенью которых был Моисеев закон, вступили в силу и христианам не нужно обрезываться.",
    "id": "erudite-286",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Клад",
    "reference": "Иов 3:21",
    "question": "Что для страдающего менее желанно, чем смерть?",
    "id": "erudite-287",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сжалиться",
    "reference": "Матфея 20:34",
    "question": "Чувство, которое волнует до глубины души, буквально означает «чувствовать, как сжимаются внутренности». 8",
    "id": "erudite-288",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Горе",
    "reference": "Откровение 12:12",
    "question": "Что ожидало землю после того, как Дьявол был сброшен с неба?",
    "id": "erudite-289",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Хвастовство",
    "reference": "1 Иоанна 2:16",
    "question": "Проявление нечестивого и пустого высокомерия.",
    "id": "erudite-290",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Свадьба",
    "reference": "Луки 12:36",
    "question": "Празднество по случаю чьего-либо вступления в брак.",
    "id": "erudite-291",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Шесть",
    "reference": "Откровение 13:18",
    "question": "Число, которое в книге Откровение служит для несовершенства.",
    "id": "erudite-292",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Эфесянам",
    "reference": "",
    "question": "В этом письме Павел призывает избегать того, чтобы говорить неправду, прибегать к нечистой речи, лениться и долго гневаться.",
    "id": "erudite-293",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Розга",
    "reference": "Притчи 26:3",
    "question": "«Кнут - для коня, узда - для осла, а ***- для спины глупых». 9",
    "id": "erudite-294",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Филиппийцам",
    "reference": "",
    "question": "В письме Павел благодарил христиан это города за сердечные материальные дары и ставил их в пример другим.",
    "id": "erudite-295",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Глиной",
    "reference": "Исаия 64:8",
    "question": "Чем, образно говоря, является человек в руках Великого Горшечника?",
    "id": "erudite-296",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Песчинки",
    "reference": "Осия 1:10",
    "question": "«Сыновья Израиля будут многочисленны, как *** на морском берегу, которые невозможно измерить или сосчитать».",
    "id": "erudite-297",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Соглашение",
    "reference": "1 Самуила 18:3",
    "question": "Договор, который заключили Ионафан с Давидом.",
    "id": "erudite-298",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Испытание",
    "reference": "Иакова 1:12",
    "question": "Счастлив человек, который стойко это переносит.",
    "id": "erudite-299",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ключ",
    "reference": "Откровение 1:18",
    "question": "Иисус Христос имеет этот символический предмет от смерти и гадеса. 0",
    "id": "erudite-300",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пищей",
    "reference": "Иоанна 4:32, 34",
    "question": "Чем, по словам Иисуса, было для него исполнение воли Бога?",
    "id": "erudite-301",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Семь",
    "reference": "Откровение 1:4, 12, 16",
    "question": "Число, которое в книге Откровение служит для определенной Иеговой полноты в отношении его замыслов либо замыслов Сатаны.",
    "id": "erudite-302",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ложе",
    "reference": "Евреям 13:4",
    "question": "\"Брак у всех да чтится и *** да не оскверняется\".",
    "id": "erudite-303",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Колоссянам",
    "reference": "",
    "question": "В этом письме Павел писал, что благая весть «проповедана среди всего творения под небом».",
    "id": "erudite-304",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Раскаленные угли",
    "reference": "Притчи 25:22",
    "question": "Что «собирает на голову» человек делающий добро ненавидящему его?",
    "id": "erudite-305",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Лжи",
    "reference": "Иоанна 8:44",
    "question": "Отцом чего назвал Иисус Сатану? 1",
    "id": "erudite-306",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Туман",
    "reference": "Бытие 2:6",
    "question": "Что в древности поднималось с земли и орошало её?",
    "id": "erudite-307",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "1 Фессалоникийцам",
    "reference": "",
    "question": "Когда Павел писал это письмо из Греческих Писаний была написана только Благая весть от Матфея.",
    "id": "erudite-308",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Гаввафа",
    "reference": "Иоанна 19:13",
    "question": "Как по-еврейски назывался Каменный помост?",
    "id": "erudite-309",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Святое и Святое святых",
    "reference": "Исход 26:33",
    "question": "Назовите отделения в скинии или шатре для поклонения.",
    "id": "erudite-310",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Святость",
    "reference": "2 Коринфянам 7:1",
    "question": "Отделенность, исключительность или посвященность Богу.",
    "id": "erudite-311",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Урон",
    "reference": "1 Коринфянам 3:15",
    "question": "Это потерпит тот, у кого сгорит дело. 2",
    "id": "erudite-312",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Квадрата",
    "reference": "Откровение 21:16",
    "question": "Какую форму имеет Великий город, святой Иерусалим, который Иоанн видел в видении?",
    "id": "erudite-313",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Пасха",
    "reference": "Левит 23:5",
    "question": "Иудейский праздник, отмечавшийся в 14 день первого месяца.",
    "id": "erudite-314",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Слеза",
    "reference": "Откровение 21:4",
    "question": "Ее сотрет Бог с глаз всех людей, переживших Армагеддон.",
    "id": "erudite-315",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Синий",
    "reference": "Числа 15:38, 39",
    "question": "Израильтяне делали по подолу одежды бахрому, а над ней протягивали шнурок этого цвета.",
    "id": "erudite-316",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "2 Фессалоникийцам",
    "reference": "",
    "question": "В этом письме Павел предупреждал, что до присутствия Иисуса придет отступничество.",
    "id": "erudite-317",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Философия",
    "reference": "Колоссянам 2:8",
    "question": "Человеческие рассуждения о смысле бытия. 3",
    "id": "erudite-318",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "1 Тимофею",
    "reference": "",
    "question": "В своем письме Павел призывал зрелого христианина стремиться к преданности Богу.",
    "id": "erudite-319",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Школа",
    "reference": "",
    "question": "Это слово первоначально означала \"досуг\" или проведение свободного времени за какой-нибудь серьезной деятельностью, например изучением.",
    "id": "erudite-320",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Книга",
    "reference": "Иисус Навин 1:8",
    "question": "«Пусть эта *** закона не о ходит от твоих уст. Читай её волголоса день и ночь».",
    "id": "erudite-321",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Плакал",
    "reference": "Исход 2:6",
    "question": "Что делал Моисей, когда его нашла дочь фараона?",
    "id": "erudite-322",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Гостеприимство",
    "reference": "Матфея 25:35",
    "question": "Греческое слово «филоксениа» буквально означает - любовь к незнакомцам.",
    "id": "erudite-323",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Сиван",
    "reference": "Эсфирь 8:9",
    "question": "Третий месяц еврейского календаря. 4",
    "id": "erudite-324",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Гиацинт",
    "reference": "Откровение 21:20",
    "question": "Драгоценный камень, украшающий одиннадцатое основание стены Нового Иерусалима.",
    "id": "erudite-325",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Оводы",
    "reference": "Исход 8:20—24",
    "question": "Четвертая казнь, посланная Богом на Египет.",
    "id": "erudite-326",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "2 Тимофею",
    "reference": "",
    "question": "Это последнее письмо апостола Павла, в котором он предупреждал своего друга и побуждал его избегать отвлечений.",
    "id": "erudite-327",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Условие",
    "reference": "Бытие 34:15",
    "question": "Требование, предъявляемое одной из договаривающихся сторон.",
    "id": "erudite-328",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Свиток",
    "reference": "Иезекииль 3:1",
    "question": "Что Бог повелел съесть Иезекиилю?",
    "id": "erudite-329",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Четыре",
    "reference": "Откровение 7:1, 2",
    "question": "Число, которое в книге Откровение служит для всеохватности или свойственной квадрату симметричности. 5",
    "id": "erudite-330",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Гордый",
    "reference": "Иакова 4:16",
    "question": "Человек, строящий из себя больше, чем он есть на самом деле.",
    "id": "erudite-331",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Злом",
    "reference": "Римлянам 12:17",
    "question": "Чем нельзя воздавать за зло?",
    "id": "erudite-332",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Семь",
    "reference": "Эсфирь 1:13-15",
    "question": "Сколько персидских князей служили советниками царя Артаксеркса и согласились в приговоре, вынесенном царице Астинь?",
    "id": "erudite-333",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Титу",
    "reference": "",
    "question": "В этом письме Павел перечислил требования, которым должен соответствовать надзиратель в христианском собрании.",
    "id": "erudite-334",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Кислев",
    "reference": "Неемия 1:1",
    "question": "Девятый месяц еврейского календаря.",
    "id": "erudite-335",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Грех",
    "reference": "Римлянам 5:12",
    "question": "Что войдя в мир через Адама, принесло с собой смерть? 6",
    "id": "erudite-336",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пища",
    "reference": "Евреям 5:14",
    "question": "Твердый вид этого предназначен для «зрелых, которые через применение научили своё восприятие отличать хорошее от плохого».",
    "id": "erudite-337",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Филимону",
    "reference": "",
    "question": "Павел написал это письмо, что бы примирить раба со своим хозяином.",
    "id": "erudite-338",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Иудеи",
    "reference": "Откровение 2:9",
    "question": "Так называют себя те, которые злословят христиан и являются, по определению Иисуса, синагогой Сатаны.",
    "id": "erudite-339",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Наставление",
    "reference": "Притчи 24:32",
    "question": "Что можно \"принять к сердцу, увидеть и усвоить\"?",
    "id": "erudite-340",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Элул",
    "reference": "Неемия 6:15",
    "question": "Шестой месяц еврейского календаря.",
    "id": "erudite-341",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Изгнание",
    "reference": "Исаия 5:13",
    "question": "Наказание, постигшее в древности народ Бога за непослушание. 7",
    "id": "erudite-342",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Смиренный",
    "reference": "Иакова 4:6",
    "question": "Кто отвлекается от своих достоинств и старательно размышляет о способностях другого человека, в которых тот выше его?",
    "id": "erudite-343",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ияр / зив",
    "reference": "1 Царей 6:1",
    "question": "Второй месяц еврейского календаря.",
    "id": "erudite-344",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Евреям",
    "reference": "",
    "question": "Основная тема этого письма Павла – это превосходство христианской системы поклонения над иудейской.",
    "id": "erudite-345",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пасха",
    "reference": "Деяния 12:4",
    "question": "Еврейский праздник, после которого царь Ирод намеревался вывести Петра к народу.",
    "id": "erudite-346",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Западня",
    "reference": "Притчи 29:25",
    "question": "Ловушка, которую ставит страх перед людьми.",
    "id": "erudite-347",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Глаз",
    "reference": "Матфея 6:22",
    "question": "Светильник для тела. 8",
    "id": "erudite-348",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Град и гром",
    "reference": "Исход 9:22",
    "question": "Седьмая казнь, посланная Богом на Египет.",
    "id": "erudite-349",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Молва",
    "reference": "Притчи 10:18",
    "question": "Её распускают глупцы.",
    "id": "erudite-350",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Слова",
    "reference": "Исход 32:16",
    "question": "Что было высечено на скрижалях?",
    "id": "erudite-351",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иакова",
    "reference": "",
    "question": "В своем письме сводный брат Иисуса приводит яркие наглядные примеры, которые помогают запомнить советы.",
    "id": "erudite-352",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Бедра",
    "reference": "Эфесянам 6:14",
    "question": "Препоясать эту часть тела символизирует готовность.",
    "id": "erudite-353",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сила",
    "reference": "Исаия 40:30, 31",
    "question": "Надеющиеся на Иегову вновь обретут это. 9",
    "id": "erudite-354",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Побуждать",
    "reference": "Евреям 10:24",
    "question": "Греческое слово буквально означает «затачивать».",
    "id": "erudite-355",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Яшма",
    "reference": "Откровение 21:18",
    "question": "Материал, из которого построена стена Нового Иерусалима",
    "id": "erudite-356",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Грех",
    "reference": "Римлянам 5:12",
    "question": "Это слово означает \"промахнуться\", не попасть в цель или мишень.",
    "id": "erudite-357",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ковчег",
    "reference": "Бытие 6:14-16",
    "question": "Плавучее сооружение в 300 локтей длиной и 50 шириной.",
    "id": "erudite-358",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "1 Петра",
    "reference": "",
    "question": "В письме дается совет для христианской жены живущей с неверующим мужем.",
    "id": "erudite-359",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Смерть первенцев",
    "reference": "Исход 12:12, 29",
    "question": "Десятая казнь, посланная Богом на Египет. 0",
    "id": "erudite-360",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ковчег Завета",
    "reference": "Исход 25:10-16",
    "question": "Символическое место присутствия Иеговы в древнем Израиле.",
    "id": "erudite-361",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Своих дел",
    "reference": "Откровение 20:12, 13",
    "question": "На основании чего будет судиться каждый воскресший в отдельности?",
    "id": "erudite-362",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "2 Петра",
    "reference": "",
    "question": "В своем письме апостол предупреждает о том, что день Иеговы придет как вор.",
    "id": "erudite-363",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Тело",
    "reference": "1 Коринфянам 15:44",
    "question": "Что бывает «физическим» и «духовным»?",
    "id": "erudite-364",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Двадцать четыре",
    "reference": "Откровение 4:4",
    "question": "Число, которое в книге Откровение служит для большего размаха (удвоенного количества) того, что организовано Иеговой.",
    "id": "erudite-365",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Поведение",
    "reference": "1 Петра 2:12",
    "question": "«Пусть ваше *** среди других народов и впредь будет образцовым». 1",
    "id": "erudite-366",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "1 Иоанна",
    "reference": "",
    "question": "Это письмо апостола убеждает в том, что «Бог есть любовь».",
    "id": "erudite-367",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Буря",
    "reference": "Луки 8:23",
    "question": "Что обрушилось на озеро, по которому плыл Иисус с учениками, и подвергло опасности их жизни?",
    "id": "erudite-368",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Листья инжира",
    "reference": "Бытие 3:7",
    "question": "Из чего была сделана первая одежда?",
    "id": "erudite-369",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Двенадцать",
    "reference": "Откровение 7:5—8",
    "question": "Число, которое в книге Откровение служит для какой-либо учрежденной Богом организации, на небе или на земле.",
    "id": "erudite-370",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Юность",
    "reference": "Экклезиаст 11:10",
    "question": "«*** и рассвет жизни - суета».",
    "id": "erudite-371",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Колышек",
    "reference": "Судей 4:22",
    "question": "Чем был убит Сисара? 2",
    "id": "erudite-372",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Козел",
    "reference": "Даниил 8:21",
    "question": "Животное, представляющее в пророчестве Даниила царя Греции.",
    "id": "erudite-373",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "2 Иоанна",
    "reference": "",
    "question": "Письмо апостола было направлено «избранной госпоже», в нем говорится о „хождении в истине“.",
    "id": "erudite-374",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Корзина",
    "reference": "Бытие 40:16, 17",
    "question": "Что было во сне хлебодара на его голове?",
    "id": "erudite-375",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Губка",
    "reference": "Марка 15:36",
    "question": "Что пропитали кислым вином, чтобы дать распятому на столбе Иисусу пить?",
    "id": "erudite-376",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Подножие",
    "reference": "Деяния 7:49",
    "question": "Небо является престолом Бога, а чем является земля?",
    "id": "erudite-377",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Шеват",
    "reference": "Захария 1:7",
    "question": "Одиннадцатый месяц еврейского календаря. 3",
    "id": "erudite-378",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Мудрость",
    "reference": "Иакова 3:17",
    "question": "Это способность успешно применять знания, чтобы справляться с трудностями, избегать опасностей и достигать определенных целей.",
    "id": "erudite-379",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Сноп",
    "reference": "Бытие 37:7",
    "question": "Чему поклонялись снопы во сне Иосифа?",
    "id": "erudite-380",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Изъян",
    "reference": "Левит 1:3",
    "question": "Чего не должно быть у жертвенного животного?",
    "id": "erudite-381",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сокровище",
    "reference": "Матфея 6:21",
    "question": "Как в Библии называется то, что особенно дорого сердцу человека, как хорошее так и плохое?",
    "id": "erudite-382",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Дверь",
    "reference": "Иоанна 10:9",
    "question": "С чем сравнивал себя Иисус: «кто входит через меня, тот спасётся»?",
    "id": "erudite-383",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "3 Иоанна",
    "reference": "",
    "question": "Письмо было направлено Гаию, в нем апостол ободряет к совместной работе как сотрудники в истине. 4",
    "id": "erudite-384",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Два",
    "reference": "Откровение 11:3, 4",
    "question": "Число, которое в книге Откровение служит для бесспорного подтверждение чего-либо.",
    "id": "erudite-385",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Подарок",
    "reference": "Бытие 32:18",
    "question": "Что Иаков, опасаясь встречи с Исавом, хотел предложить ему, чтобы умилостивить?",
    "id": "erudite-386",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сон",
    "reference": "Бытие 2:21",
    "question": "Состояние, в которое Иегова погрузил Адама, когда создавал Еву.",
    "id": "erudite-387",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иуды",
    "reference": "",
    "question": "Это письмо сводного брата Иисуса содержит пророчество Еноха, которое больше нигде в Библии не упоминается.",
    "id": "erudite-388",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Эммануил",
    "reference": "Матфея 1:23",
    "question": "Это имя означает «с нами Бог».",
    "id": "erudite-389",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Корван",
    "reference": "Марка 7:11",
    "question": "Жертвенный дар Богу, чем могли бы пользоваться близкие родственники. 5",
    "id": "erudite-390",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Дар вечной жизни",
    "reference": "Римлянам 6:23",
    "question": "Что-то данное по благосклонности Бога, чего человек никогда бы не достиг бы и не приобрел бы своими усилиями.",
    "id": "erudite-391",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Послушание и повиновение",
    "reference": "1 Самуила 15:22",
    "question": "Что лучше «жертвы и лучше жира баранов»?",
    "id": "erudite-392",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Корзина",
    "reference": "Деяния 9:25",
    "question": "В чем был спущен Павел со стены в Дамаске?",
    "id": "erudite-393",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Хвалить",
    "reference": "1 Коринфянам 11:2",
    "question": "Этим можно выражать свое одобрение, положительный отзыв или благосклонное отношение.",
    "id": "erudite-394",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Откровение",
    "reference": "",
    "question": "Книга была написана языком символов, ее название означает «раскрытие» или «открытие».",
    "id": "erudite-395",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Сораб",
    "reference": "Откровение 19:10",
    "question": "Ангел сказал Иоанну: «Я всего лишь *** тебе и твоим братьям». 6",
    "id": "erudite-396",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сынок",
    "reference": "Луки 2:48",
    "question": "Слово, которое сказала огорченная мать Иисуса, найдя своего отрока в храме.",
    "id": "erudite-397",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Милосердие",
    "reference": "Иакова 2:13",
    "question": "Что превозносится над судом?",
    "id": "erudite-398",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Награда",
    "reference": "Даниила 2:6",
    "question": "Дар, который Навуходоносор обещал человеку, разгадавшему его сон.",
    "id": "erudite-399",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Потомок",
    "reference": "Псалом 37:25",
    "question": "Один из тех людей, которых Давид, равно как и праведного, не видел просящим хлеба.",
    "id": "erudite-400",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сапфир",
    "reference": "Откровение 21:19",
    "question": "Драгоценный камень, по красоте, блеску и твердости уступающей только алмазу, который был поставлен во второе основание Нового Иерусалима.",
    "id": "erudite-401",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Воин",
    "reference": "2 Тимофею 2:4",
    "question": "Кто не вовлекается в житейские дела? 7",
    "id": "erudite-402",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Помост",
    "reference": "2 Летопись 6:13",
    "question": "Площадка среди храма, откуда Соломон всенародно призывал Иегову.",
    "id": "erudite-403",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Благоразумие",
    "reference": "Филипийцам 4:5",
    "question": "Черта нашего характера, которая должна быть известной всем людям.",
    "id": "erudite-404",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Рога",
    "reference": "1 Царей 2:28",
    "question": "За что ухватился Иоав, скрываясь в шатре Иеговы от возмездия Соломона?",
    "id": "erudite-405",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Суд",
    "reference": "Деяния 22:25",
    "question": "Государственный орган власти, без которого не позволено наказывать римского гражданина.",
    "id": "erudite-406",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Наблюдение",
    "reference": "Иеремия 51:12",
    "question": "Что советует усилить \"против жителей Вавилона\" пророк Иеремия?",
    "id": "erudite-407",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Доверительный разговор",
    "reference": "Притчи 15:22",
    "question": "Без чего \"планы расстроятся\"? 8",
    "id": "erudite-408",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Невестка",
    "reference": "Руфь 1:8",
    "question": "Родственное отношение жены сына к его матери.",
    "id": "erudite-409",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Огола",
    "reference": "Иезекииль 23:4",
    "question": "Символическое имя, которым пророк Иезекииль называет отпадшую от Бога Самарию.",
    "id": "erudite-410",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Пепельные ворота",
    "reference": "Неемия 3:14",
    "question": "Ворота, которые ремонтировал Малхия, сын Рехава, при восстановлении Иерусалимских стен.",
    "id": "erudite-411",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Окно с решёткой",
    "reference": "Судей 5:28",
    "question": "Куда смотрела мать Сисары, ожидая его возвращения после сражения?",
    "id": "erudite-412",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Глаза",
    "reference": "Откровение 3:18",
    "question": "Что Иоанн советует помазать мазью ангелу собрания в Лаодикии?",
    "id": "erudite-413",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Шёпот",
    "reference": "Псалом 90:9",
    "question": "Подобно чему \"наши годы приходят к концу\"? 9",
    "id": "erudite-414",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Опора",
    "reference": "2 Самуила 22:19",
    "question": "Чем Иегова был для Давида, когда \"ненавидящие его выступили против него в день его бедствия\".",
    "id": "erudite-415",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Железо",
    "reference": "Даниил 2:33",
    "question": "Металл, из которого состояли ноги статуи приснившейся Навуходоносору.",
    "id": "erudite-416",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "На груди",
    "reference": "Исаия 40:11",
    "question": "Где добрый пастырь носит ягнят?",
    "id": "erudite-417",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Адрамелех и Анамелех",
    "reference": "2 Царей 17:31",
    "question": "Божества, которым Сепарваимцы \"сжигали своих сыновей\".",
    "id": "erudite-418",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Приятель",
    "reference": "Матфея 26:50",
    "question": "Как назвал Иисус Иуду, который пришел предать Его?",
    "id": "erudite-419",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Видение",
    "reference": "1 Самуила 3:15",
    "question": "Что Самуил боялся рассказать Илию? 0",
    "id": "erudite-420",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Печать",
    "reference": "Матфея 27:66",
    "question": "Знак неприкосновенности на камне у могилы Иисуса.",
    "id": "erudite-421",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Текел",
    "reference": "Даниил 5:27",
    "question": "Слово, означающее «ты взвешен на весах и найден слишком лёгким».",
    "id": "erudite-422",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Молния",
    "reference": "Матфея 28:2, 3",
    "question": "Чему был подобен ангел, отваливший камень от гроба?",
    "id": "erudite-423",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ворота",
    "reference": "Авдий 13",
    "question": "\"Не следовало тебе входить в *** моего народа в день, когда постигла его беда\".",
    "id": "erudite-424",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Рука",
    "reference": "Притчи 10:4",
    "question": "Что, по словам Соломона, может сделать человека бедным и может обогатить его?",
    "id": "erudite-425",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Исправление",
    "reference": "Притчи 29:15",
    "question": "\"Розга и *** дают мудрость\". 1",
    "id": "erudite-426",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Челюсть",
    "reference": "Иов 41:2",
    "question": "\"Можешь ли шипом проткнуть ему ***\"?",
    "id": "erudite-427",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вестник",
    "reference": "1 Самуила 11:4",
    "question": "Один из тех людей, которые пришли к Саулу и сообщили о нависшей угрозе над Иависом Галаадским.",
    "id": "erudite-428",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ареопаг",
    "reference": "Деяния 17:19",
    "question": "Суд, куда привели Павла \"некоторые из философов\" -афинян.",
    "id": "erudite-429",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Преступник / беззаконник",
    "reference": "Исаия 53:12; Луки 22:37",
    "question": "Категория людей, к которым был причислен Иисус Христос.",
    "id": "erudite-430",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Голод",
    "reference": "Притчи 19:15",
    "question": "Что будет терпеть нерадивая душа?",
    "id": "erudite-431",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ногти",
    "reference": "Даниил 4:33",
    "question": "Что выросло у Навуходоносора, как когти птицы? 2",
    "id": "erudite-432",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Фараон",
    "reference": "Бытие 40:1, 2",
    "question": "Общий титул древних египетских царей.",
    "id": "erudite-433",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Зеркало",
    "reference": "Иов 37:18",
    "question": "С ним сравниваются небеса в книге Иова?",
    "id": "erudite-434",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Иссахар",
    "reference": "Бытие 49:14",
    "question": "Племя, которое умирающий Иаков описывает как \"осла с крепкими костями, лежащего между двумя седельными вьюками\".",
    "id": "erudite-435",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Перес",
    "reference": "Даниил 5:28",
    "question": "Слово, означающее «твоё царство разделено и отдано мидянам и персам».",
    "id": "erudite-436",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Голова филистимлянина",
    "reference": "1 Самуила 17:57",
    "question": "Что было у Давида в руке, когда Авенир привел его к Саулу?",
    "id": "erudite-437",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Воловьи рожны",
    "reference": "Экклезиаст 12:11",
    "question": "Чему подобны слова мудрых? 3",
    "id": "erudite-438",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Серебро",
    "reference": "Даниил 2:32",
    "question": "Металл, из которого состояли грудь и руки статуи приснившейся Навуходоносору.",
    "id": "erudite-439",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Огонь",
    "reference": "Второзаконие 4:33",
    "question": "Что видел народ Израиля на горе, когда Бог говорил с ними?",
    "id": "erudite-440",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Назореи",
    "reference": "Судей 13:5; 16:17",
    "question": "Самсон, Самуил, Иоанн Креститель, люди посвященные Господу.",
    "id": "erudite-441",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Праведник",
    "reference": "Матфея 27:19",
    "question": "Название, которое дала Христу жена Пилата, когда ходатайствовала за Него.",
    "id": "erudite-442",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Позор",
    "reference": "Бытие 30:23",
    "question": "Что,по словам Рахили, снял с нее Бог, когда у нее родился Иосиф?",
    "id": "erudite-443",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Злые мысли",
    "reference": "Марка 7:21, 23",
    "question": "Что исходит из сердца человека? 4",
    "id": "erudite-444",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Няня",
    "reference": "Числа 11:12",
    "question": "\"Ты говоришь мне: Неси их на груди, как *** носит грудного ребёнка\".",
    "id": "erudite-445",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Поток",
    "reference": "Второзаконие 9:21",
    "question": "Куда Моисей бросил истертого в порошок тельца?",
    "id": "erudite-446",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Сосед",
    "reference": "Притчи 27:10",
    "question": "«Лучше *** вблизи, чем брат вдали».",
    "id": "erudite-447",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Охотник",
    "reference": "Иеремия 16:16",
    "question": "Один из множества тех людей, которых по словам Иеремии, пошлет Иегова вслед за рыболовами, чтобы искать злых.",
    "id": "erudite-448",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Закон",
    "reference": "Деяния 6:13",
    "question": "Что по показанию лжесвидетелей, нарушал Стефан?",
    "id": "erudite-449",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Аарон",
    "reference": "Исход 4:10-15",
    "question": "\"Уста\" Моисея. 5",
    "id": "erudite-450",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Поведение",
    "reference": "Притчи 10:23",
    "question": "«Для глупого распутное *** как бы забава, а человеку проницательному свойственна мудрость».",
    "id": "erudite-451",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Дерево",
    "reference": "Даниил 4:20-22",
    "question": "С чем сравнивается царь Навуходоносор в своем сне?",
    "id": "erudite-452",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Стена",
    "reference": "Матфея 4:5",
    "question": "Пристройка окружающая храм, куда дьявол поставил Иисуса, искушая его.",
    "id": "erudite-453",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Дети",
    "reference": "Иоанна 13:33",
    "question": "Каким словом назвал Иисус близких ему друзей, говоря, что не долго ему уже быть с ними?",
    "id": "erudite-454",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Ангел",
    "reference": "Иоанна 20:13",
    "question": "Кому принадлежат слова: \"Женщина, почему ты плачешь\"?",
    "id": "erudite-455",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Крыша",
    "reference": "Псалом 102:7",
    "question": "Я изнурён, как одинокая птица на *** ? 6",
    "id": "erudite-456",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Обет",
    "reference": "Бытие 28:20",
    "question": "Торжественное обещание, данное Богу.",
    "id": "erudite-457",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Вода",
    "reference": "Исаия 33:15, 16",
    "question": "Что не иссякнет у человека, который \"отказывается наживаться с помощью обмана и не позволяет своим рукам брать взятки\"?",
    "id": "erudite-458",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Хеттеяниин",
    "reference": "2 Самуила 11:3",
    "question": "Национальность Урии - мужа Вирсавии.",
    "id": "erudite-459",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Ленивец",
    "reference": "Притчи 6:6",
    "question": "Как в Библии называется лентяй?",
    "id": "erudite-460",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Яшма",
    "reference": "Откровение 4:3",
    "question": "Драгоценный камень, которому был подобен Сидящий на престоле Агнец.",
    "id": "erudite-461",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Бедренный сустав",
    "reference": "Бытие 32:24, 25",
    "question": "Часть тела, поврежденная у внука Авраама. 7",
    "id": "erudite-462",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Наблюдение",
    "reference": "Иеремия 51:12",
    "question": "Что советует усилить \"против стен Вавилона\" пророк Иеремия?",
    "id": "erudite-463",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "hard"
  },
  {
    "answer": "Радуга",
    "reference": "Откровение 10:1",
    "question": "\"И я увидел другого ангела сильного,\" Что было над головой этого ангела?",
    "id": "erudite-464",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Потоп",
    "reference": "Бытие 6:13, 17",
    "question": "Первое истребление мира.",
    "id": "erudite-465",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Творец",
    "reference": "Исаия 27:11",
    "question": "\"Этот народ ничего не понимает, поэтому его *** не проявит к нему милосердия\".",
    "id": "erudite-466",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Подарок",
    "reference": "Притчи 17:8",
    "question": "\"*** — драгоценный камень, приносящий благосклонность, в глазах его владельца\".",
    "id": "erudite-467",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  },
  {
    "answer": "Висок",
    "reference": "Судей 4:21",
    "question": "Куда Иаиль поразила Сисару? 8",
    "id": "erudite-468",
    "category": "erudite",
    "categoryName": "Эрудит",
    "difficulty": "easy"
  }
];