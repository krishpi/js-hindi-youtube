const userEmail = "muskan@.ai"

if(userEmail) {
    console.log("got user email");
}else {
    console.log("do not have user email");
}
//empty string-> else condition run
//empty array -> if condition run

//falsy values :
// false, 0, -0, bigint 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}


//null coalescing operator(??)
let val1;
val1 = 5??10 //5
val1 = null?? 10 //10
val1 = undefined??15 //15
val1 = null??10??20 //10
console.log(val1); 


//ternary operator
//condition ?true : false