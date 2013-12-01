/*!
	function-name
	Get the name of a named function
	https://github.com/sindresorhus/function-name
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	function functionName(fn) {
		if (typeof fn !== 'function') {
			throw new TypeError('Expected a function.');
		}

		return fn.name || (/function ([^\(]+)/.exec(fn.toString()) || [])[1] || null;
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = functionName;
	} else {
		window.functionName = functionName;
	}
})();
