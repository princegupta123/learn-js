const name = 'PrinceGupta';

console.log(`My name is ${name}`);  //good practice to write string

const slicedName = name.slice(-2, 5); //reverse count
console.log(slicedName);


const trimString = "   Prince    ";
console.log(trimString.trim()); //we can trim from start and end also


const url = "https://localhost:8000/prince%20Gupta";

console.log(url.replace('%20', "_"));
console.log(url.includes('ht'));

const word = url.split('%20');
console.log(word);