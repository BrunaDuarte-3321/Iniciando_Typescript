// Tipo de Objeto para função com Interface

interface Products {
  name: string
  price: number
  isAvaiable: boolean
}

const showProductDetails2 = (product:Products ) =>{
console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
if(product.isAvaiable){
  console.log('O produto está disponível')
}
  console.log('Esse produto não está disponível!')
}

const shirt2:Products = {
  name: 'Camisa',
  price: 50.99,
  isAvaiable: true
}

console.log(showProductDetails2(shirt2))
console.log(showProductDetails2({name: 'Calça', price: 20.00, isAvaiable: false}))

//  2 - Propriedade opcional em Interface

interface User2 {
  email: string
  role?: string
}

const showUserDetails2 = (user: User2) =>{
  console.log(`o usuário tem o e-mail: ${user.email}`)
  if(user.role){
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const user1: User2 = {
  email: 'bruna@.com',
  role: 'Desenvolvedora'
}

console.log(showUserDetails2(user1))
console.log(showUserDetails2({email:'bbbbb@bbbb'}))

// 3 - Propriedade readonly  - o Valor não muda

interface Car {
  brand: string
  readonly wheels:number // readonly fixa  só permite uma atribuição
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}

/* fusca.wheels = 7 */

// 4 - Index Signature

interface CoordObject {
  [index: string]: number
}

let coords:CoordObject = {
  x: 10
}

coords.y = 15

console.log(coords)

// 5 - Extending interface

interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpower: string[]
}

const bruna:Human = {
  name: 'Bruna',
  age: 29
}

console.log(bruna)

const goku: SuperHuman = {
  name: 'Goku',
  age:50,
  superpower: ['Kamehameha', 'Keiqdama']
}

console.log(goku.superpower[1])

// 6 - Intersection types

interface Chacacter {
  name: string
}
interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Chacacter & Gun

const arnold:HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12
}

console.log(arnold)

// 7 - ReadOnly Array

let myArray: ReadonlyArray<string> = ['maça', 'Laranja', 'Banana']

/* myArray[3] = 'Mamão' */

myArray.forEach((item) => {
  console.log('Frunta' + item)
})

// 8 Tuplas

 type fiveNumber = [number, number,number,number,number]

 const myNumberArray: fiveNumber = [1,2,3,4,5]
/*  const myNumberArray2: fiveNumber = [1,2,3,4,5,6] */

/* const mixArray:fiveNumber= [1,2,3,4,'5'] */

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotheUser:nameAndAge = ['bruna', 29]
console.log(anotheUser)

anotheUser[0] = 'Maria'
console.log(anotheUser)

// 9 - Tuplas com readonly

const showNumbers2 = (numbres2: readonly[number, number]) =>{
  /* numbres2[0] = 3 */
  console.log(numbres2[0])
  console.log(numbres2[1])
}

showNumbers2([1,2])

