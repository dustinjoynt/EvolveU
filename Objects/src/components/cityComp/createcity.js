import React from 'react'

//input fields and button to create city
class CreateCity extends React.Component {
	render(){
		return(
			<div>
				<div className='cityBody' onClick={this.props.handleClick} id='mask'>
				</div>
				<div className='cityForm'>
					<input id='cityName' className='cityInput' placeholder='Name' onChange={this.props.handleChange}></input>
					<input id='cityLat' className='cityInput' placeholder='Latitude' onChange={this.props.handleChange} type='number'></input>
					<input id='cityLon' className='cityInput' placeholder='Longitude' onChange={this.props.handleChange} type='number'></input>
					<input id='cityPop' className='cityInput' placeholder='Population' onChange={this.props.handleChange} type='number'></input>
					<div className='popupBtn'>				
						<button id='addCity' className='cityButton' onClick={this.props.handleClick}>Create</button>
					</div>
				</div>
			</div>
			)
	}

}

export default CreateCity