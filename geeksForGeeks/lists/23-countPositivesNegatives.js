const NUMBERS = [-10, -21, -4, -45, -66, -93, 11, 12];

/** @param {number[]} lst */
const countPositives = (lst) => lst.filter((cur) => cur >= 1).length;

const POS_NUMS = countPositives(NUMBERS);
const NEG_NUMS = NUMBERS.length - POS_NUMS;

console.log(POS_NUMS);
console.log(NEG_NUMS);
