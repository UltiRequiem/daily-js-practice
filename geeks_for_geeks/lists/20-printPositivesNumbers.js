const NUMBERS = [-10, 21, 4, -45, -66, 93, -11];

/**
 * @param {number[]} lst
 * @returns {number[]}
 */
const getPositives = (lst) => lst.filter((x) => x > 0);

console.log(`Positive numbers in the list: ${getPositives(NUMBERS)}.`);
