function redundant(str) {
  return function () {
    return str;
  };
}

const f1 = redundant('Difficult');

console.log(f1());
