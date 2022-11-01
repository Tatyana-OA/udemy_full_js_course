console.log("Console statement coming from imported script");

/*
// Just values
console.log("Jonas ", "string");
console.log(8, " number");

// Assigning constant values to variables
const name = "Jonas";
const age = 8;

// Checking type of values
console.log(typeof name);
console.log(typeof age);

// Using variables that have values

console.log(name, " is ", age, " years old.");

//Interpolated string

console.log(`${name} is ${age} years old.`);

// camelCase for variables

const firstName = "John";

// Constants that will never chnage -> UPPERCASE

const PI = 3.1415;

// Functions

let $dosth = () => {
  console.log("Doing sth");
};

$dosth();

let myFunctionDoesThings = () => {
  console.log("Doing things");
};
myFunctionDoesThings();

*/

/*
// Data types

let javascriptIsFun = true;
console.log(typeof javascriptIsFun, javascriptIsFun);
console.log(typeof false, 1 === 2);
console.log(typeof "Jonas", "-> Jonas");
console.log(typeof 8, "-> 8");

// Dynamic typing

console.log(javascriptIsFun); // true
javascriptIsFun = "So fun, yeah";
console.log(javascriptIsFun);

// undefined vs null

let answer;
console.log(answer); // undefined; empty variable

let question = null;
console.log(question); // null; value is null
console.log(typeof question); //object


// Let, Var, Const

let age = 30; // can be mutated
age = 31;

const birthYear = 1991; // cannot be changed

var job = "programmer"; // can be mutated
job = "UX designer";



// Operators

const age = 2037 - 1991;
console.log(age);

const value = (age * 2) / 3 ** 2;
console.log(value);

// Cases with "+"
console.log("Hello " + "World");
let x = 10 + 10;
x += 10;
x++;
x--;
console.log(x);

// Comparisons

let ageSarah = 20;
let ageJohn = 30;
console.log(ageSarah > ageJohn); // false

// Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// Strings

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);


// Type conversion - we do it

const year = "1991";
const yearAsNum = Number(year);
console.log(year, yearAsNum);

console.log(year + 5); // 19915 - concats
console.log(Number("Hello")); // NaN
console.log(yearAsNum + 5); // 1996

console.log(typeof "3"); // string
console.log(typeof Number("3")); // number
console.log(typeof +"3"); // number

// Type coercion - JS on its own


//Falsy values -> 0, "", undefined, null, NaN

console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined"); // this will trigger;
}

// Equality  operators

console.log(18 === 18); //true both type and value
console.log({} == {}); //false
console.log({} === {}); //false
console.log("18" == 18); // true
console.log("18" === 18); // false

const inputPrompt = prompt("How ya doing?");
if (typeof inputPrompt !== "string") {
  console.log("Invalid input");
}
console.log(typeof inputPrompt);
console.log(inputPrompt);

const hasDriversLicense = true;
const hasGoodVision = false;
if (hasDriversLicense && hasGoodVision) {
  console.log("You can drive");
} else if (hasDriversLicense && !hasGoodVision) {
  console.log("You can drive but check your vision");
} else if (hasGoodVision && !hasDriversLicense) {
  console.log("Good vision will not do you good without a license");
}

const isTired = true;

const canDrive = hasDriversLicense && hasGoodVision && !isTired;
console.log(canDrive);


const day = "Monday";

// Switch does strict comparison (===)

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
  case "Wednesday":
    console.log("Today is Tuesday or Wednesday");
    break;
  default:
    console.log("It is not Monday, Tuesday or Wednesday");
    break;
}
*/
