const accountId = 144553;
let accountEmail = "usman@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;
// accountId = 2 ; // not allowed

accountEmail = "gd@gd.com"
accountPassword = "234234"
accountCity = "Karachi"

/*
prefer not to usr var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])