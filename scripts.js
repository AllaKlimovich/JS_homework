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
}*/

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