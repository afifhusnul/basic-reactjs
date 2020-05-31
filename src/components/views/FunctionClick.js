import React from 'react'
import {Button} from 'react-bootstrap'


function FunctionClick() {

	function clickHandler() {
		console.log('Button Clicked')
	}
	return (
		<div>
			<Button onClick={clickHandler}>Click</Button>
		</div>
	)
}

export default FunctionClick