/* assignments 29 */

const customCalc = (...items) => {
  let resultSum = items.reduce((acc, el) => (isNaN(parseInt(el)) ? acc : acc + +el), 0);
  let result = resultSum * +items[0] * +items.at(-1)
  return result;
};
// if you want, can add check on first and last item is it number or no?
console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10
