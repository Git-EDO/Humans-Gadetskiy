// Получаем ссылки из страницы "Данные"

// Ссылка на страницу, на которой находятся ссылки
const getURL = fetch("/teach/control/stream/view/id/648396907");

// Получаем разметку страницы "Данные" в переменную "html"
getURL
.then(res => res.text())
.then((data) => {
let html = document.createElement('div');
html.innerHTML = data;

// Присваиваем полученные из разметки данные переменной для баннера
const eventHTML = html.querySelector('.retrit-link')
let eventLink = eventHTML.innerHTML;

// Присваиваем полученные из разметки данные переменной для информационного канала
const infoHTML = html.querySelector('.channel-link');
let channelLink = infoHTML.innerHTML;

// Присваиваем полученные из разметки данные переменной для чата с ментором
const chatHTML = html.querySelector('.chat-link');
let chatLink = chatHTML.innerHTML;

// Присваиваем ссылку из полученной переменной в баннер
document.querySelector('.science-life').href = eventLink

// Присваиваем ссылку из полученной переменной в информационный канал
document.querySelector('.info').href = channelLink

// Присваиваем ссылку из полученной переменной в чат с ментором
document.querySelector('.mentor').href = chatLink

// Получаем значение места и рейтинг
const userPlace = html.querySelector('.text-left .badge');
document.querySelector('.user-data__place span').innerHTML = userPlace.innerHTML.split(' ')[0];

const userRating = html.querySelector('.text-right .badge');
document.querySelector('.user-data__score span').innerHTML = userRating.innerHTML.split(' ')[0];

// Получаем текущий прогресс завершения курса
const currentProgress = userRating.innerHTML.split(' ')[0] / html.querySelector('.max-score').innerHTML
document.querySelector('.count-progress').innerHTML = Math.ceil(currentProgress * 100) + '%'

// Устанавливаем значение '--p' CSS-переменной '.user-data' чтобы нарисовать pie-chart
document.querySelector('.user-data').style.setProperty('--p', Math.ceil(currentProgress * 100))

// Проверяем доступность скачивания сертификата и отображаем соответствующую кнопку
if(html.querySelector('.certificate-available').innerHTML === 'Нет') {
document.querySelector('.user-data__sertificate').style.display = 'none'
}
})
.catch(err => console.log(err));