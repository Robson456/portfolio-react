import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="red accent-2">
            <div className="nav-wraper ">
                <a href="#" className="brand-logo">Robert Przepiorka</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}
