var sequence = [
  "{ [ ( ) ( ) { } [ ] ] { } }",
  "{ [ ( ( ) ] }",
  "{ } [ ] ( )",
  "( ( ) { } [ [ ] )",
  "[ { } ( [ ) ] ]",
];

function validadeKeys(item) {
  const array = [];

  const openItems = ["(", "{", "["];

  const closedItems = [")", "}", "]"];

  for (let letter of item) {
    if (openItems.includes(letter)) {
      array.push(letter);
    } else if (closedItems.includes(letter)) {
      const openPair = openItems[closedItems.indexOf(letter)];

      if (array[array.length - 1] === openPair) {
        array.splice(-1, 1);
      } else {
        array.push(letter);
        break;
      }
    }
  }

  return array.length === 0;
}

sequence.map((item) => console.log(item + " -> " + validadeKeys(item)));
