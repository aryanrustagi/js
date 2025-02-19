const accountId = 325781
let accountEmail = "aryan@example.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ar@example.com"
accountPassword = "21221121"
accountCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var
cause of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])