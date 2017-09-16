# CLEANCALC*

## v0.1.0  

* Now possible to pass the arguments as well as the operation type in a single function for computation.
* Backward compatibility of existing functions supported.
* New Function execution syntax: operateIntermediary(operation, arg1, arg2);  


```
Example of usage: console.log(lastResult);
================ 
lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);
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