export default function functionName(function_) {
	if (typeof function_ !== 'function') {
		throw new TypeError('Expected a function');
	}

	return function_.displayName || function_.name || (/function ([^(]+)?\(/.exec(function_.toString()) || [])[1];
}
