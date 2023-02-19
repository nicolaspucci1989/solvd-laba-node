class EventEmitter {

    constructor() {
        this.listeners = {}
    }

    emit(eventName, ...args) {
        this.getListeners(eventName).forEach(listener => {
            listener(...args)
        })
    }

    on(eventName, listener) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].push(listener)
        } else {
            this.listeners[eventName] = [listener]
        }
    }

    prependListener(eventName, listener) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].unshift(listener)
        } else {
            this.listeners[eventName] = [listener]
        }
    }

    removeListener(eventName, listener) {
        const indexFound = this.listeners[eventName]?.indexOf(listener)
        if (!indexFound) return;

        this.listeners[eventName].splice(indexFound, 1)
    }

    getListeners(eventName) {
        return this.listeners[eventName]
    }
}

module.exports = EventEmitter