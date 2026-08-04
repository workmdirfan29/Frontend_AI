/*Data Types in JavaScript

1.Primitive Data Types 

 Primitive data types store a single value.
 
 /* 
 -------JavaScript has 7 primitive data types:--------
 
String
Number
Boolean
Undefined
Null
BigInt
Symbol

*/

//  For string

let name = "Rahul";

console.log(name);

// Number

let age = 25;

let price = 99.99;

console.log(age);
console.log(price);

// Boolean

let isLoggedIn = true;

console.log(isLoggedIn);

// Undefined

let username;

console.log(username);

// Null

let user = null;

console.log(user);

/*  Non-Primitive Data Types

Non-primitive data types can store multiple values.

1.Object
2.Array
3.Function

*/

// Object

// An object stores data in key-value pairs.

let student = {
  name: "Rahul",
  age: 20,
  city: "Delhi",
};

console.log(student);

// Array ------------------

// An array stores multiple values in a single variable.

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

// Function----------------

// A function is a reusable block of code.

function greet() {
  console.log("Hello");
}

greet();

// Type Checking (typeof)

let name = "Rahul";

console.log(typeof name);

// Type Conversion
// Type conversion means manually converting one data type into another.

let value = "100";

let num = Number(value);

console.log(num);

// Type Coercion

// Type coercion is the automatic conversion of one data type into another by JavaScript.

let result = "5" + 10;

console.log(result);