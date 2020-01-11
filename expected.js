#!/usr/bin/env node
"use module"
"no test written yet hahaha nice"
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

export async function expected( jsFile){
	const
		// read main's text
		mainText= await fs.readFile( jsFile, "utf8"),
		// parse
		mainAst= acorn.parse( mainText, {
			allowHashBang: true,
			allowImportExportEverywhere: true,
			sourceType: "module"
		}),
		firstNode= pickLiteralValue( mainAst.body[ 0])
	if( !firstNode){
		process.exit( 1)
	}
	const
		hasUse= firstNode.startsWith( "use "),
		expected= !hasUse? firstNode: pickLiteralValue( mainAst.body[ 1])
	return expected
}
export {
	expected as default,
	expected as Expected
}

// ugg import-meta where are you
//if( typeof process!== "undefined"&& `file://${ process.argv[ 1]}`=== import.meta.url){
//	const e= expected( process.argv[ 2])
//	console.log( e)
//}
