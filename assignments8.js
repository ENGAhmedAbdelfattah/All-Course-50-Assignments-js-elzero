/* assignments8 */

let nums1 = [10, 80, 85, 25, 30, 88, 15];
let goal1 = 100;

function closestNum(nums, goal) {
  const numsObj = {};
  for (let num of nums) numsObj[Math.abs(goal - num)] = num;
  return ` Closest Number Is ${numsObj[Math.min(...Object.keys(numsObj))]}`;
}

console.log(closestNum(nums1, goal1));
// Closest Number Is 88
