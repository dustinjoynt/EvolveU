class Account{
	constructor(acctName, intBalance){
		this.acctName = acctName	
		this.intBalance = intBalance
	}

	deposit (amount) {
		return(
			this.intBalance = this.intBalance + amount
		)
	}

	withdraw (amount) {
		return(
			this.intBalance = this.intBalance - amount
		)
	}

	checkBalance () {
		return(
			this.intBalance
		)
	}
}

export default Account