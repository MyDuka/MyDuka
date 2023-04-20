import React from "react";
import './Auth.css'
import { Link } from "react-router-dom";

export default function MerchantLogin(){

    return(
        <div className="log">
        <form className="login-form" >
  <h4>Merchant Login</h4>

  <label for="username" className="label">Username</label>
  <div className="form-input-material">
    <input type="text" name="username" id="username" placeholder="Username" autocomplete="off" className="form-control-material" required /> 
  </div>

  <label for="password" className="label">Password</label>
  <div className="form-input-material">
    <input type="password" name="password" id="password" placeholder="Password" autocomplete="off" className="form-control-material" required />
  </div>

  <button type="submit" className="btn btn-primary btn-ghost">Login</button>

  <div className="foot-lnk">
        <Link to="/merchant/signup">Register</Link>
            <br/>
        <Link to="/password/reset">Forgot Password?</Link>
        
        
    </div>

</form>
        
        </div>
    )
}
