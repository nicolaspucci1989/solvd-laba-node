function debounce(fn, time) {
    let lastFunctionCall

    return function (...args) {
        if (lastFunctionCall === undefined) { // first call
            lastFunctionCall = Date.now()
            return fn(...args)
        }

        if (Date.now() - lastFunctionCall >= time) { // if time has passed
            lastFunctionCall = Date.now()
            return fn(...args)
        }

        lastFunctionCall = Date.now()
    }
}
function debounce2(func, wait, immediate) {
    let timeout

    return function() {
        const context = this
        const args = arguments;
        function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }

        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    };
}

function debounce3(func, wait, debounce) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var throttler = function() {
            timeout = null;
            return func.apply(context, args);
        };
        if (debounce) clearTimeout(timeout);
        if (debounce || !timeout) timeout = setTimeout(throttler, wait);
    };
}

function sum(a, b) {
    return a + b
}

const debouncedSum = debounce3(sum , 500, true)
console.log(debouncedSum(1,2))

function chainSum(initialValue) {
    let accumulator = initialValue

    function innerSum(anotherValue) {
        if (anotherValue !== undefined) {
            accumulator += anotherValue
            return innerSum
        }
        return accumulator
    }

    innerSum.toString = function () {
        return String(accumulator)
    }

    innerSum.valueOf = function () {
        return accumulator
    }

    return innerSum
}

chainSum.valueOf = function () {
    return this.apply()
}
chainSum.toString = function () {
    return this.apply()
}

const n1 = 28
const n2 = -8
const n3 = -600
const res = chainSum(n1)(n2)(n3)
console.log(res == n1 + n2 + n3)
