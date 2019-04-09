import React from 'react'
import CreateCity from './cityComp/createcity.js'
import Community from './cityComp/community.js'
import City from './cityComp/city.js'
import CitySummary from './cityComp/citysummary.js'
import EditCity from './cityComp/editcity.js'
import './cityComp/citycomp.css'

class CityComp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			renderCreateCity: false,
			renderEditCity: false,
			cityName: '',
			cityLat: '',
			cityLon: '',
			cityPop: 0,
			community: new Community(),
			editPop: '',
			editAmt: 0
		}
	}

//On click function for all click functionality
	handleClick = (event) => {
		if(event.target.id === 'createCity'){
			this.setState({
				renderCreateCity: true,
			})
		}
		if(event.target.id === 'addCity'){
			if(this.state.cityName.length === 0){
				return(alert('Please enter valid name'))
			}
			if(this.state.cityLat < -90 || this.state.cityLat > 90 || this.state.cityLat.length === 0){
				return(alert('Please input a valid latitude. Latittude must be between -90° and 90°.'))
			}
			if(this.state.cityLon < -180 || this.state.cityLon > 180 || this.state.cityLon.length === 0){
				return(alert('Please input a valid longitude. Longitude must be between -180° and 180°.'))
			}
			else{
			const tempCommunity = this.state.community
			const tempCity = new City(
				this.state.cityName, 
				this.state.cityLat, 
				this.state.cityLon, 
				this.state.cityPop
				)
			tempCommunity.addCity(tempCity)
			this.setState({
				community: tempCommunity,
				renderCreateCity: false,
				cityName: '',
				cityLat: '',
				cityLon: '',
				cityPop: '',
			})}
		}
		if(event.target.name === 'editCity'){
			this.setState({
				renderEditCity: true,
				editPop: event.target.id
			})
		}
		if(event.target.id === 'addPop'){
			this.state.community.arrCommunity[this.state.editPop].movedIn(this.state.editAmt)
			this.setState({
				renderEditCity: false,
				editAmt: 0
			})
		}	
		if(event.target.id === 'subPop'){
			this.state.community.arrCommunity[this.state.editPop].movedOut(this.state.editAmt)
			this.setState({
				renderEditCity: false,
				editAmt: 0
			})
		}
		if(event.target.id === 'mask'){
			this.setState({
				renderEditCity: false,
				renderCreateCity: false
			})
		}

	}

//On change function to update all input feilds into state
	handleChange = (event) => {
		if(event.target.id === 'cityName'){
			this.setState({
				cityName: event.target.value
			})
		}
		if(event.target.id === 'cityLat'){
			this.setState({
				cityLat: event.target.value
			})
		}
		if(event.target.id === 'cityLon'){
			this.setState({
				cityLon: event.target.value
			})
		}
		if(event.target.id === 'cityPop'){
			this.setState({
				cityPop: Number(event.target.value)
			})
		}
		if(event.target.id === 'editAmount'){
			this.setState({
				editAmt: Number(event.target.value)
			})
		}
	}


	render() {
		return(
			<div className='Comp'>
			<button id='createCity' className='cityButton' onClick={this.handleClick}>Create City</button>
			{this.state.renderCreateCity === true &&
				<CreateCity 
					handleChange = {this.handleChange}
					handleClick = {this.handleClick}
				/>
			}
			{this.state.renderEditCity === true &&
				<EditCity
					handleChange = {this.handleChange}
					handleClick = {this.handleClick}
				 />
			}
			{this.state.community.arrCommunity.length > 0 &&
					<CitySummary
						community ={this.state.community}
						handleClick = {this.handleClick}
					 />
			}
			</div>
		)
	}
}


export default CityComp