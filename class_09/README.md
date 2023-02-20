### Classes

Old class syntax
```javascript
function SomeClass() {} // constructor function
const instance = new SomeClass()

// Add methods using prototype
SomeClass.prototype.sayHi = function () {
    console.log('Hi!!')
}
```
Method lookup works using the prototype chain
```javascript
class SomeClass {
    constructor() {}
    
    sayHi() {
        console.log('Hi')
    }
}
```
There are no private fields in Javascript, use convention `_field` or `#field`
Always call `super()` in constructor at the beginning of the method. There is no constructor override

### SOLID principles
See [clean code javascript](https://github.com/ryanmcdermott/clean-code-javascript#solid)

### Data structures
* Stack
* Queue

#### Stack
`top` `push` `pop` `isEmtpy`

#### Queue
`enqueue` `dequeue` `isEmtpy` `top`
