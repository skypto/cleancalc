// This object contains all the functions that are required to perform the calculations.
// It accepts a string and 2 arguments of type number
// -------------------  v1.0.0  --------------------- //


var calc = {
	lastResult: 0,
	operate: function(operation, arg1, arg2) {
	if (arg2) {
		lastResult = this[operation](arg1, arg2); // -> this.add
        // this[variableName] -> this.value
		return lastResult;
	} else {
		lastResult = operation(arg1, lastResult);
		return lastResult;
	}
},
add: function(arg1, arg2) {
	return arg1 + arg2;
},
subtract: function(arg1, arg2) {
	return arg1 - arg2;
},
multiply: function(arg1, arg2) {
	return arg1 * arg2;
},
divide: function(arg1, arg2) {
	return arg1 / arg2;
},
}

/* Example of usage
console.log(calc.operate('add', 3, 4))
*/