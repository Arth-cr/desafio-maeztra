var years = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];

function yearsBetween(a, b, c) {
  a = b - a + 1;
  c = [];
  while (a--) c[a] = b--;
  return c;
}

const getYearsArray = years.flatMap((i) => {
  return yearsBetween(i[0], i[1]);
});

function getDuplicates(array) {
  const uniqueDuplicates = new Set(array);
  const filteredDuplicates = array.filter((item) => {
    if (uniqueDuplicates.has(item)) {
      uniqueDuplicates.delete(item);
    } else {
      return item;
    }
  });

  return [...new Set(filteredDuplicates)];
}

console.log(getDuplicates(getYearsArray));
