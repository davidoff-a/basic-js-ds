const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.storage = [];
  }
  push(element) {
    this.storage.push(element);
  }

  pop() {
    const lastElementIndex = this.storage.length ? this.storage.length - 1 : 0;
    this.storage.splice(lastElementIndex, 1);
  }

  peek() {
    const lastElementIndex = this.storage.length ? this.storage.length - 1 : 0;
    console.log(this.storage[lastElementIndex]);
    return this.storage[lastElementIndex];
  }
}

module.exports = {
  Stack,
};

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.pop();
stack.peek();
stack.push(34);
stack.peek();
