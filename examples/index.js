var eventStream = require( 'event-stream' ),
	cStream = require( './../lib' );

// Create some data...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()-0.5;
}

// Create a readable stream:
var readStream = eventStream.readArray( data );

// Create a new stream to round streamed numeric values toward positive infinity:
var stream = cStream().stream();

// Pipe the data:
readStream.pipe( stream )
	.pipe( eventStream.map( function( d, clbk ) {
		clbk( null, d.toString()+'\n' );
	}))
	.pipe( process.stdout );