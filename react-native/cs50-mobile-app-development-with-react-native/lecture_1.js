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

// const counter =  (function() {
//   let count = 0

//   return {
//     inc: function() { count = count + 1 },
//     get: function() { console.log(count) }
//   }
// })()

// counter.get()
// counter.inc()
// counter.get()

// using iife to solove closure bug

// function makeFunctionArray() {
//   const arr = []

//   for (var i = 0; i < 5; i++) {
//     arr.push((function(x) {
//       return function() { console.log(x) }
//     })(i))
//   }

//   return arr
// }

// const functionArr = makeFunctionArray()

// functionArr[0]()

// first class functions

// .map
// const x = [0,1,2,3]

// function addOne(number) { return number + 1 }

// console.log(x.map(addOne));

// higher order functions

function map(arr, fn) {
  const newArr = []

  // for (let i = 0; i < arr.length; i++) {
  //   let val = arr[i]
  //   newArr.push(fn(val))
  // }

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })

  return newArr
}

function addOne(num) { return num + 1 }

const x = [0, 1, 2, 3]

console.log(map(x, addOne))
