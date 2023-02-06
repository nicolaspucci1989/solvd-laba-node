## Algorithms and metrics
### Metrics
See [cheatsheet](https://www.bigocheatsheet.com/)
See [notation](https://cathyatseneca.gitbooks.io/data-structures-and-algorithms/content/analysis/notations.html)
See [video](https://www.youtube.com/watch?v=HcDV5MGGrRE)  
Big-O describes the upper bound of the algorithm.
Big-O is greater or equal. **>=**
Little-O describes the upper bound that can not be tight.
Little-O is greater. **>**
Theta describes the average case.  
Omega describes the lower bound, it's the best case complexity.      

### Find biggest element in array
```javascript
let max = arr[0] // 2 instructions
for (let i = 1; i<n; i++) { // assing i and compare before cycle 2 instructions
    // increment and compare in every cycle 2n instructions
    if (arr[i] > max) { // 2n instructions
        max = a[i] // 2n instructions
    }
}
```
fundamentals instructions present in this code:
`set variable`  
`find concrete element in array`  
`in the cycle for, compare 2 values`
`increment index every time in the cycle`
Best case**f(n) = 2n + 4**
Worst case **f(n) = 4 + 2n + 4n = 4 + 6n
We can discard the 4 since 6n grows fast so **f(n) = 6n**
We discard the constant multiplying the variable so (it's linear anyway) **f(n) = n**
O(n)

### Selection sort
|5|7|2|4|8|7|1
find the min value, then swap
```javascript
for (let i = 0; i < arr.length -1; i++) {
    let minindex = i
    for (let j = minindex; j < arr.length - 1; j++) {
        if (a[i] < a[minindex]) {
            minindex = j
        }
    }
    swap(a[i], a[minindex])
}
```
if Theta of n2

### Bubble sort
Is good on small amount of elements
Generally around `n <= 10` depending on the computer

### Quick sort
Complexity of **O(nLogn)**
Worst case complexity if **O(n^2)**

### Sort by count
Complexity O(n + k), k is the length of the array
If k is large this algorithm is memory intensive

### Monte Carlo Sort
Check if array is sorted.  
If not swap two elements randomly.  
Check again if array is sorted.  
If not swap again and repeat...

Complexity is O(N)

# Homework
1- Sorted
2- Sorted Backwards
3- Random Values (use `a.sort(Math.round() - 0.5)`)

