#!/usr/bin/env node
import assert from "assert"
import { fork } from "child_process"
import { promises as fs } from "fs"
import { parse } from "acorn"

export async function test(){
	const
		// run main, buf to collect stdout into
		main= fork( "./main.js", { silent: true}),
		buf= [],
		// read main's text
		mainSource= fs.readFile( js, "utf8")
	// record main run's output
	for await( let b of main.stdout){
		buf.push( b)
	}

	// parse main
	const mainAst= parse( mainSource)

}
test()
