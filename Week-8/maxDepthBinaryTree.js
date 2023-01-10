// inputs - [3,9,20,null,null,15,7] | [1,null,2]

// Using Recursion

class Node {
  constructor(value) {
    this.data = value;
    this.left = this.right = null;
  }
}

function maxDepth(node) {
  if (node === null) return 0;
  else {
    let lDepth = maxDepth(node.left);
    let rDepth = maxDepth(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }
}

// input 1
let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

// input 2
// let root = new Node(1);
// root.right = new Node(2);

console.log(maxDepth(root));

// TC - O(N) - traversing each node in the tree
// SC - O(N) - since recursion is for each node - recursive function called n times
