//scope 

//{}->when it came with function and if else then it called scope of that program
let a=300
var c =300
if(true){
     let a=10 //not run which is good
     const b=20 //not run which is good
     var c=30   //run 
     console.log(a);//10

}
//writing inside if= block scope
//writing outsude if= global scope

console.log(a); //300
//console.log(b);
console.log(c); //30


//nesting
function one(){
    const username="muskan"
    function two(){
        const website="youtube"
        console.log(username); //can done coz block scope can acces global scope
    }
    //console.log(website); //cant bcoz website is behave as block scope and we cant access block scope by global scope but vise verca can done
    two()
}
one()


//if else
if(true){
    const username ="muskan"
    if(username === "muskan"){
            const website=" utube"
            console.log(username+website);
    }
   // console.log(website);->error
}
//console.log(username);->error