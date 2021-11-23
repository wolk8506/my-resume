const now = new Date(); //Текущя дата
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
const BIRTHDAY = new Date(1985, 2, 4); //Дата рождения
const dobnow = new Date(today.getFullYear(), BIRTHDAY.getMonth(), BIRTHDAY.getDate()); //ДР в текущем году
const WORK_TIME = new Date(2019, 9); //Дата последнего места работы
const time = document.getElementById('time');
let age; //Возраст
let workYear; //
let workMonth;
//Возраст = текущий год - год рождения
age = today.getFullYear() - BIRTHDAY.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobnow) {
  age = age - 1;
}
//document.write(`Возраст: ${age}`);
// расчет времени работы год и месяц
workYear = today.getFullYear() - WORK_TIME.getFullYear();
workMonth = today.getMonth() + 1 - WORK_TIME.getMonth();

time.innerHTML = fTime(workYear, 'year') + fTime(workMonth, 'month');

function fTime(period, title) {
  if (period < 1) {
    return '';
  } else if (period === 1) {
    return `${period} ${title} `;
  }
  return `${period} ${title}s `;
}
