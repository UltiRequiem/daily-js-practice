const swapList = (listToSwap, posOne, posTwo) => {
  [listToSwap[posOne], listToSwap[posTwo]] = [
    listToSwap[posTwo],
    listToSwap[posOne],
  ];
  return listToSwap;
};

// Test ⬇️
console.log(swapList([1, 2, 3, 4,5],1,4));
