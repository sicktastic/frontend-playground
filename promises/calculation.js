// We will transform this to promise
// setTimeout(function() {
//   console.log(1 + 1);
// }, 1000)

var calculationPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log(1 + 1);
  }, 1000)
});

function addTwo(value) {
  return value + 2;
}

function printFinalValue(nextValue) {
  console.log("The final value is ", nextValue);
}

calculationPromise
  .then(addTwo)
  .then(printFinalValue);

// Easy to read
