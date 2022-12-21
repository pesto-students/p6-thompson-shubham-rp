// input  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] - m * n
//input 2 - [[ 1,   2,   3,   4,  5,   6 ],[ 7,   8,   9,  10,  11,  12], [13,  14,  15, 16,  17,  18 ]]
// using recursive approach

let input = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];

let rowStart = 0;
let rowEnd = input.length - 1;
let columnStart = 0;
let columnEnd = input[0].length - 1;

let outputArray = [];

function recursiveSpiral(input, rowStart, rowEnd, columnStart, columnEnd) {
  if (rowStart > rowEnd || columnStart > columnEnd) return;

  for (let i = columnStart; i <= columnEnd; i++) {
    outputArray.push(input[rowStart][i]);
  }

  for (let i = rowStart + 1; i <= rowEnd; i++) {
    outputArray.push(input[i][columnEnd]);
  }

  if (rowEnd !== rowStart) {
    for (let i = columnEnd - 1; i >= columnStart; i--) {
      outputArray.push(input[rowEnd][i]);
    }
  }

  if (columnEnd !== columnStart) {
    for (let i = rowEnd - 1; i >= rowStart + 1; i--) {
      outputArray.push(input[i][columnStart]);
    }
  }

  recursiveSpiral(
    input,
    rowStart + 1,
    rowEnd - 1,
    columnStart + 1,
    columnEnd - 1
  );
}

recursiveSpiral(input, rowStart, rowEnd, columnStart, columnEnd);

console.log(outputArray);
