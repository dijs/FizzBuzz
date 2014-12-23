'use strict';

require('should');

/* jshint node: true, mocha: true */

var fizzbuzz = require(__dirname + '/../index.js');

describe('Asking for divisor results', function() {
	it('should handle incorrect upper bound cases', function() {
		(function() {
			fizzbuzz();
		}).should.throw('Must provide an positive upper bound number');
		(function() {
			fizzbuzz(-10);
		}).should.throw('Must provide an positive upper bound number');
		(function() {
			fizzbuzz(0);
		}).should.throw('Must provide an positive upper bound number');
	});
	it('should handle null divisor word pairs case', function() {
		(function() {
			fizzbuzz(100);
		}).should.throw('Must provide a divisor word pair array');
	});
	it('should handle incorrect divisor word pair cases', function() {
		(function() {
			fizzbuzz(100, [{
				divisro: 4,
				wodr: 'fizz'
			}], function() {});
		}).should.throw('Divisor word pair Objects must have a divisor <positive integer> and word <string> keys');
		(function() {
			fizzbuzz(100, [{
				divisor: 0,
				word: 'fizz'
			}], function() {});
		}).should.throw('Divisor word pair Objects must have a divisor <positive integer> and word <string> keys');
		(function() {
			fizzbuzz(100, [{
				divisor: -3,
				word: 'fizz'
			}], function() {});
		}).should.throw('Divisor word pair Objects must have a divisor <positive integer> and word <string> keys');
		(function() {
			fizzbuzz(100, [{
				divisor: 'buzz',
				word: 'fizz'
			}], function() {});
		}).should.throw('Divisor word pair Objects must have a divisor <positive integer> and word <string> keys');
		(function() {
			fizzbuzz(100, [{
				divisor: 5,
				word: 9
			}], function() {});
		}).should.throw('Divisor word pair Objects must have a divisor <positive integer> and word <string> keys');
	});
	it('should handle null result callback', function() {
		(function() {
			fizzbuzz(100, [{
				divisor: 3,
				word: 'fizz'
			}]);
		}).should.throw('Must provide a result callback');
	});
	it('should handle empty divisor word pairs case', function() {
		var results = [];
		fizzbuzz(10, [], function(n, result) {
			results.push(result);
		});
		results.should.containDeep([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});
	it('should handle single divisor word pair case', function() {
		var results = [];
		fizzbuzz(10, [{
			divisor: 3,
			word: 'fizz'
		}], function(n, result) {
			results.push(result);
		});
		results.should.containDeep([1, 2, 'fizz', 4, 5, 'fizz', 7, 8, 'fizz', 10]);
	});
	it('should handle original fizzbuzz case', function() {
		var results = [];
		fizzbuzz(16, [{
			divisor: 3,
			word: 'fizz'
		}, {
			divisor: 5,
			word: 'buzz'
		}], function(n, result) {
			results.push(result);
		});
		results.should.containDeep([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
	});
	it('should handle 3+ divisors word pair case', function() {
		var results = [];
		fizzbuzz(21, [{
			divisor: 3,
			word: 'a'
		}, {
			divisor: 5,
			word: 'b'
		}, {
			divisor: 7,
			word: 'c'
		}], function(n, result) {
			results.push(result);
		});
		results.should.containDeep([1, 2, 'a', 4, 'b', 'a', 'c', 8, 'a', 'b', 11, 'a', 13, 'c', 'ab', 17, 'a', 19, 'ac']);
	});
});