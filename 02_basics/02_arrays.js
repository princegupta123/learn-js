const marvel_heroes = ["shaktiman", "spiderman"];
const dc_hero = ["batman", "thor"];

// marvel_heroes.push(dc_hero); //[ 'shaktiman', 'spiderman', [ 'batman', 'thor' ] ]
// console.log(marvel_heroes);

let concatArrs = marvel_heroes.concat(dc_hero);// [ 'shaktiman', 'spiderman', 'batman', 'thor' ] => it create copy of an object but push function not
// console.log(concatArrs);

const spreadArrs = [...marvel_heroes, ...dc_hero]; //spread opertor expands the array into its element
// console.log(spreadArrs);

const another_array = [1,2, [1,2], [1,2]]; //[ 1, 2, 1, 2, 1, 2 ]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("prince")); //false
console.log(Array.from("prince")); //[ 'p', 'r', 'i', 'n', 'c', 'e' ]
console.log(Array.from({
    name : 'prince'
}));  // []


const score1 =100;
const score2 = 200;
console.log(Array.of(score1,score2)); // [ 100, 200 ]