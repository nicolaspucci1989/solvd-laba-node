const sinon = require('sinon')
const _ = require('lodash');
const debounce = require('../index')

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
