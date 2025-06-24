//objects

//declaring objects using constructor

const tinderUser = new Object()

console.log(tinderUser); //{}
 tinderUser.id = "123abc"
 tinderUser.name="sammy"
 tinderUser.isLoggedIn=false
 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));




 //nesting object
 const regularUser ={
    email:"muskan@gmail.com",
    fullname:{
        username:{
            firstname:"muskan",
            lastname: "agrawal"
        }
    }
 }

 console.log(regularUser.fullname);
 console.log(regularUser.fullname.username);
 console.log(regularUser.fullname.username.lastname);


 //combining objects
 const obj1 = {
    1:"a",
    2:"b"
 }

 const obj2 = {
    3:"a",
    4:"b"
 }
 //way one
 const newObj = Object.assign({},obj1,obj2)
 console.log(newObj);

 //way two
 const obj3 = {...obj1,...obj2}
 console.log(obj3);


 //destructuring
 const course ={
    coursename:"js in hindi",
    price:"999",
    courseinstructor: "muskan"
 }

 const {courseinstructor} = course
 console.log(courseinstructor);

 //API'S
 //jsons
 //JSON (JavaScript Object Notation) 
 // is a lightweight data-interchange format that's easy for humans to read and write, 
 // and easy for machines to parse and generate. 
 // In JavaScript, JSON is commonly used to exchange data between a client and a server or to store configuration data.
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }



