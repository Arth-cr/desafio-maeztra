function validadeSequence() {
  var inputs = [
    12345678, 1223455678, 876543210, 152456457, 12356789, 13579, 9765421,
    123454321, 12222222, 2111111, 1599,
  ];

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i] + "",
      digits = input.split(""),
      validade = true;

    for (var e = 0; e < digits.length - 1; e++) {
      if (Math.abs(parseInt(digits[e]) - parseInt(digits[e - 1])) > 1) {
        validade = false;
        break;
      }
    }

    console.log("Input " + input + " -> " + validade);
  }
}

validadeSequence();
