class Accounts{
	constructor(){
		this.acctArray = []
	}

	addAccount (object) {
		this.acctArray.push(object)
	}

	removeAccount (arrayPos) {
		// this.acctArray.splice((this.acctArray.indexOf(object)),1)
		this.acctArray.splice(arrayPos,1)
	}

	sumAccount () {
		const intValue = 0
		this.accountSum = this.acctArray.reduce((accum,curVal) =>  accum + curVal.intBalance, intValue)
	}

	accountMax () {
		const balanceArray = this.acctArray.map(a => a.intBalance)
		this.maxAccount = Math.max(...balanceArray)
	}

	accountMin () {
		const balanceArray = this.acctArray.map(a => a.intBalance)
		this.minAccount = Math.min(...balanceArray)
	}

	depAccount (amount, index) {
		this.acctArray[index].deposit(amount)
	}
}

export default Accounts