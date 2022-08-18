// Задание 1

// function primer(a, b, c){
//     var otvet = (a - b) / c;
//     console.log (otvet);
// }
// primer(18, 8, 2);

// Задание 2


function cube(a){
return a * a * a;
}

function square(a){
    return a * a;
}

function otvet(a) {
    
    if (a == NaN) {
      return 'Введите значение!';
    } else {
      return ' квадрат ' + square(a) + '. ' +
             ' куб ' + cube(a) + '. ';
    }
}

var result = otvet();
console.log(result);