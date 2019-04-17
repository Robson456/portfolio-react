import React, { Component } from 'react'
import Phaser from '../img/phaser.png'
import Python from '../img/python.png'
import react from '../img/react.png'
import Materialize from '../img/materialize.png'
import Bootstrap from '../img/bootstrap.png'


export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">About me </h3>
          <blockquote>
            <p className="flow-text">Hello, I am 19 years old student and a frontend developer for fun.</p>

          </blockquote>
            <div className="center ">
              <h3 className="center">My skills</h3>
                <div className="row">
                  <div className="col s12 m6">
                    <img src={Python} alt="Python" className="responsive-image icon"/>
                    <img src={Phaser} alt="Phaser" className="responsive-image icon"/>
                    <img src={Bootstrap} alt="Bootstrap" className="responsive-image icon"/>
                  </div>
                  <div className="col s12 m6">
                    <img src={react} alt="React" className="responsive-image icon"/>
                    <img src={Materialize} alt="Materialize" className="responsive-image icon"/>
                  </div>
                </div>
            </div>

      </div>
      
    )
  }
}
