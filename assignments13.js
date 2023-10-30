/* assignments13 */

let theName = "Elzero";

console.log(theName[0] + theName.at(-1));
// Line 1 => Eo
console.log(theName.slice(1, -1));
// Line 2 => lzer
console.log(theName.slice(theName.length / 2 - 1, theName.length / 2 + 1));
// Line 3 => ze

// --------------------------------line 3 incase any word even or odd-------------------------------------
// const centerCharacter =
//   theName.length % 2 === 0
//     ? theName.slice(theName.length / 2 - 1, theName.length / 2 + 1)
//     : theName.slice(
//         Math.floor(theName.length / 2),
//         Math.ceil(theName.length / 2)
//       );


// console.log(centerCharacter);
