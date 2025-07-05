//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//map automatically return value
const newNums=myNumbers.map((num)=> num+10) 
console.log(newNums);


//chaining
const new_Nums= myNumbers
     .map((nums)=>nums*10)
     .map((nums)=> nums+1) 
     //first num will multiply by 10 then +1 add
    
     .filter((num)=> num>=40)
 console.log(new_Nums);