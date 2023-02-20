/*
* Implement a queue using two stacks
* */

class Stack {
    constructor() {
        this.elements = []
    }

    push(e) {
        this.elements.push(e)
    }

    get top() {
        if (!this.elements.length) return
        return this.elements[this.elements.length - 1]
    }
    pop() {
        return this.elements.pop()
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

class Queue {
    constructor() {
        this.mainStack = new Stack()
        this.tempStack = new Stack()
    }

    enqueue(element) {
        while(!this.mainStack.isEmpty()) {
            this.tempStack.push(this.mainStack.pop())
        }

        this.mainStack.push(element)

        while(!this.tempStack.isEmpty()) {
            this.mainStack.push(this.tempStack.pop())
        }
    }
    dequeue() {
        return this.mainStack.pop()
    }

    isEmpty() {
        return this.mainStack.isEmpty()
    }
    top() {
        return this.mainStack.top()
    }
}

module.exports = Queue