import React from 'react'
import CreateCity from './cityComp/createcity.js'
import Community from './cityComp/community.js'
import City from './cityComp/city.js'
import CitySummary from './cityComp/citysummary.js'

class CityComp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			renderCreateCity: false,
			cityName: '',
			cityLat: '',
			cityLon: '',
			cityPop: '',
			community: new Community()
		}
	}

	handleClick = (event) => {
		if(event.target.id === 'createCity'){
			this.setState({
				renderCreateCity: true,
			})
		}
		if(event.target.id === 'addCity'){
			const tempCommunity = this.state.community
			const tempCity = new City(
				this.state.cityName, 
				this.state.cityLat, 
				this.state.cityLon, 
				this.state.cityPop)
			tempCommunity.addCity(tempCity)
			this.setState({
				community: tempCommunity,
				renderCreateCity: false,
				cityName: '',
				cityLat: '',
				cityLon: '',
				cityPop: '',
			})
		}		
	}

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
				cityPop: event.target.value
			})
		}
	}


	render() {
		return(
			<div className='Comp'>
			<button id='createCity' onClick={this.handleClick}>Create City</button>
			{this.state.renderCreateCity === true &&
				<CreateCity 
					handleChange = {this.handleChange}
					handleClick = {this.handleClick}
				/>
			}
			{this.state.community.arrCommunity.length > 0 &&
				<div>
				<CitySummary
					community ={this.state.community}
				 />
				</div>
			}
			</div>
		)
	}
}


export default CityComp