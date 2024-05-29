const user = {
    username : "Usman",
    loginCount: 9,
    signedin : true,
    getUserDetails : function(){
        // console.log("Got user details from database"
        // console.log(`Username : ${this.username}`)
        console.log(this)
        } 
}
// console.log(this)
// console.log(user.username);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function (){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}
const userOne = new User("Usman", 12, true)
const userTwo = new User("Ali", 13, false)
console.log(userOne)
// console.log(userTwo)


