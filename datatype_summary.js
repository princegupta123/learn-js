//datatype is of two types => 1) primitive 2) non-primitive
//primitive is call by value and another is call by reference


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId) //false because it return unique value

// primitive type => String, Boolean, Number, null, undefined, Symbol, BIGINT

//call by value means copy is created of a variable then all the changes made in that copy


//reference type or non-primitive type

// => arrays, objects and functions