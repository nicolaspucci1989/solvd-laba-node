console.log(true + false)
console.log(12 / "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log([1] > null)
console.log("foo" + + "bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")
console.log(['x'] == 'x')
console.log([] + null + 1)
console.log([1,2,3] == [1,2,3])
console.log({}+[]+{}+[1])
console.log(!+[]+[]+![])
console.log(new Date(0) - 0)
console.log(new Date(0) + 0)

const o = {
  a: 1,
  b: 2,
  fun() {
    return super.fun()
  },
  __proto__: {
    b: 3,
    c: 4,
    fun() {
      return 'have fun'
    }
  }
}

console.log(o.a)
console.log(o.b)
console.log(o.c)
console.log(o.fun())

const boxProto = {
  getValue() {
    return this.value
  }
}
const boxes = [
  { value: 1, __proto__: boxProto},
  { value: 2, __proto__: boxProto},
  { value: 3, __proto__: boxProto},
];

boxes.forEach(b => {
  console.log(b.getValue())
})

function Box(value) {
  this.value = value
}

Box.prototype.getValue = function () {
  return this.value
}

const newBoxes = [
  new Box(1),
  new Box(2),
  new Box(3),
]

newBoxes.forEach(b => {
  console.log(b.getValue())
})

console.log(
  Object.getPrototypeOf(new Box()) ===
  Box.prototype.constructor.prototype
)
