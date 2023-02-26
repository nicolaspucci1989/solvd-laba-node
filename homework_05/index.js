class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

    hasNext() {
        return this.data !== null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.last = null
    }

    add(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this
    }

    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next
            return
        }

        let current = this.head
        let prev = this.head

        while (current.data !== value) {
            prev = current
            current = current.next
        }

        if (current === this.last) {
            prev.next = null
            this.last = prev
            return
        }

        // unlink current node with target value
        prev.next = current.next
    }

    find(value) {
        let current = this.head
        while (current.value !== value) {
            current = current.next
        }
        return current
    }
}

module.exports = LinkedList