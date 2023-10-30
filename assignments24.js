/* assignments24 */

function dashBetweenOdd(num) {
  return String(num)
    .split("")
    .reduce((acc, el) => {
      if (acc.at(-1) % 2 !== 0 && el % 2 !== 0) {
        return acc + "-" + el;
      }
      return acc + el;
    });
}
console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

// another solve

// function dashBetweenOdd(num) {
//   return String(num)
//     .split("")
//     .reduce((acc, el) => {
//       if (acc.at(-1) & 1 === 1 && el & 1 === 1) {
//         return acc + "-" + el;
//       }
//       return acc + el;
//     });
// }

// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
