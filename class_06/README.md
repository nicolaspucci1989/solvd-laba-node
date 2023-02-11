### Errors
#### Handle errors
Use try catch  
```javascript
try {
  try {
  } catch (e) {
  }
} catch (e) { // this will not catch unless inner catch trhows another error
}
```
### When does javascript add semicolon automatically
1. Breaking rule
2. If a string ends with a '}'
3. End of the file
4. return
5. break
6. throw
7. continue  

Possible Errors
if we need a semicolon, but the styleguide doesn't allow it
we can use semicolon at the start of the instruction.
```javascript
const a = 1
const b = 2
const c = a + b // here we need a semicolon
/*
* this is interpreted as a + b(a+b).toString() 
* */
(a + b).toString()

return // this return undefined if we dont use ;
{
  key: value
}
1 + 1
-1 + 1 == 0 ? alert(0) : alert(1)
```

### Strings   
`` => takes more time to process because of string interpolation  
```javascript
const s = helper `text ${value} 2`
function helper(strs, ...keys) {
  return [...keys, ...strs].join('.')
}
```
### Strict mode
`"use strict"` at the beginning of the file or function  
```javascript
'use strict'
variable = "key" // throws error

undefined = 1 // throws error

const car = {}
Object.defineProperty(car, 'color', {
  value: 'blue',
  writable: false,
})
car.color = 'yellow' // throws error

delete Object.property // throws error

function(a, a, b) { // throws error
  console.log(a, b)
}

console.log(010) // usually interpreted as base 8 value, throws error in strict mode
// in strict mode you should write 0o10
```

### Objects and garbage collection
JS will delete linkless variables
```javascript
let john = {name: 'john'}
john = null // now object has no link
// next cycle garbage collector will delete linkless object
```
Javascript marks objects in cycles, this is called generations  
Old variables are generation 1  
If they are not used in the next iteration the generation is incremented by 1  
New and used values will be marked as first generation  
If generation is high enough they will be removed from memory  

### Map and Set Objects
Store by key value
```javascript
let map = new Map()
map.set('1', 'value')

let set = new Set()
set.add(5).add(3).add(5)
```
You can use `has` in set, which is faster than in array
```javascript
has(value): boolean
```
#### Weak Map and Weak Set
Useful for tokens or cash  
```javascript
let john = {name: 'john'}
let map = new Map()
map.set(john, '...')
john = null
```

