# fn-name

> Get the name of a named function

There is a [`name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property on functions, but it's not supported in all browsers. This module tries that property then falls back to extracting the name from the function source.

## Install

```
$ npm install fn-name
```

## Usage

```js
import functionName from 'fn-name';

functionName(function foo() {});
//=> 'foo'
```

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-fn-name?utm_source=npm-fn-name&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
