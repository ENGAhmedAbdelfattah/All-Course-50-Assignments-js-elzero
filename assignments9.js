/* assignments9 */

function swapEveryTwoChars(word) {
  return word
    .split("")
    .map((el, inx) => {
      if (inx % 2 === 0) {
        let result =
          el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase();
        return result;
      } else {
        return el;
      }
    })
    .join("");
}


console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
