/**
 * @param {array} listToSwap
 * @param {number} posOne
 * @param {number} posTwo
 * @returns {array} The swapped list.
 */

const swapList = (listToSwap, posOne, posTwo) => {
  // eslint-disable-next-line no-param-reassign
  [listToSwap[posOne], listToSwap[posTwo]] = [
    listToSwap[posTwo],
    listToSwap[posOne],
  ];
  return listToSwap;
};

// Test ⬇️
console.log(swapList([1, 2, 3, 4, 5], 1, 4));
