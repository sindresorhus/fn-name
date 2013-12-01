/*global it */
'use strict';
var assert = require('assert');
var functionName = require('./function-name');

it('should return the name of named functions', function () {
	assert.equal(functionName(function foo() {}), 'foo');
});
