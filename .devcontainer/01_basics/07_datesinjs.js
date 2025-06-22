//dates

let myDate = new Date()
console.log(myDate); //not properly readable
console.log(myDate.toString()); 
console.log(myDate.toDateString()); //date and day
console.log(myDate.toLocaleString()); //date and time
console.log(typeof myDate); //object

let mycreatedDate = new Date(2025,0,31)
console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //in millisec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
    
})



