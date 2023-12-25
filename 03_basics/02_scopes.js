{
    const a = 10; //undefined error
    let b = 20;  //undefined error
    var c = 30; // 30
}
// console.table([c]);

// console.log(myName("prince")); //prince
function myName(name){
 return name;
}


// console.log(myName2("prince"))  //error because of hoisting
const myName2 = function(name){
    return name;
}