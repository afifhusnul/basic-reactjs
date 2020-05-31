import React from 'react'
import {Button} from 'react-bootstrap'

export default function ChildComponent(props) {
  return (
    <div>
      {/*<Button onClick={props.greetHandler}>Greet Parent</Button>*/}
      
      <Button onClick={() => props.greetHandler('Child')}>Greet Parent</Button>
    </div>
  )
}