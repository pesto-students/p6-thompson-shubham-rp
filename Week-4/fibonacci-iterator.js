let fibonacci = {
  [Symbol.iterator]() {
    let num1 = 0,
      num2 = 1,
      count = 0,
      value,
      fibSequenceLength = 8; //change as per requirement

    return {
      next() {
        [value, num1, num2, count] = [num1, num2, num1 + num2, count + 1];

        return {
          value: [value, fibSequenceLength, count],
          done: fibSequenceLength < count,
        };
      },
    };
  },
};

for (const n of fibonacci) {
  [value, fibSequenceLength, count] = n;

  if (count === 1) {
    console.log("Fibonacci Sequence with " + fibSequenceLength + " numbers:");
  }

  console.log(value);
}
