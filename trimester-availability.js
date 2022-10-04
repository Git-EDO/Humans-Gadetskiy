// Получаем список доступных триместров
const availableCourses =  [643394525, 6483968291, 64339452711, 64339452811, 64339452911];

// Находим все триместры, имеющиеся на странице
const trimesters = document.querySelectorAll('.trimester');

// Получаем номера триместров на странице
trimesters.forEach(trimester => {
let trimesterLink = trimester.href.split('/').slice(-1);
let linkNum = Number(trimesterLink);

// Проверяем наличие номера триместра в полученном массиве
if(availableCourses.indexOf(linkNum) === -1) {
trimester.classList.add('disable');
}
});