/* assignments45 */

let rangeEnd = 10;
let rangeStart = 1;

// Method 1
const myRange = [];
for (let x = rangeStart; x <= rangeEnd; x++) myRange.push(x);

// Method 2
// const myRange = [...Array(rangeEnd)].map((el) => rangeStart++);

// Method 3
// const myPromiseRange = new Promise((resolve, reject) => {
//   const myRange = [];
//   let rangeEnd = 10;
//   let rangeStart = 1;
//   const interval = setInterval(() => {
//     myRange.push(rangeStart);
//     if (rangeStart === rangeEnd) {
//       clearInterval(interval);
//       resolve(myRange);
//     }
//     rangeStart++;
//   }, 0);
// }).then((myRange) => {
//   // Resolved myPromise:
//   console.log("myRange:", myRange);
//   return myRange;
// });

// Method 3 by async and await
// const myPromiseRange = new Promise((resolve, reject) => {
//   const myRange = [];
//   let rangeEnd = 10;
//   let rangeStart = 1;
//   const interval = setInterval(() => {
//     myRange.push(rangeStart);
//     if (rangeStart === rangeEnd) {
//       clearInterval(interval);
//       resolve(myRange);
//     }
//     rangeStart++;
//   }, 0);
// });

// const rangeResult = async () => {
//   const resolvedRange = await myPromiseRange;
//   console.log("range", resolvedRange);
// };

// rangeResult();

// Method 4
// let myRange = Array.from({ length: rangeEnd }, (_, i) => i + 1);
// console.log(myRange);
