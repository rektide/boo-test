#!/usr/bin/env node
export async function then( resolve){
	setTimeout( function(){
		console.log("target-then setTimeout")
		resolve()
	}, 2000)
	console.log("target-then then")
}
console.log("target-then console")
