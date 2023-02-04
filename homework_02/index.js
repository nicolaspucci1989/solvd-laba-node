function chainSum(initialValue) {
    let accumulator = initialValue
    const name = 'Chain sum'
    function innerSum(anotherValue) {
        const name = 'Inner Sum'
        if (anotherValue !== undefined) {
            accumulator += anotherValue
            return innerSum
        }
        return accumulator
    }

    innerSum.toString = function () {
        return accumulator
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

const res = chainSum(28)(-8)(-600)
console.log(res)