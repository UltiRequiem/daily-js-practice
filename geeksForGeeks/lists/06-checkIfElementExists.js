/**
 * @param {Array} arr: An array with elements.
 * @param {any} ele: The element searching for.
 * @returns {string} : A message
 */
const printIfIncludes = (arr, ele) => {
  if (arr.includes(ele)) {
    return `Your array includes ${ele}.`;
  }
  return `Your array does not includes ${ele}.`;
};

console.log(printIfIncludes([1, 2, 3, 4], 4));
