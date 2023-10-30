/* assignments49 */

function createStars(num) {
  let result = "*";
  for (let x = 0; x < num - 1; x++) {
    console.log(result);
    result += "**";
  }
  for (let x = num; x > 0; x--) {
    console.log(result);
    result = result.slice(0, result.length - 2)
  }
}

createStars(3)

// Output Needed
// *
// ***
// *****
// ***
// *

createStars(7);

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *
