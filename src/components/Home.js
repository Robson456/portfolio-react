import React, { Component } from 'react'
import Python from '../python.png'
import Phaser from '../phaser.png'
import react from '../react.png'
import Materialize from '../materialize.png'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2 class="red-text text-lighten-1 center">Hello there</h2> 
          <h4 class="red-text text-lighten-1 center">Hello I work with:</h4> 
          <ul className="center">
            <li><img src={Phaser} alt="" class="circle" class="responsive-img" class="icon"/></li>
            <li><img src={Python} alt="" class="circle" class="responsive-img" class="icon"/></li>
            <li><img src={react} alt="" class="circle" class="responsive-img" class="icon"/></li>
            <li><img src={Materialize} alt="" class="circle" class="responsive-img" class="icon"/></li>
          </ul>
      </div>
    )
  }
}
