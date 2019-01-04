import React from 'react'
import classes from './Person.css';

const person = (props) => 
{
	return(
		<div className={classes.Person} >
			<div onClick={props.click}> 
				<p > Hi I am {props.name} | My age is {props.age} </p>
				<p>  {props.children} </p>
			</div>
			<input type= "text" onChange= {props.changed} value= {props.name} />
		</div>
	);
}

export default person;