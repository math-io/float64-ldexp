'use strict';

// MODULES //

var tape = require( 'tape' );
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

tape( 'the function multiplies a number by an integer power of two (small `x`)', function test( t ) {
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

tape( 'the function multiplies a number by an integer power of two (medium `x`)', function test( t ) {
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

tape( 'the function multiplies a number by an integer power of two (large `x`)', function test( t ) {
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

tape( 'the function multiplies a number by an integer power of two (subnormal `x`)', function test( t ) {
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
