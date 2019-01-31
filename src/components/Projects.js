import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="red-text text-lighten-1 center">My Projects</h4>
        <div class="row">
          <div class="col s12 m4">
            <div class="card red accent-2">
              <div class="card-content white-text">
                <span class="card-title">Skynet</span>
                <p>Its a phaser endless game </p>
              </div>
              <div class="card-action">
                <a href="https://github.com/Robson456/Skynet">This is a link to project on github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
