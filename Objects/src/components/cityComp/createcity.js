import React from 'react'

class CreateCity extends React.Component {
	render(){
		return(
			<div>
				<input id='cityName' placeholder='Name' onChange={this.props.handleChange}></input>
				<input id='cityLat' placeholder='Latitude' onChange={this.props.handleChange}></input>
				<input id='cityLon' placeholder='Longitude' onChange={this.props.handleChange}></input>
				<input id='cityPop' placeholder='Population' onChange={this.props.handleChange}></input>				
				<button id='addCity' onClick={this.props.handleClick}></button>
			</div>
			)
	}

}

export default CreateCity