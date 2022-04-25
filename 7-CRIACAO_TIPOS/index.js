"use strict";
// 1 - Generics
const showData = (arg) => {
    return `O dado é: ${arg}`;
};
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData(['testando generic']));
// 2 Constraint em Generics
const showProductName = (obj) => {
    return `o nome do produto é: ${obj.name}`;
};
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { cor: 'prata', engine: 1.2 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'Fusca', wheels: 4, engine: 2.0, color: 'Red' };
const myPen = { name: 'Caneta', wheels: false, engine: false, color: 'Black' };
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
const getSomekey = (obj, key) => {
    return `A  chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
};
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomekey(server, 'ram'));
const showCharName = (obj, key) => {
    return `${obj[key]}`;
};
const myCharacter = {
    name: 'Bruna',
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myCharacter, 'name'));
// 6 typeof type operator
const userName = 'Bruna';
const userName2 = 'Pedro';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
const showKm = (km) => {
    console.log(`O veiculo tem a Km  de: ${km}`);
};
showKm(newTruck['km']);
const someVar = 5;
const testing = 'some text';
