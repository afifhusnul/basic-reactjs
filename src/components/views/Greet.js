import React from 'react'

// function Greet() {
// 	return <h1>Hello Afif</h1>
// }
// 
// const Greet = (props) => {
// 	console.log(props)
// 	return (
// 		<div>
// 			<h1>Hello {props.name} a.k.a {props.heroName}</h1>
// 			{props.children}
// 		</div>				
// 	)
// }
// 
// -----------Destructring parameter
// 
//const Greet = ({name, heroName, children}) => {  //first method
const Greet = props => {  //first method
  const {name, heroName, children} = props
  return (
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
      {children}
    </div>

  )
}

export default Greet