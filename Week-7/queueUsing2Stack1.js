// enqueue & dequeue operations using stack
// Method 1 - in this method enqueue is costly - O(N) while dequeue is O(1)

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    // using stack1 as the primary stack

    // push all elements from Stack1 to Stack2
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    // Add the new item to Stack1 - New item will go to bottom of Stack1
    this.stack1.push(x);

    // Push all elements from Stack2 back to Stack1
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.length === 0) return "Queue is Empty";

    // the element at top of Stack1 is the first item of Queue
    // pop it out
    // let x = this.stack1[this.stack1.length - 1];
    let x = this.stack1.pop();
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
console.log(aQ.dequeue()); // queue is empty
