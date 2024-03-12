//var c =300;
let a= 300;

if(true){
let a = 10;
const b = 20;
// console.log(`inner: ${a}`);
 }

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Usman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    // two();
}
    // one();


if (true) {
    const username = "Usman"
    if (username === "Usman") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);    
}
// console.log(username);



// +++++++++++++++++++++    Intersting  ++++++++++++++++++++++

console.log(addOne(5))   
function addOne(num){
    return num + 1;
}


const addTwo = function (num){
    return num + 2;
}
console.log(addTwo(5))

