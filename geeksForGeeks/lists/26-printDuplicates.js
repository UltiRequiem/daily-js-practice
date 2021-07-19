const NUMS = [
  1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22, 9999,
];

/** @param {Array} arr */
const duplicates = (arr) => [
  ...new Set(arr.filter((val, idx, s) => s.indexOf(val) !== idx)),
];

console.log(duplicates(NUMS));
