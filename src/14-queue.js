const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
  }

  get size() {
    let counter = 0;
    let temp = this.queue;
    while (temp.next !== null) {
      temp = temp.next;
      counter++;
    }
    return counter;
  }

  enqueue(element) {
    let temp = this.queue;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new ListNode(element);
    if (this.queue.value === undefined) {
      this.queue = this.queue.next;
    }
  }

  dequeue() {
    const current = this.queue.value;
    this.queue = this.queue.next;
    return current;
  }
}

module.exports = Queue;
