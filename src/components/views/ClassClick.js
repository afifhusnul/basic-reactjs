import React from 'react'
import {Button} from 'react-bootstrap'

export class ClassClick extends React.Component {

	clickHandler() {
		console.log('Clicked Me')
	}
	render() {
		return (
			<div>
				<Button onClick={this.clickHandler}>Click me</Button>
			</div>
			)
	}
}

export default ClassClick