import React from 'react'

class CitySummary extends React.Component {
	render(){

		const citySummary = this.props.community.arrCommunity.map((city, index) => 
			<div key={city.name+'-'+index}>
				<div>
					<p>Name:</p>
					<p>{city.name}</p>
					<p>Latitude:</p>
					<p>{city.latitude}</p>
					<p>Longitude:</p>
					<p>{city.longitude}</p>
					<p>Population:</p>
					<p>{city.population}</p>
					<button></button>
				</div>
			</div>)



		return(
			<div>
				{citySummary}
			</div>
			)
	}

}

export default CitySummary