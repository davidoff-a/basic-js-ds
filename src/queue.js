const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.queue = null;
    this.length = 0;
  }
  getUnderlyingList() {
    let current = this.queue;
    while (current) {
      current;
    }
  }

  enqueue(value) {
    if (this.queue === null) {
      this.queue = new ListNode(value);
    } else {
      let current = this.queue;
      let prev = null;
      while (current) {
        prev = current;
        current = current.next;
      }
      current = new ListNode(value);
      prev.next = current;
    }
  }

  dequeue() {
    let current = this.queue;
    let value = null;
    if (this.queue.next) {
      value = current.value;
      this.queue = this.queue.next;
    }
    return value;
  }
}

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue());
// console.log(queue.dequeue());

module.exports = {
  Queue,
  ListNode,
};
