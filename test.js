#!/usr/bin/env node
"use module"
"this test is going to fail haha"
import assert from "assert"
import { fork } from "child_process"
import { promises as fs } from "fs"
import acorn from "acorn"

function pickLiteralValue( node){
	if( node.type!== "ExpressionStatement"){
		return
	}
	if( node.expression.type!== "Literal"){
		return
	}
	return node.expression.value
}

export async function test(js){
	const
		// run main, buf to collect stdout into
		main= fork( "./main.js", { silent: true}),
		buf= [],
		// read main's text
		mainRead= fs.readFile( js, "utf8")
	// record main run's output
	for await( let b of main.stdout){
		buf.push( b)
	}

	// parse main
	const
		mainAst= acorn.parse( await mainRead, {
			allowHashBang: true,
			sourceType: "module"
		}),
		firstNode= pickLiteralValue( mainAst.body[ 0])
	if( !firstNode){
		process.exit( 1)
	}
	const
		hasUse= firstNode.startsWith( "use "),
		expected= !hasUse? firstNode: pickLiteralValue( mainAst.body[ 1])
	console.log(hasUse, expected )
}
test(process.argv[ 2])
