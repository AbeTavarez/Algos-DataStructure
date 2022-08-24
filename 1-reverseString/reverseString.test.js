const reverseStr = require('./index');

test('Check if function exists', () => {
  expect(reverseStr).toBeDefined();
});

test('function reverses a string', () => {
  expect(reverseStr('qwert')).toEqual('trewq');
});

test('function reverses string with spaces', () => {
  expect(reverseStr(' qwert')).toEqual('trewq ');
});
