// setup prototype
String.prototype.plus = function (s) {
  return (~~this + ~~s).toString()
}

String.prototype.minus = function (s) {
  return  (~~this - ~~s).toString()
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
