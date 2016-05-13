function howDoIGetThatValue() {
  return new Promise(function(resolve) {
      setTimeout(function(){
            var value = 42;
            resolve(value);
          }, 1000);
    });
}

howDoIGetThatValue().then(function(result) {
  console.log(result);
});
