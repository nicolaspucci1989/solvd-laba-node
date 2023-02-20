const EventEmitter = require('../index')

let eventEmitter
beforeEach(() => {
    eventEmitter = new EventEmitter()
})
describe('Event listener', () => {
    it('should add listeners to the end of the listener array', () => {
        const eventName = 'event';
        const firstListener = () => 'listener'
        const secondListener = () => 'listener'
        const thirdListener = () => 'listener'
        eventEmitter.on(eventName, firstListener)
        eventEmitter.on(eventName, secondListener)
        eventEmitter.on(eventName, thirdListener)

        const emitterListeners = eventEmitter.getListeners(eventName);

        expect(emitterListeners[emitterListeners.length - 1]).toEqual(thirdListener)
    })

    it('should add listeners to the beginning of the listener array', () => {
        const eventName = 'event';
        const firstListener = () => 'listener'
        const secondListener = () => 'listener'
        const thirdListener = () => 'listener'
        const prependedListener = () => 'prepended'
        eventEmitter.on(eventName, firstListener)
        eventEmitter.on(eventName, secondListener)
        eventEmitter.on(eventName, thirdListener)
        eventEmitter.prependListener(eventName, prependedListener)

        expect(eventEmitter.getListeners(eventName)[0]).toEqual(prependedListener)
    })

    it('should remove listeners from the listeners array', () => {
        const eventName = 'event';
        const firstListener = () => 'first'
        const secondListener = () => 'second'
        const thirdListener = () => 'third'
        eventEmitter.on(eventName, firstListener)
        eventEmitter.on(eventName, secondListener)
        eventEmitter.on(eventName, thirdListener)

        expect(eventEmitter.getListeners(eventName).indexOf(secondListener)).toBeTruthy()
        eventEmitter.removeListener(eventName, secondListener)
        expect(eventEmitter.getListeners(eventName).indexOf(secondListener)).toBe(-1)

    })

    it('should call each of the listeners registered for the event name', async () => {
        const eventName = 'event';
        const firstListener = jest.fn()
        const secondListener = jest.fn()
        const thirdListener = jest.fn()
        eventEmitter.on(eventName, firstListener)
        eventEmitter.on(eventName, (...args) => Promise.resolve().then(() => secondListener(...args)))
        eventEmitter.on(eventName, thirdListener)

        await eventEmitter.emit(eventName, 'first argument', 'second argument')

        expect(firstListener).toBeCalledWith('first argument', 'second argument')
        expect(secondListener).toBeCalledWith('first argument', 'second argument')
        expect(thirdListener).toBeCalledWith('first argument', 'second argument')
    })

    it('should call each of the listeners registered for the event name', async () => {
        const eventName = 'event';
        const firstListener =() => console.log('first')
        const secondListener = () => console.log('second')
        const thirdListener = () => console.log('third')
        eventEmitter.on(eventName, firstListener)
        eventEmitter.on(eventName, (...args) => Promise.resolve().then(() => secondListener(...args)))
        eventEmitter.on(eventName, thirdListener)

        await eventEmitter.emit(eventName, 'first argument', 'second argument')
    })
})
