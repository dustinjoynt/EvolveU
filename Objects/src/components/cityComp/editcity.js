import React from 'react'

//input feild and buttons to edit city population
class EditCity extends React.Component {
	render(){
		return(
			<div>
				<input id='editAmount' placeholder='Amount' onChange={this.props.handleChange} type='number'></input>				
				<button id='addPop' onClick={this.props.handleClick}>Moved In</button>
				<button id='subPop' onClick={this.props.handleClick}>Moved Out</button>
			</div>
			)
	}

}

export default EditCity