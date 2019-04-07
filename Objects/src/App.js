import React, { Component } from 'react';
import './App.css';

import Container from './components/container.js'
import MathComp from './components/MathComp.js'
import Home from './components/home.js'
import AccountComp from './components/accountComp.js'
import CityComp from './components/cityComp.js'

class App extends Component {
  constructor(){
    super()
    this.clickResult = 'account'
    this.state = {
      myState: this.clickResult
    }
  }

  buttonClick = (event) => {
    this.clickResult = event.target.alt
    this.setState({
      myState: this.clickResult
    })
  }

  render() {

    let newDiv = <div />
    if (this.clickResult === 'math'){
      newDiv = 
      <MathComp />
    }
    else if (this.clickResult === 'home'){
      newDiv = <Home />
    }
    else if (this.clickResult === 'account'){
      newDiv = <AccountComp />
    }
        else if (this.clickResult === 'city'){
      newDiv = <CityComp />
    }

    return (

      <div>
      <Container 
        clickFunc = {this.buttonClick}
      />
      {newDiv}
      </div>
    )
  }
}

export default App;
