// React, Props, and State
// 00:00:00 - Introduction
// 00:00:56 - Classes
// 00:04:25 - Set.js
// 00:11:49 - extends
// 00:14:22 - React
// 00:15:12 - Imperative vs. Declarative
// 00:21:14 - React is Declarative
// 00:24:10 - React Components
// 00:29:38 - React Performance
// 00:31:07 - Writing React
// 00:32:56 - Props
// 00:34:12 - codesandbox.io
// 00:40:43 - State
// 00:56:04 - todoApp0.js
// 00:58:27 - todoApp1.js
// 00:59:23 - todoApp2.js
// 01:00:53 - todoApp3.js
// 01:04:32 - Todo List in React
// 01:11:46 - addTodo
// 01:18:26 - removeTodo
// 01:26:10 - toggleTodo
// 01:36:35 - React Native Teaser
// https://goo.gl/BUCqYr

// Class
// class Set {
//   constructor(arr) {
//     this.arr = arr
//   }

//   add(val) {
//     if (!this.has(val)) this.arr.push(val)
//   }

//   delete(val) {
//     this.arr = this.arr.filter(x => x !== val)
//   }

//   has(val) {
//     return this.array.includes(val)
//   }

//   get size() {
//     return this.arry.length
//   }
// }
class MySet extends Set {
  constructor(arr) {
    super(arr)
    this.originalArray = arr
  }

  add(val) {
    super.add(val)
    console.log(`added ${val} to the set!`)
  }

  toArray() {
    return Array.from(this)
  }

  reset() {
    return new MySet(this.originalArray)
  }
}
