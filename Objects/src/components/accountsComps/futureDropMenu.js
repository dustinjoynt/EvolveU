			<div className='accountSelect'>
				<select onChange={this.props.acctSel}>
					<option value=''>select account type</option>
					<option value='Chequing'>Chequing</option>
					<option value='Saving'>Saving</option>
					<option value='TFSA'>TFSA</option>
					<option value='RRSP'>RRSP</option>
				</select>
			</div>

potential dropdown......

			<div className='dropdown'>
				<button className='dropbtn'>select account type</button>
				<div className='dropdown-content'>
					<button onClick={this.props.acctSel} value='Chequing'>Chequing</button>
					<button onClick={this.props.acctSel} value='Saving'>Saving</button>
					<button onClick={this.props.acctSel} value='TFSA'>TFSA</button>
					<button onClick={this.props.acctSel} value='RRSP'>RRSP</button>
				</div>
			</div>

css........


			/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  color: white;
/*  padding: 16px;*/
  font-size: 15px;
  border: none;
 /* border-radius: 15px;*/
  min-width: 160px;
  font-weight: bolder;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
/*  z-index: 1;*/
}

/* Links inside the dropdown */
.dropdown-content button {
  display: flex;
  flex-direction: column;
  color: black;
  min-width: 160px;
/*  padding: 12px 16px;*/
/*  text-decoration: none;*/
/*  display: block;*/
}

/* Change color of dropdown links on hover */
.dropdown-content button:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}