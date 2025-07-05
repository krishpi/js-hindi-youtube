// for of

const arr = [3,5,6,8,3]

// for (const iterator of object) {
            
// }

for (const num of arr){
    console.log(num);
} //3,5,6,8,3


const greeting = "hello world"
for(const greet of greeting) {
    console.log(`each char is ${greet} `);
}

//maps
const map = new Map() 
map.set('in', "india")
map.set('usa',"united state of america")

console.log(map);

for(const [key,value] of map){
        console.log(key,value);
}

const myObject = {
    'game1': 'nfs',
    'game2': 'spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key ,value);
// } not run 