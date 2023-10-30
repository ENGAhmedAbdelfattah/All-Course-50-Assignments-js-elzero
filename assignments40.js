/* assignments40 */

const myData = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};


// Method 1
Object.freeze(myData)

// Method 2
Object.preventExtensions(myData)

myData.skill = "Programming";

console.log(myData.user); // Elzero
console.log(myData.age); // 41
console.log(myData.country); // Egypt
console.log(myData.skill); // Undefined