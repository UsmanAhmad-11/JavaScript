function sayMyName(){
    console.log("U")
    console.log("S")
    console.log("M")
    console.log("A")
    console.log("N")
}

// sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result)


function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return 
    // }
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} Just Logged in`
}

// console.log(loginUserMessage("Usman"))


console.log(loginUserMessage("Usman"))