import test from 'ava';
import fnName from '.';

test('named', t => {
	t.is(fnName(function foo() {}), 'foo'); // eslint-disable-line func-names
});

test('anonymous', t => {
	t.is(fnName(function() {}), undefined); // eslint-disable-line prefer-arrow-callback, space-before-function-paren
	t.is(fnName(function () {}), undefined); // eslint-disable-line prefer-arrow-callback
});

test('arrow', t => {
	t.is(fnName(() => {}), undefined);
});

test('nested', t => {
	t.is(
		fnName(function () { // eslint-disable-line prefer-arrow-callback
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
		fnName(function () { // eslint-disable-line prefer-arrow-callback
			call(function callback() {}); // eslint-disable-line func-names
		}),
		undefined
	);
});
