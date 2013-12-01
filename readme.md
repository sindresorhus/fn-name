# function-name [![Build Status](https://secure.travis-ci.org/sindresorhus/function-name.png?branch=master)](http://travis-ci.org/sindresorhus/function-name)

> Get the name of a named function

There is a non-standard property `.name` on functions, but it's not supported in all browsers. This module tries that property then falls back to extracting the name from the function source.


## Install

Download [manually](https://github.com/sindresorhus/function-name/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/function-name)

```
npm install --save fn-name
```

#### [Bower](http://bower.io)

```
bower install --save function-name
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/function-name
```


## Examples

### Node.js

```js
var functionName = require('function-name');
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

MIT © [Sindre Sorhus](http://sindresorhus.com)
