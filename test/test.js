'use strict';

// MODULES //

var tape = require( 'tape' );
var ldexp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof ldexp, 'function', 'main export is a function' );
	t.end();
});
