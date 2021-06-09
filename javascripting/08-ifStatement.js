const fruit = 'banana';

function printLength(fruitToExamine) {
  if (fruitToExamine.length >= 5) {
    console.log('The fruit name has 5 or more than 5 characters.');
  } else {
    console.log('The fruit name has less than 5 characters.');
  }
}

printLength(fruit);
