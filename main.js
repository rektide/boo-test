#!/usr/bin/env node
console.log("main importing")
import( "./target-normal.js")
	.then(()=> console.log("++imported target-normal++"))
import( "./target-then.js")
	.then(()=> console.log("++imported target-then++"))
console.log("main ran")
