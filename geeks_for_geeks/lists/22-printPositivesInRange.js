const START = -50;
const END = 6;

const printPositivesInRange = (start, end) => {
  for (let i = start; i <= end; i++) {
    // eslint-disable-next-line no-unused-expressions
    i > 0 && console.log(i);
  }
};

printPositivesInRange(START, END);
