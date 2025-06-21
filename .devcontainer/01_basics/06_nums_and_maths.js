const score = 400
console.log(score); //400

const balance = new Number(100) //always int datatype
console.log(balance); //[Number:100]

console.log(balance.toString()); //100
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8765
console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString(en='IN')); //to count 0s in easyway


//////////////maths/////////////
console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.pow(2,4)); //16
console.log(Math.min(4,3,6,5)); //3
console.log(Math.max(4,3,6,5)); //6
console.log(Math.random()); //[0 , 1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);

