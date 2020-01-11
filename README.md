# boo-test

> boo testing framework ported to js


# usage

for a simple sample file [`./.test/simple.js`](./.test/simple.js), containing

```
#!/usr/bin/env node
"use module" // an initial directive comments will be ignored
"4" // this first comment is the expected output
console.log(2+2) // this produces real output
```

we can run

```
boo-test file.js
```

which will:

* run the `simple.js` file as a program
* extract the expected output 
* run `diff` on these real & expected outputs

if successful, it means the output & expected output match.
if unsuccessful, the diff is printed to screen & boo-test returns false.
