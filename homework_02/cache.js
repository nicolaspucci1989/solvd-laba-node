// run with node --expose-gc
const { getFiboCache, getFiboCacheWeak } = require("./index");

gc()
console.log('Baseline')
console.table( process.memoryUsage());
let fibo = getFiboCache()
fibo(8)

console.log('Fibo with map')
console.table( process.memoryUsage());

fibo = null
gc() //clear
console.log('Baseline')
console.table( process.memoryUsage());

fibo = getFiboCacheWeak()
fibo(8)
console.log('Fibo with weak map')
console.table( process.memoryUsage());
