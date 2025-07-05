//for each
const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    //showing undefined at last
    
})

console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>4)
console.log(newNums);


//using for each
const new_Nums=[]
myNums.forEach((num)=>{
    if(num>4){
        new_Nums.push(num)
    }
})
console.log(new_Nums);  //now it will not show undefined




