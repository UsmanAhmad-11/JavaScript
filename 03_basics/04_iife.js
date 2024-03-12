// Imediately Invoked Function Expressions (IIFE)

// To Avoid global scope Pollution we USE IIFE

(function chai(){
    // named IIFE
    console.log("DB CONNECTED")
})(); // here we need to put semi colon

// Syntax (function)(return)

( (name) => {
    console.log(` DB CONNECTED TWO ${name} `)
} )('Usman');