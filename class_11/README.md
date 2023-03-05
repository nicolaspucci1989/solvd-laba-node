### Prefix tree


### Hash Tables

### Hash functions
Rules (desired properties)
* Deterministic
* Fast
* Can not derive key from result
* results should be unique to key (low collition)
* Similar key give very different result
#### How to avoid colitions
Use salt as parameter

Md5 it'll be hacked, but it's fast, used in legacy proyects.


#### Regex (REad eloquent javascript) (00:29)
Use regex constructor.  
All regex have method test.
```javascript
/[0-9]/ // check if has a number from 0 to 9
/\d/ // digital
/\w/ // word
/\s/ // space symbol
/./ // every symbol but enter
/[^]/ // every symbol
/[^01]/ // every symbol but 0 or 1, ^ works as not operator
```
