/* assignments6 */

function checkBiggestNum(word) {
  return Math.max(...word.split(""));
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9