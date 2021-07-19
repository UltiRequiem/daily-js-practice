const EXAMPLE = [
  ['ram', '15', '8'],
  [],
  ['laxman', 'sita'],
  ['krishna', 'akbar', '45'],
  ['', ''],
  [],
];

const removeEmptyLists = (lst) => lst.filter(x => x.length > 0);

console.log(EXAMPLE);
console.log(removeEmptyLists(EXAMPLE));
