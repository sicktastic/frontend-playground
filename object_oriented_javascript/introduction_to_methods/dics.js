// Example
//
// var dice = {
//   sides: 6,
//   roll:  function() {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1
//     console.log(randomNumber);
//   }
// }

// var dice10 = {
//   sides: 10,
//   roll:  function() {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1
//     console.log(randomNumber);
//   }
// }

// var dice = {
//   sides: 6,
//   roll:  function() {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1
//     return randomNumber;
//   }
// }

// Simple Constructor

function Dice(sides) {
  this.sides = sides;
  this.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice = new Dice(6);

