import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from './UserFunction'
import './auth.css'

class Login extends Component {
     constructor() {
          super()

          this.state = {
               email: '',
               password: '',
               errors: {}
          }

          this.onChange = this.onChange.bind(this)
          this.submitted = false;
     }

     onChange(e) {
          this.setState({ [e.target.name]: e.target.value })
     }

     handleFormSubmit = event => {
          event.preventDefault();

          // handle actual form submission here
          const user = {
               email: this.state.email,
               password: this.state.password
          }

          login(user).then(res => {
               if (res) {
                    this.props.history.push(`/profile`)
               }
          })
     }

     render() {
          return (
               <div className='main-content-container'>
                    <div className="form">
                         <form className='signForm'>
                              <h1 className="h3 mb-3 font-weight-normal">Sign in to Lightspeed Retail (X-Series)</h1>
                              <div className='notStore'>
                                   <Link to='/register'>Not your store?</Link>
                              </div>
                              <div className="form-group">
                                   <label htmlFor="email">Email address</label>
                                   <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter email"
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
                              <div className='loginButton'>
                                   <Link to='/'>
                                        Forgot your password?
                                   </Link>
                                   <button
                                        type="submit"
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-primary"
                                   >
                                        Sign in
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

export default Login
