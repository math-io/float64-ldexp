math-float64-ldexp
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Multiples a double-precision floating-point number by an integer power of two.


## Installation

``` bash
$ npm install math-float64-ldexp
```


## Usage

``` javascript
var foo = require( 'math-float64-ldexp' );
```

#### foo()

What does `foo` do?

``` javascript
foo()
// returns `undefined`
```


## Notes

*	First note.


## Examples

``` javascript
var foo = require( 'math-float64-ldexp' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g math-float64-ldexp
```


### Usage

``` bash

```


### Notes

* 	First note


### Examples

``` bash
$
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-float64-ldexp.svg
[npm-url]: https://npmjs.org/package/math-float64-ldexp

[build-image]: http://img.shields.io/travis/math-io/float64-ldexp/master.svg
[build-url]: https://travis-ci.org/math-io/float64-ldexp

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/float64-ldexp/master.svg
[coverage-url]: https://codecov.io/github/math-io/float64-ldexp?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/float64-ldexp.svg
[dependencies-url]: https://david-dm.org/math-io/float64-ldexp

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/float64-ldexp.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/float64-ldexp

[github-issues-image]: http://img.shields.io/github/issues/math-io/float64-ldexp.svg
[github-issues-url]: https://github.com/math-io/float64-ldexp/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
