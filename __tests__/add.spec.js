const { add } = require('../');

describe('Addition', () => {
	test('summing two numbers', () => {
		expect(add(1, 1)).toBe(2);
	});
	test('summing a string and a number throws an error', () => {
		expect(() => add(100, 'dude')).toThrow();
		expect(() => add('dude', 100)).toThrow();
	});
});
