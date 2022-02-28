var duplicates = [4, 5, 44, 98, 4, 5, 6, 7];

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

console.log(
  "Input " + `[${duplicates}]` + " → Output " + `[${getDuplicates(duplicates)}]`
);
