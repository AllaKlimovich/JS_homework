/* Задание 1 Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.*/

// function primer(a, b, c){
//     var otvet = (a - b) / c;
//     console.log (otvet);
// }
// primer(18, 8, 2);

/* Задание 2 Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.*/

// function cube(a){
// return a * a * a;
// }

// function square(a){
//     return a * a;
// }

// function otvet(a) {
    
//     if (a == null) {
//       return 'Введите значение!';
//     } else {
//       return ' квадрат ' + square(a) + '. ' +
//              ' куб ' + cube(a) + '. ';
//     }
// }

// var result = otvet(5);
// console.log(result);

/* Задание 3 Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

// function Min(a, b){
//   if (a > b) {
//     return 'min число B = ' + b;
//   } else {
//     return 'min число A = ' + a;
//   }
// }

// function Max(a, b){
//   if (a > b) {
//     return 'max число A = ' + a;
//   } else {
//     return 'max число B = ' + b;
//   }
// }

// function result(a, b){
//   if (a == b) {
//     console.log('A = B');
//   } else {
//     alert(Max(a, b) + '' + Min(a, b));    
//   }
// }

// result(100, 10);

/* Задание 4 Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

// function Arr(){
//   for (var i = 0; i< arguments.length;i++){
//     console.log(arguments[i]);
//   }
// }

// Arr([1, 5, 'true', 15 -65]);

// var array = [];
// function Arr1(a, b){
  
//   for (var i = a; i<= b; i++){
//     array.push(i);
//   }
//   //console.log(array);
// }

// function exportArr() {
//   for (var i = 0; i< arguments.length;i++){
//     console.log(arguments[i]);
//   }
// }

// Arr1(-15, 18); exportArr(array);

/*Задание 5 Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

// function isEven (even) {
//   if (even % 2 == 0) {
//     return true;
//   } else { 
//     return false;
//   }
// }

// //console.log(isEven(-4));

// /*Задание 6 Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.*/

// function Arr2 (array) {
//   console.log(array);
//   var Arr3 = [];

//   for (var i = 0; i < array.length; i++) {
//     if (isEven(array[i]))    Arr3.push(array[i]);
    
//   }

//   console.log(Arr3);

// }
// Arr2([5, 4, 3, 6, 2, 10])

/*Задание 77. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:
*
**
***
****
*****
******
*******
********
*********     */


var Itogo = [];

function Rad(a) {
  for (let i = 1; 1<=a ; i++){
    Itogo.push(i);
    //console.log(Itogo);
  }
  console.log(Itogo);
}

Rad(3);