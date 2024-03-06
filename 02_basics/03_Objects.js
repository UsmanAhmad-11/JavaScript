//singleton
// Object.create();   //constructor method

//object literals

const mySym = Symbol("key1");


const jsUser = {
    name : "Usman",
    "full name" : "Usman Ahmad",
    age : 20,
    location : "Lahore",
    [mySym] : "My Key 1",
    email : "usman@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"]
}

// How to access


    console.log(jsUser.email);      // this is not a good practice
    console.log(jsUser["email"]);

    // console.log(jsUser. Full name)   // Which is giving an error at the moment that is why the dot syntax is not  
                                        //a good practice

    console.log(jsUser["full name"])
    console.log(typeof jsUser[mySym])


    // Now we need to change value of objects

    jsUser.email = "usman@google.com";
    console.log(jsUser["email"]);

    // Object.freeze(jsUser)

    jsUser.email = "usman@gpt.com";
    // console.log(jsUser);
    
    // Adding a greeting via function in object
    
    jsUser.greeting = function(){
        console.log("Hello Js User")
    }

    jsUser.greetingTwo = function(){
        console.log(`Hello Js User, ${this.name}`)
    }

    console.log(jsUser.greeting());
    console.log(jsUser.greetingTwo());