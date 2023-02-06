"use strict";

console.log('Задача 1:');

const cities = ["Москва", "Санкт-Петербург", "Воронеж"];

function anyCities(array) {
    return array.join(", ") + ".";
}

console.log(anyCities(cities));

console.log('-----------');
console.log('Задача 2:');

function showNumbers(number) {
    let integer = number % 5;

    if (integer === 0) {
        return number;
    } else if (integer >= 2.5) {
        return (number - integer + 5);
    } else {
        return (number-integer)
    }
};

console.log(showNumbers(27));
console.log(showNumbers(27.8));
console.log(showNumbers(41.7));

console.log('-----------');
console.log('Задача 3:');

function anyComputer(amount) { 
    let computer = amount; 
    let lastDigit = amount.toString().slice(-1); 
    if (amount > 10 && amount < 15) { 
        computer += " компьютеров"; 
        return output; 
    } else if (lastDigit === '1') { 
        computer += " компьютер"; 
    } else if (lastDigit > '1' && lastDigit < '5') { 
        computer += " компьютера"; 
    } else { 
        computer += " компьютеров"; 
    } 
    return computer; 
}

console.log(anyComputer(25));
console.log(anyComputer(41));
console.log(anyComputer(1048));



console.log('-----------');
console.log('Задача 4:');

function thisNumber (num) {
    let count = 0;
    for (let i = 2; i <= num-1; i++){
        
        let divisior = num % i;
        if (divisior === 0) {
            count = count +1;
        }};

    if  (count === 0){
        console.log(num)
    };
}

thisNumber(2);
thisNumber(3);
thisNumber(5);

console.log('-----------');
console.log('Задача 5:');

const arr = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const array = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function number(num1, num2) {
    let result = [];
  
    let map = num1.reduce((acc, i) => {
      acc[i] = acc[i] ? acc[i] + 1 : 1;
      return acc;
    }, {});
  
    for (let i = 0; i < num2.length; i++) {
      let current = num2[i];
      let currentMapItem = map[current];
  
      if (currentMapItem && currentMapItem > 0) {
        result.push(current);
        map[current] = currentMapItem - 1;
      }
    }
  
    return result;
};

console.log(number(arr, array));

function table(numb) {
    for (let j = 1; j <= numb; j++){  
        document.write("<div style='float: left; width: 30px; margin: 10px 0 0 10px'>"); 
        for (let i = 1; i <=numb; i++){ 
        document.write((i*j) + "<br>"); 
        }  
        document.write ("</div>"); 
         
    }
}

table(5);