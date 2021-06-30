/**
 * @param {array} listToSwap
 * @returns {array} The list to swap
 */
const swapList = (listToSwap) => {
  // eslint-disable-next-line no-param-reassign
  [listToSwap[0], listToSwap[listToSwap.length - 1]] = [
    listToSwap[listToSwap.length - 1],
    listToSwap[0],
  ];
  return listToSwap;
};

// Test ⬇️
console.log(swapList([1, 2, 3, 4]));
console.log(swapList([0, 2, 1]));
