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


//memory
//stack(primitive), heap(non primitive)

let myname= "muskan"
let anothername = myname
anothername="agrawal"
console.log(myname); //muskan
console.log(anothername);  //agrawal


//name in stack memory
//muskan in heap memory
//in heap we dont get copy, we get reference of original value 

let  userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email="muskan@gmai/.com"
console.log(userOne); // muskan@gmail.com
console.log(userTwo); //muskan@gmail.com






