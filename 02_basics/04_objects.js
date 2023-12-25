const obj1 = {
    name: "a",
    age: 'b',
    email :'c'
};

const obj2 = {
    ame: "a",
    ge: 'b',
    eil :'c'
};

// const obj3 = {obj1, obj2};
//  const obj3 = Object.assign({}, obj1, obj2); //{ name: 'a', age: 'b', email: 'c', ame: 'a', ge: 'b', eil: 'c' }

const obj3 = {...obj1, ...obj2};//{ name: 'a', age: 'b', email: 'c', ame: 'a', ge: 'b', eil: 'c' }

// console.log(obj3);


const keys = Object.keys(obj2); //[ 'ame', 'ge', 'eil' ]
// console.log(keys);
const values = Object.values(obj2);
// console.log(values);

const entries = Object.entries(obj1);
// console.log(entries); //[ [ 'name', 'a' ], [ 'age', 'b' ], [ 'email', 'c' ] ]

//oject destructuring

// const {name : n} = obj1;
const {name} = obj1;

console.log(name);