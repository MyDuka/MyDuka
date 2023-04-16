import React from 'react'
import  './Login.css'

const Login = () => {
  return (
        <div className="login-box">
          <p>Sign In</p>
          <form>
            <div className="user-box">
              <input 
              required name="email" 
              type="text" />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input 
              required name="password" 
              type="password" />
              <label>Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
          
        </div>
   

  )
}

export default Login