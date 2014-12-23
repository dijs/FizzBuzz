'use strict';

/* jshint node: true */

function isPositiveNumber(n) {
	return typeof n === 'number' && n > 0;
}

function getResult(n, pairs) {
	var output = '';
	var divisibleByAtLeastOne = false;
	pairs.forEach(function(pair) {
		// Check pair keys
		if (!isPositiveNumber(pair.divisor) || typeof pair.word !== 'string') {
			throw new Error('Divisor word pair Objects must have a divisor <positive integer> and word <string> keys');
		}
		// Check divisibility
		if (n % pair.divisor === 0) {
			divisibleByAtLeastOne = true;
			output += pair.word;
		}
	});
	return divisibleByAtLeastOne ? output : n;
}

module.exports = function(upperBound, divisorWordPairs, resultCallback) {
	// Check params
	if (!isPositiveNumber(upperBound)) {
		throw new Error('Must provide an positive upper bound number');
	} else if (!divisorWordPairs) {
		throw new Error('Must provide a divisor word pair array');
	} else if (!resultCallback) {
		throw new Error('Must provide a result callback');
	} else {
		// Get results
		for (var n = 1; n <= upperBound; n++) {
			resultCallback(n, getResult(n, divisorWordPairs));
		}
	}
};