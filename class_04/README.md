## Functional Programming
### Lazy functions
Optimize results with lazy functions
```javascript
// unoptimized function check
const data = null
function fun(date) {
    if (date) return date
    if (!date) {
        date = Date.now()
        return date
    }
}

// optimized using a lazy function  
cosnt func = function () {
    cosnt d = new Date()
    const getDate = function () {
        return d
    }
    return getDate()
}
```

### Currying

hw write a function sum that will take one parameter, can be chained to return the sum
sum(1)(4)(7)(5)

implement a debounce function
```javascript
const debouncedFn = function debounce(fn, timeout) {}

const fn = console.log('here')
const dfc = debounce(fn, 10000) // wait 10 seconds
/* dfc() ... 10 seconds ... dfc() */
```

Transform a function with a few arguments to a sequence of functios with one argument
```javascript
// Need variable arguments, use currying
function add (a,b,c) {}

function curry(fn) {
    if (fn.length <= 1) return fn
    const generator = (...args) => {
        if (fn.length === args.length) return (fn(...args))
        return (...args2) => generator(...args, ...args2)
    }
}
```

### Function composition
```javascript
let doUpperCase = () => x.toUpperCase()
let addBrackets = x => '(' + x + ')'

// using simple composition
const res = addBrackets(toUpperCase(str))

// using a compose function, but with fixed arguments
let compose = function (f, g) {
    return (x) => {
        return f(g(x))
    }
}
const transform = compose(addBrackets, doUppercase)
const res = transform(str)

// with a variable number of arguments
function compose() {
    cosnt args = arguments
    let start = args.length - 1
    return function() {
        let i = start
        let result = args[start].apply(...arguments)
        while(i--) 
            result = args[i](...result)

        return result
    }
}
```

## Arrays
```javascript
const ar = []
const ar = [1,2,3]
const ar = Array.of(1,2,3)
const ar = Array(6).fill(1)

const first = ar[0]
```
Dont use constructors to create an Array `new Array()`
this is slower then creating it with a literal.

Prefere built in function insted of manual cycles, engine optimizationss
```javascript
ar.every(x => x %   2 === 0) // for every element in the array, check if it's even
!ar.some(x => x % 2 === 1) // check if array is even
ar.map(x => x * 2) // return a new array with every element multiplyed by 2
// map can be asynchronous if theere are no additional parameters
```

### Reduce
```javascript
// count occurences of each number
cosnt arr = [1,2,5,1,3,2,5,6,7,3,1,5,2,6]
arr.reduce((acc, value, ind, array) => {
    if (acc[value]) {
        return {
            ...acc,
            [value]: acc[value] + 1
        }
    }
    return {...acc, [value]: 1<}
}, {})
```

## Cycles
`for key in values`
`for value of keys`

```javascript
a.foreach(() => {
    // break; exit loop
    // continue; proceed to next iteration
})
```

### Check performace of loop
use `console.time`
fast iteration: start from the last element of the array
and go backwards.
Why is this fast?
In assembler there is a special operation that decrements and check to zero,
but for adding and checking assembler must perform two operations  
see (question in stack overflow)[https://stackoverflow.com/questions/1340589/are-loops-really-faster-in-reverse]
#### Consideratins
for () can be breaked from, forEch not

### Iterate using iterator
```javascript
const a = [1,2,3]
let it = a[Symbol.iterator]()
it.next().value // 1
it.next().value // 2
it.next().value // 3

let it1 = entreies.values()
it1.next().value // [key, value] [0, 1]
it1.next().value // [0, 3]
it1.next().value // [0, 2]
```
can be used to emulate yiedl return

### Non pure array methods
```javascript
arr.push(value)
arr.unshift(4,6) // add elements to start of array
arr.pop() // return last element and modify array by deleting the last parameter
arr.shift() // return first element and modify arary by deleting the first parameter
arr.splice(startIndex, numberOfElementsToDelete)
arr.splice(3, 2) // delete two elements starting from index 3
arr.slice() // pure version of splice
arr.concat() // merge two arrays, use spread operator instead (es6)
```

### Search functions for array
```javascript
arr.indexOf(element) // fastest search function, if no element found it will return -1, be carefulle -1 is convertable to true
arr.lastIndexOf(element) // return last index of array, from end to start   
arr.find(findCondition)
arr.findIndex(findCondition)
arr.includes(element) // faster than any find function, check if value exists, very usefull function
// usefull to check custom claims
```