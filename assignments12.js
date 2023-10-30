/* assignments12 */

let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

function startEqualLast(stringArr) {
  return stringArr.filter(el => el[0].toLowerCase() === el.at(-1).toLowerCase())
}
console.log(startEqualLast(names)); // ['Osso', 'Aola', 'Daad', 'Roor']
