### Results

After **40** iterations, this table shows for which arrays **bubble sort** is faster than **quick sort**

| Array type        | Array Length (max 102) | Time (milliseconds)             |
|-------------------|------------------------|---------------------------------|
| 'Sorted'          | 4                      | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 10                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 14                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 17                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 30                     | bubbleSort: 100, quickSort: 200 |
| 'Sorted'          | 32                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 34                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 39                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 40                     | bubbleSort: 100, quickSort: 200 |
| 'Sorted'          | 44                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 53                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 56                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 62                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 67                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 70                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 73                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 88                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 89                     | bubbleSort: 100, quickSort: 200 |
| 'Sorted'          | 96                     | bubbleSort: 100, quickSort: 200 |
| 'Sorted'          | 98                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted'          | 99                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 2                      | bubbleSort: 100, quickSort: 200 |
| 'Sorted Reversed' | 5                      | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 10                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 39                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 41                     | bubbleSort: 100, quickSort: 200 |
| 'Sorted Reversed' | 49                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 51                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 52                     | bubbleSort: 100, quickSort: 200 |
| 'Sorted Reversed' | 53                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 58                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 75                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 83                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 86                     | bubbleSort: 0, quickSort: 100   |
| 'Sorted Reversed' | 95                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 4                      | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 8                      | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 12                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 17                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 24                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 26                     | bubbleSort: 100, quickSort: 200 |
| 'Random'          | 40                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 48                     | bubbleSort: 0, quickSort: 200   |
| 'Random'          | 59                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 67                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 78                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 79                     | bubbleSort: 100, quickSort: 200 |
| 'Random'          | 80                     | bubbleSort: 0, quickSort: 200   |
| 'Random'          | 82                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 93                     | bubbleSort: 0, quickSort: 100   |
| 'Random'          | 95                     | bubbleSort: 0, quickSort: 100   |


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

# Fibonacci series with map/weak map cache

| Weak Map      | before     | after      | Map           | before     | after      |
|---------------|------------|------------|---------------|------------|------------|
| rss           | 27.971.584 | 28.450.816 | rss           | 27.930.624 | 28.450.816 |
| heap total    | 5.287.936  | 5.820.416  | heap total    | 5.287.936  | 5.820.416  |
| heap used     | 4.510.072  | 5.084.680  | heap used     | 4.510.112  | 5.078.584  |
| external      | 332.356    | same       | external      | 332.356    | same       |
| array buffers | 11.218     | same       | array buffers | 11.218     | same       |
