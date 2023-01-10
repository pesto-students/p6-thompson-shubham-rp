// inputs - [1, 3, 2, 4] [6, 8, 0, 1, 3]

// bruteforce

function nextGreaterElementBF(input) {
  let output = [];

  for (let i = 0; i < input.length; i++) {
    let next = -1;
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] < input[j]) {
        next = input[j];
        break;
      }
    }
    output.push(next); // can be changed to just console log
  }

  return output;
}

// SC - O(N) - can be made O(1) by simply printing "next" instead of creating a new output array
// TC - O(N^2)

console.log(nextGreaterElementBF([6, 8, 0, 1, 3]));

// solution using stack & map - better than only stack(as elements are not output in the same order)

function nextGreaterElementUsingStack(input) {
  let stack = [];

  let output = new Array(input.length);

  for (let i = 0; i < input.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1]["value"] < input[i]) {
      let d = stack.pop();
      output[d["index"]] = input[i];
    }

    stack.push({ value: input[i], index: i });
  }
  while (stack.length > 0) {
    let c = stack.pop();
    output[c["index"]] = -1;
  }
  return output;
}

// SC - O(N)
// TC - O(N) - Single array traversal
console.log(nextGreaterElementUsingStack([6, 8, 0, 1, 3]));
