//arrays
//in javascrpit,arryas are resizable
//can contain mix of diff data type
//zero based indexing
//javascript array-copy-opereation create shallow copy
//shallow copy of an object is a copy whose properties share same reference
//deep copy who do not share the same reference


const myArr = [0,1,2,3,4,5,true,"hitesh"]
console.log(myArr[6]); //true

//array method
console.log(myArr.length); //8
myArr.push(6)
console.log(myArr);
myArr.pop(); //delete last element
console.log(myArr);

myArr.unshift(9)
console.log(myArr); //[9,0,1,2,3,4,5,true,'hitesh']
myArr.shift();
console.log(myArr); //[0,1,2,3,4,5,true,'hitesh']

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(true)); //6

//join bind array and convert to string
const newArr = myArr.join()
console.log(typeof newArr); //string
console.log(newArr);     //0,1,2,3,4,5,true,hitesh
console.log(myArr); //[0,1,2,3,4,5,true,hitesh]



const myn1 = myArr.slice(1,3)
console.log("A",myArr);
console.log(myn1) //[1,2]

console.log("B",myArr);

//splice remove the portion that have been mentioned with inculding last index 
const myn2 = myArr.splice(1,3)
console.log("C",myArr);  //[0,4,5,true,hitesh]
console.log(myn2); //[1,2,3]



