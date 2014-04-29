'use strict';
var assert = require('assert');
var fnName = require('./fn-name');

it('should return the name of named functions', function () {
	assert.equal(fnName(function foo() {}), 'foo');
});
