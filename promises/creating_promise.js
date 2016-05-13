// A Promise that returns a value
function theUltimateAnswer() {
  return new Promise(function(resolve) {
    setTimeout(function(){
      var value = 42;
      resolve(value);
    }, 3000);
  });
}

promise = theUltimateAnswer()
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

promise
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

promise
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 42}})
