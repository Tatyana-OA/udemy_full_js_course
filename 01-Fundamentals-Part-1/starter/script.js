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

*/

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

console.log(typeof "3");
console.log(typeof Number("3"));
console.log(typeof +"3");

// Strings

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);
