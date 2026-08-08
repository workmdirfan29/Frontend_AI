// Question 2 Can you redeclare and reassign variables declared with var, let, and const?

var a = 2;
var a = 20; // allowed
let b = 7;
// let b=6;     // error
const c = 29;
// const c=87;   // error

console.log(`a:${a} , b:${b} , c:${c} , `);

// Question 3 What is variable hoisting?

console.log(name);
var name = "jhon"; // undefined

// Question 4 What is the Temporal Dead Zone (TDZ)?

// console.log(age);
// let age = 20; // Reffernce error

// Question 3 What is the difference between == and ===?

console.log("5" == 5); //true
console.log(5 === "5"); //false

// Question 2 How do you add an element to the end of an array?

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.push(20);
console.log(`New_Array:${arr}`);

//Question 3 How do you remove the last element from an array?

arr.pop(20);
console.log(`Popped:${arr}`);
console.log(typeof arr); // return object

const duplicate_arr = [11, 34, 22, 11, 33, 34, 3, 22, 5, 6, 7];
const result = [...new Set(duplicate_arr)];
console.log(result);
console.log(typeof result); // return object

// Question 5 How do you reverse an array?

const reverse_array = [1, 2, 3, 4];

console.log(reverse_array.reverse());

// Question 6 How do you find the largest number in an array?

const largest_number = [10, 5, 50, 40];

console.log(Math.max(...largest_number));

//Question 7 How do you merge two arrays? using

const arr1 = [2, 5, 7, 8, 20];
const arr2 = [30, 20, 44, 22, 45];

console.log(...arr1, ...arr2); //spread operator
console.log(arr1.concat(arr2)); // concat

// Question 8 How do you flatten a nested array?

const nested_array = [1, 2, [3, 4, [5, 6, [7, [8, 9], 0]]]];

console.log("Remove_one_layer:", nested_array.flat(1)); // it will remove only one layer
console.log("Remove_two_layer:", nested_array.flat(2)); // it will remove only two layer

// if we want remove all array and return single array then we will use flat(infinity)
console.log("New_Single_Array:", nested_array.flat(Infinity));

//Question 18. What is the difference between map(), filter(), and reduce()? map()

const numbers = [0, 9, 68, 47, 36, 25, 14, 33, 42, 51];

const using_map = numbers.map((num) => num * 2);
console.log(using_map);

const using_filter = numbers.filter((num) => num > 20 && num < 50);

console.log(using_filter);

const using_reduce = numbers.reduce((a, b) => {
  return a + b;
}, 0);

console.log(`Total:${using_reduce}`);

// Question 20. What is the spread operator?

const nums = [1, 2, 3, 4, 5];

const using_spread = [...nums, 6, 7, 8, 9, 0];

console.log(using_spread);

//  same thing do with object

const user = {
  name: "sahil_ik",
  age: "20",
};

const newUser = {
  ...user,
  city: "Patna",
};

console.log(newUser);

// collect multiple value into an array using rest operator

function using_rest(...rest_num) {
  console.log(`Rest_Num: ${rest_num}`);
}
using_rest(19, 23, 45, 88, 90, 44);

// Question 37. What is this word  in JavaScript?

const student = {
  name: "Irfan",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
student.greet();

//  What is arrow function
const add = (a, b) => {
  return a + b;
};

console.log(`SUM:${add(10, 80)}`);
