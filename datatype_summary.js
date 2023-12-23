//datatype is of two types => 1) primitive 2) non-primitive
//primitive is call by value and another is call by reference


const id = Symbol('123');
const anotherId = Symbol('123');
console.table([id, anotherId])
console.log(id === anotherId) //false because it return unique value

// primitive type => String, Boolean, Number, null, undefined, Symbol, BIGINT

//call by value means copy is created of a variable then all the changes made in that copy


//reference type or non-primitive type

// => arrays, objects and functions


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) and Heap(Non-Primitive) Memory
//In stack memory the copy is created and the changes occurs in copy but in heap original value changes