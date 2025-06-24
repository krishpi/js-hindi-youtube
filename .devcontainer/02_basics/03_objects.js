//objects 
//objects are a fundamental data structure used to store collections of key-value pairs.
// They allow you to group related data and functionality together

const jsUser = {
    name: "Hitesh",
    age: 22,
    location:"jaipur",
    email: "hitesh@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]

}

//two ways to access
console.log(jsUser.email); 
console.log(jsUser["email"]);

//changing value
jsUser.email= "muskan@gmail.com"
console.log(jsUser.email);
console.log(jsUser);

//function declare in object
jsUser.greeting = function(){
    console.log("hello js user");
}

//console.log(jsUser.greeting); ->not run
console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.name}`);
}
console.log(jsUser.greetingTwo());
