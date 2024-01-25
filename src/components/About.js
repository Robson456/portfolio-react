import React, { Component } from 'react'
import Phaser from '../img/phaser.png'
import Figma from '../img/Figma.png'
import react from '../img/react.png'
import Tailwind from '../img/tailwindCSS.png'
import Bootstrap from '../img/bootstrap.png'
import HTML from '../img/HTML5.png'
import CSS from '../img/css3.jpg'
import JS from '../img/js.jpg'

import MaterialUi from '../img/materialize.png'


export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">About me </h3>
          <blockquote>
            <p className="flow-text">Hello, I am 24 years old and frontend developer for fun.
             I'm open minded for any type of work i like new chalanges. I give my all when I work.
             I use the phrase do everything 100% if you work, work, if you eat, eat, if you laugh, laugh.

            </p>
          
          </blockquote>
            <div className="center ">
              <h3 className="center">My skills</h3>
                <div className="row">
                  <div className="col s12 m6">
                    <img src={Figma} alt="Figma" className="responsive-image icon"/>
                    <img src={Phaser} alt="Phaser" className="responsive-image icon"/>
                    <img src={Bootstrap} alt="Bootstrap" className="responsive-image icon"/>
                    <img src={Tailwind} alt="Tailwind" className="responsive-image icon"/>
                    <img src={MaterialUi} alt="Material ui" className="responsive-image icon"/>
                    
                  </div>
                  <div className="col s12 m6">
                    <img src={HTML} alt="HTML5" className="responsive-image icon"/>
                    <img src={CSS} alt="CSS" className="responsive-image icon"/>
                    <img src={JS} alt="JS" className="responsive-image icon"/>
                    <img src={react} alt="React" className="responsive-image icon"/>
                  </div>
                </div>
            </div>

      </div>
      
    )
  }
}
