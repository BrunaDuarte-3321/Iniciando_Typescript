// 1 - Typeof type guard


const sum = (a:number | string, b: string | number) =>{

  if(typeof a === "string" && typeof b === "string"){
    console.log(parseFloat(a) + parseFloat(b))
  }
  else if( typeof a === "number" && typeof b === "number"){
    console.log(a+b)
  }
  else{
    console.log('Impossível realizar a soma')
  }
}

sum("1",'59')
sum(1,59)
sum(1,'59')

// 2 - Chegando se o valor existe

const operations = (arr: number[], operation: string | undefined ){
  if( operation){
    if(operation === 'sum'){
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    }else if( operation === 'multiply'){
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }

  }else{
    console.log( 'Por favor defina uma operação!')
  }
}
/* operations([1,2,3]) */
operations([1,2,3], "sum")
operations([4,2,3], "multiply")

// 3 - Operador instaceof - checar se uma clase 

class User{
  name

  constructor(name: string){
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string){
    super(name)
  }
}

const jhon = new  User('Jhon')
const poll = new SuperUser('Poll')

console.log(jhon)
console.log(poll)

const userGreeting = (user: object) =>{
  if(user instanceof SuperUser){
    console.log(`Olá, ${user.name}, deseja ver os dados no sistema?`)
  }else if (user instanceof User){
    console.log(`Olá, ${user.name}`)

  }
}

userGreeting(jhon)
userGreeting(poll)

// 4 - Operador in

class Dog {
  name
  breed

  constructor(name: string, breed?: string){
    this.name = name
    if(breed){
      this.breed = breed
    }
  }
}

const turca = new Dog('Turca', 'Pastor Alemão')
const bob = new Dog('bob')

const showDogDetails = (dog: Dog) =>{
  if('breed' in dog){ // se a raça existe no cachorro (in)
    console.log(`O cachorro é da raça ${dog.breed}`)
  }
  else{
    console.log(`O cachorro  é um SRD`)
  }
}

showDogDetails(turca)
showDogDetails(bob)

// Desafio Narrowing

/* 1 - Vamos criar uma função que recebe review dos usuários, precisamos utilizar o narrowing para receber o dado;
2 - As possibilidades são booleanas e number;

3 - Serão enviados números de 1 a 5 (estrelas, prever uma mensagem para cada uma destas notas;
  4 - Ou false, que é quando o usuário não deixa uma review, prever um retorno para este caso também)*/


  const reviewUser = (avaliacao:boolean | number) =>{
    if(!avaliacao){
      console.log(`Você não fez a avaliação!`)
       return
    }
    console.log(`Sua avaliação foi: ${avaliacao}, obrigada!`)
  }
    
  reviewUser(5)
  reviewUser(false)
  reviewUser(4)