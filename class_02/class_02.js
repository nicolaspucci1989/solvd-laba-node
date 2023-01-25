// Data Types
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof false) // boolean
console.log(typeof true) // boolean
console.log(typeof 1773) // boolean
console.log(typeof 'string') // string
console.log(typeof {}) // object
console.log(typeof Symbol('symbol')) // symbol
console.log(typeof BigInt(1337)) // bigin

// Numbers
console.log(typeof NaN) // number
console.log(NaN === NaN) // false
console.log(Number.isNaN(2/'mike')) // true
console.log(Number.isNaN('test')) // false

// Function arguments length
const funNoLength = function () {}
const funLength = function (a, b, c) {}
console.log(funNoLength.length) // 0
console.log(funLength.length) // 3

// String conversion
console.log(String(null)) // 'null'
console.log(String(undefined)) // 'undefined'
console.log(String(true)) // 'true'
console.log(String(false)) // 'false'
console.log(String(1337)) // '1337'
console.log(String({})) // '[object Object]'
console.log(String([])) // ''
console.log(String([1,2,3])) // '1,2,3'

// Number conversion
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number({})) // NaN
console.log(Number([])) // 0
console.log(Number([1337])) // 1337
console.log(Number([1,2])) // NaN
console.log(Number('123')) // 123
console.log(Number('test')) // NaN

// Boolean conversion
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean('')) // false
console.log(Boolean(1)) // true
console.log(Boolean(-1)) // true
console.log(Boolean([])) // true
console.log(Boolean(() => {})) // true
console.log(Boolean('test')) // true
console.log(Boolean('0')) // true
