class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  hasNext() {
    return this.next !== null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this;
  }

  remove(value) {
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = this.head;

    while (current.data !== value) {
      prev = current;
      current = current.next;
    }

    if (current === this.last) {
      prev.next = null;
      this.last = prev;
      return;
    }

    // unlink current node with target value
    prev.next = current.next;
  }

  /**
   * cb{Function} - callback function
   */
  find(cb) {
    let current = this.head;
    while (!cb(current)) {
      current = current.next;
    }
    return current;
  }

  hasLoop() {
    let slowPointer = this.head;
    let fastPointer = this.head;

    while (
      slowPointer.hasNext() &&
      fastPointer.hasNext() &&
      fastPointer.next.hasNext()
    ) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer === fastPointer) return true;
    }

    return false;
  }
}

module.exports = { LinkedList, Node };
