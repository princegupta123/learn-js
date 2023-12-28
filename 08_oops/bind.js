const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);




  // call method is used to access data of another object
  // apply is similar like call but it take parameter an an array
  //bind is used for referencing another object for your function.