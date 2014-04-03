# function-name [![Build Status](https://travis-ci.org/sindresorhus/function-name.svg?branch=master)](https://travis-ci.org/sindresorhus/function-name)

> Get the name of a named function

There is a non-standard [name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property on functions, but it's not supported in all browsers.  
This module tries that property then falls back to extracting the name from the function source.


## Install

Download [manually](https://github.com/sindresorhus/function-name/releases) or with a package-manager.

```bash
$ npm install --save fn-name
```

```bash
$ bower install --save function-name
```

```bash
$ component install sindresorhus/function-name
```


## Usage

### Node.js

```js
var functionName = require('fn-name');
functionName(function foo() {});
//=> foo
```

### Bower

```html
<script src="bower_components/function-name/function-name.js"></script>
```

```js
functionName(function foo() {});
//=> foo
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
