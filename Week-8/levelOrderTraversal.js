// Using recursion
// Depth First Search

class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

function printLevelOrderTraversal(root) {
  let depth = getDepth(root);
  for (let i = 0; i <= depth; i++) {
    printCurrentLevel(root, i);
  }
}

function getDepth(node) {
  if (node === null) return 0;
  else {
    let lDepth = getDepth(node.left);
    let rDepth = getDepth(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }
}

function printCurrentLevel(node, level) {
  if (node === null) return;
  if (level === 1) console.log(node.data);
  else if (level > 1) {
    printCurrentLevel(node.left, level - 1);
    printCurrentLevel(node.right, level - 1);
  }
}
console.log("Using Recursion - Method 1");
// TC - O(N)
// SC - O(N)
printLevelOrderTraversal(root);

// Modification to above recursion function so that output is in array form with each level as subarray
function getLevelOrderTraversalUsingRecursion(root) {
  let output = [];
  let depth = getDepth(root);
  for (let i = 0; i <= depth; i++) {
    let values = getCurrentLevel(root, i);

    if (values !== undefined) output.push(values);
  }
  return output;
}

function getDepth(node) {
  if (node === null) return 0;
  else {
    let lDepth = getDepth(node.left);
    let rDepth = getDepth(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }
}

function getCurrentLevel(node, level) {
  if (node === null) return;
  if (level === 1) return node.data;
  else if (level > 1) {
    let values = [];
    let leftNode = getCurrentLevel(node.left, level - 1);
    let rightNode = getCurrentLevel(node.right, level - 1);

    if (leftNode !== undefined) values.push(leftNode);
    if (rightNode !== undefined) values.push(rightNode);

    return values.flat(level);
  }
}
console.log("Using Recursion - Method 2");
// TC - O(N)
// SC - O(N)
console.log(getLevelOrderTraversalUsingRecursion(root));

// Using Queue

function printLevelOrderTraversalUsingQueue(root) {
  let queue = [];

  queue.push(root);

  while (queue.length !== 0) {
    let tempNode = queue.shift();

    console.log(tempNode.data);

    if (tempNode.left !== null) {
      queue.push(tempNode.left);
    }

    if (tempNode.right !== null) {
      queue.push(tempNode.right);
    }
  }
}
console.log("Using Queue");
// Using Queue
// TC - O(N)
// SC - O(N)
printLevelOrderTraversalUsingQueue(root);
