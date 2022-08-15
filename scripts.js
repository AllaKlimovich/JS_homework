/*/ Задание 1
console.log('Задание 1');

let arr = [1, 2, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задание 2
console.log('Задание 2');

let newArr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < newArr.length; i++) {
    for (let j = i; newArr[j] > -10 && newArr[j] < -3; j++) {
        
        console.log(newArr[j]);
    }
}

// Задание 3
console.log('Задание 3');

//for
let arr1 = [];
let result = 0;

for (let i = 23; i <= 57; i++) {
    arr1.push(i);
    result += i;
}
console.log(arr1);
console.log('result =', result);

//while
let arr2 = [];
let j = 23;


while (j <= 57) {
    arr2.push(j);
    j++;
}
console.log(arr2);

// Задание 4
console.log('Задание 4');

let arr3 = ['10', '20', '30', '50', '235', '3000'];
let arr4 = [];
let arr5 = [];

console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
    arr4 = arr3.slice(i, (i + 1)); // копируем массив
    arr5 = arr4.join(' ');  // переводим массив в строку
     
    if ((arr5[0] >= 1) && (arr5[0] <= 1)) {console.log(arr4); }
    if ((arr5[0] >= 2) && (arr5[0] <= 2)) {console.log(arr4); }
    if ((arr5[0] >= 5) && (arr5[0] <= 5)) {console.log(arr4); }
}  
*/
// Задание 5
console.log('Задание 5');

let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
console.log(week);

for (let i = 0; i < week.length; i++) {
    if ((week[i] >= 'СБ') && (week[i] <= 'СБ')) {document.write('<b>',week[i],'</b>','<br>'); }
    else if ((week[i] >= 'ВС') && (week[i] <= 'ВС')) {document.write('<b>',week[i],'</b>','<br>'); }
    else  {  document.write(week[i],'<br>');}
}   

