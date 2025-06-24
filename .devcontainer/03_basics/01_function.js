//function

function name(){
    console.log("m");
    console.log("u");
    console.log("s");
    console.log("k");
    console.log("a");
    console.log("n");
}

name()

//parameter are those which is given when fun defined and argument when fun call
function addtwonumber(num1,num2){
    console.log(num1+num2);
    
}

addtwonumber(3,4) //7

const result=addtwonumber(3,4) //7
console.log(result); //undefined for this you have to return a value

//return
function subtwonumber(number1,number2){
    return number1-number2
}

const res=subtwonumber(5,1)
console.log(res);

function loginuser(username){
    return `${username} just log in`
}

loginuser("muskan") //function will  not run bcoz we just return value not print



function calculatecartprice(num1){
    return num1
}

console.log(calculatecartprice(200,400,500)); 
//only 200 print

function cartprice(...num1){ //... means rest operator
    return num1
}
console.log(cartprice(200,400,5000));
//print in array form

//object
const user= {
    name:"muskan",
    price:1999
}

function handleobject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleobject(user)

//array
const mynewarray = [200,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(mynewarray))