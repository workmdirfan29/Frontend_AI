/* 
Operators in JavaScript

Operators are special symbols or keywords used to perform operations on values and variables.

*/

/*
Types of Operator

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. AND Operator (&&)
6. OR Operator (||)
7. NOT Operator (!)
8. BITWISE Operator
9. Nullish Coalescing Operator
10.Optional Chaining Operator
11.Ternary Operator

*/

// Arithmetic
console.log(10 + 5);      // 15
console.log(10 - 5);      // 5
console.log(10 * 5);      // 50
console.log(10 / 5);      // 2
console.log(10 % 3);      // 1
console.log(2 ** 3);      // 8

// Increment & Decrement
let a = 5;
a++;
console.log(a);           // 6

let b = 5;
b--;
console.log(b);           // 4


// Assignment
let x = 10;
x += 5;
console.log(x);           // 15


// Comparison
console.log(5 == "5");    // true
console.log(5 === "5");   // false
console.log(10 > 5);      // true


// Logical
console.log(true && true);  // true
console.log(true || false); // true
console.log(!true);         // false


// Bitwise
console.log(5 & 3);       // 1
console.log(5 | 3);       // 7
console.log(5 ^ 3);       // 6


// Ternary
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");


// Nullish Coalescing
let name = null;
console.log(name ?? "Guest");


// Optional Chaining
let user = {
    profile:{
        name:"Rahul"
    }
};

console.log(user.profile?.name);