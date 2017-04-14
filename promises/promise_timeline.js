new Promise(function (resolove, reject) {
  resolve('hi');  // works
  resolve('bye'); // can't happen a second time
})
