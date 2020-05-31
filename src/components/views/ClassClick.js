import React from 'react'

export class ClassClick extends React.Component {

	clickHandler() {
		console.log('Clicked Me')
	}
	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>Click me</button>
			</div>
			)
	}
}

export default ClassClick