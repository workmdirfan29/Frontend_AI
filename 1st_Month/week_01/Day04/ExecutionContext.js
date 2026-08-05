function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
}

console.log("Start");
one();
console.log("End");
