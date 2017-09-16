// this is the functions and variables that will become props and methods in cleancalc
// this file uses'procedural programming' - writing things in the order that they will execute

// -------------------  v0.0.0  --------------------- //
//Cleancalc


var lastResult = 0000;

function add(arg1, arg2) {
	return arg1 + arg2;
};

function subtract(arg1, arg2) {
	return arg1 - arg2;
};

function multiply(arg1, arg2) {
	return arg1 * arg2;
};

function divide(arg1, arg2) {
	return arg1 / arg2;
};

/* Example of usage
lastResult = add(2, 4);
lastResult = add(5, lastResult);
lastResult = multiply(3,2);
*/

// -------------------  v0.1.0  --------------------- //

lastResult = 0000;

function operateIntermediary(operation, arg1, arg2) {
	return operation(arg1, arg2);
};

lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);

/* Example of usage
lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);
*/