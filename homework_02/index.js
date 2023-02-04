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