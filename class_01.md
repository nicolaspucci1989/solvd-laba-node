# Class 01
### Node js
Created by ryan ...

Has good development speed, one language (frontend and backend)

npm good reason form use npm

php is much faster than nodejs for server side, but it doesn't support older versions

python is a more universal language

Nodejs uses the *V8* engine build with c++ developed by Google.  
Other node engines exists. (eg for iot)  

### "Difficulties" with V8
It uses two compilers

#### Full code gen
Converts code to machine code

#### Crank Shaft
It optimizes the code on the fly, doesn't compile to machine code.
Can optimize functions by making them *inline functions*

### V8 Streams

- Main stream.  
- Compilations stream.  
When code is running is already compiled, but the stream can do on the fly optimizations 
- Profile Stream.  
- Garbage collector streams.
V8 run streams for garbage collection.  

### JS
There are no classes, only prototypes

### V8 *hidden classes*
see (link)[https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html]  
It doesn't use hash functions, it uses hidden classes
access is faster, but it consumes more memory.

if hidden class has no fields, it's empty.  
``` javascript
const point = new Point(x, y) // points to hidden class C0
```
when we add a field *C0* transitions to another class *c1*.  
when we add another field *C2* is created.  
If we delete a property it goes back to a previous class.  

Be careful when modifying classes!!
It adds a lot of overhead, a lot of hidden classes

### Build caches
If you call a function with the same values for a few times it will cache the functions and
not run it, only returns the results

*code* -> 'compile' -> *binary* -> 'crankshaft' -> *hydrogen* -> 'crankshaft optimization' -> *hydrogen* -> 'crankshaft' -> lithium -> on stack replacement

on stack replacement, adds content to stack for use?

### Garbage collection
Mark and sweep

### Things that matter
1- Order of object property.
When we create a class with attributes we should order them in the same way, crankshaft will optimize it.
2- Dynamic properties.
Don't add properties to objects after we create them, it will create more hidden classes, use the constructor to define properties.
3- Methods
Methods that are called multiple times runs faster because of build cache
4- Arrays
It's better to use map than array (memory consumption)
5- Number
*V8* numbers and pointers use *32 bits* 

1 | | | | | ... pointer
0 | | | | | ... number

so, for small integers 31 bits are enough, if the number is bigger it creates a pointer to the next part (this is undesired).

### Libuv (event loop)
#### Thread per request
Typically Web servers use multiple threads, one for every request, from the request pool threads. Many times the stream is blocked, waiting for an io operation.  
*C10K* this means 10k connections, when 10k connections are reached the computer will
crash.

*V8* uses one core and a few streams for optimization, garbage collection etc.
#### Non blocking io (nodejs server)
* Event queue
* Event loop
* Thread pool

For non blocking cpu intensive tasks we can use *worker threads*

### Software versioning
1.2.3

1 -> major version (rewrite)
2 -> minor version (new functionality)
3 -> patch (fix issue, etc)

a -> alpha
b -> beta
rc -> release candidate

eg 1.0b1 (beta 1), 1.0b2, 1.0b3

other option 
0 -> alpha
1 -> beta
2 -> release candidate
3 -> public release

1.2.1.2 -> 1.2b2
1.2.3.5 -> 1.2.5

Follow these versioning!!!
