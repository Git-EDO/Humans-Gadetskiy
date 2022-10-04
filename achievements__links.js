// Получаем ссылки из страницы "Шкала достижений"

// Ссылка на страницу, на которой находятся данные
const getTopURL = fetch("/pl/user/scale/view-results?id=130809&userId=${uid}");

// Получаем разметку страницы "Шкала достижений" в переменную "topHTML"
getTopURL
.then(res => res.text())
.then((data) => {
let topHTML = document.createElement('div');
topHTML.innerHTML = data;

// Находим всех пользователей в рейтинге
const usersAll = topHTML.querySelectorAll('.kv-grid-table tbody tr');

// Пустой массив для аватарок пользователей
const users = [];

// Для каждого из пользователей создаём объект, в который помещаем данные о рейтинге, имени, ссылку на картинку-аватарку
usersAll.forEach(user => {

let newUser = {
userName: user.querySelector('.user-icon').innerText,
userScore: user.querySelector('td[data-col-seq="1"]').innerHTML,
userAvatar: user.querySelector('.user-icon img').src
} ;

if(users.length<19) {
users.push(newUser);
}
});


const avatarsWrapper = document.querySelector('.user-data__top-20-wrap');

// Для каждого из 20 пользователей создаём оболочку "user-data__top-20-container", в которую помещаем 2 элемента: 
// картинку и информационную плашку, которую по умолчанию скрываем (появляется при наведении на контейнер)

users.forEach(user => {

const avatar = document.createElement('img');
avatar.classList.add('user-data__top-20-member')
avatar.src = user.userAvatar

const avatarContainer = document.createElement('div');
avatarContainer.classList.add('user-data__top-20-container')

const avatarInfo = document.createElement('div');
avatarInfo.classList.add('user-data__top-20-info');

const avatarName = document.createElement('div');
avatarName.classList.add('user-data__top-20-info-name');
avatarName.innerHTML = `${user.userName}`;

const avatarScore = document.createElement('div');
avatarScore.classList.add('user-data__top-20-info-score');
avatarScore.innerHTML = `${user.userScore}`;

avatarContainer.append(avatar)
avatarContainer.append(avatarInfo)
avatarInfo.append(avatarName);
avatarInfo.append(avatarScore);
avatarsWrapper.append(avatarContainer)
});

});