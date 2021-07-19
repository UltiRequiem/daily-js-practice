const NUMBERS = [1, 2, 3];

/*
Array.prototype.clear = function () {
  this.splice(0, this.length);
};

NUMBERS.clear();

const emptyArray = (array) => {
  while (array.length) {
    array.pop();
  }
};

emptyArray(NUMBERS);
 */

// This seems to be the best way to do it
NUMBERS.length = 0;
console.log(NUMBERS);
