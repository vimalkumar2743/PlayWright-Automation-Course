//1) datatypes
//variables declaration
//hoisting
//Scope

//datatypes
//1. Primitive data types
//   - String
//   - Number
//   - Boolean
//   - Undefined
//   - Null
//   - Symbol
//   - BigInt

//String data type - represented using ''," ", ``(the key above your tab key - backticks)

empFirstName = 'Vimal';
empLastName = "Kumar";
console.log(empFirstName);
console.log(typeof empFirstName);
console.log(empLastName);
console.log(typeof empLastName);

//Number data type

empNumber = 124104;
console.log(empNumber);
console.log(typeof empNumber);
empMobileNumber = 9841682826;
console.log(empMobileNumber);
console.log(typeof empMobileNumber);

//Boolean data type - either it can be true or false
empIsMarried = true;
console.log(empIsMarried);
console.log(typeof empIsMarried);
empknowsAutomation = false;
console.log(empknowsAutomation);
console.log(typeof empknowsAutomation);

//Undefined data type - means a variable has no value assigned may be value will be assigned later at runtime
var empAddress;
console.log(empAddress);
console.log(typeof empAddress);

//Null data type - null means the value is intentonally set to 'no value' or empty
var empLandline = null;
console.log(empLandline);
console.log(typeof empLandline);

//bigint data type -bigint is used to store very large integers beyond the JS number linit (2^53-1)
var empTransactionId = 456709876456709876567n;
console.log(empTransactionId);
console.log(typeof empTransactionId);

// Symbol data type - Symbol is a unique and immutable primitive value and may be used as the key of an Object property
var empSymbol = Symbol('empId');
console.log(empSymbol);
console.log(typeof empSymbol);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2) Variable:

/*Variable declaration with Var, Let and const
-----------------------------------------------

Variable declaration means creating a variable to store data in memory.

// Declaration : creating variable
var name

// Initialization :assigning value
name = "Sindhu"


// Declaration + Initialization
var age = 25

console.log(name); // Sindhu
console.log(age);  // 25


1) Variable declaration with var Keyword

var-> can be redeclared and reassigned

2) Variable declaration with let Keyword

let-> cannot be redeclared but can be reassigned

3) Variable declaration with const Keyword

const-> cannot be redeclared and cannot be reassigned

*/

//var variable declaration with var Keyword
//var-> can be redeclared and reassigned

var empName = "Vimal";
console.log(empName);
var empName = "Kumar";
console.log(empName);
empName = "Sindhu";
console.log(empName);

//let variable declaration with let Keyword
//let-> cannot be redeclared but can be reassigned

let empCompany = "Equitas Small Finance Bank";
console.log(empCompany);
//let empCompany = "XYZ Corporation"; // This will throw an error because empCompany is already declared with let and cannot be redeclared
//console.log(empCompany);
empCompany = "ABC Corporation";// This is valid because empCompany can be reassigned. let-> cannot be redeclared but can be reassigned
console.log(empCompany);

//const variable declaration with const Keyword
//const-> cannot be redeclared and cannot be reassigned

const empId = 124104;
console.log(empId);
//empId = 124105; // This will throw an error because empId is declared with const and cannot be reassigned
//console.log(empId);

//-------------------------------------------------------------------------------------------------------------------------


//3) Hoisting:

/*Hoisting - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code.

Hoisting is the default behavior of JavaScript where declarations are moved to the 
top of their scope during the memory creation phase before execution.

var -> Hoisted and initialized with undefined
let-> Hoisted but not initialized → accessing before declaration gives ReferenceError (TDZ)
const-> Hoisted but not initialized → accessing before declaration gives ReferenceError (TDZ)

TDZ(Temporal dead zone)-> The time period between hoisting and initialization of a variable, where
it cannot be accessed.*/

//var hoisting
console.log(empAge); // undefined
var empAge = 25;
console.log(empAge); // 25

//let hoisting
//console.log(empSalary); // ReferenceError: Cannot access 'empSalary' before initialization
let empSalary = 50000;
console.log(empSalary); // 50000

//const hoisting
//console.log(empDepartment); // ReferenceError: Cannot access 'empDepartment' before initialization
const empDepartment = "IT";
console.log(empDepartment); // IT


//4) Scope:

/*Scope - Scope is the current context of code, which determines the accessibility of variables to JavaScript. In other words, scope refers to the visibility or lifetime of a variable in a program.

/*
Types of scope:
--------------

a. Global scope :

Variables declared outside any function or block.
Accessible from anywhere in the program.

let name = "JavaScript";

function display() {
    console.log(name);
}
//block {}

display();
console.log(name);

b. Function scope :

Variables declared inside a function.
Accessible only within that function.
Cannot be accessed outside the function

function greet() {
    let message = "Hello";

    console.log(message);
}

greet();


c. Block scope :

Variables declared inside a block { }
Applicable to let and const
Accessible only within that block

{
    let age = 25;
    console.log(age);
}

age is Accessible, only inside the block {}

ex:

if(true){
    let status = "Active";
    console.log(status) //Accessible
}
console.log(status); // Error*/


var globalVar = "I am a global variable";
let globalLetVar = "I am a global variable declared with let";
const globalConstVar = "I am a global variable declared with const";

function functionScopeExample() {
    var functionVar = "I am a function-scoped variable";
    let functionLetVar = "I am a function-scoped variable declared with let";
    console.log(functionVar);
    console.log(functionLetVar);
    console.log(globalVar); // Accessible
    console.log(globalLetVar);
    console.log(globalConstVar); // Accessible
}
function globalScopeExample() {
    console.log(globalVar); // Accessible
    console.log(globalLetVar); // Accessible
    console.log(globalConstVar); // Accessible 
    //console.log(functionVar); // Not Accessible
    //console.log(functionLetVar); // Not Accessible 
}

functionScopeExample();
globalScopeExample();