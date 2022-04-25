// 1 - Generics

const showData= <T>(arg: T): string => {
 return `O dado é: ${arg}`
}

console.log(showData('testando generic'))
console.log(showData(true))
console.log(showData(['testando generic']))

// 2 Constraint em Generics

const showProductName = <T extends {name: string}>(obj: T) =>{
  return `o nome do produto é: ${obj.name}`
}

const myObj = {name:'Porta', cor:'Branca'}
const otherProduct = {name: 'Carro', wheels: 4, engine: 1.0}
const thirdObj = {cor: 'prata', engine: 1.2}
console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
/* console.log(showProductName(thirdObj)) -não aceito por não ter o tipo name na estrutura*/

// 3 - Generics com interface

interface MyObject<T,U,Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car6 = MyObject<number,number, string>
type Pen = MyObject<boolean,boolean, string>

const myCar:Car6 = {name: 'Fusca', wheels: 4, engine: 2.0, color: 'Red'}
const myPen: Pen = {name: 'Caneta', wheels: false, engine: false, color: 'Black'}

console.log(myCar)
console.log(myPen)

// 4 - Type parameters

const getSomekey = <T, K extends keyof T>(obj: T, key: K) => {
return `A  chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomekey(server, 'ram'))
/* console.log(getSomekey(server, 'teste')) */

// 5  - key of type operator

type Character ={name:string, age: number, hasDriveLicense: boolean}

type C = keyof Character

const showCharName = (obj: Character, key: C): string =>{
return `${obj[key]}`
}

const myCharacter = {
  name: 'Bruna',
  age: 30,
  hasDriveLicense: true
}

console.log(showCharName(myCharacter, 'name'))

// 6 typeof type operator


const userName: string = 'Bruna'

const userName2: typeof userName = 'Pedro'

// 7 - Indexed access types


type Truck = {km:number, kg: number, description: string}

type Km = Truck['km'] // tipa uma chave especifica d objeto 

const newTruck: Truck  = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga'
}

const showKm = (km:Km) =>{
  console.log(`O veiculo tem a Km  de: ${km}`)
}

showKm(newTruck['km'])

// 8 - Conditional expressions type

interface A{}
interface B extends A {}

interface Teste {
  showName(): string
}

type myType = B extends A ? number: string

const someVar: myType = 5
/* const someVar2: myType = 'teste' */

type myTypeB = Teste extends { showNumber(): number} ? string: boolean

// 9 - Template litarals type

type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'