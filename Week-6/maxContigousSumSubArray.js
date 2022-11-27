// test inputs --> [1,2,3,4,-10] --> o/p: 10 | [-2, 1, -3, 4, -1, 2, 1, -5, 4] --> o/p --> 6

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxContigousSumSubarray(input) {
  let maxSum = input[0];

  for (let i = 0; i < input.length; i++) {
    let computeSum = input[i];

    for (let j = i + 1; j < input.length; j++) {
      computeSum += input[j];

      if (computeSum > maxSum) {
        maxSum = computeSum;
      }
    }
  }

  return maxSum;
}

console.log(maxContigousSumSubarray(input));

// TC - O(N^2)
// SC - O(1)

// Kadane's algorithm

function maxContigousSumSubarrayKadane(input) {
  let maxEndingHere = 0; // current Sum
  let maxSum = -Number.MAX_VALUE - 1;

  for (let i = 0; i < input.length; i++) {
    maxEndingHere = maxEndingHere + input[i];

    if (maxSum < maxEndingHere) maxSum = maxEndingHere;

    if (maxEndingHere < 0) maxEndingHere = 0;
  }

  return maxSum;
}

console.log(maxContigousSumSubarrayKadane(input));
maxContigousSumSubarrayKadane(input);
