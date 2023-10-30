/* assignments14 */

function repeatWithRules(word) {
  let resultWord = "";
  for (let x = 0; x < word.length; x++) {
    resultWord = resultWord + word[x].repeat(x + 1);
  }
  return resultWord;
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
