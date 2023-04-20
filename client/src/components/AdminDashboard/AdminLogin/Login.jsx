import React from 'react';
import './Login.css'

function LoginForm() {
  return (
    <div className="background">
      <div className="shape">
        
        </div>
        <div className="shape">

        </div>
            <form>
            <h3>Admin Login</h3>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="8 digit code" id="password" />

            <button>Log In</button>
            {/* <div className="social">
                <div className="go"><i className="fab fa-google"></i>  Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
            </div> */}
            </form>
      </div>
     
  
  );
}

export default LoginForm;
