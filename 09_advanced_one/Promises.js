// FIRST METHOD

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB Calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// SECOND METHOD

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});
//THIRD METHOD

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Usman", email: "email@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
// 4th Method

    const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Usman", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFourth
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The Promised is either resolved or rejected"));
//FIFTH METHOD

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//          const response = await fetch('https://jsonplaceholder.typicode.com/users')
//          const data = await response.json()
//          console.log(data);
//         } catch (error) {
//         console.log("E: ", error);
//         }
//         }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
