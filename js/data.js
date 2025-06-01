// js/data.js
var clubsDatabase = {
    // Спортивные кружки
    "Баскетбол": {
        schedule: [
            { day: "---", time: "---", location: "Спортзал" },
            { day: "---", time: "---", location: "Спортзал" }
        ],
        leader: "---",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "Тренировки по баскетболу для всех уровней подготовки. Занятия проходят в спортзале ИЭК."
    },
    "Волейбол": {
        schedule: [
            { day: "---", time: "---", location: "Спортзал" },
            { day: "---", time: "---", location: "Спортзал" }
        ],
        leader: "Ершов Сергей Владимирович",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "Тренировки по волейболу. Занятия проходят в спортзале ИЭК."
    },
    "Настольный теннис": {
        schedule: [
            { day: "---", time: "---", location: "Зал настольного тенниса" },
            { day: "---", time: "---", location: "Зал настольного тенниса" }
        ],
        leader: "Ершов Сергей Владимирович",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "Индивидуальные и парные тренировки. Занятия проходят в теннисном зале ИЭК."
    },
    "Армрестлинг": {
        schedule: [
            { day: "---", time: "---", location: "Тренажерный зал" }
        ],
        leader: "Холин Г.В.",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Кружок танцев «Энергия»": {
        schedule: [
            { day: "---", time: "---", location: "КЭЦ" },
            { day: "---", time: "---", location: "КЭЦ" }
        ],
        leader: "Богданова Ирина Михайловна",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Медиацентр": {
        schedule: [
            { day: "Понедельник", time: "---", location: "Каб. 121 (корп.1)" },
            { day: "Среда", time: "---", location: "Каб. 216 (корп.2)" }
        ],
        leader: "Стародубцева Евгения Игоревна",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "--- "
    },
    "Театральный кружок - ЛЭП-500": {
        schedule: [
            { day: "---", time: "---", location: "КЭЦ (актовый зал)" }
        ],
        leader: "Гречман Александр Евгеньевич",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "«ЛЭП» расшифровывается как Линия ЭлектроПередач. Число «500» является интерпретацией киловатт электричества. Кружок занимается постановкой театральных сцен, миниатюр, малых форм творчества, этюдами. На каждом мероприятии проводимом в колледже кружок старается выступать. При желании обращаться в КЭЦ."
    },
    "Знатоки": {
        schedule: [
            { day: "---", time: "---", location: "---" }
        ],
        leader: "Михайлова Кристина",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Учебная группа": {
        schedule: [
            { day: "Среда", time: "---", location: "---" }
        ],
        leader: "Аверьянова Ульяна и Галямова Милана",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "во взаимодействии с заведующими отделениями осуществляет контроль успеваемости;\n• во взаимодействии с заведующими отделениями осуществляет контроль посещаемости;• участвует в работе учебно-воспитательной комиссии• участвует в работе комиссии по переходу студентов с платного обучения на бесплатное обучение."
    },
    "Организационная группа": {
        schedule: [
            { day: "---", time: "---", location: "---" }
        ],
        leader: "Дьяченко Анна и Врадий Диана",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Спортивная группа": {
        schedule: [
            { day: "Вторник", time: "---", location: "Спортзал" }
        ],
        leader: "Окунев Игорь",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Информационно-рекламная группа «ПрофМедиа центр ИЭК»": {
        schedule: [
            { day: "Четверг", time: "---", location: "---" }
        ],
        leader: "Еропова Василина",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Амбассадоры ФП «Профессионалитета»": {
        schedule: [
            { day: "Пятница", time: "---", location: "---" }
        ],
        leader: "Попова Елизавета",
        contacts: "---",
        photo: "images/leaders/default.jpg",
        description: "---"
    },
    "Профилактика социально негативных явлений «Наш ВЫБОР»": {
        schedule: [
            { day: "Четверг", time: "---", location: "---" }
        ],
        leader: "Бурлакова Елизавета",
        contacts: "---",
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
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
