import React from 'react'

class AddAccounts extends React.Component{
  		
	render(props){
		return(
		<div className='createContainer'>
			<div className='accountSelect'>
				<select onChange={this.props.acctSel}>
					<option value=''>select account type</option>
					<option value='Chequing'>Chequing</option>
					<option value='Saving'>Saving</option>
					<option value='TFSA'>TFSA</option>
					<option value='RRSP'>RRSP</option>
				</select>
			</div>
			<input id='intDep' type='number' onChange={this.props.intDep} placeholder='initial deposit'></input>
			<button id='createAccount'onClick={this.props.createNewAcct}>Create</button>
		</div>
		)
	
	}
}

export default AddAccounts