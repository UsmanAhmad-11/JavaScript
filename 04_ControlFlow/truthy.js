// const userEmail = []

// if (userEmail) {
//     console.log("Got user email")
// } else{
//     console.log("Dont have user email")
// }


// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values

// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Empty Array")
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Empty Object")
// }



// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15

// console.log(val1)



// Terinary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");