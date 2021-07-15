const removeEle = (lst, ele) => lst.filter((x) => x !== ele);

const NUMS = [1, 2, 3, 4, 5];
const NUMS_NO_3 = removeEle(NUMS, 3);

console.log(NUMS);
console.log(NUMS_NO_3);
