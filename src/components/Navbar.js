import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="transparent">
            <div className="nav-wraper">
                <a href="#" className="brand-logo black-text" style={{paddingLeft:'5rem'}}>Robert Przepiorka</a>
                <ul className="right">
                    <li><Link to="/" className="black-text">Home</Link></li>
                    <li><Link to="/About" className="black-text">About Me</Link></li>
                    <li><NavLink to="/Contact" className="black-text">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}
