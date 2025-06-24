const marvel_heros = ["A","B","C"]
const dc_heros = ["D","E","F"]

//one method to add array
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//another method use most
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//flat->returns a new array by concat all sub array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//to convert string to arr
console.log(Array.from("muskan"));

