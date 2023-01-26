let input = [-1, 2, 1, -4];
let target = 1;

function sumClosestToTarget(input, target) {
  // Our code

  let diff = Number.MAX_VALUE;
  let closestSum, triplet1, triplet2, triplet3;
  let l, r;
  // Sort the input array
  input.sort((a, b) => a - b);

  // Two pointer Technique

  for (let i = 0; i < input.length - 2; i++) {
    l = i + 1;
    r = input.length - 1;

    while (l < r) {
      let sum = input[i] + input[l] + input[r];

      let currentdiff = Math.abs(sum - target);

      if (currentdiff < diff) {
        diff = currentdiff;
        closestSum = sum;
        triplet1 = input[i];
        triplet2 = input[l];
        triplet3 = input[r];
      }
      l++;
      r--;
    }
  }
  return [closestSum, triplet1, triplet2, triplet3];
}

// TC - O(N^2)
// Sc - O(1)

// Testing the code

let [closestSum, triplet1, triplet2, triplet3] = sumClosestToTarget(
  input,
  target
);
console.log(
  "The sum closest to target " +
    target +
    " is " +
    closestSum +
    " of these 3 items: " +
    triplet1 +
    " " +
    triplet2 +
    " " +
    triplet3
);
