// function counter() {
//   for (let n =0; n <= 10; n++) {
//     console.log(n);
//   }
// }

// counter()


// Recursion
// At least one base case and one recursion case
// function counter(n) {
//   console.log(n);
//   if (n === 10) {
//     return
//   }

//   return counter(n + 1)
// }

// counter(0)

// const items = [[1,2,3], [4,5,6]]

// function findSix(i) {
//   let hasSix = "no!"
//   i.forEach(a => {
//     a.forEach(l => {
//       if(l === 6) {
//         hasSix = "yes!"
//       }
//     })
//   })

//   return hasSix
// }

// console.log(findSix(items));

// Recursion
const items = [[1,2,3], [4,5,6]]

function findSix(i) {
  let hasSix = "no!"
  i.forEach(a => {
    // Base
    if(a === 6) {
      hasSix = "yes!"
    }
    if(Array.isArray(a)) {
      hasSix = findSix(a)
    }
  })

  return hasSix
}

console.log(findSix(items));
