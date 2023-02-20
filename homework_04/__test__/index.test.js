const Queue = require("../index")
describe("Given a queue data structure", () => {
    it("should add elements to the end of the queue", () => {
        const queue = new Queue()
        queue.enqueue('first')
        queue.enqueue('second')
        queue.enqueue('third')
        expect(queue.dequeue()).toBe("first")
        expect(queue.dequeue()).toBe("second")
        expect(queue.dequeue()).toBe("third")
    })
})