global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
    blockScoped;

console.log('Variables and constants');
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);


console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;


console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

console.log('Boolean');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
console.log(true1);
console.log(false1);
console.log(false2);

console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log('If else');
if(true1) {
    console.log(true);
} if
(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('Ternary');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log('Arrays');
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

console.log('Array index and length');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

// adding new items
numberArray1.push(6);
stringArray1.push('string3');
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log('Add and remove data to arrays');
console.log(numberArray1);
console.log(stringArray1);

for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log('Map');
console.log(numberArray1);
console.log(squares);
console.log(cubes);

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log('Find');
console.log(four);
console.log(string3);


const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log('Find Index');
console.log(fourIndex);
console.log(string3Index);

const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);


console.log('Filter');
console.log(numberArray1);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log('template strings');
console.log(result1);
const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2);

const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the work here */
}
$(init);