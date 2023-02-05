module.exports = { debounce, chainSum, bubbleSort }
const _ = require('lodash');

function debounce(fn, wait) {
  let timeout
  let res

  return function () {
    const context = this
    const args = arguments;

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null;
      res = fn.apply(context, args);
    }, wait)

    if (res) return res
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

function bubbleSort(arr) {
  const local = [...arr]
  const length = local.length

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - 1; i++) {
      if (local[i] > local[i + 1]) {
        const current = local[i]
        local[i] = local[i + 1]
        local[i + 1] = current
      }
    }
  }

  return local
}

// console.log(bubbleSort([3, 2, 1]))
// console.log(bubbleSort([1, 2, 3]))
// console.log(bubbleSort([3, 2, 1, 5, 8, 3, 9, 221, 0]))
//
// const fn = debounce(() => 'done!!', 100)
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// setTimeout(() => {
//   console.log(fn())
// }, 500)
