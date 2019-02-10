import React, { Component } from 'react'

export default class Contact extends Component {

  render() {
    return (
      
      <div className="container" style={{marginTop:'2rem'}}>
        <h4 className="center">Contact me</h4>
        <div className="col s12 15 offset-12">
 
 
          <form action="https://formspree.io/przepiorkarobin@gmail.com" method="POST">   
          <input type="hidden" name="_next" value="https://robinson456.netlify.com/ThankYou"/>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" className="validate" name='firstname'></input>
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input 
                  id="last_name" 
                  type="text" 
                  className="validate" 
                  name='lastname' 
                  onChange = {this.onChangeInput}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id="email" className="validate" name='email'/>
            <label htmlFor="emial">Your Email</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">message</i>
            <textarea  id="message" className="materialize-textarea" name='message' ></textarea>
            <label htmlFor="message">Your massage</label>
          </div>

            <button className="btn waves-effect waves-light" type="submit">Submit
              <i className="material-icons right ">send</i>
            </button>
          </form>  
        
        
        </div>  

      </div>

    )
  }
}
