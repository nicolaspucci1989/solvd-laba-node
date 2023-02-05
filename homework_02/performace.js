const {
  bubbleSort,
  getRandomArray,
  getSequentialArray,
  getSequentialArrayReversed,
  quickSort,
  timerWrap
} = require('./index')

for (let i = 0; i < 10; i++) {
  console.log(`Run ${i + 1}`)
  console.table(perfTest())
}

function perfTest() {
  const data = []

// sorted arrays
  for (let i = 2; i < 102; i++) {
    const arr = getSequentialArray(i);
    const bTime = timerWrap(bubbleSort)([...arr])
    const qTime = timerWrap(quickSort)([...arr])

    data.push({
      arrayType: 'Sorted',
      arrayLength: i,
      time: {
        bubbleSort: bTime[0] + bTime[1],
        quickSort: qTime[0] + qTime[1]
      },
    })
  }

// reversed arrays
  for (let i = 2; i < 102; i++) {
    const arr = getSequentialArrayReversed(i)
    const bTime = timerWrap(bubbleSort)([...arr])
    const qTime = timerWrap(quickSort)([...arr])

    data.push({
      arrayType: 'Sorted Reversed',
      arrayLength: i,
      time: {
        bubbleSort: bTime[0] + bTime[1],
        quickSort: qTime[0] + qTime[1]
      },
    })
  }

// random arrays
  for (let i = 2; i < 102; i++) {
    const arr = getRandomArray(i)
    const bTime = timerWrap(bubbleSort)([...arr])
    const qTime = timerWrap(quickSort)([...arr])

    data.push({
      arrayType: 'Random',
      arrayLength: i,
      time: {
        bubbleSort: bTime[0] + bTime[1],
        quickSort: qTime[0] + qTime[1]
      },
    })
  }

  return data.filter(r => r.time.bubbleSort < r.time.quickSort)
}