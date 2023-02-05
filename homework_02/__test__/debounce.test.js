const sinon = require('sinon')
const _ = require('lodash');
const { debounce, chainSum, bubbleSort} = require('../index')

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
  const arr = [5,3,7,9,3,2,5,78,90,54,37]
  expect(bubbleSort(arr)).toEqual(arr.sort((a, b) => a - b))
})
