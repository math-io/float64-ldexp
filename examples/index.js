'use strict';

var round = require( 'math-round' );
var pow = require( 'math-power' );
var frexp = require( 'math-float64-frexp' );
var ldexp = require( './../lib' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

/**
* 1) Generate random numbers.
* 2) Break each number into a normalized fraction and an integer power of two.
* 3) Reconstitute the original number.
*/
for ( i = 0; i < 100; i++ ) {
	if ( Math.random() < 0.5 ) {
		sign = -1;
	} else {
		sign = 1;
	}
	frac = Math.random() * 10;
	exp = round( Math.random()*616 ) - 308;
	x = sign * frac * pow( 10, exp );
	f = frexp( x );
	v = ldexp( f[ 0 ], f[ 1 ] );
	console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}