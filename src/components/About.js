import React, { Component } from 'react'
import Phaser from '../img/phaser.webp'
import Python from '../img/python.webp'
import react from '../img/react.webp'
import Materialize from '../img/materialize.webp'
import Bootstrap from '../img/bootstrap.webp'

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">About me </h3>
          <blockquote>
            <p className="flow-text">Hello, I am 19 years old and am a student and I am a frontend developer for fun.</p>

          </blockquote>
            <div className="center ">
              <h3 className="center">My skills</h3>
                <div className="row">
                  <div className="col s12 m6">
                    <img src={Python} alt="" className="responsive-image icon"/>
                    <img src={Phaser} alt="" className="responsive-image icon"/>
                    <img src={Bootstrap} alt="" className="responsive-image icon"/>
                  </div>
                  <div className="col s12 m6">
                    <img src={react} alt="" className="responsive-image icon"/>
                    <img src={Materialize} alt="" className="responsive-image icon"/>
                  </div>
                </div>
            </div>

      </div>
      
    )
  }
}
