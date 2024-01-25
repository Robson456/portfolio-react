import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (  
      <div>
        <nav className="transparent">
            <div className="container">
                <Link to="/" className="brand-logo black-text">Robert Przepiórka</Link>
                <a href="#" data-target="mobile-demo" className ="sidenav-trigger right"><i className="material-icons" style={{color:'black'}}>menu</i></a>  
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/" className="black-text">Home</Link></li>
                    <li><Link to="/about" className="black-text">About Me</Link></li>
                    <li><NavLink to="/contact" className="black-text">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
            <ul className="sidenav" id="mobile-demo">
              <li><Link to="/" className="black-text">Home</Link></li>
              <li><Link to="/about" className="black-text">About Me</Link></li>
              <li><NavLink to="/contact" className="black-text">Contact</NavLink></li>
            </ul>
      </div>
    )
  }
}
