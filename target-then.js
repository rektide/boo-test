#!/usr/bin/env node
export function then(){
	const delay= new Promise( function( resolve){
		setTimeout( function(){
			console.log("target-then setTimeout")
			resolve()
		}, 2000)
	})
	console.log("target-then then")
	return delay
}
console.log("target-then console")
