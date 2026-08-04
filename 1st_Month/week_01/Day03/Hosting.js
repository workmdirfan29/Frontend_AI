// What is hosting?

// Hoisting in JavaScript refers to moving declarations to the top of their scope before code execution.

// Types of Hoisting

// For  <-- var -->

console.log(name);
var name = "jhon";

// Output: undefined
// Reason : JavaScript creates the variable a before executing the code. At first, a has the value undefined. Later, when JavaScript reaches name = jhon, it assigns the value jhon. So console.log(name) prints undefined.

// For  <-- let -->

console.log(a);
let a = 10;

// Output: ReferenceError: Cannot access 'a' before initialization

// Reason : JavaScript creates the variable a during hoisting, but it does not allow you to use it before the declaration. When console.log(a) runs, a is not initialized yet, so JavaScript throws a ReferenceError.

// For  <-- const -->

console.log(b);
const b = 20;

// Output: ReferenceError: Cannot access 'b' before initialization

// Reason : JavaScript creates the variable a during hoisting, but const must be initialized when it is declared. Before that happens, JavaScript does not allow access to the variable, so it throws a ReferenceError.

//  Summary

// var → "The variable exists, but its value is undefined."
// let → "The variable exists, but you cannot use it before it is initialized."
// const → "The variable exists, but you cannot use it before it is initialized."

// Function Declaration Hoisting

greet();

function greet() {
  console.log("Good Morning Jhon");
}

// Outupt: Good Morning Jhon
// Reason: JavaScript hoists function declarations completely. Before executing the code, JavaScript stores the entire function in memory. Because the function is already available in memory, we can call it before its actual declaration in the code.

// Function Expression Hoisting

hello();
var hello = function () {
  return console.log("jethalal");
};

// Output: TypeError: hello is not a function
// Reason: JavaScript hoists the variable hello, but it does not hoist the function assigned to it. Before execution, hello is created and its value is set to undefined. When hello() runs, JavaScript tries to call undefined as a function, which is not possible. That's why it gives a TypeError: hello is not a function. Later, the function is assigned to hello, and only after that we can call it.


// Hoisting with let and const in Functions

function test() {
  console.log(x); 
  let x = 70;
}
test();

// Output: ReferenceError: Cannot access 'x' before initialization
// Reason: Variable exists but is locked until declaration line, so accessing before that gives ReferenceError

