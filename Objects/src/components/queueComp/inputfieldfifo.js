import React from 'react'

class InputFieldFifo extends React.Component{
	render(){
		return(
			<div>
				<input name='fifoValue' onChange={this.props.handleChange} placeholder='enter a value'></input>
				<button id='addFifo' onClick={this.props.handleClick}>Add To Queue</button>
			</div>
			)
	}

}

export default InputFieldFifo