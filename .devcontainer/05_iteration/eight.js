//reduce

const myNums=[1,2,3]
const myTotal= myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+ currval
},0)
//we get two value that are accumulator and current value
//but acc does not know where to start so we give intial value 0
console.log(myTotal); //6


const shoppingCart =[
    {
        itemName:"js-course",
        price:2999
    },
    {
        itemName:"c course",
        price:2000
    },
    {
        itemName:"datascience",
        price: 12000
    }
]

const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price, 0)
console.log(pricetopay);


