//iife->immediately invoked function expression

//()-definition ()-execution
//there is a problem due to global scope pollution ,so to remove it we use iifee

(function fn(){
    console.log(`db connected`);
})(); //semicolon necessary to end funtion here

//by arrow fun
(() => {
    console.log(`db connected two`);
})()

  
  

   