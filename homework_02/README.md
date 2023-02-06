### Results
After **10** iterations, this table shows for which arrays **bubble sort** is faster than **quick sort**

| Array Type      | Array Length | time (milliseconds)                           |
|:----------------|:------------:|:----------------------------------------------|
 | Sorted          |      11      | Bubble Sort: **200**, Quick Sort:   **1.500** |
 | Sorted Reversed |      7       | Bubble Sort: **300**, Quick Sort:   **1.100** |
 | Random          |      3       | Bubble Sort: **300**, Quick Sort: **354.500** |
 | Random          |      11      | Bubble Sort: **200**, Quick Sort:     **400** |
---
### O-limits  
For the following Θ-difficulties, write strict and non-strict O-limits and, optionally, strict and non-strict Ω-limits (provided that they exist).
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
