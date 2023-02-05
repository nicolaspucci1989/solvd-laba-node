module.exports = {
  debounce,
  chainSum,
  bubbleSort,
  quickSort,
  getSequentialArray,
  getSequentialArrayReversed,
  getRandomArray,
  timerWrap
}

function getRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * length))
}

function getSequentialArrayReversed(length) {
  return getSequentialArray(length).reverse()
}

function getSequentialArray(length) {
  return Array.from({ length }, (_, index) => index + 1);
}

function timerWrap(fn) {
  return function () {
    const start = process.hrtime()
    fn(arguments)
    return process.hrtime(start)
  }
}

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
  const length = arr.length

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const current = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = current
      }
    }
  }

  return arr
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const partitionIndex = partition(arr, start, end)
    quickSort(arr, start, partitionIndex - 1) // left
    quickSort(arr, partitionIndex + 1, end) // right
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

    const temp = arr[i + 1]
    arr[i + 1] = arr[end]
    arr[end] = temp

    return i + 1
  }
}
