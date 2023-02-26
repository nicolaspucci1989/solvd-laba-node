### Linked list
Can be one way (one pointer) or two ways (two pointers)
with linked list it's easier to insert elements, but more difficult to traverse the whole linked list

#### Loops in linked list
Store top element and count number, when traversing check if current count is bigger than counter
A better approach is the Floyd algorithm:
Create two pointers fast (two steps) and slow (one step), if they meet there is a loop

#### Graph
Has **vertices** and **edges**. Can be oriented or not.
Depth first search and Breadth first search. use stack and set for these algorithms.
##### BFS
Use stack

#### Trees
They have a root and nodes, parent nodes (have link to other nodes), and child nodes, and leaves (child that are not parents)
and siblings (nodes that have the same parent)
##### Binary search tree
Can be balanced (max depth - min depth <= 2) or non balanced
##### Black red tree
i.e. how databases make indexes, (max depth / min depth) <= 2, this gives us O(logn)

##### 2-3 tree
nodes can have 2 values and can have 3 children
