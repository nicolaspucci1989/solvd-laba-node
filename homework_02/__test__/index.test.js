const sinon = require('sinon')
const _ = require('lodash');
const { debounce, chainSum, bubbleSort, quickSort } = require('../index')

let clock;
beforeEach(() => {
  clock = sinon.useFakeTimers();
});
afterEach(() => {
  clock.restore();
});
test('lodash debounce', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0); // func not called

  for(let i = 0; i < 10; i++) {
    clock.tick(500);
    debouncedFunc();
  }
  expect(func).toHaveBeenCalledTimes(0); // func not called

  clock.tick(1000);
  expect(func).toHaveBeenCalledTimes(1);  // func called
});

test('custom debounce', () => {
  const func = jest.fn();
  const debounceTime = 1000;
  const debouncedFunc = debounce(func, debounceTime);

  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0); // func not called

  for(let i = 0; i < 10; i++) {
    clock.tick(500);
    debouncedFunc();
  }
  expect(func).toHaveBeenCalledTimes(0); // func not called

  clock.tick(debounceTime);
  expect(func).toHaveBeenCalledTimes(1);  // func called
})

test('chain sum', () => {
  const n1 = 28
  const n2 = -8
  const n3 = -600
  const res = chainSum(n1)(n2)(n3)
  const expected = n1 + n2 + n3;
  expect(res == expected).toBeTruthy()
})

test('bubble sort', () => {
  const arr = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  expect(bubbleSort(arr)).toEqual(arr.sort((a, b) => a - b))
})

test('quick sort', () => {
  const arr = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  const actual = quickSort([...arr])
  const expected = [...arr].sort((a, b) => a - b)
  expect(actual).toStrictEqual(expected)
})
