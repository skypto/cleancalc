# CLEANCALC*

## v1.1.0
* Web interface for performing computations.
* New DOM file(dom.js) created for manipulation of data.

## v1.0.0
* Introduction of new object that contains all the functions required for performing the calculations.


## v0.2.0

* Introduction of html page that will work as the frontend for the cleancalc.

## v0.1.0  

* Now possible to pass the arguments as well as the operation type in a single function for computation.
* Backward compatibility of existing functions supported.
* New Function execution syntax: operateIntermediary(operation, arg1, arg2);  


```
Example of usage: console.log(lastResult);
================ 
lastResult = operateIntermediary('add', 2, 4);
lastResult = operateIntermediary('add', 5, lastResult);
lastResult = operateIntermediary('multiply', 3,2);
```

##  v0.0.0

*it's a silly procedural program to add a few numbers.'

```
Example of usage: console.log(lastResult);
================ 
lastResult = add(2, 4);
lastResult = add(5, lastResult);
lastResult = multiply(3,2);
```