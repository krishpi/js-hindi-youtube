//for loop


for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best");
    }
    console.log(element);
    
}


for (let i = 0; i <=10; i++) {
    console.log(`outer loop: ${i}`);
    for(let j=0;j<=10;j++){
        console.log(`inner loop:${j} and inner loop ${i}`);
    }
    
}

let myArray = ["a","b","c"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


//keywords
//break and continue


for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`);
        break //only run till 4
        //continue //run all except 5
    }
    console.log(`value of i is ${index}`);
    
}