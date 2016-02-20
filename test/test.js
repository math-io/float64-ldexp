'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var ldexp = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/small.json' );
var medium = require( './fixtures/medium.json' );
var large = require( './fixtures/large.json' );
var subnormal = require( './fixtures/subnormal.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof ldexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (small values)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = small.expected;
	frac = small.frac;
	exp = small.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (medium values)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = medium.expected;
	frac = medium.frac;
	exp = medium.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (large values)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = large.expected;
	frac = large.frac;
	exp = large.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function multiplies a number by an integer power of two (subnormals)', function test( t ) {
	var expected;
	var frac;
	var exp;
	var v;
	var i;

	expected = subnormal.expected;
	frac = subnormal.frac;
	exp = subnormal.exp;
	for ( i = 0; i < frac.length; i++ ) {
		v = ldexp( frac[i], exp[i] );
		t.equal( v, expected[i], 'frac: '+frac[i]+'; exp: '+exp[i]+'; expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided a fraction equal to `+0`, the function returns `+0`', function test( t ) {
	var v = ldexp( 0, 10 );
	t.equal( v, 0, 'returns 0' );
	t.equal( 1/v, PINF, 'returns +0' );
	t.end();
});

tape( 'if provided a fraction equal to `-0`, the function returns `-0`', function test( t ) {
	var v = ldexp( -0, 10 );
	t.equal( v, 0, 'returns 0' );
	t.equal( 1/v, NINF, 'returns -0' );
	t.end();
});

tape( 'if provided a fraction equal to `+infinity`, the function returns `+infinity`', function test( t ) {
	var v = ldexp( PINF, 10 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided a fraction equal to `-infinity`, the function returns `-infinity`', function test( t ) {
	var v = ldexp( NINF, 10 );
	t.equal( v, NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided a fraction equal to `NaN`, the function returns `NaN`', function test( t ) {
	var v = ldexp( NaN, 10 );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

tape( 'the function returns `0` if the result of multiplying a positive fraction and an integer power of two underflows', function test( t ) {
	// Min subnormal ~5e-324 ~ 2**-1074
	var v = ldexp( 0.005, -1073 );
	t.equal( v, 0, 'returns 0' );
	t.equal( 1/v, PINF, 'returns +0' );
	t.end();
});

tape( 'the function returns `-0` if the result of multiplying a negative fraction and an integer power of two underflows', function test( t ) {
	// Min subnormal ~5e-324 ~ 2**-1074
	var v = ldexp( -0.005, -1073 );
	t.equal( v, -0, 'returns 0' );
	t.equal( 1/v, NINF, 'returns -0' );
	t.end();
});

tape( 'the function returns `+infinity` if the result of multiplying a positive fraction and an integer power of two overflows', function test( t ) {
	// Max double ~1e308 ~ 2**1023
	var v = ldexp( 1e3, 1021 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if the result of multiplying a negative fraction and an integer power of two overflows', function test( t ) {
	// Max double ~1e308 ~ 2**1023
	var v = ldexp( -1e3, 1021 );
	t.equal( v, NINF, 'returns -infinity' );
	t.end();
});