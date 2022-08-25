const palindrome = require('./palindrome');

test('function exists', () => {
  expect(palindrome).toBeDefined();
});

test('palindrome is a function', () => {
  expect(typeof palindrome).toEqual('function');
});

test(' "kayak" is palindrome', () => {
  expect(palindrome('kayak')).toBeTruthy();
});

test(' " kayak" is NOT palindrome', () => {
  expect(palindrome('kayak ')).toBeFalsy();
});

test(' "apple" is Not palindrome', () => {
  expect(palindrome('apple')).toBeFalsy();
});

test(' "apple elppa" is NOT palindrome', () => {
  expect(palindrome('apple elppa')).toBeFalsy();
});

test(' "civic" to be palindrom', () => {
  expect(palindrome('civic')).toBeTruthy();
});
