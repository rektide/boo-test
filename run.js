#!/usr/bin/env node
"use module"
"no test written here yet"
import { fork } from "child_process"

export async function run( jsFile){
	const
		// run main, buf to collect stdout into
		main= fork( jsFile, { silent: true}),
		buf= []
	// record main run's output
	for await( let b of main.stdout){
		buf.push( b)
	}
	return buf.join("")
}
export {
	run as default,
	run as Run
}

if( typeof process!== "undefined"&& `file://${ process.argv[ 1]}`=== import.meta.url){
	const e= run( process.argv[ 2])
	e.then( console.log)
}
