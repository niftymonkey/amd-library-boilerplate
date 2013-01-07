## Synopsis

This is an attempt to create an example boilerplate for modular web application development.  There have been a number
of these created by various developers, but the intent of this one is to focus specifically on the structure of the 
code necessary to create a consumable AMD-based library, rather than to provide all of the tools that are normally
used in a new web application (build tools, test framework, etc).

## Goals
The goals of this experiment is to show how to do the following:
* Build a core javascript library that uses [RequireJS][1] for its dependency management
* Ensure that this library is also AMD-compliant (meaning it is consumable by other AMD-based libraries).
* Ensure that none of your module dependencies leak out into the global namespace.

## Motivation

In the process of trying to build a modular and reusable component library, I understandably came to the conclusion 
that I would want to use an [AMD][2] script loader.  I chose [RequireJS][1] to handle that.  However, I quickly 
found myself fighting with understanding how to properly and efficiently meet the goals stated above in the goals 
section. This made me feel like it was necessary to create the proper boilerplate so that I can concentrate on library
functionality, rather than library code structure.

As a result, I have created this example project as a reference for myself for how to accomplish this. 

[1]: http://requirejs.org/
[2]: https://github.com/amdjs/amdjs-api/wiki/AMD
