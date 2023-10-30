/* assignments36 */

// Write Your Code Here

// Method 1
// const smallLetters = []
// for (let i = 97; i <= 122; i++) {
//   smallLetters.push(String.fromCharCode(i)); // Lowercase letters (a-z)
// }
// console.log(smallLetters.join("")); // abcdefghijklmnopqrstuvwxyz

// Method 2
// const smallLetters = [...Array(26).keys()].map(el => String.fromCharCode(el + 97));
// console.log(smallLetters.join('')); // Outputs 'abcdefghijklmnopqrstuvwxyz'

// Method 3
const smallLetters = Array.from(Array(26), (el, inx) => String.fromCharCode(inx + 97));
console.log(smallLetters.join('')); // Outputs 'abcdefghijklmnopqrstuvwxyz'
