const NUMBERS = [1, 6, 3, 5, 3, 4];
const ELEMENT = 6;

const printIfIncludes = (arr, ele) => {
  if (arr.includes(ele)) {
    console.log(`${arr} includes ${ele}.`);
  }
};

printIfIncludes(NUMBERS,ELEMENT)
