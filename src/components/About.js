import React, { Component } from 'react'
import Me from '../me.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h4 class="red-text text-lighten-1 center">About me</h4>
        
          <div className="col s12 m8">
            
            <div className="card horizontal">
              <div className="card-image">
                <img src={Me} alt="My photo" class="responsive-img"/>
              </div>
              <div className="card-stacked">
                <div className="card-stacked">
                  <div className="card-content">
                    <h4>Robert Przepiórka</h4>
                    <p>Hello im in high school im intrested in front-end. I like to netfilx and chill.(pierdoły) </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
}
