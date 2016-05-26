// Example
//
// function printNumber(number) {
//   var placeholder = document.getElementById("placeholder");
//   placeholder.innerHTML = number;
// }

// var button = document.getElementById("button");

// button.onclick = function() {
//   var result = 1;
//   printNumber(result);
// }

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
}
