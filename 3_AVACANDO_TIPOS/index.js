"use strict";
// 1 - arrays
const numbers = [1, 2, 3, 5];
numbers.push(7);
console.log(numbers[2]);
const names = ['Bruna', "Duarte"];
names.push('ola');
console.log(names);
// 2 - Outra sintaxe array
const nums = [200, 300, 422];
// 3 - any
const arr1 = [1, 'ola', [], { nome: 'Bruna' }];
arr1.push(2);
console.log(arr1);
// 4 - paramentros tipados
const soma = (a, b) => {
    console.log(a + b);
};
soma(4, 5);
// 5 - retorno de função
const greeting = (name) => {
    return `Olá ${name}`;
};
console.log(greeting('Bruna'));
// 6 - função anonimas
setTimeout(() => {
    const sallary = 1000;
    //console.log(sallary)
}, 2000);
// 7 - 
