// Получаем список доступных курсов
const availableCourses =  [12345, 12346, 64339452711, 64339452811, 64339452911];

// Находим все курсы, имеющиеся на странице
const courses = document.querySelectorAll('.course');

// Получаем номера курсов на странице
courses.forEach(course => {
let courseLink = course.href.split('/').slice(-1);
let courseNum = Number(courseLink);

// Проверяем наличие номера курса в полученном массиве
if(availableCourses.indexOf(courseNum) === -1) {
course.classList.add('disable');
}
});