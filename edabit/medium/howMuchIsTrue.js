// Create a function which returns the number of true values there are in an array.

const anArray = [true, false, true, true];

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}

function countTrue(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return getOccurrence(arr, true);
}

console.log(countTrue(anArray));
