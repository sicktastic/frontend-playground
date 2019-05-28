// Divide and Conquer are recursive algorithms

// function sum(arr) {
//   let total = 0
//   for(let i of arr) {
//     total += i
//   }
//   return total
// }

// console.log(sum([1,2,3,4,5]));

// Recursion
function sum(arr) {
  if(arr.length === 0) return 0
  return arr[0] + sum(arr.slice(1))
}

console.log(sum([1,2,3,4,5]));
