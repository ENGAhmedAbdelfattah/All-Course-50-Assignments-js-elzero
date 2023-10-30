/* assignments17 */

function formatName(theName) {
  return theName.split(" ").map(el => el[0]).map((el,inx) => inx? el.toLowerCase(): el).join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s