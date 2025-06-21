const name = "muskan"
const repocount = 50

//console.log(name + repocount); ->old method 

console.log(`hello my name is ${name} and my repo count is ${repocount}` );

const gameName = new String('muskan')
console.log(gameName[0]); //m
console.log(gameName.length); //6
console.log(gameName.toUpperCase()); //MUSKAN
console.log(gameName.charAt(2)); //s
console.log(gameName.indexOf('s')); //2

const newString = gameName.substring(0,4)
console.log(newString); //musk

const anotherString = gameName.slice(-5,3) //muskan-> us //-5 represent count from reverse and 3 means num of char to print 
console.log(anotherString); //us

const newStringOne = "   muskan  "
console.log(newStringOne); // "  muskan  "
console.log(newStringOne.trim()); "muskan"

const url = "https://turbo-space-journey-wr964q44r9jjh96w6.github.dev/"
console.log(url.replace('dev','muskan'));

console.log(url.includes('space')); //true

