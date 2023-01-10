class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let head = new Node(5);
head.next = new Node(15);
head.next.next = new Node(25);
head.next.next.next = new Node(35);
head.next.next.next.next = new Node(45);
head.next.next.next.next.next = new Node(55);

function rotateList(k) {
  if (k == 0) return;

  let current = head;

  let count = 1;

  while (count < k && current != null) {
    current = current.next;
    count++;
  }

  if (current == null) return;

  let kNode = current;

  while (current.next != null) {
    current = current.next;
  }

  current.next = head;

  head = kNode.next;

  kNode.next = null;
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

rotateList(3);

printList(head);

// TC - O(N)
// SC - O(1)
