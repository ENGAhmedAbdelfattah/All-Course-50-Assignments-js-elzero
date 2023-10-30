/* assignments 28 */

const customMerge = (...arrays) => {
  const allItems = [];
  for (let items of arrays) {
    for (let item of items) allItems.push(+item);
  }
  return allItems.sort((a, b) => a - b);
};

console.log(
  customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])
);
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]
