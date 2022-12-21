// [7,1,5,3,6,4] [7,6,4,3,1]

let inputArr = [7, 1, 5, 3, 6, 4];

function makeProfits(input) {
  let profit = 0;

  let i = 0;

  let buyPoint = input[i],
    sellPoint = input[i],
    buyDay = i,
    sellDay = i;

  for (; i < input.length; i++) {
    if (input[i] < buyPoint) {
      buyPoint = input[i];
      buyDay = i;
    }
    if (input[i] > buyPoint) {
      sellPoint = input[i];
      sellDay = i;
    }
    let diff = sellPoint - buyPoint;

    if (buyDay < sellDay && diff > profit) {
      profit = diff;
    }
  }

  return profit;
}

console.log(makeProfits(inputArr));

// TC - O(n)
// SC - O(1)
