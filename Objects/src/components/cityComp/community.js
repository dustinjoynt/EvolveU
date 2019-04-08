class Community{
	constructor(){
		this.arrCommunity = []
	}

	addCity (obj) {
		this.arrCommunity.push(obj)
	}

	whichSphere (arrPos) {
		if(this.arrCommunity[arrPos].latitude > 0){
			return('North')
		}else{
			return('South')
			}
	}

	getMostNorthern () {
		this.mostNorth = this.arrCommunity.reduce((prev, current) => (prev.latitude > current.latitude) ? prev : current)
	}

	getMostSouthern () {
		this.mostSouth = this.arrCommunity.reduce((prev, current) => (prev.latitude < current.latitude) ? prev : current)
	} 

	getPopulation () {
		this.totalPopulation = this.arrCommunity.reduce((prev, current) => prev.population + current.population)
	}

}

export default Community