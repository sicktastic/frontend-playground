// Closure
// A function with access to its own private variables

// problem with global variables
// var count = 0;

// function countBirds() {
//   count += 1;
//   return count + ' bird';
// }

// function countDogs() {
//   count += 1;
//   return count + ' dogs';
// }

// function makeBirdCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     return count + ' birds';
//   }
// }

// function makeDogCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     return count + ' dogs';
//   }
// }

// Refactor
function makeCounter(noun) {
  var count = 0;
  return function() {
    count += 1;
    return count + ' ' + noun;
  }
}

var birds = 3;

// outer function
function dogHouse() {
  var dogs = 8;

  // 1.0
  // console.log(birds); // 3
  // console.log(dogs); // 8
  // This won't be avaliable outside the function

  // inner function
  function showDogs() {
    // inner function has access to outer function 
    console.log(dogs);
  }
  return showDogs;
}

// 1.0
// console.log(birds); // 3
// console.log(dogs); // undefined

var getDogs = dogHouse();
getDogs(); //8
