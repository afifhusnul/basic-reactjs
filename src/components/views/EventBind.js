import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // eventbind method 3
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  //   console.log(this)
  // }
  // 
  // Class property --> eventbind method 4
  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>Click Me </button> ----Eventbind method 1*/}
        {/*<button onClick={() =>this.clickHandler()}>Click Me </button> --- eventbind method 2*/}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default EventBind