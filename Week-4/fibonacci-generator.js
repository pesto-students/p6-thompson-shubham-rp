function* fibonacci() {
  let [num1, num2] = [0, 1];
  let count = 0,
    fibSequenceLength = 8;
  yield num1;
  yield num2;
  while (count < fibSequenceLength) {
    [num1, num2, count] = [num2, num1 + num2, count + 1];
    yield num2;
  }
}

for (const n of fibonacci()) {
  console.log(n);
}
