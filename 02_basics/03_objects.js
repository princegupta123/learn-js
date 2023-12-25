//singleton -- when we declare object like literal then sigleton not forms
const jsUser = new Object(); //singleton object
//constuctor => singleton

//object literals
let mySym = Symbol("key1");
const JsUser = {
  name: "Prince",
  isLoggedIn: "false",
  email: "pg@gmail.com",
  [mySym]: "mykey1",
};

// console.log(typeof JsUser[mySym]); //string
// console.log(JsUser.email);//pg@gmail.com
// console.log(JsUser["email"]) //pg@gmail.com
JsUser.email = "prince@chatgpt.com";
// Object.freeze(JsUser); //it will freeze the object means no chnage will be made after this
JsUser.email = "prince@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello Js User //undefined
