//for each

const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (item) {
    console.log(item);
})


function printMe(val){
    console.log(val);
}

coding.forEach(printMe);