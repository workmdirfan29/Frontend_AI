//Q1

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const result = outer();

result();
result();
result();

// --------------------------------------------------

//Q2



function test() {
  let message = "Hello";

  function display() {
    console.log(message);
  }

  return display;
}

const func = test();

func();

//Q3

function counter() {
  let num = 10;

  return function () {
    console.log(num);
  };
}

const a = counter();

let num = 20;

a();

//Q4

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}



// --------------------------------------------------

//Q5



for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}


// --------------------------------------------------

6;



function createUser() {
  let username = "Jhon";

  return {
    getName: function () {
      console.log(username);
    },
  };
}

const user = createUser();

user.getName();


// --------------------------------------------------

7;

// Question: What will be the output?

function multiply(x) {
  return function (y) {
    ```
return x * y;
```;
  };
}

const result = multiply(5);

console.log(result(4));



// --------------------------------------------------

8;


function example() {
  let value = 100;

  return function change() {
    ```
value = 200;
console.log(value);
```;
  };
}

const update = example();

update();


// --------------------------------------------------

9;


function outer() {
  let a = 10;

  function first() {
    ```
let b = 20;

function second() {
  console.log(a + b);
}

return second;
```;
  }

  return first();
}

const result = outer();

result();


// --------------------------------------------------

10;


function greeting() {
  let name = "Alex";

  setTimeout(() => {
    ```
console.log(name);
```;
  }, 2000);
}

greeting();


