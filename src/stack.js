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
    const el = this.storage[lastElementIndex];
    this.storage.splice(lastElementIndex, 1);
    return el;
  }

  peek() {
    const lastElementIndex = this.storage.length ? this.storage.length - 1 : 0;
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

console.log("#### stack.peek => ", stack.peek());
console.log("#### stack.pop => ", stack.pop());
console.log("#### stack.peek => ", stack.peek());
// assert.strictEqual();
// assert.strictEqual(stack.pop(), 7);
// assert.strictEqual(stack.peek(), 6);
