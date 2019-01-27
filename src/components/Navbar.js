import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="transparent white-text">
            <div className="nav-wraper">
                <a href="#" class="brand-logo">Robert Przepiorka</a>
                <ul class="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}
