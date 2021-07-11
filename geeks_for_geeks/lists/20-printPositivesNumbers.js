const NUMBERS = [-10, 21, 4, -45, -66, 93, -11];

/**
 * @param {number[]} lst
 * @returns {number[]}
 */
const POSITIVE_LIST = (lst) => lst.filter((x) => x > 0);

console.log(`Positive numbers in the list: ${POSITIVE_LIST(NUMBERS)}.`);
