const user = {
    username : "Usman",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);  // this refers to current context to get access within the scope
        // console.log(this)
    }   

}
// user.welcomeMessage()
// user.username  = "Sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "Usman"
//     console.log(this.username);
// }

// chai();




// const chai = function () {
//     let username = "Usman";
//     console.log(this.username);
// }
// chai();


const chai = () => {
    let username = "Usman";
    console.log(this.username);
}
// chai();


// Arrow Function
    // Basic arrow function
    // Explicit Arrow function jab ap return keyword use karta ho with braces

    // const addTwo = (num1 , num2) => {
    //     return num1 + num2
    // }


    //Implicit Return   jab ap return keyword use na karo

//    const addTwo = (num1 , num2) =>  num1 + num2

//  parenthesis laga dain to return keyWord ki zarrorat nai hoti ha

//    const addTwo = (num1 , num2) =>  ( num1 + num2 ) 

// To return Object

   const addTwo = (num1 , num2) => ({username : "Usman"}) 
   console.log(addTwo(4, 5))


//    const myArray = [2, 5, 3, 7, 8]
//    myArray.forEach(()=>)


    

