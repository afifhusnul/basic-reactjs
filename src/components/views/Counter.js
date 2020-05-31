import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  AddCount() {
    //this.state.count = this.state.count + 1
    // this.setState({
    //   count: this.state.count +1
    // }, () => {console.log('Callback value : ', this.state.count)})
    // 
    this.setState(prevState =>({
      count: prevState.count + 1
    }), () => {console.log('Callback value : ', this.state.count)})
    //console.log(this.state.count)
  }

  addCountFive() {
    this.AddCount()
    this.AddCount()
    this.AddCount()
    this.AddCount()
    this.AddCount()
  }

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>        
        <button onClick={() => this.addCountFive()}>Add Count</button>
			</div>
		)
	}
}

export default Counter