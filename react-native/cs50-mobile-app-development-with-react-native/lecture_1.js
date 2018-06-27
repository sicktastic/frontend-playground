// 00:00:00 - ECMAScript
// 00:03:35 - Closures
// 00:13:47 - Immediately Invoked Function Expression
// 00:22:53 - First-Class Functions
// 00:34:19 - Synchronous? Async? Single-Threaded?
// 00:40:07 - Asynchronous JavaScript
// 00:40:18 - Execution Stack
// 01:00:18 - Overflow
// 01:01:47 - Asynchronous Functions
// 01:03:05 - Callbacks
// 01:09:41 - Promises
// 01:20:57 - Async/Await
// 01:26:32 - this
// 01:43:48 - Browsers and the DOM
//
// https://goo.gl/wk9Ljm (Video Lecture)

// function makeFunctionArray() {
//   const arr = []

//   for (var i = 0; i < 5; i++) {
//     arr.push(function() { console.log(i) })
//   }

//   return arr
// }

// const functionArr = makeFunctionArray()

// functionArr[0]()

// function makeHelloFunction() {
//   const message = 'Hello!'

//   function sayHello() {
//     console.log(message)
//   }

//   return sayHello
// }

// const sayHello = makeHelloFunction()

// console.log('value of message:', typeof message)
// console.log(sayHello.toString())

// sayHello()

// Immediately Invoked Function Expression

// const sayHello = (function makeHelloFunction() {
//   const message = 'Hello!'

//   function sayHello() {
//     console.log(message)
//   }

//   return sayHello
// })()

// console.log('value of message:', typeof message)
// console.log(sayHello.toString())

const counter =  function() {
  let count = 0

  return {

  }
}

counter.get()
counter.inc()
counter.get()
