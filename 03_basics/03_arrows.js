const user = {
  name: "Prince",
  welcomeMessage: function () {
    console.log(`Welcome ${this.name}!`);
  },
};
// console.log(this) //{} but if you will run this in browser then a window object will come as output

// user.welcomeMessage();

// function chai(){
//     console.log(this)// this will give many thing as ouput because it is inside the func
// }

const chai = () => {
  console.log("hello") //{} //this function does not support in arrow function
};
chai();
// console.log(chai); //[Function: chai]
