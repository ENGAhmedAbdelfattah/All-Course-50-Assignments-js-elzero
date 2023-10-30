/* assignments38 */

let str = "i lovE elzeRO weB schOOL";

// console.log(str.split(" ").map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(" ")); //"I Love Elzero Web School"

console.log(str.match(/((?<=\s)\S*|\S(?=\s))/ig).map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(" ")); //"I Love Elzero Web School"
// console.log(str.replace(/(?>=\s)\S+/g));
