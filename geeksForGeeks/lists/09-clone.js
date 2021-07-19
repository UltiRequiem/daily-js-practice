/**
 * Clone a list
 *
 * @param {array} arr
 * @returns {array}
 */

const cloneList = (arr) => arr.map((x) => x);

const NUMBERS = [1, 2, 3, 4];
const myNewList = cloneList(NUMBERS);

console.log(myNewList);
