/* global it */
'use strict';
var assert = require('assert');
var fnName = require('./');

it('should return the name of named functions', function () {
	assert.equal(fnName(function foo() {}), 'foo');
});

it('anonymous', function () {
	/* eslint-disable */
	assert.equal(fnName(function() {}), null);
	/* eslint-enable */
	assert.equal(fnName(function () {}), null);
});

it('nested', function () {
	assert.equal(fnName(function () {
		function nested() {}
		nested();
	}), null);
});

it('nested callback', function () {
	function call(fn) {
		fn();
	}

	assert.equal(fnName(function () {
		call(function callback() {});
	}), null);
});
