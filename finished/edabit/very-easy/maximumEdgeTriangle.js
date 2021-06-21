function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

// const nextEdge = (side1, side2) => (side1 + side2) - 1;

// Finds the maximum range of a triangle's third edge, where the side lengths are all integers.
console.log(nextEdge(12, 15));
