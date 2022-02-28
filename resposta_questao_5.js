var friends = [1, 2, 3, 4, 5];
function friendsList(num, f1, f2) {
  aux = num[f1];
  num[f1] = num[f2];
  num[f2] = aux;
  return num;
}

function combinatorialAnalysis(num, k) {
  var i, len;
  len = num.length;

  if (k == len) console.log(num);
  else {
    for (i = k; i < len; i++) {
      num = friendsList(num, k, i);
      combinatorialAnalysis(num, k + 1);
      num = friendsList(num, i, k);
    }
  }
}

function buildVariation(valor) {
  for (var i = 0; i < valor; i++) {
    friends.push(i + 1);
  }
  combinatorialAnalysis(friends, 0);
}

console.log(buildVariation(friends));
