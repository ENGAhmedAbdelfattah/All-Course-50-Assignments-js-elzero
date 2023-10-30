/* assignments39 */

let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Method 1
Object.freeze(myData)

// Method 2
Object.preventExtensions(myData)

myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']
