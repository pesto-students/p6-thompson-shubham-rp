// trial inputs -  [()]{}{()()} | [(]) | {([])} | () | ([]

function parenthesesChecker(s) {
  let stack = [];

  let pMap = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (pMap.has(s[i])) {
      stack.push(pMap.get(s[i]));
    } else if (stack.pop() !== s[i]) return false;
  }

  return stack.length === 0;
}

let input = "[()]{}{()()}";

console.log(parenthesesChecker(input));

// SC - O(X) where X<=N
// TC - O(N)
