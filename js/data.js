// js/data.js
var clubsDatabase = {
    // Спортивные кружки
    "Баскетбол": {
        schedule: [
            { day: "Понедельник", time: "16:00-18:00", location: "Спортзал №1" },
            { day: "Среда", time: "16:30-18:30", location: "Спортзал №1" }
        ],
        leader: "---",
        contacts: "sport@college.ru, +7 (915) 123-45-67",
        photo: "images/leaders/default.jpg",
        description: "Тренировки по баскетболу для всех уровней подготовки. Занятия проходят в спортзале ИЭК."
    },
    "Волейбол": {
        schedule: [
            { day: "Вторник", time: "17:00-19:00", location: "Спортзал №2" },
            { day: "Четверг", time: "17:30-19:30", location: "Спортзал №2" }
        ],
        leader: "Ершов Сергей Владимирович",
        contacts: "volleyball@college.ru",
        photo: "images/leaders/default.jpg",
        description: "Тренировки по волейболу. Занятия проходят в спортзале ИЭК."
    },
    "Настольный теннис": {
        schedule: [
            { day: "Понедельник", time: "15:00-17:00", location: "Зал настольного тенниса" },
            { day: "Пятница", time: "14:00-16:00", location: "Зал настольного тенниса" }
        ],
        leader: "Ершов Сергей Владимирович",
        contacts: "tennis@college.ru",
        photo: "images/leaders/default.jpg",
        description: "Индивидуальные и парные тренировки. Занятия проходят в теннисном зале ИЭК."
    },
    "Армрестлинг": {
        schedule: [
            { day: "Среда", time: "16:00-18:00", location: "Тренажерный зал" }
        ],
        leader: "Холин Г.В.",
        contacts: "vasilev@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Танцы ": {
        schedule: [
            { day: "Вторник", time: "18:00-20:00", location: "КЭЦ (каб. 114)" },
            { day: "Пятница", time: "17:30-19:30", location: "КЭЦ (каб. 114)" }
        ],
        leader: "Богданова Ирина Михайловна",
        contacts: "dance@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Медиацентр": {
        schedule: [
            { day: "Понедельник", time: "15:00-17:00", location: "Каб. 121 (корп.1)" },
            { day: "Среда", time: "15:30-17:30", location: "Каб. 216 (корп.2)" }
        ],
        leader: "Стародубцева Евгения Игоревна",
        contacts: "media@college.ru",
        photo: "images/leaders/default.jpg",
        description: "--- "
    },
    "Кружок съемки кино - ЛЭП-500": {
        schedule: [
            { day: "Вторник", time: "16:00-19:00", location: "КЭЦ (актовый зал)" }
        ],
        leader: "Гречман Александр Евгеньевич",
        contacts: "film@college.ru",
        photo: "images/leaders/default.jpg",
        description: "Расшифровка названия:«ЛЭП» расшифровывается как Линия ЭлектроПередач. Число «-500» является интерпретацией киловатт электричества. Кружок занимается постановкой театральных сцен, миниатюр, малых форм творчества, этюдами. Каждому мероприятию проводимому в колледже кружок старается выступать. 1. Достижения поощряются материальными дивидендами. 2. Возможность проявить свои таланты за рамками колледжа. (Пр. «Студвесна», «Молодежные проекты».) 3. Вступить в кружок «ЛЭП-500» может любой желающий нужно лишь иметь желание. При желании обращаться в КЭЦ."
    },
    "Знатоки": {
        schedule: [
            { day: "Понедельник", time: "14:00-16:00", location: "Каб. 305" }
        ],
        leader: "Михайлова Кристина",
        contacts: "science@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Учебная группа": {
        schedule: [
            { day: "Среда", time: "13:00-15:00", location: "Каб. 210" }
        ],
        leader: "Аверьянова Ульяна и Галямова Милана",
        contacts: "study@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Организационная группа": {
        schedule: [
            { day: "Пятница", time: "12:00-14:00", location: "Каб. 215" }
        ],
        leader: "Дьяченко Анна и Врадий Диана",
        contacts: "org@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Спортивная группа": {
        schedule: [
            { day: "Вторник", time: "17:00-19:00", location: "Спортзал №1" }
        ],
        leader: "Окунев Игорь",
        contacts: "sportorg@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Информационно-рекламная группа «ПрофМедиа центр ИЭК»": {
        schedule: [
            { day: "Четверг", time: "15:00-17:00", location: "Каб. 220" }
        ],
        leader: "Еропова Василина",
        contacts: "choice@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Амбассадоры ФП «Профессионалитета»": {
        schedule: [
            { day: "Пятница", time: "14:00-16:00", location: "Каб. 310" }
        ],
        leader: "Попова Елизавета",
        contacts: "ambassadors@college.ru",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Профилактика социально негативных явлений «Наш ВЫБОР»": {
        schedule: [
            { day: "Четверг", time: "16:00-18:00", location: "Каб. 205" }
        ],
        leader: "Бурлакова Елизавета",
        contacts: "prevention@college.ru",
        photo: "images/leaders/default.jpg  ",
        description: "Профилактика социально негативных явлений среди студентов, организация тематических мероприятий."
    }
};

/// Для страницы сводного расписания
function getAllSchedule() {
    const allSchedule = [];
    for (const [clubName, clubData] of Object.entries(clubsDatabase)) {
        if (clubData.schedule) {
            clubData.schedule.forEach(session => {
                allSchedule.push({
                    day: session.day,
                    club: clubName,
                    time: session.time,
                    location: session.location
                });
            });
        }
    }
    return allSchedule;
}

// Создаем глобальные переменные
window.clubsDatabase = clubsDatabase;
window.allSchedule = getAllSchedule();
window.getClubSchedule = function(clubName) {
    return clubsDatabase[clubName]?.schedule || [];
};

// Для страницы кружка
function getClubSchedule(clubName) {
    return clubsDatabase[clubName]?.schedule || [];
}