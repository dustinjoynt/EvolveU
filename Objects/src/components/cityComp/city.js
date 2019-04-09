class City{
	constructor(name, latitude, longitude, population){
		this.name = name
		this.latitude = latitude
		this.longitude = longitude
		this.population = population
	}

	show () {
		return(
		`${this.name} ${this.latitude}° ${this.longitude}° POP: ${this.population}`
		)
	}

	movedIn (amt) {
		return(
			this.population = this.population + amt
			)
	}

	movedOut (amt) {
		return(
			this.population = this.population - amt)
	}

	howBig () {
		if(this.population <= 100){
			return('Hamlet')
		}
		if(this.population < 1000){
			return('Village')
		}
		if(this.population < 20000){
			return('Town')
		}
		if(this.population < 100000){
			return('Large Town')
		}
		else{
			return('City')
		}
	}
}

export default City