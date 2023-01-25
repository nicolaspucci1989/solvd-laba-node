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

console.log(String(null)) // 'null'
console.log(String(undefined)) // 'undefined'
console.log(String(true)) // 'true'
console.log(String(false)) // 'false'
console.log(String(1337)) // '1337'
console.log(String({})) // '[object Object]'
console.log(String([])) // ''
console.log(String([1,2,3])) // '1,2,3'
