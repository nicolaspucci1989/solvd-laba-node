# Class 02

### NPM
* npm can fetch package from a local npm (private for company-enterprise)  
* or go directly to npm.com  

`npm ls` list installed packages in project.  
`npm prune` deletes installed but unused models automatically.  
`npm pack` packages a project to a tgz file. This model can be installed with `npm install package.tgz`.  
`npm run env` shows all parameters that will be passed to the project.  
`npm init` initializes the project with a `package.json` file. Can use `npm init --yes`
`npm audit` shows information, is more about versioning.

### Require
* `require` is a special function to import a module into project, is more flexible, can be use anywhere, is more dynamic.
* can also use `import`, only in start of file
===
```javascript
const lib = require('lib')
```
This will import lib in the constant lib.  
* `require` can recive more arguments.  
```javascript
const http = require('http')
```
#### Lookup order
* will search first in global modules.  
* then will look in node modules folder.  
Eg.
`/var/www/demo`.  
1- `/var/www/demo/node_modules/`.  
2- `/var/www/node_modules`.  
3- `/var/node_module`.  
4- `/node_modules`.

#### Extension
`require('./init.js')` if there is init.js it will import it,
if not check if there's init.json, if not check if exists init.node,
if not it will error.

if `package.json` check main field, import that value.
if there's no `package.json` import index.json


### Data types
* null -> typeof -> undefined
* undefined -> typeof -> object
* boolean -> typeof -> boolean
* number -> typeof -> number
* string -> typeof -> string
* object -> typeof -> function
* symbol -> typeof -> symbol
* bigint -> typeof -> bigint
* *Function* is an object but typeof will return Function  

*64 bits* for number storage, max value 2^64, max number value is 10^15
`Cientific` 2.9e8 = 2.9*10^8
`Hex` numbers 0x21 = 33

*Special numbers* `infinity` `-infinity` `NaN`.
`infinity` is a javascript hack for dividing by zero?

`typeof NaN` = number
`NaN === NaN` false
`Number.isNaN(2/"mike")` = true (conversion of types)
`Number.isNaN("test")` = false

### String
escape characters with "\" `"\" something\"""`
Comparison
"Apple" > "Orange" = true (don't do this)
### Typeof
Check type of variable
`typeof null` returns `object`

### Instanceof

### Functions
A possible approach for comparing functions (be careful)
```javascript
const x = function() {}
const y = function(a,b,c) {}
x.length = 0
y.length = 3
```

### Simple and Complex values
Simple
* NaN
* number
* string
* boolean
* symbol
* bigint

Complex
* Array
* Object
* Function

### Mutable vs Immutable
Pass by value vs pass by reference
```javascript
// Numbers are immutable
let a = 1
let b = 2
console.log(a) // 1
console.log(b) // 2

// Arrays are mutable
let x = [1,2,3,4]
let y = x
y.push(x)
console.log(x) // [1,2,3,4,4]

// String are immutable
let s = "hello"
s[2] = "A"
console.log(s) // hello
// But have mutable operations ?
console.log(s.toUppercase())
```

### Explicit and Non-explicit conversion
`String(123)` explicit
`123 + " "` non-explicit 

`null` => "null"
`undefined` => "undefined"
`true` => "true"
`false` => "false"
`1` => "1"
`10000000000 * 200000` => "2e+15"
`{}` => "[object Object]"
`[]` => ""
`[1,2,3]` => "[object Array]"  or "[1,2,3]"

### Number
`null` => 0 *
`undefined` => NaN *
`true` => 1
`false` => 0
`{}` => NaN
`[]` => 0 *
`[1,2]` => NaN *
`"123"` => 123
`"test"` => NaN

### Boolean
`null` => false
`undefined` => false
`NaN` => false
`0` => false
`""` => false
`1` => true
`-1` => true
`[]` => true
`() => {}` => true
`"test"` => true
`"0"` => true

#### valueOf
these conversions use the valueOf
```javascript
let x =  {}
x.valueOf = () => 22
Number(x) // 22

let y = []
y.toString = () => "test"
String(y) // test
```

Write your own functions to work with the `bigint` data type
like `plus` `minu` `divide` and `multiply`
eg `string.plus(anotherString) => string`
```javascript
"123".plus("1") // "124"
```
