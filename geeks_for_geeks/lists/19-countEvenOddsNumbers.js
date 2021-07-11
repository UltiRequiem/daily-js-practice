const NUMBERS = [2, 4, 3, 7, 9, 6];

/**
 * @param {number[]} lst
 * @returns Number
 */
const countOdd = (lst) => lst.filter((num) => num % 2).length;
// const countOdd = (lst) => lst.reduce((c, n) => (n % 2 ? (c += 1) : c), 0);

const ONLY_ODD = countOdd(NUMBERS);
const ONLY_EVEN = NUMBERS.length - ONLY_ODD;

console.log(`There are ${ONLY_ODD} odd numbers.`);
console.log(`There are ${ONLY_EVEN} even numbers.`);
