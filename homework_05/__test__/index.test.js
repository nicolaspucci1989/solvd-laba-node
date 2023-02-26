const LinkedList = require("../index");
describe("Given a linked list", () => {
    it("should add elements to the end of the linked list", () => {
        const linkedList = new LinkedList()
        linkedList.add(10).add(20).add(30)
        const head = linkedList.head
        expect(head.data).toBe(10)
        expect(head.next.data).toBe(20)
        expect(head.next.next.data).toBe(30)
        expect(head.next.next.next).toBe(null)
    })

    it("should remove elements by value", () => {

    })
})