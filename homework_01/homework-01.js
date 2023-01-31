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

  result = reverse(result)
  while (result.length > 1 && result[0] === '0') {
    result = result.substring(1)
  }

  return result
}

String.prototype.divide = function (str) {

  const greaterOrEqual = (str1, str2) => {
    if (str1.length > str2.length) return true
    if (str1.length < str2.length) return false

    for (let i = 0; i < str1.length; i++) {
      const str1Char = str1.charAt(i)
      const str2Char = str2.charAt(i)

      if (~~str1Char > ~~str2Char) return true
      if (~~str1Char < ~~str2Char) return false
    }

    return true
  }
  // return if str1 is bigger than str2
  let counter = 0

  let res = this.valueOf()

  while (greaterOrEqual(res, str)) {
    res = res.minus(str)
    counter++
  }

  return counter
}

String.prototype.multiply = function multiply(str) {
  let s1 = this.split("")
  let s2 = str.split("")
  let result = ""

  s1.reverse()
  s2.reverse()

  let m = new Array(s1.length + s2.length).fill(0)

  let i, j
  for (i = 0; i < s1.length; i++) {
    for (j = 0; j < s2.length; j++) {
      m[i + j] = m[i + j]
        + (parseInt(s1[i]) * (parseInt(s2[j])))
    }
  }


  for (i = 0; i < m.length; i++) {
    let digit = m[i] % 10
    let carry = Math.floor(m[i] / 10)
    if (i + 1 < m.length) {
      m[i + 1] = m[i + 1] + carry
    }
    result = digit.toString() + result
  }

  while (result.length > 1 && result[0] === '0') {
    result = result.substring(1)
  }

  return result
}
