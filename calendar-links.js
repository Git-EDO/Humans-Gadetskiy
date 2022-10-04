// Находим все мероприятия на странице
const events = document.querySelectorAll('.event');

// Для каждого мероприятия...
events.forEach(event => {

// ... создаём время из блока "time"
const thisTime = event.closest('.record').childNodes[1].innerHTML.trim().replace(':','');

// ... название берем из первой ссылки блоки события
let linkName = event.childNodes[1].textContent.trim();
// ... ссылка на событие для google-календаря
let linkToTheEvent = event.childNodes[1].href;

// ... создаём текущий год для ссылки google-календаря
const thisYear = new Date().getFullYear();

// ... создаём день и месяц из label "day"
let linkDate = event.closest('.day').childNodes[1].textContent.split(' ');
let month = linkDate[1].replace(',', '')
let thisDay = linkDate[0]

let thisMonth;

// Преобразуем русские названия месяцев в числа-строки для google-календаря
switch(month) {
case "Янв": 
thisMonth = String('01'); 
break;
case "Фев": 
thisMonth = String('02'); 
break;
case "Мар": 
thisMonth = String('03'); 
break;
case "Апр": 
thisMonth = String('04'); 
break;
case "Май": 
thisMonth = String('05'); 
break;
case "Июн": 
thisMonth = String('06'); 
break;
case "Июл": 
thisMonth = String('07'); 
break;
case "Авг": 
thisMonth = String('08'); 
break;
case "Сен": 
thisMonth = String('09'); 
break;
case "Окт": 
thisMonth = String('10'); 
break;
case "Ноя": 
thisMonth = String('11'); 
break;
case "Дек": 
thisMonth = String('12'); 
break;
}

// Создаём строку для google-календаря
let calendareDate = `${thisYear}${thisMonth}${thisDay}T${thisTime}00`;

// Создаём ссылку в ноде события для каждого мероприятия
const eventLink = document.createElement('a');
eventLink.classList.add('link-to-calendar');
eventLink.innerHTML = '+ Добавить в календарь';
event.append(eventLink);

// Ссылка формата google-календаря
eventLink.href = `http://www.google.com/calendar/render?
action=TEMPLATE
&text=${linkName}
&dates=${calendareDate}/${calendareDate}
&details=${linkToTheEvent}
&location=
&trp=false
&sprop=
&sprop=name:`
eventLink.target = '_blank';
});