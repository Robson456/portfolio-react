import React, { Component } from 'react'
import Bg from '../bg2.jpeg'
import Projects from './Projects'

export default class Home extends Component {
  render() {
    return (
      <div className="">
          <h2 className="black-text center">Hello there general kenobi</h2> 
          <h4 className="black-text center">Hello there, My name is Robert Przepiórka </h4>
          <h5 className="black-text center">And I'm front-end developer you need </h5>

            <img src={Bg} alt="" className="responsive-img z-depth-2" style={{marginTop:'2rem'}}/>
          <Projects/>
      </div>
      
    )
  }
}
