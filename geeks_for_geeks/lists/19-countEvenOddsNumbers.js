const NUMBERS = [10, 21, 4, 45, 66, 93, 11];

/**
 * @param {number[]} lst
 * @returns Number
 */
const countOdd = (lst) => lst.filter((num) => num % 2).length;

const ONLY_ODD = countOdd(NUMBERS);
const ONLY_EVEN = NUMBERS.length - ONLY_ODD;

console.log(`There are ${ONLY_ODD} odd numbers.`);
console.log(`There are ${ONLY_EVEN} even numbers.`);
