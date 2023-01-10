let input = "ABBAS";

function checkPalindrome(input) {
  let start = 0,
    end = input.length - 1;

  while (start < end) {
    if (input[start] !== input[end]) return false;

    start++;
    end--;
  }
  return true;
}

console.log(checkPalindrome(input));

// TC - O(n)
// SC - O(1)
