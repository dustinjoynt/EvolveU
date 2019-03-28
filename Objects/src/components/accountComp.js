import React from 'react'
import Account from './account.js'
import AddAccounts from './accountsComps/addAccounts.js'
import AccountsSummary from './accountsComps/accountsSummary'
import Accounts from './accountController.js'
import './acctComp.css'

class AccountComp extends React.Component{
	constructor(props){
		super(props)
    this.state = {
	    createAccount: '',
	    selectAcct: '',
	    intDeposit: '',
	    acctArrayState: new Accounts(),
	    amtChange: '',
	    id: '',
  	}
	}

	buttonClick = (event) => {
    this.setState({
      createAccount: event.target.id,
    })
  	}

//get input values for initial deposit

	acctSelect = (event) =>{
	this.setState({
		selectAcct: event.target.value
	})
	}

	intDepAmount = (event) =>{
	this.setState({
		intDeposit: Number(event.target.value)
	})
	}

//create accounts and push them to array

	createAcct = () =>{
		console.log('select', this.state.selectAcct.length)
		if(this.state.selectAcct.length > 0){ //if statement prevents account from being made if no account is selected
			const tempArray = this.state.acctArrayState
			const account1 = new Account(this.state.selectAcct, this.state.intDeposit)
			tempArray.addAccount(account1)
			this.setState({
				acctArrayState: tempArray,
				selectAcct: '',
				createAccount: '',
				intDeposit: ''
			})
		}else{alert('Please select valid account type.')}
	}

//get input value for deposit & withdraw methods

	chgAmount = (event) =>{
		this.setState({
			amtChange: Number(event.target.value),
			id: event.target.id
		})
	}

//deposit & withdraw methods

	acctDeposit = (event) =>{
		if(event.target.id === this.state.id){	//if statement to check that id of input feild matches id of deposit button, ensures ammount corresponds to account
			const tempArray = this.state.acctArrayState
			tempArray.acctArray[Number(event.target.id)].deposit(this.state.amtChange)
			this.setState({
				acctArrayState: tempArray
			})
		}
	}

	acctWithdraw = (event) =>{
		if(event.target.id === this.state.id){
			const tempArray = this.state.acctArrayState
			tempArray.acctArray[Number(event.target.id)].withdraw(this.state.amtChange)
			this.setState({
				acctArrayState: tempArray
			})
		}
	}

//remove account

	acctRemove = (event) =>{
		const tempArray = this.state.acctArrayState
		tempArray.removeAccount(Number(event.target.id))
		this.setState({
			acctArrayState: tempArray
		})
	}


	render(){

		let newDiv = <div />
		let summaryDiv = <div />

		if (this.state.createAccount === 'create'){
			newDiv= <AddAccounts 
			acctSel = {this.acctSelect}
			intDep = {this.intDepAmount}
			createNewAcct = {this.createAcct}
		/>
		}

		if (this.state.acctArrayState.acctArray.length > 0){
			summaryDiv = <AccountsSummary 
			arrayAcct = {this.state.acctArrayState}
			changeAmt = {this.chgAmount}
			deposit = {this.acctDeposit}
			withdraw = {this.acctWithdraw}
			remove = {this.acctRemove}
			/>
		}

		return(
		<div className='acctComp'>
		<button id='create' onClick={this.buttonClick}>Create New Account</button>
		{newDiv}
		{summaryDiv}
		</div>
		)
	
	}
}

export default AccountComp