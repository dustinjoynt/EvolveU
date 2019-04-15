import React from 'react'

import home from './icons/home.png'
import math from './icons/math.png'
import account from './icons/account.png'
import city from './icons/city.png'
import link from './icons/link.png'


class Container extends React.Component {
  	render(){
    return(
      <div className='Container'>
        <h1>Hello World</h1>
          <div className='LogoContainer'>
            <img onClick = {this.props.clickFunc} src={home} className='Logos' alt='home'/>
            <img onClick = {this.props.clickFunc} src={math} className='Logos' alt='math'/>
            <img onClick = {this.props.clickFunc} src={account} className='Logos' alt='account'/>
            <img onClick = {this.props.clickFunc} src={city} className='Logos' alt='city'/>
            <img onClick = {this.props.clickFunc} src={link} className='Logos' alt='link'/>
          </div>
      </div>
    )
  	}
}

export default Container

