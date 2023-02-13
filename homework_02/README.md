### Results

After **40** iterations, this table shows for which arrays **bubble sort** is faster than **quick sort**

| Array Type        | Array Length | Time (milliseconds)               |
|-------------------|--------------|-----------------------------------|
| 'Sorted'          | 2            | bubbleSort: 1500, quickSort: 1900 |
| 'Sorted'          | 4            | bubbleSort: 200, quickSort: 300   |
| 'Sorted'          | 6            | bubbleSort: 200, quickSort: 300   |
| 'Sorted'          | 7            | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 9            | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 11           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 14           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 15           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 16           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 17           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 18           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 19           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 20           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 21           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 22           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 23           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 24           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 25           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 28           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 29           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 31           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 33           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 34           | bubbleSort: 100, quickSort: 300   |
| 'Sorted'          | 35           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 36           | bubbleSort: 100, quickSort: 200   |
| 'Sorted'          | 40           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 2            | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 6            | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 8            | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 9            | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 10           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 15           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 19           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 20           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 23           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 28           | bubbleSort: 200, quickSort: 300   |
| 'Sorted Reversed' | 29           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 30           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 32           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 34           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 37           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 38           | bubbleSort: 100, quickSort: 200   |
| 'Sorted Reversed' | 39           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 2            | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 4            | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 5            | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 8            | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 10           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 13           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 16           | bubbleSort: 100, quickSort: 300   |
| 'Random'          | 20           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 21           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 23           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 25           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 30           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 31           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 33           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 36           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 37           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 40           | bubbleSort: 100, quickSort: 200   |
| 'Random'          | 41           | bubbleSort: 100, quickSort: 200   |

---

### O-limits

For the following Θ-difficulties, write strict and non-strict O-limits and, optionally, strict and non-strict Ω-limits (
provided that they exist).

1. Θ( 1 )
2. Θ( √n )
3. Θ( n )
4. Θ( n^2 )
5. Θ( n^3 )

Given the definitions:

1. Big-O: g(n) >= Θ(n), upper limit.
2. Little-O: g(n) > Θ(n), strict upper limit.
3. Big-Ω: g(n) <= Θ(n), lower limit.
4. Little-Ω: g(n) < Θ(n), strict lower limit.

For **Θ(1)**, the function f(n) = 1  
The strict and non-strict O-limits are **O(1)**.  
The strict and non-strict Ω-limits are **Ω(1)**.

For **Θ(√n)**, the function f(n) = √n,  
The strict O-limit is **c * √n** => **O(√n)**.   
The non-strict O-limit is **O(n)**, (√n <= n for all n).    
The strict Ω-limit is **Ω(√n)**.  
The non-strict Ω-limit is **Ω(1)**, (√n >= 1 for all n).

For **Θ(n)**, the function f(n) = n.   
The strict O-limit is **O(n)**.  
The non-strict O-limit is **O(n^2)**, (n <= n^2 for all n)   
The strict Ω-limit is **Ω(n)**.  
The non-strict Ω-limit is **Ω(1)** (n >= 1 for all n)

For **Θ(n^2)**, the function f(n) = n^2.    
The strict O-limit is **O(n^2)**.  
The non-strict O-limit is **O(n^3)** (n^2 <= n^3 for all n).  
The strict Ω-limit is **Ω(n^2)**.  
The non-strict Ω-limit is **Ω(n)**, (n^2 >= n for all n).

For **Θ(n^3)**, the function f(n) = n^3,   
The strict O-limit is **O(n^3)**.  
The non-strict O-limit **O(n^4)** (n^3 <= n^4 for all n).  
The strict Ω-limit is **Ω(n^3)**.  
The non-strict Ω-limit is **Ω(n^2)**. (n^3 >= n^ for all n).

# Fibonacci with map cache

| Weak Map      | before     | after      | Map           | before     | after      |
|---------------|------------|------------|---------------|------------|------------|
| rss           | 27.971.584 | 28.450.816 | rss           | 27.930.624 | 28.450.816 |
| heap total    | 5.287.936  | 5.820.416  | heap total    | 5.287.936  | 5.820.416  |
| heap used     | 4.510.072  | 5.084.680  | heap used     | 4.510.112  | 5.078.584  |
| external      | 332.356    | 344.346    | external      | 332.356    | 344.346    |
| array buffers | 11.218     | 11.218     | array buffers | 11.218     | 11.218     |
