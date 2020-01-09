#!/usr/bin/env node
import assert from "assert"
import { fork } from "child_process"

export async function test(){
	// run main
	const
		main= fork( "./main.js", { silent: true}),
		buf= []
	// record it's output
	for await( let b of main.stdout){
		buf.push( b)
	}
	// split output into lines
	const
		output= buf.join( ""),
		lines= output.split( "\n")

	// output
	//console.log(output)

	// check that we have seen all expected output
	const expected= [
		"main importing",
		"main ran",
		"target-then console",
		"target-then then",
		"target-then setTimeout",
		"++main saw target-then++",
		"target-normal console",
		"++main saw target-normal++",
	]
	for( const line of lines){
		if( line=== ""){
			continue // skip trailing line end
		}
		const i= expected.indexOf( line)
		assert.notEqual( i, -1, `output line was not expected: ${line}`)
		expected.splice( i, 1)
	}
	for( const line of expected){
		assert.fail( `expected line was not seen: ${line}`)
	}
}
test()
