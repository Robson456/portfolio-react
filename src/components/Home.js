import React, { Component } from 'react'
import Bg from '../img/bg2.svg'
import Projects from './Projects'

export default class Home extends Component {
  render() {
    return (
      <div className="">
          <h4 className="black-text center">Hello there, My name is Robert Przepiórka </h4>
          <h5 className="black-text center">And I'm frontend developer you need </h5>

            <img src={Bg} alt="Baner" className="responsive-img z-depth-2 "  style={{marginTop:'2rem'}}/>
          <Projects/>
      </div>
      
    )
  }
}
