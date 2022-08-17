# JavaScript Basics

This repository has my notes on basic JavaScript concepts for reference. 

## Variables

Pre ES6 we used `var` to declare a variable. Now we use `let` or `const`.

Prefer `const` over `let`. Prefer `let` over `var`.

While you can declare several variables on one line, it is best practice is to declare each variable on it's own line like:

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

## Types of equality

JavaScript has two commonly used equality operations and one other

```

== // is loosely equal
=== // is strictly equal
Object.is // same value - very similar to ===, a little stricter and has it's own flavour
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness 

## Ternary Operator

A ternary operator allows you to write a conditional statement

for example

```

let age = 43;
let type = age > 43 ? 'oldMan' : 'youngMan';

```
so we have the statement first `age > 43` this will give a true or false. Then we have a `?` to show that it is a ternary thing, then if the answer is true we get the first answer, in this case `'oldMan'` otherwise we get the second answer after the `:` in this case `'youngMan'`.

## Falsy things in JS

In JS we don't just have strict true and strict false, we also have things which are considered truthy or considered falsy. This is a list of falsy things, everything else is considered truthy. We can use this with logical operators to write some concise code. 

```
undefined
null
0
false
'' // empty string
NaN
```

## Short circuiting OR operator

OR will return the first truthy thing it encounters.

```
false || false || true || 'true2' // will return true

false || 23 || 20 // will return 23
```

this can be very powerful 

```

let userScale; // undefined by default
let defaultScale = 'C';
let currentScale = userScale || defaultScale; 

// currentScale will be C because undefined is falsy. 
// when userScale is set to a value, then it is truty and currentScale will be that instead

```

## Integer literals

As standard numbers are assumed to be base 10 or decimal.


* A decimal integer literal is a sequence of digits without a leading 0 (zero).
* A leading 0 (zero) on an integer literal, or a leading 0o (or 0O) indicates it is in octal. Octal integer literals can include only the digits 0–7.
* A leading 0x (or 0X) indicates a hexadecimal integer literal. Hexadecimal integers can include digits (0–9) and the letters a–f and A–F. (The case of a character does not change its value. Therefore: 0xa = 0xA = 10 and 0xf = 0xF = 15.)
* A leading 0b (or 0B) indicates a binary integer literal. Binary integer literals can only include the digits 0 and 1.
* A trailing n suffix on an integer literal indicates a BigInt literal. The integer literal can use any of the above bases. Note that leading-zero octal syntax like 0123n is not allowed, but 0o123n is fine.

Some examples of integer literals are:

    0, 117, 123456789123456789n             (decimal, base 10)
    015, 0001, 0o777777777777n              (octal, base 8)
    0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
    0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)


## Simple bitwise operators

