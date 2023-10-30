/* assignments44 */

// Method 1
// let last = 30;
// const arrOdd = []
// for(let x = last; x > 0; x--) {
//   if(x % 2 !== 0) {
//     arrOdd.push(x);
//   }
// }
// const arrResultOne = arrOdd.filter((el, inx) => inx % 2 === 0).map(el => el);
// console.log("arrResultOne", arrResultOne.map(el => console.log(el)));
// const arrResultTwo = arrResultOne.reduce((acc, el) => acc + el);
// console.log("arrResultTwo", arrResultTwo);

// Method 2
let last = 30;
let resultSum = 0;
let beforeNum = last + 2;

for (let x = last; x > 0; x--) {
  if (x % 2 !== 0 && beforeNum - x > 2) {
    console.log(x);
    beforeNum = x;
    resultSum += x;
  }
}
console.log("resultSum", resultSum);

// First Request Output Needed
// 29
// 25
// 21
// 17
// 13
// 9
// 5
// 1

// Second Request Output Needed
// 120
