/*/Задание 1
console.log('Задание 1');
let i = 0;
while (i < 50) {
    i ++;
    console.log(i);
}
console.log('');

i = 35;
do {
    console.log(i);
    i --;
}  while (i <= 35 && i >= 8);

//Задание 2
console.log('Задание 2');
let j = 89;
while (j <= 89 && j >= 11) {
    document.write(j+'</br>');
   // document.write(j);
    j --;
}

//Задание 3
console.log('Задание 3');
let a = 0,
    sum = 0;

do {
    console.log(a);
    sum = sum + a;
    console.log('Сумма числа = '+ sum);
    a ++;
}  while (a <= 100);*/

//Задание 4
console.log('Задание 4');
let s = 1,
    sum1 = 0;

do {
    console.log(s);
    sum1 = sum1 + s;
    console.log('Сумма числа = '+ sum1);
    s ++;
}  while (s <= 5);