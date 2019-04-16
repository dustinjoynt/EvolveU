import React from 'react'
import logo from './icons/logo.svg';

class Home extends React.Component{
	render(){
		return(
	      <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <a
	            className="App-link"
	            href="https://reactjs.org"
	            target="_blank"
	            rel="noopener noreferrer"
	          >
	          </a>
	        </header>
	      </div>			
		)
	}
}


export default Home