/* assignments10 */

String.prototype.elzeroRepeat = function (num) {
  let result = "";
  for (let x = 0; x < num; x++) {
    result += this;
  }
  return result;
};

console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero
