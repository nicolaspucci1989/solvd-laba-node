module.exports = { debounce, chainSum }
function debounce(fn, wait ) {
    let timeout

    return function() {
        const context = this
        const args = arguments;
        function callLater() {
            timeout = null;
            fn.apply(context, args);
        }

        clearTimeout(timeout)
        timeout = setTimeout(callLater, wait)
    };
}

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
