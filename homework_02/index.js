module.exports = { debounce, chainSum, bubbleSort, quickSort }
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

function _quickSort(arr, start, end) {
  if (start < end) {
    const partitionIndex = partition(arr, start, end)
    _quickSort(arr, start, partitionIndex - 1) // left
    _quickSort(arr, partitionIndex + 1, end) // right
  }

  function partition(arr, start, end) {
    const pivot = arr[end]
    let i = start - 1

    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        i++
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

      }
    }

    const temp = arr[i+1]
    arr[i+1] = arr[end]
    arr[end] = temp

    return i+1
  }
}

function quickSort(arr) {
  const temp = [...arr]
  _quickSort(temp, 0, temp.length - 1)
  return temp
}
