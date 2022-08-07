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
*/
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