/* assignments35 */

// Create an array of all uppercase and lowercase letters and numbers
const lettersAndNumbers = [];
for (let i = 65; i <= 90; i++) {
  lettersAndNumbers.push(String.fromCharCode(i)); // Uppercase letters (A-Z)
}
for (let i = 97; i <= 122; i++) {
  lettersAndNumbers.push(String.fromCharCode(i)); // Lowercase letters (a-z)
}
for (let i = 48; i <= 57; i++) {
  lettersAndNumbers.push(String.fromCharCode(i)); // Numbers (0-9)
}

// console.log(lettersAndNumbers);

let serial = "";
for (let x = 0; x < 20; x++) {
  serial += lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)];
}

console.log(serial); // 9cBcrg3kcWF4GZSlWXAM

// notes:
// 20 char
// number or letter only
// change after Refresh
