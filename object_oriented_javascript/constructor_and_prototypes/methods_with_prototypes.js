function Dice(sides) {
  this.side = sides;
}

Dice.prototype.roll = function() {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

