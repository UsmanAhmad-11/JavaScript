class User { 
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const tea = new Teacher("Usman", "usman@gmail.com", "1234")
tea.addCourses()
tea.logMe()
const print = new User("Ahmad")
print.logMe()

console.log(tea instanceof Teacher);