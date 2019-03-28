import React from 'react'
import MathFuncs from './math.js'
import './mathComp.css'


class MathComp extends React.Component{
	constructor(){
		super()
		this.result = 'Result'
		this.state = { 
			result: this.result,
			input1: '',
		  input2: ''
		}
	}

  // inputChange1 = (event) => {
  // 	this.setState({
  // 		input1: event.target.value
  // 	})
  // }
  
  // inputChange2 = (event) => {
  // 	this.setState({
  // 		input2: event.target.value
  // 	})
  // }

// 

//event listener function - captures the value entered in the input feilds

   inputChange = (event) => {
   	const {name, value} = event.target // ensure that, name of input feild === name of state, in order to identify each seperate input field
  	this.setState({
  		[name]: value
  	})
  }

//helper function to capture the result 

  stateChange = (result) => {
  	return(
  		this.setState({
				result: result,
				input1: '',
				input2: '',
		})
  		)
  }

	render(){

//define the current numbers in input fields to use in functions

	const input1 = Number(this.state.input1)
	const input2 = Number(this.state.input2)

//run click functions to perfom the math

  this.addClick = (event) =>{
    let result = MathFuncs.sum(input1, input2)
    this.stateChange(result)
  }
  this.subClick = (event) =>{
    let result = MathFuncs.subtract(input1, input2)
    this.stateChange(result)
  }
  this.multiplyClick = (event) =>{
    let result = MathFuncs.multiply(input1, input2)
    this.stateChange(result)
  }
  this.divideClick = (event) =>{
    let result = MathFuncs.divide(input1, input2)
    this.stateChange(result)
  }

		return(
			<div className='Comp'>
				<h2>Hello World From Math Comp</h2>
				<div className='MathComp'>
					<input className='inputMath' name='input1' type='text' placeholder='Input First Number' value={this.state.input1} onChange={this.inputChange}></input>
					<input className='inputMath' name='input2' type='text' placeholder='Input Second Number' value={this.state.input2} onChange={this.inputChange}></input>
					<div>
						<button className='mathButton' onClick={this.addClick}>+</button>
						<button className='mathButton' onClick={this.subClick}>-</button>
						<button className='mathButton' onClick={this.divideClick}>/</button>
						<button className='mathButton' onClick={this.multiplyClick}>*</button>
					</div>
					<p id='equals'>=</p>
					<input id='mathResult' type='text' value={this.state.result} readOnly></input>
				</div>
			</div>
			)
	}
}


export default MathComp