// const tinderUser = new Object()   // Singleton

const tinderUser = {}                // Object Literals
tinderUser.id = "123"
tinderUser.name = "Usman"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "usman",
            lastname : "ahmad"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
//  const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

// const user = [
//     {
//         id : 1,
//         email : "h@gmail.com"
//     },
//     {
//         id : 1,
//         email : "h@gmail.com"
//     },
//     {
//         id : 1,
//         email : "h@gmail.com"
//     }
// ]
// user[1].email;
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))


// ____________________________________________________________________________________




const course = {
    coursename : "js in urdu",
    price : "999",
    courseInstructor : "Chai OR Code"   
}

// course.courseInstructor;

 const {courseInstructor : instructor} = course;
//  console.log(courseInstructor); 
 console.log(instructor); 

// DeStructuring
//  const navbar = ({company}) => {

//  }

//  navbar(company = "usman")



// JSON

// {
//     "name" : "Usman",
//     "course" : "Java Script",
//     "price" : "free"
// }