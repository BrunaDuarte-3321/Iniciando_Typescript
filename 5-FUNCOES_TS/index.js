"use strict";
// 1 - void
const withoutReturn = () => {
    console.log('Esta funçãi não tem retorno!');
};
withoutReturn();
// 2 - Callback como argumento
const greeting = (name) => {
    return `Olá ${name}`;
};
const preGreeting = (f, userName) => {
    console.log('Preparando a função');
    const greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, ('Bruna'));
preGreeting(greeting, ('Duarte'));
// 3 - Generic function 
const firstElement = (arr) => {
    return arr[0];
};
console.log(firstElement([1, 2, 3, 5, 4]));
console.log(firstElement(['a', '2', '3']));
const margeObjetc = (object1, Object2) => {
    return ({
        ...object1,
        ...Object2
    });
};
const newObj = margeObjetc({ name: 'Bruna' }, { age: 30, job: 'Programadora' });
console.log(newObj);
// 4 - Contraints nas Generic Function
const biggestNumber = (a, b) => {
    let biggest;
    if (+a > +b) { // convertendo string em number diretamente na condicional
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
};
console.log(biggestNumber(5, 7));
console.log(biggestNumber('2', '12'));
/* console.log(biggestNumber( 2 ,'12')) */
// 5 - especificar tipo de argumento
const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(mergeArrays([1, 2, 3], ['teste', 'teste22']));
/* console.log(mergeArrays([1,2,3], ['teste', 'teste22'])) */
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// 6 - Parâmentros opcionais
const modernGreeting = (name, greet) => {
    if (greet) {
        return `Olá, ${greet} ${name}, tudo bem?`;
    }
    return `Olá, ${name}, tudo bem?`;
};
console.log(modernGreeting('Bruna'));
console.log(modernGreeting('Bruna', 'Dra.'));
// 7 - Parâmentros Default
const somaDefault = (n, m = 10) => {
    return n + m;
};
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
// 8 - unknown
const doSomething = (x) => {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(`${x} é um numero`);
    }
};
doSomething([1, 2, 3]);
doSomething(5);
// 9 - Never
const showErrorMessage = (msg) => {
    throw new Error(msg);
};
// showErrorMessage('Algum erro')
// 10 - Rest parameters
const sumAll = (...n) => {
    return n.reduce((number, sum) => sum + number);
};
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(30, 40, 50));
console.log(sumAll(10, 10));
// 11 - Destructuring com paramentros
const showProductDetails = ({ name, price }) => {
    return `O nome do produto é: ${name}, seu valor é R$${price}`;
};
const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
