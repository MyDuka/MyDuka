import React from 'react'
import './MerchantLogin.css'

const MerchantLogin = () => {
  return (
    <div>
       <div className="split-landing">
    {/* Left section */}
    <div className="left-landing">
        {/* content for left section */}
        <div className="landing">
          <div className="landing-content">
            <h3>Karibu! </h3>
            <h2>Sign up securely to access powerful tools and features for managing your business and unlock the full benefits of MyDuka</h2> 
          </div>
        </div>
        {/* <button className="landing-p-button">Create Account</button> */}

    </div>

    {/* Right section */}
    <div className="right-landing">
        {/* content for right section */}
        <div className="landing-container">
          {/* {showingonLog && <useNavigate to="/recipes"/>} */}
      <div className="login-container">
        <input id="item-1" type="radio" name="item" className="sign-in" defaultChecked />
        <label htmlFor="item-1" className="item">Sign In</label>
        <input id="item-2" type="radio" name="item" className="sign-up" />
        <label htmlFor="item-2" className="item">Sign Up</label>
        {/* Login Part */}
        <div className="login-form">
          <div className="sign-in-htm">
          {/* <form onSubmit={handleSubmitOfLog}> */}
            <form >
              <div className="group">
                <input 
                  placeholder="Email" 
                  type="text" 
                  className="login-n-input" 
                //   value={email} 
                //   onChange={handleEmail}
                  />
              </div>
              <div className="group">
                <input 
                    placeholder="Password" 
                    id="pass" 
                    type="password" 
                    className="login-e-input" 
                    data-type="password" 
                    // value={password} 
                    // onChange={handlePassword}
                    />
              </div>
              <div className="group">
                <input 
                    type="submit" 
                    className="button" 
                    value="Sign In" 
                    // onClick={handleLoginClick}
                    />
              </div>
             
            </form>
            <div className="hr"></div>
            <div className="l-footer">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          {/* Sign Up Part */}
          <div className="sign-up-htm">
          {/* <form onSubmit={handleSubmitOfReg}> */}
            <form>
              <div className="group">
                <input 
                  placeholder="Username" 
                  id="user" 
                  type="text" 
                  className="input" 
                //   value={username} 
                //   onChange={handleUser} 
                  />
                  </div>
              <div className="group">
                <input 
                  placeholder="Email address" 
                  id="email" 
                  type="text" 
                  className="input" 
                //   value={email} 
                //   onChange={handleEmail} 
                  />
              </div>
              <div className="group">
                <input 
                  placeholder="Password" 
                  id="password" 
                  type="password" 
                  className="input" 
                  data-type="password" 
                //   value={password} 
                //   onChange={handlePassword} 
                  />
              </div>
              <div className="group">
                <input 
                  placeholder="Confirm password" 
                  id="confirm-password" 
                  type="password" 
                  className="input" 
                  data-type="password" 
                //   value={confirmPassword} 
                //   onChange={handleConfirmPassword} 
                  />
              </div>
              <div className="group">
                <input 
                  type="submit" 
                  className="button" 
                  value="Sign Up" 
                //   onClick={handleSignUpClick} 
                  />
              </div>
            </form>
            <div className="hr"></div>
            <div className="footer">
              <label htmlFor="item-1" className="item-2">Already have an account?</label>
            </div>
          </div>
        </div>
      </div>
      </div>
       
       </div>
       </div> 
       </div>
     
   
     )};

export default MerchantLogin