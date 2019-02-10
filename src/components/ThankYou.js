import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ThankYou extends Component {
  render() {
    return (
      <div className="center"> 
        <h3 style={{marginTop:'5rem'}}>Thank You!</h3>
        <Link to="/" className="black-text" style={{fontSize:'1.5rem'}}>Click here to go to Home page </Link>
        
      </div>
    )
  }
}
