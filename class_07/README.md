# Objects
### Cloning
#### With spread operator
```javascript
// shallow clone
const obj = {a: 'a', b: 'b'}
const clone = {...obj}

const obj2 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd'
  }
}

// this will not clone object in c
const clone2 = {...obj2}
obj2.c === clone2.c // => true
```
#### Serialization With JSON class
```javascript
const clone3 = JSON.parse(JSON.stringify(obj2))
console.log(obj2.c === clone3.c)
```

#### Check if object is empty
```javascript
JSON.stringify(obj) === '{}' // => true
```

### Properties
#### Getters and Setters
```javascript
const obj = {
  get name() {
    return 'test'
  }
}
console.log(obj.name); // => 'test'
obj.name = 3
console.log(obj.name); // => 'test'
```
#### Encapsulation by agreement
```javascript
const obj = {
  _name: 'test', 
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  }
}
```
```javascript
const obj = {
  _id: 0,
  get id() {
    return this._id.toString(2)
  },
  set id(value) {
    this._id = value
  } 
}
```
### Properties meta-information
* [[Value]]
* [[Get]]
* [[Set]]
* [[Writable]]
* [[Enumerable]]
* [[Configurable]]
These can be viewed with `Object.getOwnPropertyDescriptor`
#### [[Value]]
The value of the property
#### [[Writable]]
If can be modified, doesn't throw an exception if you try to modify it.  
#### [[Enumerable]]
If can be cycled.  
#### [[Configurable]]
If it's false you can not delete the property, change the getter and setter,
you can't change [[Configurable]] and [[Enumerable]]
