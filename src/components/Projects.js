import React, { Component } from 'react'
import Rick from '../img/Skynetv1.png'
import Portfolio from '../img/Portfolio.png'
import chase from '../img/chase.jpg'


export default class Projects extends Component {
  render() {
    return (
      <div className="container">
      <h3 className="black-text center" style={{marginBottom:'2rem'}}> Projects</h3> 
             <div className="row">

               <div className="col s12 m4">

                  <div className="card  z-depth-3">
                   <div className="card-image">
                     <img src={Portfolio} alt="Portfolio website" className="responsive-image"/>
                   </div>
                   <div className="card-component">
                   <h5 className="black-text center">Bootstrap Portfolio</h5>
                     <p className="center">Portfolio in Bootstrap</p>
                   </div>
                   <div className="card-action">
                     <a href="https://github.com/Robson456/MyWebsite/">This is a link to Github repository</a>
                   </div>
                 </div>

                 
               </div>
               <div className="col s12 m4">
                 <div className="card z-depth-3">
                   <div className="card-image">
                     <img src={Rick} alt="Skynet Phaser game" className="responsive-image" />
                   </div>
                   <div className="card-component">
                     <h5 className="black-text center">Skynet</h5>
                     <p className="center">It's free Phser endless game!</p>
                   </div>
                   <div className="card-action">
                     <a href="https://github.com/Robson456/Skynet">This is a link to Github repository</a>
                   </div>
                 </div>

               </div>
               <div className="col s4">

                  <div className="card z-depth-3">
                   <div className="card-image">
                     <img src={chase} alt=""/>
                   </div>
                   <div className="card-component">
                      <h5 className="black-text center">Chase Young</h5>
                      <p className="center">It's portfolio website made for imaginary photograper for educional purpose.</p>
                   </div>
                   <div className="card-action">
                     <a href="https://chaseyoung.netlify.app/">This is a link to Website</a>
                   </div>
                 </div>
               </div>
             </div>
            
      </div>
    )
  }
}
