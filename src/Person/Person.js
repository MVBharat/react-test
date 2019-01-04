import React from 'react'
import './Person.css';
import Radium from 'radium';

const person = (props) => 
{
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}
	return(
		<div className="Person" style={style}>
			<div>
				<p> Hi I am {props.name} | My age is {props.age} <a href=""><span  onClick={props.click} > X</span> </a></p>
				<p>  {props.children} </p>
			</div>
			<input type= "text" onChange= {props.changed} value= {props.name} />
		</div>
	);
}

export default Radium(person);