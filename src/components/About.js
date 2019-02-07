import React, { Component } from 'react'
import Phaser from '../phaser.png'
import Python from '../python.png'
import react from '../react.png'
import Materialize from '../materialize.png'
import Bootstrap from '../bootstrap.png'

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">About me </h3>
          <blockquote>
            <p className="flow-text">Chuj kurwa dupa cycki</p>
            <p className="flow-text">Bartłomiej Nowicki</p>

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
