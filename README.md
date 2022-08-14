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

## Dynamic Typing

JavaScript is dynamically typed. What this means is that the type value that a variable holds is determined at runtime and can change dynamically. For example if we say `let name = 'Gawain'` then `name` is of the type `"string"`. If I then reallocate name to a number like this `name = 34`, name is now of the type `"number"`. This is in contrast to statically typed languages such as C where you declare what type of thing a variable holds.

## Types of number

JavaScript does not have different types of numbers like some languages (commonly integer and float). It just has "number".