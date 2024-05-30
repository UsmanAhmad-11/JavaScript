class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const Usman = new User("Usman")
// console.log(Usman.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("Iphone", "i@iphone.con")
iPhone.logMe()
console.log(iPhone.createId())