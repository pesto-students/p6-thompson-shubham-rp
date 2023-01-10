class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

let head = new Node(85);
head.next = new Node(90);
head.next.next = new Node(95);
head.next.next.next = new Node(100);

function reverse(node) {
  let prev = null;
  let current = node;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

function printList(node) {
  let ll = "";
  while (node !== null) {
    ll = ll + node.data + " --> ";
    node = node.next;
  }
  ll = ll + "null";
  console.log(ll);
}

printList(head);
head = reverse(head);
console.log("reversed");
printList(head);

// TC - O(N)
// SC - O(1)
