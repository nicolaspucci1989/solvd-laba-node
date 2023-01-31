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

String.prototype.minus = function (str) {
  const reverse = s => s.split("").reverse().join("")

  const str1 = reverse(this)
  const str2 = reverse(str)

  let result = ""
  let carry = 0;

  for (let i = 0; i < str.length; i++) {
    let sub = ~~str1.charAt(i) - ~~str2.charAt(i) - carry
    if (sub < 0) {
      sub = sub + 10;
      carry = 1;
    } else
      carry = 0;
    result += sub + ''
  }

  for (let i = str.length; i < this.length; i++) {
    let sub = ~~str1.charAt(i) - carry
    if (sub < 0) {
      sub = sub + 10;
      carry = 1;
    } else
      carry = 0;
    result += sub + ''
  }
  return reverse(result)
}

String.prototype.divide = function (s) {
}

String.prototype.multiply = function (str) {
  let length1 = this.length;
  let length2 = str.length;
  if (length1 === 0 || length2 === 0)
    return "0"

  let result = new Array(length1 + length2).fill(0)

  let i_n1 = 0
  let i_n2 = 0

  let i
  for (i = length1 - 1; i > -1; i--) {
    let carry = 0
    let n1 = (this[i]).charCodeAt(0) - 48

    i_n2 = 0

    for (let j = length2 - 1; j > -1; j--) {
      let n2 = (str[j]).charCodeAt(0) - 48
      let sum = n1 * n2 + result[i_n1 + i_n2] + carry
      carry = Math.floor(sum / 10)
      result[i_n1 + i_n2] = sum % 10
      i_n2 += 1
    }

    if (carry > 0)
      result[i_n1 + i_n2] += carry

    i_n1 += 1
  }

  i = result.length - 1
  while (i >= 0 && result[i] === 0)
    i -= 1

  if (i === -1)
    return "0"

  let s = ""
  while (i >= 0) {
    s += String.fromCharCode(result[i] + 48)
    i -= 1
  }

  return s
}
// simple test
console.log('1'.plus('1'))
console.log('1'.minus('1'))
console.log('3453452'.minus('4534'))
console.log('222222222222222222222222222222'.multiply('1111'))
console.log('2'.divide('2'))
