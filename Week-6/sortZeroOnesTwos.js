// example input -> N =5 , arr= [1,0,1,2,2]
// single traversal with 3- way partitioning
function mapZeroesOnesTwos(input) {
  let map = new Map();

  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      map.set(input[i], map.get(input[i]) + 1);
    } else {
      map.set(input[i], 1);
    }
  }
  return map;
}

function sortInputUsingMap(N, input) {
  let inputMap = mapZeroesOnesTwos(input);

  let outputArray = new Array();

  for (let i = 0; i <= 2; i++) {
    if (inputMap.has(i)) {
      for (j = 0; j < inputMap.get(i); j++) {
        outputArray.push(i);
      }
    }
  }

  return outputArray;
}

console.log(sortInputUsingMap(5, [1, 0, 1, 2, 2]));

// TC - O(2n)
// SC - O(n)

// Dutch Flag Problem
function sortInputOptimizedWay(input) {
  let i,
    count0 = 0,
    count1 = 0,
    count2 = 0;

  for (i = 0; i < input.length; i++) {
    if (input[i] === 0) count0++;

    if (input[i] === 1) count1++;

    if (input[i] === 2) count2++;
  }

  i = 0;
  while (count0 > 0) {
    input[i++] = 0;
    count0--;
  }

  while (count1 > 0) {
    input[i++] = 1;
    count1--;
  }

  while (count2 > 0) {
    input[i++] = 2;
    count2--;
  }

  return input;
}
console.log(sortInputOptimizedWay([1, 0, 1, 2, 2]));
