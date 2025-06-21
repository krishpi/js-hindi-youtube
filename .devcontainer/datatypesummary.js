//primitive
//7 types: string,number,boolean,null,undefined,symbol,bigint

//javascript is dynamically type

const score=100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId); //false

//reference(non primitive)
//arrays,objects,functions

const heros = ["A","B","C"] ;//array
let myObj = {
    name:"Muskan",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}



