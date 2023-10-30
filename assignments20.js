/* assignments20 */

let st = "Elzero";

// Needed Output
console.log(st[st.length - 1]); // "o"
console.log(st.charAt(st.length - 1)); // "o"
console.log(st.at(-1)); // "o"
console.log(st.slice(-1)); // "o"
console.log(st.split("").pop()); // "o"
console.log([...st].splice(-1, 1)[0]); // "o"
console.log(Array.from(st).reverse().shift()); // "o"
console.log(/.$/.exec(st)[0]); // "o"

