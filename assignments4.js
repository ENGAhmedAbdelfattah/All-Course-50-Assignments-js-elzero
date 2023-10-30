/* assignments4 */

function checkRange(n1, n2, n3, n4, n5) {
  const checkNumInRange = (num) => {
    if(num>= n4 && num <= n5) return true;
  }
  if (checkNumInRange(n1) && checkNumInRange(n2) && checkNumInRange(n3)) return `Yes All Numbers In Range`;
  return `Not All Numbers Is In Range`;
}

// startRange = n4;
// endRange = n5;

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range
