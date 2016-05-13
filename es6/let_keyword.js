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

function varFunc(){
  var previous = 0;
  var current = 1;
  var i;
  var temp;

  for(i = 0; i < 10; i+=1){
    temp = previous;
    previous = current;
    current = temp + current;
  }
  console.log(current);
}

function letFunc(){
  let previous = 0;
  let current = 1;

  for(let i = 0; i < 10; i+=1){
    let temp = previous;
    previous = current;
    current = temp + current;
  }

  console.log(current);
}

varFunc();
letFunc();
