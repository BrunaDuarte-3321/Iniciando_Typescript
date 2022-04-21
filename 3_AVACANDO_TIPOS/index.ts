// 1 - arrays

const numbers: number[] = [1,2,3,5]

numbers.push(7)

console.log(numbers[2])


const names:string[] = ['Bruna', "Duarte"]

names.push('ola')

console.log(names)

// 2 - Outra sintaxe array

const nums:Array<number> = [200,300,422]

// 3 - any

const arr1:any = [1,'ola',[],{nome: 'Bruna'}]

arr1.push(2)
console.log(arr1)

// 4 - paramentros tipados

const soma = (a:number, b:number) =>{
  console.log(a+b)
}

soma(4,5)

// 5 - retorno de função

const greeting = (name: string): string =>{
  return `Olá ${name}`
}


console.log(greeting('Bruna') )

// 6 - função anonimas

setTimeout(() => {
  const sallary:number = 1000

  //console.log(sallary)
},2000)

// 7 - tipos de objeto

const passCoordiantes = (cood:{x:number, y:number}) =>{
  console.log( 'X coordinates: ' + cood.x)
  console.log( 'Y coordinates: ' + cood.y)
}

const objCoord = {x:329, y:84.2}

passCoordiantes(objCoord)

// 8 - porps opcionais

const showNumbers = (a:number, b:number, c?:number) => {
  console.log(`A: ${a}`)
  console.log(`B: ${b}`)
  console.log(`C: ${c}`)
}
showNumbers(2,2)

// 9 - validação de props opcionais

const advancedGreeting = ( firstName: string, lastName?: string) =>{

    if(lastName !== undefined){
      return  `Olá, ${firstName} ${lastName}, tudo bem?` 
    }
    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting('Bruna', 'Duarte') )
console.log(advancedGreeting('Bruna' ) )

// 10 Union types

const showBalance = (balance: string | number) =>{
  console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance( '500')
showBalance( 100)

const array2: Array<number | string | boolean> = [1, 'teste', true]

console.log(array2)

// 11 - Avançando com Union types

const showUserRole = (role:boolean | string) =>{
  if(typeof role === 'boolean'){
    return 'Usuário não aprovado'
  }
  return `A função do usuário é: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole('Admin'))

// 12 - types alias
type ID = string | number
const showId = (id: ID) =>{
  console.log(`O Id é: ${id}`)
}

showId(1)
showId('200')

// 13 - Introdução às interfaces

interface Point {
  x: number;
  y: number;
  z:number;
}

const showCoordes = (obj: Point) =>{
console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
  x:10,
  y:15,
  z:20,
}

showCoordes(coordObj)

// 14 - Diferença entre type alias e interface

interface Person {
  name:string
}
interface Person{
  age:number
}

const somePerson: Person ={name: 'Bruna', age:28}
console.log(somePerson)
// type alias não pode ser implementada.

// 15 - Literal types

let test: 'testando'

test = 'testando'
console.log(test)

const showDiction = (direction: 'left' | 'right'| 'center') =>{
  console.log(`A direção é: ${direction}`)
}

showDiction('center') // só aceita os valores tipados no paramentro

// 16 - Non-null Assertion Operation

const p = document.getElementById('some-p')

console.log(p!.innerText) // quando tem um elemento do dom e vc precisa identificar no ts para fazer manipulação

// 17 Bigint

let n: bigint

//n = 1

n = 1000n // só funciona com versão 2020 do ts

console.log( n)

// 18 Symbol

 let simbolA:symbol = Symbol('A')
 let simbolB:symbol = Symbol('A')

 console.log(simbolA === simbolB)
 console.log(simbolA == simbolB)
