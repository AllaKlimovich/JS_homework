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
}  while (a <= 100);

//Задание 4
console.log('Задание 4');
let s = 5,
    sum1 = 0;

for (let i =1; i <=s; i++) {
    sum1 = 0;
    for (let y = 1; y <= i; y++){
        sum1 = (sum1 + y);}
    console.log('Сумма числа ' + i + ' = '+ sum1);
}


//Задание 5

console.log('Задание 5  FOR');
{
for (let i = 8; (i <= 56); i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}
}
console.log('Задание 5 while');
{
let i = 8;
while (i <= 56) {
    if (i % 2 !== 0) {
        i ++; 
        continue;}

    console.log(i);
    i ++;
}
}

//Задание 6
console.log('Задание 6');

let sum = 0;

for (let i = 2; i <= 10; i ++) {
    for (let j = 1; j <= 10; j ++){
       sum = (i * j); 
       console.log(i+ ' * '+j+' = '+sum);
    }
    console.log('*****');
}

//Задание 7
console.log('Задание 7');
 let n = 1000,
     rez = 0,
     num = 0;
     i = 0;

while (n > 50) {
    rez = (n / 2);
    num = ++ i;
    
    n = rez;
    rez = 0;
}

console.log('количесво итераций = '+num);
console.log('получилось число = '+n);


//Задание 8
console.log('Задание 8');
let sum = 0,
    sred = 0;

for (i = 1; ;i ++){
    let str = prompt('Введите число');
        if (str === '' || str == 0 || str == null) break;
        
        if (isNaN(str)) {
        alert('Ошибка ввода');
        continue; 
        }

    sum += +str;
    sred = sum / i;
        
    console.log(sum);
    console.log(sred);
} */

//Задание 9
console.log('Задание 9');

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36',
    min = Infinity,
    max = -Infinity,
    i = 0;
    bufer = '';

do {
    if (str[i] !== '') bufer += str[i];
    
    if (bufer > max) bufer = max;
    if (bufer < min) bufer = min;
    i ++;
} while (i < str.length)


console.log(`max: ${max}
             min: ${min}`);