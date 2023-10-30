/* assignments18 */

let st = "elzero";

// Output Needed
console.log(st[0].toUpperCase() + st.slice(1)); //"Elzero"
console.log(st.charAt(0).toUpperCase() + st.substring(1)); //"Elzero"
console.log(st.at(0).toUpperCase() + st.substr(1)); //"Elzero"
console.log(st.replace(/./, (el) => el.toUpperCase())); //"Elzero"
console.log(st.split("", 1).join().toUpperCase().concat(st.slice(1))); //"Elzero"
console.log(st.split("").shift().toUpperCase() + st.substring(1)); //"Elzero"
console.log(Array.from(st).splice(0, 1)[0].toUpperCase() + st.substr(1)); //"Elzero"
console.log(Array.from(st, (el, inx) => (inx === 0 ? el.toUpperCase() : el)).join("")); //"Elzero"
console.log(
  [...st].map((el, inx) => (inx === 0 ? el.toUpperCase() : el)).join("")
); //"Elzero"
