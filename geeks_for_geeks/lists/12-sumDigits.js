const NUMBERS = [2, 4, 1, 4];

/**
 * Multiply all Digits in array
 *
 * @param {array} arr
 */
const multiplyDigits = (arr) =>
  arr
    .map((number) => number.toString().split(''))
    .flat()
    .map((x) => parseInt(x, 10))
    .reduce((acc, num) => acc + num);

console.log(multiplyDigits(NUMBERS)); // 11
