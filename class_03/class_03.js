console.log(+'123') // 123
console.log('123'.toString()) // '123'
console.log('123'.valueOf()) // '123'

console.log([].toString()) // ''
console.log([].valueOf()) // []

console.log({}.toString()) // '[object Object]'
console.log({}.valueOf()) // {}

console.log(5 & 1) // 0101 & 0001 => 0001
console.log(5 | 1) // 0101 & 0001 => 0101
/* Javascript uses 32 bitwise operands.
* JavaScript stores numbers as 64 bits floating point numbers,
* but all bitwise operations are performed on 32 bits binary numbers.
* 00000000000000000000000000000101 (5)
* 11111111111111111111111111111010 (~5 = -6)
* */
console.log(~5)
console.log(5 << 1) // 0101 << 1 => 1010
console.log(5.12331239 & 1) // Only decimal part is used 0101 & 0001 => 0001
console.log(~~12.9999239840) // Round numbers FAST

console.log(0 && 12) // return 0, && operator check if value is null or undefined
console.log(0 || 12) // return 12, || converts values to boolean, 0 to boolean is false

console.log(BigInt(2)) // 2
console.log(2n) // 2
console.log(typeof 2n) // bigint
console.log(typeof BigInt(2)) // bigint
console.log(42n == 42) //true
console.log(42n === 42) // false
try {
 console.log(+42n) // error, cannot convert BigInt to Number
} catch (e) {
 console.log(e)
}
try {
 console.log(1 + 1n) // Cannot mix BigInt and number
} catch (e) {
 console.log(e)
}
function doSomething(a,b,c) {}
const doAnother = (a,b,c) => {}
console.log(doSomething.length) // 3
console.log(doAnother.length) // 3

function returnString() {return 'this is a retur value'}
console.log(returnString())
function returnVoid() {
 const val = 1 + 2
}
console.log(returnVoid()) // undefined

const car = {
 brand: 'Citroen',
 start: function () {
  return 'starting engine ' + this.brand
 },
 stop: () => {
  return 'stopping engine ' + this.brand
 }
}
console.log(car.start()) // starting engine Citroen
console.log(car.stop()) // stopping engine undefined
const a = (function test() {
 return 1
})()
console.log(a) // 1

console.log(hoistedFunction())// hoisted function
function hoistedFunction() {
 return 'regular functions are hoisted'
}

try {
 console.log(nonHoistedFunction()) // Reference Error
} catch (e) {
 console.log(e)
}
const nonHoistedFunction = () => 'non hoisted'

console.log(hoistedVar) // undefined

try {
 console.log(hoistConst) // Reference error
} catch (e) {
 console.log(e)
}

try {
 console.log(hoistLet) // Reference error
} catch (e) {
 console.log(e)
}

var hoistedVar = 'vars are partially hoisted'
const hoistConst = 'const are not hoisted'
let hoistLet = 'let are not hoisted'

const bark = dog => {
 const say = dog + ' barked!' // private method
 return say
}
console.log(bark('sparkie'))

const prepareBark = dog => {
 const say = dog + " barked"
 return () => say
}
const barkRoger = prepareBark('Roger')
console.log(barkRoger()) // Roger barked

// this is a pure function
function circleArea(radius) {
 return radius * radius * Math.PI
}
// non pure function
let counter  = (function () {
 let initValue = 0
 return function() {
  initValue++
  return initValue
 }
})()
console.log(counter()) // 1
console.log(counter()) // 2

let males = 0
let females = 0

// Idempotent but with side effect (non pure)
function isMale(user) {
 if (user.sex === 'man') {
  males += 1
  return true
 }
 females += 1
 return false
}
