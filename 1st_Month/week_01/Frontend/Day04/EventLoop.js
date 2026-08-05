
// ===============================
// Example 1: setTimeout (Macrotask)
// ===============================

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


/*
Output:
Start
End
Timeout


Execution Flow:

Call Stack
-----------
console.log("Start")
setTimeout()
console.log("End")

↓ (Call Stack Empty)


Macrotask Queue
---------------
setTimeout callback


Event Loop:
-----------
Call Stack empty hone ke baad
Macrotask Queue se callback uthakar
Call Stack mein bhejta hai.
*/


// ===============================
// Microtask Queue Example
// ===============================

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


/*
Output:
Start
End
Promise


Microtask Queue:

The Microtask Queue is a high-priority queue
that stores callbacks from Promises
(then, catch, finally) and queueMicrotask().

When the Call Stack becomes empty,
the Event Loop executes all microtasks
before processing any macrotasks.
*/


// ===============================
// Microtask vs Macrotask Example
// ===============================

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


/*
Output:
Start
End
Promise
Timeout


Execution Flow:

Call Stack
-----------
console.log("Start")
setTimeout()
Promise.then()
console.log("End")


↓ (Call Stack Empty)


Microtask Queue (High Priority)
-------------------------------
Promise callback


↓


Macrotask Queue
---------------
setTimeout callback



Rule:
-----
Event Loop always executes Microtask Queue
before Macrotask Queue.
*/


// ===============================
// Macrotask Queue Definition
// ===============================

/*
The Macrotask Queue (also called Callback Queue)
is a normal-priority queue that stores callbacks
from APIs like setTimeout, setInterval,
and browser events like click and scroll.

These tasks are executed only after the
Call Stack is empty and all Microtasks
have been completed.
*/


// Example of Macrotask

setTimeout(() => {
  console.log("Macrotask");
}, 0);


/*
Interview Summary:

1. Call Stack:
   The place where JavaScript executes code.

2. Web APIs:
   Browser features that handle asynchronous operations
   like setTimeout, fetch, and DOM events.

3. Microtask Queue:
   High-priority queue for Promise callbacks
   and queueMicrotask().

4. Macrotask Queue:
   Normal-priority queue for setTimeout,
   setInterval, and event callbacks.

5. Event Loop:
   Continuously checks whether the Call Stack is empty.
   If empty, it moves tasks from queues to the Call Stack.

Priority Order:

Synchronous Code
        ↓
Microtask Queue
        ↓
Macrotask Queue
*/