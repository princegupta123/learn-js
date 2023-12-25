const myDate = new Date();
/*  
console.log(myDate); //2023-12-22T07:51:46.468Z
console.log(myDate.toString()); //Fri Dec 22 2023 13:21:46 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Dec 22 2023
console.log(myDate.toLocaleDateString()); //12/22/2023
console.log(myDate.toISOString()); //2023-12-22T07:51:46.468Z
console.log(myDate.toJSON()); //2023-12-22T07:51:46.468Z

*/

let myCreateDate = new Date("2023-01-15"); //15/1/2023, 5:30:00 am
// console.log(myCreateDate.toLocaleString());

let currentTimeStamp = Date.now(); //1703343075241
// console.log(currentTimeStamp);

console.log(Math.floor(currentTimeStamp/1000)) //1703343135 time in seconds from milliseconds

//about toLocaleString method

let newDate = new Date().toLocaleString('default', {
    
})



