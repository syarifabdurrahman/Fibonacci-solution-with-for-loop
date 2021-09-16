var output = [0, 1];

function fibonacciGenerator(n) {
  if (n === 1) {
    output = [0];
    return output;
  } else if (n === 2) {
    output = [0, 1];
    return output;
  } else {
    for (var i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1]);
    }
  }
  return output;
}

console.log(fibonacciGenerator(7));
