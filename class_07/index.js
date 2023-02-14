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
console.log(obj2.c === clone2.c)

clone2.c = {...obj2.c}
console.log(obj2.c === clone2.c)

// Serialization
const clone3 = JSON.parse(JSON.stringify(obj2))
console.log(obj2.c === clone3.c)

// Empty object
const empty = {}
console.log(JSON.stringify(empty) === '{}')

const objWithGetter = {
  get name() {
    return 'test'
  }
}

console.log(objWithGetter.name); // => 'test'
objWithGetter.name = 3
console.log(objWithGetter.name); // => 'test'

// Metainformation
const meta = {
  first: 'john',
  last: 'doe',
  get fullname() {
    return `${this.first} ${this.last}`
  },
  set name(val) {
    this.name = val
  }
}
console.log(Object.getOwnPropertyDescriptors(meta.first));
