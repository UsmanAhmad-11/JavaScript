// IF

const isUserLoggedIn = true 
const temprature = 41

// if (temprature < 50) {
//     console.log("less than 50");
// }
// else{
// console.log("More than 50")
// }
// console.log("Executed")

// 3 != 2
// <, >, <=, >=, ==, !=, ===, !==




// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power : ${power}`)
// }
// console.log(`User Power : ${power}`)



// const balance = 1000

// IMPLICIT SCOPE
// if (balance > 500) console.log("Test");
// if (balance > 500) console.log("Test"), console.log("Test 2");  dont do this 

// if (balance < 500) {
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if(userLoggedIn && debitCard ){
//     console.log("Allow to buy courses")
// }

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in")
}