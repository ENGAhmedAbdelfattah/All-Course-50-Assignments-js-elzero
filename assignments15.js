/* assignments15 */

function concatenateWithoutLast(words) {
  return words.map((el) => el.slice(0, -1)).join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School
