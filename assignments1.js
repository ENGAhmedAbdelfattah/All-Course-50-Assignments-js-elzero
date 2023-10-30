//assignments1
let fileName = "Elzero.php";

console.log(fileName.split(".")[0]);
console.log(fileName.split(".")[1]);

console.log("######################");
console.log(...fileName.match(/\w+(?=\.)/));
console.log(...fileName.match(/(?<=\.)\w+/));
console.log("######################");

console.log(/\w+(?=\.)/.exec(fileName)[0]);
console.log(/(?<=\.)\w+/.exec(fileName)[0]);
