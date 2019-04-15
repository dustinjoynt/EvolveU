import React from 'react'

//input fields and button to create node
class CreateNode extends React.Component {
	render(){
		return(
			<div>
				<div className='cityBody' onClick={this.props.handleClick} id='mask'>
				</div>
				<div className='cityForm'>
					<input id='nodeSubject' className='cityInput' placeholder='Subject' onChange={this.props.handleChange}></input>
					<input id='nodeAmount' className='cityInput' placeholder='Amount' onChange={this.props.handleChange} type='number'></input>
					<div className='popupBtn'>				
						<button id='addNode' className='cityButton' onClick={this.props.handleClick}>Insert</button>
					</div>
				</div>
			</div>
			)
	}

}

export default CreateNode