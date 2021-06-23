const swapList = (listToSwap) => {
  [listToSwap[0], listToSwap[listToSwap.length - 1]] = [
    listToSwap[listToSwap.length - 1],
    listToSwap[0],
  ];
  return listToSwap;
};

console.log(swapList([1, 2, 3, 4]));
console.log(swapList([0, 2, 1]));
