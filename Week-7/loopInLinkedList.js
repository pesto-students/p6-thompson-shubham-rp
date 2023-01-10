class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

function detectLoop() {
  let slow_p = head,
    fast_p = head;
  let flag = 0;

  while (slow_p !== null && fast_p !== null && fast_p.next !== null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p == fast_p) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) console.log("Loop Found");
  else console.log("No Loop in Linked List");
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Create a loop for testing
head.next.next.next.next.next = head.next.next; // comment this line to remove loop
detectLoop();

// TC - O(N)
// SC - O(1)
