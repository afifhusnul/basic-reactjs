import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome visitor'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank You bro'    
    })    
  }

	render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Button onClick={() => this.changeMessage()}>Subscribe</Button>
      </div>      
    )
  }
}

export default Message