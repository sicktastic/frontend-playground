// Video Lecture
// https://www.youtube.com/watch?v=X52b-8y2Hf4&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR&index=2

// Syntax
// 00:12:42 - Types
// 00:13:54 - Typecasting
// 00:16:05 - Types Demo
// 00:22:50 - Objects
// 00:24:49 - Objects Demo
// 00:34:42 - Object Mutation
// 00:48:37 - Prototypal Inheritance
// 00:57:55 - Scope
// 01:13:25 - The JavaScript Engine
// 01:18:44 - The Global Object
// 01:23:29 - Closures

const firstName = "Anthony";
const LastName = 'Lee'

const val = 42

// const arr = [
//   'string',
//   42,
//   function() { console.log('hi') }
// ]

// arr[2]()
// runs the function

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

const x = 42
console.log(typeof x)

console.log(typeof null);
// prints Object

// Coercion
//
// Falty value?
//  undefined
//  null
//  false
//  +0, -0, Nan
//  ""
//
// Truthy?
//  {}
//  []
//  Everything else
//
//  Primitives vs. Objects
//  Primitives are immutable
//  Objects are mutable and store by reference
//
//  Passing by reference vs. passing by value

const o = new Object()
o.firstName = "Anthony"
o.lastName = "Lee"
o.isTeaching = true
o.greet = function() {
  console.log("hi!")
}

// Object literal

const o2 = {}
o.firstName = "Chey"
o['lastName'] = "Lee"
const key = "isTeaching"
o[key] = true 
o['greet'] = function() {
  console.log("hi!")
}

const o3 = {
  firstName: "Raine", 
  lastName: "Lee",
  isTeaching: true,
  greet: function() {
    console.log("hi!")
  },
  // object within object
  address: {
    street: "1 Street",
    number: 123
  }
}

console.log(o3.address.street);

const oo = {
  a: 'a',
  b: 'b'
}

// by stored by reference
const oo2 = oo

oo.a = 'new value'

console.log(oo2.a);

// changing prototype is discouraged

// closures

function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function() { console.log(i) })
  }

  return arr
}

const arr = makeFunctionArray()

arr[0]()
