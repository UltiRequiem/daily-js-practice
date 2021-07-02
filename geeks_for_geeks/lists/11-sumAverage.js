const NUMBERS = [4, 5, 6];
const COUNT = NUMBERS.reduce((a, b) => a + b, 0);
const AVERAGE = Math.floor(COUNT / NUMBERS.length);

console.log(`The sum of all items in the list is ${COUNT}.`);
console.log(`The average of all items in the list is ${AVERAGE}.`);
