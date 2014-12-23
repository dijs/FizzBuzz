# FizzBuzz

### Installation

Clone repository and run npm install

### Testing

Run npm test

### Usage

The fizzbuzz method iterates from 1 to the given upper bound and fires the given callback with each number and divisor result.

```
var fizzbuzz = require('/path/to/fizzbuzz/index.js');

// fizzbuzz(Upper Bound <Positive Number>, Divisor Word Pairs, Result Callback Function)

// Example:

fizzbuzz(100, [{
	divisor: 3,
	word: 'fizz'
}, {
	divisor: 5,
	word: 'buzz'
}], function(n, result){
	// Do stuff...	
});

```