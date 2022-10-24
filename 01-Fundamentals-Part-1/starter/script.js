console.log("Console statement coming from imported script");

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
