// constraints - 1) Number of nodes is in the range --> [0,2000]
// constraints - 2) -1000 <= Node.val <= 1000

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(8);
root.left = new Node(1);
root.left.left = new Node(-11);
root.left.right = new Node(5);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(25);

// Using An Utility function to traverse subtrees and check if subtrees are BSTs as well.
// if at any level it's not a BST, we will get return value as false - if entire BST is traversed with the conditions provided - it's a BST
function isBST(root) {
  return isBSTUtil(root, -1001, 1001);
}

function isBSTUtil(node, min, max) {
  if (node === null) return true;

  if (node.data < min || node.data > max) return false;

  return (
    isBSTUtil(node.left, min, node.data - 1) &&
    isBSTUtil(node.right, node.data + 1, max)
  );
}

// Testing
isBST(root)
  ? console.log(" Is a Binary Search Tree")
  : console.log("Is not a binary search tree");

// SC - O(K) - K - height of tree
// TC - O(N)
