import React from 'react'
import './acctComp.css'

class AccountsSummary extends React.Component{
	render(props){

//create a div container that maps array into account name and balance
		const acctDisplay = this.props.arrayAcct.acctArray.map((account, index) => 
			<div className='acctDiv' key={account.acctName+'-'+index}>
				<div className='acctHeading'>
					<p className='p1'>Account:</p>
					<p className='p2'>{account.acctName}</p>
				</div>
				<div className='acctHeading'>
					<p className='p1'>Balance:</p>
					<p className='p2'>${account.intBalance}</p>
				</div>
				<div>
					<div className='depWith'>
						<input className='updateAmt' placeHolder='enter amount' type='number' onChange={this.props.changeAmt} id={index}></input>
						<button className='updateBtn' onClick={this.props.deposit} id={index}>Deposit</button>
						<button className='updateBtn' onClick={this.props.withdraw} id={index}>Withdraw</button>				
					</div>
					<button className='remove' onClick={this.props.remove} id={index}>Remove</button>
				</div>
			</div>)

//create a div for max acccount balance		
		this.props.arrayAcct.accountMax()
		const maxAmt = this.props.arrayAcct.maxAccount		
		const maxDisplay = 
			<div className='minMax'>
				<p id='max'>Highest Balance: ${maxAmt}</p>
			</div>

//create a div for min acccount balance
		this.props.arrayAcct.accountMin()
		const minAmt = this.props.arrayAcct.minAccount		
		const minDisplay = 
			<div className='minMax'>
				<p id='min'>Lowest Balance: ${minAmt}</p>
			</div>

		return(
		<div className='sumCont'>
			<div className='balCont'>
				{maxDisplay}
				{minDisplay}
			</div>
			<div>
				{acctDisplay}
			</div>
		</div>
		)
	
	}
}

export default AccountsSummary