/* assignments48 */

function createStars(num) {
  let result = "*";
  for (let x = 0; x < num; x++) {
    console.log(result);
    result += "**";
  }
}

createStars(8);

// Output Needed
//1=> * //1
//2=> *** //3
//3=> ***** //5
//4=> ******* //7
//5=> ********* //9
//6=> *********** //11
//7=> ************* //13
//8=> *************** //15
