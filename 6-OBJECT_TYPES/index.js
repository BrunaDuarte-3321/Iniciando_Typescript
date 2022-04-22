"use strict";
// Tipo de Objeto para função com Interface
const showProductDetails2 = (product) => {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaiable) {
        console.log('O produto está disponível');
    }
    console.log('Esse produto não está disponível!');
};
const shirt2 = {
    name: 'Camisa',
    price: 50.99,
    isAvaiable: true
};
console.log(showProductDetails2(shirt2));
console.log(showProductDetails2({ name: 'Calça', price: 20.00, isAvaiable: false }));
const showUserDetails2 = (user) => {
    console.log(`o usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
};
const user1 = {
    email: 'bruna@.com',
    role: 'Desenvolvedora'
};
console.log(showUserDetails2(user1));
console.log(showUserDetails2({ email: 'bbbbb@bbbb' }));
const fusca = {
    brand: 'VW',
    wheels: 4
};
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const bruna = {
    name: 'Bruna',
    age: 29
};
console.log(bruna);
const goku = {
    name: 'Goku',
    age: 50,
    superpower: ['Kamehameha', 'Keiqdama']
};
console.log(goku.superpower[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
// 7 - ReadOnly Array
let myArray = ['maça', 'Laranja', 'Banana'];
/* myArray[3] = 'Mamão' */
myArray.forEach((item) => {
    console.log('Frunta' + item);
});
const myNumberArray = [1, 2, 3, 4, 5];
/*  const myNumberArray2: fiveNumber = [1,2,3,4,5,6] */
/* const mixArray:fiveNumber= [1,2,3,4,'5'] */
console.log(myNumberArray);
const anotheUser = ['bruna', 29];
console.log(anotheUser);
anotheUser[0] = 'Maria';
console.log(anotheUser);
// 9 - Tuplas com readonly
const showNumbers2 = (numbres2) => {
    /* numbres2[0] = 3 */
    console.log(numbres2[0]);
    console.log(numbres2[1]);
};
showNumbers2([1, 2]);
