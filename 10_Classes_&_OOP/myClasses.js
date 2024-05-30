//ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("Usman", "usman@gmail.com", "1234")

// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())

//Behind the Scenes

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
User.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

const tea = new User("Ali","Ali@fb.com","1234455");
console.log(tea.changeUserName())
console.log(tea.encryptPassword())