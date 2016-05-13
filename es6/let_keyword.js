// Original
var message = "hi";

{
  var message = "bye";
}

console.log(message); //outputs "bye"

// Let
let message = "hi";

{
  let message = "bye";
}

console.log(message); //outputs "hi"

// Example
var fs = [];

for(var i=0; i <10; i++) {
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})

// Output
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

var fs = [];

for(let i=0; i <10; i++) {
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})

// Output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
