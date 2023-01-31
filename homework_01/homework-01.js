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

String.prototype.multiply = function (str) {
  let len1 = this.length;
  let len2 = str.length;
  if (len1 === 0 || len2 === 0)
    return "0"

  // will keep the result number in vector
  // in reverse order
  let result = new Array(len1 + len2).fill(0)

  // Below two indexes are used to
  // find positions in result.
  let i_n1 = 0
  let i_n2 = 0

  // Go from right to left in this
  let i
  for (i = len1 - 1; i > -1 ; i --)
  {
    let carry = 0
    let n1 = (this[i]).charCodeAt(0) - 48

    // To shift position to left after every
    // multiplication of a digit in str
    i_n2 = 0

    // Go from right to left in str
    for (let j = len2 - 1; j > -1; j--)
    {
      // Take current digit of second number
      let n2 = (str[j]).charCodeAt(0) - 48

      // Multiply with current digit of first number
      // and add result to previously stored result
      // at current position.
      let sum = n1 * n2 + result[i_n1 + i_n2] + carry

      // Carry for next iteration
      carry = Math.floor(sum / 10)

      // Store result
      result[i_n1 + i_n2] = sum % 10

      i_n2 += 1
    }

    // store carry in next cell
    if (carry > 0)
      result[i_n1 + i_n2] += carry

    // To shift position to left after every
    // multiplication of a digit in this.
    i_n1 += 1

    // print(result)
  }
  // ignore '0's from the right
  i = result.length - 1
  while (i >= 0 && result[i] === 0)
    i -= 1

  // If all were '0's - means either both or
  // one of this or str were '0'
  if (i === -1)
    return "0"

  // generate the result string
  let s = ""
  while (i >= 0)
  {
    s += String.fromCharCode(result[i] + 48)
    i -= 1
  }

  return s
}
// simple test
console.log('1'.plus('1'))
console.log('1'.minus('1'))
console.log('100'.minus(''))
console.log('222222222222222222222222222222'.multiply('1111'))
console.log('2'.divide('2'))
