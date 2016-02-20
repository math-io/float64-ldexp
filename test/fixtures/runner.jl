# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

function gen( x, name )
	len = length( x );

	frac = Array( Float64, len );
	exp = Array( Float64, len );
	v = Array( Float64, len );
	
	for i in eachindex(x)
		out = frexp( x[i] );
		frac[ i ] = out[ 1 ];
		exp[ i ] = out[ 2 ];
		v[ i ] = ldexp( out[1], out[2] );
	end

	data = Dict([
		("frac", frac),
		("exp", exp),
		("expected", v)
	]);

	outfile = open( name, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Small values:
x = linspace( 1e-200, 1e-308, 1007 );
name = "small.json";
gen( x, name );

# Medium values:
x = linspace( -1e3, 1e3, 1007 );
name = "medium.json";
gen( x, name );

# Large values:
x = linspace( 1e200, 1e308, 1007 );
name = "large.json";
gen( x, name );

# Subnormal values:
x = linspace( 1e-310, 5e-324, 1007 );
name = "subnormal.json";
gen( x, name );
