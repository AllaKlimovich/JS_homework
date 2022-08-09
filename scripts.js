//Задание 1
/*
console.log('Задание 1');
let Name = prompt('Ваше имя');
let age = prompt('Ваш возраст');
let city = prompt('Ваш город проживания');
let phone = prompt('Ваш номер телефона',);
let email = prompt('Ваш email');
let company = prompt('Ваша компания');

document.write('<h1>Меня зовут ' + Name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '.</h1>');
document.write('<h1>Мои контактные данные: ' + phone + ', '+ email +'.</h1>');

//Задание 2
console.log('Задание 2');
let year = 2022 - age;
document.write('<h3>' + Name + ' родился в ' + year +' году.</h3>');

//Задание 3
console.log('Задание 3');
let str = "135531";
console.log(str, typeof(str));
(Number(str[0])+Number(str[1])+Number(str[2]) == Number(str[3])+Number(str[4])+Number(str[5])) ? alert('ДА') : alert('НЕТ');


//Задание 4
console.log('Задание 4');

let a = 1;
console.log('a = ', a);
(a > 0) ? console.log('Верно. а > 0') : console.log('Неверно.');

a = 0;
console.log('a = ', a);
(a > 0) ? console.log('Верно. а > 0') : console.log('Неверно.');

a = -3;
console.log('a = ', a);
(a > 0) ? console.log('Верно. а > 0') : console.log('Неверно.');


//Задание 5
console.log('Задание 5');

a = 10;
let b = 2;
console.log('a =', a , 'b =', b);
console.log('Сумма =', sum = a + b);
console.log('Разность =', sub = a - b);
console.log('Произведение =', multi = a * b);
console.log('Частное =', div = a / b);

if (sum > 1) console.log(sum * sum);

//Задание 6
console.log('Задание 6');

((a > 2 && a < 11) || (b >= 6 && b < 14)) ? console.log('Верно') : console.log('Неверно');

if (a > 2 && a < 11) {
    console.log('Верно');
} else if (b >= 6 && b < 14) {
    console.log('Верно') 
} else {
    console.log('Неверно')
}

//Задание 7
console.log('Задание 7');

let n = 60;
console.log(n);

if (n >= 0 && n < 15) {
    console.log('Первая четверть часа!');
} else if (n >= 15 && n < 30) {
    console.log('Вторая четверть часа!');
} else if (n >= 30 && n < 45) {
    console.log('Третья четверть часа!');
} else if (n >= 45 && n < 59) {
    console.log('Четвертая четверть часа!');
} else {
    console.log('Пошел следующий час');
    console.log('В часе 60 минут!');}


//Задание 8
console.log('Задание 8');

let day = prompt('Укажите число месяца');

if (day >= 1 && day <= 10) {
        document.write('<h4> Это число попадает в первую декаду месяца.</h4>');
} else if (day >= 11 && day <= 20) {
        document.write('<h4> Это число попадает во вторую декаду месяца.</h4>');
} else if (day >= 21 && day <= 31) {
        document.write('<h4> Это число попадает в третью декаду месяца.</h4>');
} else {document.write('<h1> ОШИБКА. Укажите число от 1 до 31</h1>');
}
*/

// Задание 9
console.log('Задание 9');

let z = prompt('Введите число');
if (z <= 0) {
    console.log('ОШИБКА!');
} else if (z < 365) {
    console.log('Меньше года');
} else { 
    let year = z / 365;
    console.log ('Это лет: ' + year );
}

if (z < 31){
    console.log('Меньше месяца');
} else { 
    let month = z / 31;
    console.log ('Это месяцев: ' + month);
}

if (z < 7){
    console.log('Меньше недели');
} else { 
    var week = z / 7;
    console.log ('Это недель: ' + week);
}

if (week < 7){
    console.log('Меньше дня');
} else { 
    var day1 = week * 7;
    console.log ('Это дней: ' + day1);
}

if (day1 < 0.6){
    console.log('Меньше часа');
} else { 
    let hour = day1 * 24;
    console.log ('Это часов: ' + hour);
}

//    minute
//    second

/*/Задание 10
console.log('Задание 10');

let mounth = 0,
    dayYear = prompt('Введите день года');

if (dayYear >= 1 && dayYear <= 31) {
    document.write('<h2> Это день ЯНВАРЯ.</h2>');
    mounth = 1;
    //console.log(mounth);
} else if (dayYear >= 32 && dayYear <= 59) {
    document.write('<h2> Это день ФЕВРАЛЯ.</h2>');
    mounth = 2;
} else if (dayYear >= 60 && dayYear <= 90) {
    document.write('<h2> Это день МАРТА.</h2>');
    mounth = 3;
} else if (dayYear >= 91 && dayYear <= 120) {
    document.write('<h2> Это день АПРЕЛЯ.</h2>');
    mounth = 4;
} else if (dayYear >= 121 && dayYear <= 151) {
    document.write('<h2> Это день МАЯ.</h2>');
    mounth = 5;    
} else if (dayYear >= 152 && dayYear <= 181) {
    document.write('<h2> Это день ИЮНЯ.</h2>');
    mounth = 6;
} else if (dayYear >= 182 && dayYear <= 212) {
    document.write('<h2> Это день ИЮЛЯ.</h2>');
    mounth = 7;
} else if (dayYear >= 213 && dayYear <= 243) {
    document.write('<h2> Это день АВГУСТА.</h2>');
    mounth = 8;
} else if (dayYear >= 244 && dayYear <= 273) {
    document.write('<h2> Это день СЕНТЯБРЯ.</h2>');
    mounth = 9
} else if (dayYear >= 274 && dayYear <= 304) {
    document.write('<h2> Это день ОКТЯБРЯ.</h2>');
    mounth = 10;
} else if (dayYear >= 305 && dayYear <= 334) {
    document.write('<h2> Это день НОЯБРЯ.</h2>');
    mounth = 11;
} else if (dayYear >= 335 && dayYear <= 365) {
    document.write('<h2> Это день ДЕКАБРЯ.</h2>');
    mounth = 12;
} else {
    document.write('<h2> ОШИБКА. Укажите день от 1 до 365.</h2>');
}

switch (mounth) {
    case 1:
    case 2:
    case 12:
        document.write('<b>З И М А.</b>');
    break;  

    case 3:
    case 4:
    case 5:
        document.write('<b>В Е С Н А.</b>');
    break;

    case 6:
    case 7:
    case 8:
        document.write('<b>Л Е Т О.</b>');
    break;

    case 9:
    case 10:
    case 11:
        document.write('<b>О С Е Н Ь.</b>');
    break;
}*/