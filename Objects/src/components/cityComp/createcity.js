import React from 'react'

//input fields and button to create city
class CreateCity extends React.Component {
	render(){
		return(
			<div>
				<div className='cityBody'>
				</div>
				<div className='createForm'>
					<input id='cityName' placeholder='Name' onChange={this.props.handleChange}></input>
					<input id='cityLat' placeholder='Latitude' onChange={this.props.handleChange}></input>
					<input id='cityLon' placeholder='Longitude' onChange={this.props.handleChange}></input>
					<input id='cityPop' placeholder='Population' onChange={this.props.handleChange} type='number'></input>				
					<button id='addCity' onClick={this.props.handleClick}>Create</button>
				</div>
			</div>
			)
	}

}

export default CreateCity