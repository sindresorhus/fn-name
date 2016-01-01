import test from 'ava';
import m from './';

test('named', t => {
	t.is(m(function foo() {}), 'foo');
});

test('anonymous', t => {
	t.is(m(function() {}), null); // eslint-disable-line
	t.is(m(function () {}), null);
});

test('arrow', t => {
	t.is(m(() => {}), null);
});

test('nested', t => {
	t.is(m(function () {
		function nested() {}
		nested();
	}), null);
});

test('nested callback', t => {
	function call(fn) {
		fn();
	}

	t.is(m(function () {
		call(function callback() {});
	}), null);
});
