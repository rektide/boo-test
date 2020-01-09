#!/usr/bin/env node
console.log("main importing")
import( "./target-normal.js")
	.then(()=> console.log("++main saw target-normal++"))
import( "./target-then.js")
	.then(()=> console.log("++main saw target-then++"))
console.log("main ran")
