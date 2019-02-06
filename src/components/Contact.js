import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:'2rem'}}>
        <h4 className="center">Contact me</h4>
        <div className="col s12 15 offset-12">
          <form name="contact" method="POST" data-netlify="true">
            <div className="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" class="validate"></input>
                <label htmlFor="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"></input>
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
          <div className="input-field">
            <i class="material-icons prefix">email</i>
            <input type="email" id="email" class="validate"/>
            <label htmlFor="emial">Your Email</label>
          </div>
          <div className="input-field">
            <i class="material-icons prefix">message</i>
            <textarea  id="message" className="materialize-textarea"></textarea>
            <label htmlFor="message">Your massage</label>
          </div>

          </form>  
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right ">send</i>
            </button>
        
        
        </div>  

      </div>

    )
  }
}
