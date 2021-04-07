import test from 'ava';
import functionName from './index.js';

test('named', t => {
	t.is(functionName(function foo() {}), 'foo'); // eslint-disable-line func-names
});

test('anonymous', t => {
	t.is(functionName(function() {}), undefined); // eslint-disable-line prefer-arrow-callback, space-before-function-paren
	t.is(functionName(function () {}), undefined); // eslint-disable-line prefer-arrow-callback
});

test('arrow', t => {
	t.is(functionName(() => {}), undefined);
});

test('nested', t => {
	t.is(
		functionName(function () { // eslint-disable-line prefer-arrow-callback
			function nested() {}
			nested();
		}),
		undefined
	);
});

test('nested callback', t => {
	function call(fn) {
		fn();
	}

	t.is(
		functionName(function () { // eslint-disable-line prefer-arrow-callback
			call(function callback() {}); // eslint-disable-line func-names
		}),
		undefined
	);
});
