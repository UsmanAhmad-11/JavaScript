// Primitive

// 7 types : String, Number, boolean, null, undefined, symbol(Unique Bnany ka liya),
// BigInt

//  const score = 100 
//  const scoreValue= 100.3
 
//  const isLoggedIn = false
 const outsideTemp = null
//  let userEmail;

//  const id = Symbol('123')
//  const anotherId = Symbol('123')

//  console.log(id === anotherId);



//  const bigNumber = 32435345354653543543654654n


// IT IS A DYNAMICALLY TYPE LANGUAGE



// Reference type (Non Primitive)

// Array, Objects, Functions



const heros = ["spiderman","batman","superman"];
let myObj = {
    name:"Usman",
    age:20,
    height:40,
}

// console.log(myObj)


// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// Stack(primitive), Heap(Non-Primitive)

let myYoutubeName = "Something"

let anothername = myYoutubeName
 anothername = "Nothing"
console.log(anothername);
console.log(myYoutubeName);


let userOne = {
    email:"someone@gmail.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "user@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)