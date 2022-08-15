import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { register } from './UserFunction'
import './auth.css'

class Register extends Component {
     constructor() {
          super()

          this.state = {
               firstName: '',
               lastName: '',
               email: '',
               password: '',
               confirmPassword: '',
          }

          this.onChange = this.onChange.bind(this)
     }

     onChange(e) {
          this.setState({ [e.target.name]: e.target.value })
     }

     handleFormSubmit = event => {
          event.preventDefault();
          if(!this.state.firstName) {
               
          }
       
          // handle actual form submission here
          const newUser = {
               firstName: this.state.firstName,
               lastName: this.state.lastName,
               email: this.state.email,
               password: this.state.password,
               confirmPassword: this.state.confirmPassword
          }
          register(newUser).then(res => {
               console.log(this.props.history)
               // this.props.history.push(`/login`)

          })
     }

     render() {
          return (
               <div className='main-content-container'>
                    <div className="form">
                         <form className='signForm'>
                              <h1 className="h3 mb-3 font-weight-normal">Sign Up to Lightspeed Retail (X-Series)</h1>
                              <div className='notStore'>
                                   <Link to='/'>Already have account?</Link>
                              </div>
                              <div className="form-group">
                                   <label htmlFor="email">First name</label>
                                   <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        placeholder="Enter your first name"
                                        required
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                   />
                              </div>
                              <div className="form-group">
                                   <label htmlFor="email">Last name</label>
                                   <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        placeholder="Enter your last name"
                                        required
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                   />
                              </div>
                              <div className="form-group">
                                   <label htmlFor="email">Email address</label>
                                   <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                        value={this.state.email}
                                        onChange={this.onChange}
                                   />
                              </div>
                              <div className="form-group">
                                   <label htmlFor="password">Password</label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                   />
                              </div>
                              <div className="form-group">
                                   <label htmlFor="password">Confirm Password</label>
                                   <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange}
                                   />
                              </div>
                              <div className='notStore'>
                                   <button
                                        type="submit"
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-primary"
                                   >
                                        Sign Up
                                   </button>
                              </div>

                         </form>
                    </div>

                    <div className='vd-signin-background' style={{ backgroundImage: `url("https://vendfrontendassets.freetls.fastly.net/images/backgrounds/login-background-xseries.jpg")` }}>
                    </div>
               </div>
          )
     }
}

export default Register
