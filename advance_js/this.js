// go over in depth of this

// console.log(this);

// this.anthony = 1;

// console.log(this.anthony);
// console.log(window.anthony);
// console.log(anthony);

// function checkThis() {
//   console.log(this);
// }
// checkThis();

// var anthony = {
//   checkThis: function() {
//     // stablelize

//     var self = this;

//     console.log(self);

//     function checkOther() {
//       console.log(self);

//       // this calls window again
//       this.moo = 1 
//     }

//     checkOther();

//     console.log(self.moo);
//     console.log(window.moo);
//   }
// }
// anthony.checkThis();
// console.log(anthony);

// calls global object again
// var func = anthony.checkThis;
// func();

// var Portland = {
//   bridges: 12,
//   airport: 1,
//   soccerTeam: 1,
//   logNumberOfBridges: function() {
//     console.log("There are " + this.bridges + " bridges in Portland!")
//   }
//   // logTeams: function() {
//   //   console.log(this.soccerTeam);
//   // }
// }

// function logTeams() {
//   // console.log(this.soccerTeam);
//   console.log(this);
// }

// it references the object, when the method is inside the object
// Portland.logNumberOfBridges();
// Portland.logTeams();

// Portland.foo = logTeams;
// Portland.foo();

// logTeams();


// Constructor

var City = function(name, state) {
  this.name = name || 'Portland';
  this.state = state || 'Oregon';
  this.printMyCityAndState = function() {
    console.log("My city is " + this.name + ", and my state is " + this.state);
  };
};

portland = new City();
seattle = new City('Seattle', 'Washington');

console.log(portland);
console.log(seattle);

portland.printMyCityAndState();
