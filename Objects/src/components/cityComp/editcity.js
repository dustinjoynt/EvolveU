import React from 'react'

//input feild and buttons to edit city population
class EditCity extends React.Component {
	render(){
		return(
			<div>
				<div className='cityBody' onClick={this.props.handleClick} id='mask'>
				</div>
				<div className='cityForm'>
					<input className='cityInput' id='editAmount' placeholder='Amount' onChange={this.props.handleChange} type='number'></input>
					<div className='popupBtn'>				
						<button className='cityButton' id='addPop' onClick={this.props.handleClick}>Moved In</button>
						<button className='cityButton' id='subPop' onClick={this.props.handleClick}>Moved Out</button>
					</div>
				</div>
			</div>
			)
	}

}

export default EditCity