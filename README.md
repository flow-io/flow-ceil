flow-ceil
=========

Transform stream factory to round streamed numeric data values toward positive infinity ([ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)).


## Installation

``` bash
$ npm install flow-ceil
```

## API

To create a stream factory,

``` javascript
var ceilStream = require( 'flow-ceil' );

// Create a new factory:
var cStream = ceilStream();
```

### cStream.stream()

To create a new stream to round streamed numeric values toward positive infinity,

``` javascript
var stream = cStream.stream();
```


## Usage

Methods are chainable.

``` javascript
ceilStream()
	.stream()
	.pipe( /* writable stream */ );
```


## Examples

``` javascript
var eventStream = require( 'event-stream' ),
	cStream = require( 'flow-ceil' );

// Create some data...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()-0.5;
}

// Create a readable stream:
var readStream = eventStream.readArray( data );

// Create a new stream:
var stream = cStream().stream();

// Pipe the data:
readStream.pipe( stream )
	.pipe( eventStream.map( function( d, clbk ) {
		clbk( null, d.toString()+'\n' );
	}))
	.pipe( process.stdout );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions.

Assuming you have installed Mocha, execute the following command in the top-level application directory to run the tests:

``` bash
$ mocha
```

All new feature development should have corresponding unit tests to validate correct functionality.


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.

