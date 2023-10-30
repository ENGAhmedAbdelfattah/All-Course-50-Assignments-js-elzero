/* assignments50 */

function createStars(num) {
  let result = "*".repeat(num * 2 - 1);
  let space = "";
  for (let x = num; x > 0; x--) {
    console.log(space + result);
    result = result.slice(0, result.length - 2);
    space += " ";
  }

  result = "*";
  space = " ".repeat(num - 1);
  for (let x = 0; x < num; x++) {
    console.log(space + result);
    result += "**";
    space = space.slice(0, space.length - 1);
  }
}

createStars(6);
// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// Details:
// 1 *********** // 0 space <==> 11 star
// 2  *********  // 1 space <==> 9  star
// 3   *******   // 2 space <==> 7  star
// 4    *****    // 3 space <==> 5  star
// 5     ***     // 4 space <==> 3  star
// 6      *      // 5 space <==> 1  star
// 1      *      // 5 space <==> 1  star
// 2     ***     // 4 space <==> 3  star
// 3    *****    // 3 space <==> 5  star
// 4   *******   // 2 space <==> 7  star
// 5  *********  // 1 space <==> 9  star
// 6 *********** // 0 space <==> 11 star
