const LinkedList = require("../index");

let linkedList

beforeEach(() => {
    linkedList = new LinkedList()
})

describe("Given a linked list", () => {
    it("should add elements to the end of the linked list", () => {
        linkedList.add(10).add(20).add(30)
        const head = linkedList.head
        expect(head.data).toBe(10)
        expect(head.next.data).toBe(20)
        expect(head.next.next.data).toBe(30)
        expect(head.next.next.next).toBe(null)
    })

    it("should remove elements by value", () => {
        linkedList.add(10).add(20).add(30)
        linkedList.remove(20)
        const head = linkedList.head
        expect(head.data).toBe(10)
        expect(head.next.data).toBe(30)
    })

    it("should correctly remove elements by value at the beginning of the list", () => {
        linkedList.add(10).add(20).add(30)
        linkedList.remove(10)
        expect(linkedList.head.data).toBe(20)
        expect(linkedList.last.data).toBe(30)
    })

    it("should correctly remove elements by value at the end of the list", () => {
        linkedList.add(10).add(20).add(30)
        linkedList.remove(30)
        expect(linkedList.last.data).toBe(20)
    })
})