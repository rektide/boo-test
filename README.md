# module-then

> test of esm module's 'then' export

# usage

run [`./test.js`](./test.js), which will run [`./main.js`](./main.js) and check that the console output is as expected.

# background: the 'then' export

did you know that esm have a special `then` export that gets run on load? it's true.

in [`target-then.js`](./target-then.js) we see:

```
export async function then(){
	/* [async code here] */
}
console.log("target-then console")
```

this `then` export should have two effects:

1. it will get run when the module is loaded
2. the import will be delayed until then completes

# node status

at present there seems to be an issue with `import()` syntax: the `import()` promise never resolves, even after the `then` export resolves.
