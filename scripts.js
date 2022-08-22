/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str = 'aaa@bbb@ccc';
console.log(str);
console.log(str.replace(/@/g, '!'));

/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let date = '2025 - 12 - 31',
    date1 = date.replace(/-/g, '/'),
    date2 = date1.replaceAll('(2025) (/) (12) (/) (31)', '$5 $2 $3 $4 $1');
    
console.log(date);
console.log(date1);
console.log(date2);

// let year = '2025';
// let day = '31';

// console.log(date.replaceAll('/2025/ /31/', /day year/));
// console.log(date.replace(/31/g, '2025'));
// date.replace(/-/g, '/');


// console.log(str2.replace(/(Иван) (Иванов)/,'велики $2 $1'));

/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str1 = 'Я учу javascript!';
console.log(str1);

console.log(str1.substring(0, 1)); //'Я'
console.log(str1.substr(0, 1)); //'Я'
console.log(str1.slice(0, 1)); //'Я'

/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let Arr = [4, 2, 5, 19, 0, 10],
    Arr1 = [],
    Sum = 0;
console.log(Arr);

for (let i = 0; i < Arr.length; i++) {
    Arr1.push(Math.pow(Arr[i], 3));
} 
console.log(Arr1);

for (let j = 0; j < Arr1.length; j++) {
    Sum += Arr1[j];
}
console.log(Sum);

console.log(Math.sqrt(Sum));

/* 5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

function Raznost(a, b) {
    let c = a - b;
    console.log(Math.abs(c));
}
Raznost(3, 5);
Raznost(6, 1);

/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

let dataNow = new Date();
console.log(dataNow.toLocaleString('ru'), typeof(dataNow));
var now = new Date().toLocaleString(); 
console.log(now, typeof(now));
console.log(now.replace('(21.08.2022,) (23:02:13)','$2 $1'));


dataNow.setHours(12);
dataNow.setMinutes(59);
dataNow.setSeconds(59);

dataNow.setDate(31);
dataNow.setMonth(11) //декабрь
dataNow.setYear(2014);

console.log(dataNow);

