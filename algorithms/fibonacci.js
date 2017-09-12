// http://thatjsdude.com/interview/js1.html
// Q. How do get nth Fibonnacci number?
// A. I create an array and start from iterate through.
// Fibonacci series is one of the most popular interview question for beginners.

function fibonacci(n) {
  var fibo = [0, 1];
  
  if(n <= 2) return 1;

  for(var i =2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

console.log(fibonacci(12));

// Recursive
function fibonacci(n){
  if(n <= 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci (n - 2);
}
