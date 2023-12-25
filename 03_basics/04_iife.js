// IMMEDIATE INVOKED FUNCTION EXECUTION

(function db(){
    console.log('DB CONNECTED');
})(); // semicolon is neceesary in iife to stop the execution

//for remove the pollution of global scope we use iife and for immediate calling of a func


//with arrow function

(()=>{
    console.log("DB CONNECTED TWO");
})();