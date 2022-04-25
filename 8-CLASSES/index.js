"use strict";
// 1 - campos em classes - Iniciando sem valores
class User8 {
}
const bruna = new User8();
bruna.name = 'Bruna';
console.log(bruna);
// 2 - Constructor - Iniciar objeto com valores
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 22);
console.log(joao);
/*
const pedro = new NewUser(121, 2) */
// 3 - Campos readonly
class Car {
    constructor(name) {
        this.wheels2 = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca['wheels2'] /*  fuca.wheels2 */);
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('trator');
class KillMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillMachine('Destroyer', 4);
console.log(destroyer);
console.log(trator);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey Stranger!');
    }
}
const jymmi = new Dwarf('Jimmy');
console.log(jymmi.name);
jymmi.greeting();
// 6 this
class Truck2 {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do model:${this.model} , que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck2('Volvo', 500);
const schaia = new Truck2('Schania', 5500);
volvo.showDetails();
schaia.showDetails();
// 7 - Utilizando getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const brunaDuarte = new Person('Bruna', 'Duarte');
console.log(brunaDuarte.name);
console.log(brunaDuarte.fullName);
// 8 - usando Setter
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log(`X inserido com sucesso`);
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y inserido com sucesso');
    }
    get getCoods() {
        return `X: ${this.x} e y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 20;
console.log(myCoords);
console.log(myCoords.getCoods);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o titulo do post é: ${this.title}`;
    }
}
const myPost = new BlogPost('Hello world');
console.log(myPost.itemTitle());
class TesteInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O novo titulo é ${this.title}`;
    }
}
// 10 - Override de métedos
class Base {
    someMethod() {
        console.log('Alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando outra coisa');
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Visilididade: public
class C8 {
    constructor() {
        this.x = 10;
    }
}
const cInstace = new C8();
console.log(cInstace.x);
// 12 - Visilididade: protect ppodem ser utilizados apenas em sublcasses
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log(' X:' + this.x); //  usando this para ter acesso a x, precisamos de um metodo para acessar a propriedade protegida
    }
}
const fInstance = new F();
console.log('acessei' + ' ' + fInstance.x);
// 13 - Visilididade: private ppodem ser utilizados apenas na class que a definiu, e ainda sim, precisam de methodos para serem acessados
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Methodo privado');
    }
    showPrivatemethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
/* console.log(pObj.name) */
console.log(pObj.showName());
pObj.showPrivatemethod();
// 14 - static members
class StaticMambers {
    static statcmethod() {
        console.log('esse é o metodo statico');
    }
}
StaticMambers.props = 'Teste static';
console.log(StaticMambers.props);
StaticMambers.statcmethod();
// 15 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
const secondItem2 = new Item(12, true);
console.log(secondItem2.showFirst);
console.log(typeof secondItem2.showFirst);
// 16 - Parameters properties
class ParametersPrperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showPrice() {
        return `Preço total é ${this.price}`;
    }
    get showQty() {
        return `A quantidade é ${this.qty}`;
    }
}
const mewShirt = new ParametersPrperties('Camisa', 5, 19.99);
console.log(`O produto é ${mewShirt.name}`, mewShirt.showPrice, mewShirt.showQty);
// 17 - class expressions
const myClasse = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClasse('Joao');
console.log(pessoa);
// 18 - Abstract class
class AbastractClass {
}
/* const newObjeto = new AbastractClass() */
class AbastracExample extends AbastractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    nameShow() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbastactObject = new AbastracExample('Josias');
newAbastactObject.nameShow();
// 19 - Relação entre classes
class Dog8 {
}
class Cat8 {
}
const doguinho = new Cat8();
console.log(doguinho);
