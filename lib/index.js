'use strict';

// NOTES //

/**
* Notes:
*	=> ldexp: load exponent (see [The Open Group]{@link http://pubs.opengroup.org/onlinepubs/9699919799/functions/ldexp.html}).
*/


// MODULES //

var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );


// LDEXP //

/**
* FUNCTION: ldexp( frac, exp )
*	Multiples a double-precision floating-point number by an integer power of two.
*
* @param {Number} frac - fraction
* @param {Number} exp - exponent
* @returns {Number} double-precision floating-point number
*/
function ldexp( frac, exp ) {
	if (
		frac === 0 || // handles +-0
		frac !== frac || // handles NaN
		frac === PINF ||
		frac === NINF
	) {
		return frac; 
	}
} // end FUNCTION ldexp()


// EXPORTS //

module.exports = ldexp;
