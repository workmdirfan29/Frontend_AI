// JavaScript Scope Practice Questions 

// 1. Global Scope
let planet = "Earth";

function showPlanet() {
  console.log(planet);
}

showPlanet();

// 2. Function Scope
function calculate() {
  let total = 500;
}

calculate();

console.log(total);

// 3. Block Scope
{
  let animal = "Lion";
  console.log(animal);
}

console.log(animal);

// 4. var Scope
{
  var score = 90;
}

console.log(score);

// 5. let vs var
{
  var firstName = "Ali";
  let lastName = "Khan";
}

console.log(firstName);
console.log(lastName);

// 6. Scope Chain
let company = "Google";

function office() {
  let floor = 5;

  function desk() {
    let chair = "Black";
    console.log(company, floor, chair);
  }

  desk();
}

office();

// 7. Shadowing
let color = "Red";

function paint() {
  let color = "Blue";
  console.log(color);
}

paint();
console.log(color);

// 8. var loop scope
for (var number = 1; number <= 3; number++) {}

console.log(number);

// 9. let loop scope
for (let count = 1; count <= 3; count++) {}

console.log(count);

// 10. Nested Function
function house() {
  let room = "Kitchen";

  function inside() {
    console.log(room);
  }

  inside();
}

house();

// 11. Hoisting with var
function test() {
  console.log(product);

  var product = "Laptop";
}

test();

// 12. TDZ with let
function check() {
  console.log(price);

  let price = 100;
}

check();

// 13. Variable Shadowing
let number = 50;

function update() {
  let number = 80;

  console.log(number);
}

update();

console.log(number);

// 14. Multiple Scope
let country = "India";

function state() {
  let city = "Delhi";

  function area() {
    let street = "MG Road";

    console.log(country, city, street);
  }

  area();
}

state();

// 15. Closure Counter
function createCounter() {
  let value = 0;

  return function () {
    value++;

    console.log(value);
  };
}

const increase = createCounter();

increase();
increase();
increase();

// 16. Multiple Closure
function generate() {
  let item = "Book";

  return function () {
    console.log(item);
  };
}

let first = generate();
let second = generate();

first();
second();

// 17. var + setTimeout
for (var index = 1; index <= 3; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

// 18. let + setTimeout
for (let position = 1; position <= 3; position++) {
  setTimeout(() => {
    console.log(position);
  }, 1000);
}

// 19. Scope Lookup
let animalName = "Tiger";

function jungle() {
  let animalName = "Lion";

  function forest() {
    console.log(animalName);
  }

  forest();
}

jungle();

// 20. Function Scope Chain
function start() {
  let game = "Chess";

  function play() {
    let player = "John";

    console.log(game, player);
  }

  play();
}

start();

// 21. Closure Memory
function account() {
  let balance = 1000;

  return function () {
    balance += 500;

    console.log(balance);
  };
}

const deposit = account();

deposit();
deposit();

// 22. Closure Object
function wallet() {
  let money = 200;

  return {
    add() {
      money += 100;
      console.log(money);
    },

    remove() {
      money -= 50;
      console.log(money);
    },
  };
}

const myWallet = wallet();

myWallet.add();
myWallet.remove();

// 23. Tricky Scope
let messageText = "Hello";

function greeting() {
  console.log(messageText);

  let messageText = "Hi";
}

greeting();

// 24. Nested Shadowing
let mainValue = 10;

function outer() {
  let mainValue = 20;

  function inner() {
    let mainValue = 30;

    console.log(mainValue);
  }

  inner();
}

outer();

// 25. Closure with Loop
function createList() {
  let tasks = [];

  for (let task = 1; task <= 3; task++) {
    tasks.push(() => console.log(task));
  }

  return tasks;
}

let list = createList();

list[0]();
list[1]();
list[2]();

// 26. Scope Bug Fix
function profile() {
  if (true) {
    let username = "Alex";
  }

  console.log(username);
}

profile();

// 27. Private Variable Challenge
// Create:
// const userData = createUser("Rahul");
// userData.showName();

// 28. Once Function Challenge
// Create:
// const runOnce = once();
// runOnce();
// runOnce();
// runOnce();

// 29. Counter Challenge
// Create:
// const clicks = counter();
// clicks(); // 1
// clicks(); // 2
// clicks(); // 3

// 30. Closure Interview Question
function company() {
  let name = "OpenAI";

  return function () {
    console.log(name);
  };
}

const result = company();

result();
