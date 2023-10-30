/* assignments11 */

let myMoney = 5301503206;

function sugarMony(mony) {
  let monyArr = String(mony).split("");
  for (let x = String(mony).length - 3; x > 0; x = x - 3) {
    monyArr.splice(x, 0, ",");
  }
  return monyArr.join("");
}

console.log(sugarMony(myMoney)); // 5,301,503,206

