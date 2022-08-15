# Js Basics from the coding with Mosh course

## Variables

Best practice is to declare each variable on it's own line like:

```
let gawain;
let niamh;
let alex = null;
let age = 43;
```

## Primative types

In ES6 there are the following primative types

```
let name = 'Gawain'; // string literal
let age = 43; // number literal
let isAllowed = false; // boolean literal
let firstName = undefined; // you would not normally specify a variable to be 'undefined' but that is the default
let lastName = null; // use this to hold a space for something when it's not something else. 
```

## Reference Types

Object
Array
Function

```
let person = {}; // object literal - indicates an empty object
let selectedPeople = []; // array literal - indicates an empty array
```

## Dynamic Typing

JavaScript is dynamically typed. What this means is that the type value that a variable holds is determined at runtime and can change dynamically. For example if we say `let name = 'Gawain'` then `name` is of the type `"string"`. If I then reallocate name to a number like this `name = 34`, name is now of the type `"number"`. This is in contrast to statically typed languages such as C where you declare what type of thing a variable holds.

This is also applicable with arrays - the length of the array and the types of objects that they hold are also dynamic and can change during runtime.

## Types of number

JavaScript does not have different types of numbers like some languages (commonly integer and float). It just has "number".

## Functions

```

function testFunction(parameter1, parameter2) { // called parameters at the point of declaration
  console.log(parmeter1 + parameter2);
}

function testFunction(argument1, argument2); // while the argument is the value that we supply to the parameter when we call the function

```

## Arithmetic operators

an expression is something that produces a value for example `x + y`

``` 
x + y // addition
x - y // subtraction
x * y // multiplication
x / y // division
x % y // remainder of division or modulo
x ** y // exponentiation - x to the power of y
x ++ y // increment
x -- y // decrement

let x = 10;
```

## Assignment Operators

```

x = x + 3;
// is the same as
x += 3;

x = x - 7;
// is the same as
x -= 7;

x = x * 6;
// is the same as
x *= 6;

x = x / 2;
// is the same as
x /= 2;

x = x % 9;
// is the same as
x %= 9;

```

