import React, { Component } from 'react'
import Rick from '../Skynetv1.png'
import Portfolio from '../Portfolio.PNG'


export default class Projects extends Component {
  render() {
    return (
      <div className="container">
      <h3 className="black-text center" style={{marginBottom:'2rem'}}> Projects</h3> 
             <div className="row">

               <div className="col s4">

                  <div className="card  z-depth-3">
                   <div className="card-image">
                     <img src={Portfolio} alt="" className="responsive-image"/>
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
               <div className="col s4">
                 <div className="card z-depth-3">
                   <div className="card-image">
                     <img src={Rick} alt="" className="responsive-image" />
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
               {/* <div className="col s4">

                  <div className="card z-depth-3">
                   <div className="card-image">
                     <img src="" alt=""/>
                   </div>
                   <div className="card-component">
                      <h5 className="black-text center">Skynet</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas saepe quam illum eaque, commodi exercitationem et vel consequatur sequi autem fuga, impedit id delectus asperiores vero labore? Soluta, minus!</p>
                   </div>
                   <div className="card-action">
                     <a href="#">This is a link</a>
                   </div>
                 </div>
               </div> */}
             </div>
            
      </div>
    )
  }
}
