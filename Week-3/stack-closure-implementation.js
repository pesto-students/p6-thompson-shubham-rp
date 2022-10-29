function createStack() {
  let items = [];

  return {
    getItems() {
      return items;
    },
    push(item) {
      items.push(item);
    },

    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
console.log(stack.getItems()); // will fetch the stack --> output --> []
stack.push(10);
console.log(stack.items); // output will be "undefined" because we are not getting direct access to the stack(i.e. items)
stack.push(5);

console.log(stack.getItems()); //after the above 2 push operations output will be [10,5]
stack.pop();

stack.items; // still can't access
stack.items = [10, 100, 1000]; // this shouldn't happen - this line is basically changing the stack from outside. Here we are not changing the original stack.
// We are creating a new stack.items array with it's own scope & environment. it should be possible to change the stack only via push() & pop() methods
console.log(stack.items); // output --> [10,100,1000]. not the original stack
console.log(stack.getItems()); // after pop() operation --> output [10]
stack.push(5);
console.log(stack.items); // still [10,100,1000]
console.log(stack.getItems()); // after above push(5) operation, output--> [10,5]
