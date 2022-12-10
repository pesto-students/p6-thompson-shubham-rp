// enqueue & dequeue operations using stack
// Method 2 - in this method dequeue is costly - O(N) while enqueue is O(1)

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    // using stack1 as the primary stack

    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0)
      return "Queue is Empty";

    // push all elements from Stack 1 to Stack 2 except for 1 element at the bottom of stack
    while (this.stack1.length > 1) {
      this.stack2.push(this.stack1.pop());
    }

    // the element at bottom of Stack 1 is the first element of Queue
    // pop it out
    let x = this.stack1.pop();

    // push all items in Stack 2 back to Stack 1
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
    return x;
  }
}

let aQ = new Queue();
aQ.enqueue(25);
aQ.enqueue(50);
aQ.enqueue(75);
aQ.enqueue(100);

console.log(aQ.dequeue()); //25
console.log(aQ.dequeue()); //50
console.log(aQ.stack1); // stack1 - [100,75]
console.log(aQ.dequeue()); //75

console.log(aQ.stack1); // stack1 - [100]

console.log(aQ.dequeue()); //100
console.log(aQ.dequeue()); // Queue is empty
console.log(aQ.dequeue()); // Queue is empty
