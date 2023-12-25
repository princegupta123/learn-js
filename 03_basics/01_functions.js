// function myName(name){
//     console.log(name);
// }
// function myName(name){
//   return name;
//   console.log("name") // after return statement code will not execute
// }

function myName(name){
    if(!name){
        console.log("Please enter the name");
        return;
    }
    return name;
  }



const name = myName(); //prince

// console.log(name); //undefined


//rest operator

function calculateCartPrice(...num){
    return num;
}

// console.log(calculateCartPrice(100, 200, 300)); //[ 100, 200, 300 ]


