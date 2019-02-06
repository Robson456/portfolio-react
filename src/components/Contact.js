import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      firstname: '',
      lastname: '',
      message: ''
    }
  }

  onChangeInput = e => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))

    console.log(this.state)
  }

  render() {
    return (
      <div className="container" style={{marginTop:'2rem'}}>
        <h4 className="center">Contact me</h4>
        <div className="col s12 15 offset-12">
<<<<<<< HEAD
          <form name="contact" method="POST" data-netlify="true" netlify>
=======
          <form name="contact" method="POST" netlify>
>>>>>>> f6670522015ddb81df23d4559e9c7dad948aa112
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

          </form>  
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right ">send</i>
            </button>
        
        
        </div>  

      </div>

    )
  }
}
