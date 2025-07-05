const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//for in
for (const key in myObject) {
   console.log(key);
   console.log(myObject[key]);
}


//array
const programming = [4,6,8,9]
for(const key in programming){
    console.log(key); //print index 
    //in 'for of' print value
}


//map cant be iterable in 'for in'





