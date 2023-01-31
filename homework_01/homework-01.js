// setup prototype
String.prototype.plus = function (str) {
  let ind1 = this.length - 1
  let ind2 = str.length - 1
  let res = ""
  let carry = 0
  while (ind1 >= 0 || ind2 >= 0 || carry) {
    const val1 = this[ind1] || 0
    const val2 = str[ind2] || 0
    const sum = +val1 + +val2 + carry
    carry = sum > 9 ? 1 : 0
    res = sum % 10 + res
    ind1--
    ind2--
  }
  return res
}

String.prototype.minus = function (s) {
  return (~~this - ~~s).toString()
}

String.prototype.divide = function (s) {
  return (~~this / ~~s).toString()
}

String.prototype.multiply = function (s) {
  return (~~this * ~~s).toString()
}


// simple test
console.log('1'.plus('1'))
console.log('1'.minus('1'))
console.log('1'.minus('2'))
console.log('2'.multiply('2'))
console.log('2'.divide('2'))
