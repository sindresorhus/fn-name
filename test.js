'use strict';
var assert = require('assert');
var fnName = require('./');

it('should return the name of named functions', function () {
	assert.equal(fnName(function foo() {}), 'foo');
});

it('anonymous', function () {
	assert.equal(fnName(function() {}), null);
	assert.equal(fnName(function () {}), null);
});

it('nested', function () {
	assert.equal(fnName(function () {
		function nested() {}
	}), null);
});

it('nested callback', function () {
	function call (fn) { fn() }

	assert.equal(fnName(function () {
		call(function callback () {});
	}), null);
});
