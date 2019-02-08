import React, { Component } from 'react'

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      email: "",
      message: "" };
  }
  handleSubmit = e => {
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      
      <div className="container" style={{marginTop:'2rem'}}>
        <h4 className="center">Contact me</h4>
        <div className="col s12 15 offset-12">
        <form name="contact" netlify onSubmit={this.handleSubmit}>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
 
          {/* <form
            name="contact" 
            method="POST" 
            netlify
            data-netlify-honeybot="true"
            onSubmit={this.handleSubmit}
            >   
            <input type = 'hidden' name="bot-field" />
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" className="validate" name='firstname' onChange = {this.onChangeInput}></input>
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
            <input type="email" id="email" className="validate" name='email' onChange = {this.onChangeInput}/>
            <label htmlFor="emial">Your Email</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">message</i>
            <textarea  id="message" className="materialize-textarea" name='message' onChange = {this.onChangeInput}></textarea>
            <label htmlFor="message">Your massage</label>
          </div>

            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right ">send</i>
            </button>
          </form>   */}
        
        
        </div>  

      </div>

    )
  }
}
