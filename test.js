/* eslint-disable prefer-arrow-callback */
import test from 'ava';
import fn from './';

test('named functions', t => {
	t.is(fn(function foo() {}), 'foo');
	t.end();
});

test('anonymous', t => {
	t.is(fn(function() {}), null); // eslint-disable-line
	t.is(fn(function () {}), null);
	t.end();
});

test('nested', t => {
	t.is(fn(function () {
		function nested() {}
		nested();
	}), null);
	t.end();
});

test('nested callback', t => {
	function call(fn) {
		fn();
	}

	t.is(fn(function () {
		call(function callback() {});
	}), null);
	t.end();
});
