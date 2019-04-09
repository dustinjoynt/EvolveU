import React from 'react'

class CitySummary extends React.Component {
	render(){

//Map array of cities into div container to show city, classification, and hemisphere
		const citySummary = this.props.community.arrCommunity.map((city, index) => 
			<div key={city.name+'-'+index}>
				<div>
					<p>{this.props.community.arrCommunity[index].show()}</p>
					<p>Settlement Type: {this.props.community.arrCommunity[index].howBig()}</p>
					<p>Hempishere: {this.props.community.whichSphere(index)}</p>
					<button name='editCity' id={index} onClick={this.props.handleClick}>Edit Population</button>
				</div>
			</div>
		)

//return the most northern city from the array
		this.props.community.getMostNorthern()
		const mostNorth = this.props.community.mostNorth

//return the most southern city from the array
		this.props.community.getMostSouthern()
		const mostSouth = this.props.community.mostSouth

//return the total population of the array
		this.props.community.getPopulation()
		const totalPop = this.props.community.totalPopulation

		return(
			<div>
				<div>
					{citySummary}
				</div>
				<div>
					<p>Most Northern City: {mostNorth.name}</p>
					<p>Most Southern City: {mostSouth.name}</p>
					<p>Total Population: {totalPop}</p>
				</div>
			</div>
			)
	}

}

export default CitySummary