// A = [5, 10, 3, 2, 50, 80] B = 78 | Input 2: A = [-10, 20] B = 30

//brute force

//using set
const pairWithGivenDifference = (input, diff) => {
  let arrSet = new Set(input);

  for (item of input) {
    if (arrSet.has(item + diff)) return 1;
  }

  return 0;
};

console.log(pairWithGivenDifference([5, 10, 3, 2, 50, 88], 78));

// TC - O(n)
// SC - O(n)
