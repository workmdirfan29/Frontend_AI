// What is Closure?

// Closure in JavaScript is a feature where an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

// A closure is created when a function is defined inside another function and the inner function keeps a reference to the outer function's variables.

// Example:

function outer() {
  let name = "Jhon";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();

// Output: Jhon

// Reason:
// The inner function has access to the variable name from its outer function.
// Even though inner() is inside outer(), it can use the variables created in outer() because of closure.

// Closure Returning Function

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();

// Output:
// 1
// 2
// 3

// Reason:
// Normally, after outer() finishes execution, its variables should be removed from memory.
// But because the returned inner function still uses count, JavaScript keeps the reference of count alive.
// This behavior is called Closure.

// Closure with Multiple Functions

function user() {
  let username = "Jhon";

  function showName() {
    console.log(username);
  }

  function changeName() {
    username = "Alex";
  }

  return {
    showName,
    changeName,
  };
}

const data = user();

data.showName();
data.changeName();
data.showName();

// Output:
// Jhon
// Alex

// Reason:
// Both functions share the same outer variable username.
// Because of closure, both functions can access and modify the variable even after user() execution is completed.

// Closure with setTimeout

function timer() {
  let message = "Hello JavaScript";

  setTimeout(function () {
    console.log(message);
  }, 1000);
}

timer();

// Output:
// Hello JavaScript

// Reason:
// The setTimeout callback executes after 1 second, but it still remembers the variable message from timer().
// Closure allows the callback function to access variables from its outer scope.

// Closure Inside Loop

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output:
// 4
// 4
// 4

// Reason:
// var has function scope, not block scope.
// All callback functions share the same variable i.
// After the loop finishes, i becomes 4, so every callback prints 4.

// Fixing Loop Closure Problem Using let

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output:
// 1
// 2
// 3

// Reason:
// let creates a new variable for every loop iteration.
// Each callback gets its own copy of i because of closure.

// Closure in Function Factory

function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

const double = multiply(2);

double(5);

// Output: 10

// Reason:
// The inner function remembers the value of x even after multiply() has completed.
// This saved value of x is accessed using closure.

// Summary

// Closure → "A function remembers variables from its outer scope."

// Closure is used for:
// 1. Data privacy
// 2. Creating private variables
// 3. Callbacks
// 4. setTimeout and asynchronous programming
// 5. Function factories

// Important Point:

// Closure is created when:
// 1. Function is created inside another function.
// 2. Inner function uses variables of the outer function.
// 3. Inner function survives after outer function execution.
