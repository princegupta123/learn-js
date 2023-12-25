//arrays
const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]
myArr.push(9); //[  1, 2, 3, 4,  5, 6, 9 ]
myArr.pop(); //[  1, 2, 3, 4,  5, 6]
myArr.unshift(9); //[  9, 1, 2, 3, 4,  5, 6]
myArr.shift(); //[  1, 2, 3, 4,  5, 6]
// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(9));  //-1 if not present otherwise return index

// console.log(myArr);

//  myArr.slice(1, 3);
// console.log(myArr.slice(1, 3)); //[2, 3] //return the array between 1 to 3, last will exclude
// console.log(myArr);// [  1, 2, 3, 4,  5, 6]
let splicedArr = myArr.splice(1, 3); // cut the element of these index 1 to 3
console.log(myArr); //[ 1, 5, 6 ]
console.log(splicedArr); //[ 2, 3, 4 ]


//shallow copy => if you change in copy object then the change will also be made in original too.
//deep copy => source and copy object are completely independent.

