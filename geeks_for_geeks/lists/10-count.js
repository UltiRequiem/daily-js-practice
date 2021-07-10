const NUMBERS = [8, 6, 8, 10, 8, 20, 10, 8, 8];
const ELE = 8;


const countOccurrences = (lst, val) => lst.reduce((a, v) => (v === val ? a + 1 : a), false);

console.log(`${ELE} has occurred ${countOccurrences(NUMBERS, ELE)} times.`);
