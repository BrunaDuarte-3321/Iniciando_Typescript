// 1 - Importação de arquivo

import importGreet from "./greet.js";


importGreet()

// 2 - Import de  variáveis

import { x } from "./varible.js";

console.log(x)

// 3 - Múltipla importações

import {a,b,myFunction} from './multiple.js'

console.log(a, b, myFunction())

// 4 - Alias para importação

import { someName as name } from "./changeName.js";

console.log(name)

// 5 - import all

import * as myNumbres from './numbers'

console.log(myNumbres)
console.log(myNumbres.n3)

// 6 - importando tipos

import { Human } from "./myTypes.js";

class User implements Human{
  name
  age

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const bruna = new User('Bruna', 29)
console.log(bruna)