#!/usr/bin/env node
console.log("static-import importing")
import {} from "./target-normal.js"
import {} from "./target-then.js"
console.log("static-import ran")
