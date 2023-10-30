/* assignments22 */
let str1 = "AElzero";
let str2 = "ZAcademy";

console.log(str1.slice(1) + decodeURI("%20") + str2.slice(1)); // Elzero Academy
console.log(str1.slice(1) + "\u0020" + str2.slice(1)); // Elzero Academy
console.log(str1.slice(1) + "\u2002" + str2.slice(1)); // Elzero Academy
console.log(str1.slice(1) + "\u2003" + str2.slice(1)); // Elzero Academy
console.log((str1.slice(1) + str2.slice(1)).replace(/([a-z])([A-Z])/g, "$1 $2")); // Elzero Academy
console.log(str1.slice(1) + "\t" + str2.slice(1)); // Elzero Academy


// ASCII Space = &nbsp; = \u0020
// En Space = &ensp; = \u2002
// Em Space = &emsp; = \u2003