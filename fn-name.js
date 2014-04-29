/*!
	fn-name
	Get the name of a named function
	https://github.com/sindresorhus/fn-name
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	function fnName(fn) {
		if (typeof fn !== 'function') {
			throw new TypeError('Expected a function.');
		}

		return fn.name || (/function ([^\(]+)/.exec(fn.toString()) || [])[1] || null;
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = fnName;
	} else {
		window.fnName = fnName;
	}
})();
