console.log("Start");

function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
}

one();

console.log("End");


/*
Global
↓
one()
↓
two()
↑
one() समाप्त
↑
Global समाप्त
*/