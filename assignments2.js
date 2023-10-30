//assignments2

// function addEl(str) {
//   if(str === "") return "";
//   if(str.startsWith("El")) return str;
//   if(!str.startsWith("El")) return `El${str}`;
// }

function addEl(str) {
  if (str === "") {
    return "";
  } else if (str.startsWith("El")) {
    return str;
  } else {
    return `El${str}`;
  }
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
