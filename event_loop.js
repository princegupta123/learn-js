/*
In JavaScript, the event loop is a crucial concept for handling asynchronous operations and ensuring that your code runs efficiently without blocking the execution of other tasks. The event loop is part of the browser's runtime environment or the Node.js environment, depending on where your JavaScript code is running.
Call Stack:

The call stack is a data structure that keeps track of the execution of function calls in your code. When a function is called, a new frame is added to the top of the call stack, and when a function is completed, its frame is removed from the stack.
Task Queue:

The task queue is a queue that holds tasks (functions) that are ready to be executed. Tasks in the queue are processed in a first-in, first-out (FIFO) order.
Event Loop:

The event loop continuously checks the call stack and the task queue. If the call stack is empty, the event loop takes the first task from the task queue and pushes it onto the call stack, allowing it to be executed.
Callback Queue:

In addition to the task queue, there is often a callback queue that holds functions (callbacks) to be executed after a certain event or operation is completed. For example, a callback may be added to the callback queue after an asynchronous operation like a setTimeout or an AJAX request.
Microtasks:

Microtasks are tasks that are executed at a higher priority than regular tasks. They are typically used for promises. Microtasks are processed after each phase of the event loop. Promises, process.nextTick in Node.js, and MutationObserver in browsers are examples of operations that create microtasks.

console.log('Start');

setTimeout(function () {
  console.log('Timeout callback');
}, 2000);

console.log('End');

*/