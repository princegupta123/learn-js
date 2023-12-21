const accountId = 121221
let accountName = "Prince Gupta"
var accountPassword = "123456"
accountCity = "Gurgaon" //we can use space in memory without using keyword in js but it is not good practice
let accountState;  //undefined

// accountId = 123 -- not allowed
accountName = "Prince"
accountPassword = "0987r5"
accountCity="Haryana"
// console.log(accountId); // console only one value at a time

/*
prefer not to use var keyword because of issue in block scope and functional scope
*/
console.table([accountId, accountName, accountPassword, accountCity, accountState]); // console many value at a time


