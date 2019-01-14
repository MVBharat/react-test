import React, {Component} from 'react'
import classes from './Person.css';

class Person extends Component{
	
	constructor (props){
		super(props)
		console.log('[Person.js] inside constructor ', props)         
  	}
  
	componentWillMount(){
		console.log('[Person.js] inside componentWillMount()')
	}
	
	componentDidMount()
	{
		console.log('[Person.js] inside componentDidMount()') 
	}
	
	render(){
		console.log('[Person.js] inside render()')
		return(
			<div className={classes.Person} >
				<div onClick={this.props.click}> 
					<p > Hi I am {this.props.name} | My age is {this.props.age} </p>
					<p>  {this.props.children} </p>
				</div>
				<div>
					<input type= "text" onChange= {this.props.changed} value= {this.props.name} />
				</div>
			</div>	
		);
	}
}

export default Person;