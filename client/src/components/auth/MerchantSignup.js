import React from "react";
import './MerchantAuth.css'
import { Link } from "react-router-dom";

export default function MerchantSignup(){

    return(
        <>
        <div className="login-wrap">
            <div >

            <div className="login-form">

            <form className="sign-in-htm"  >
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">email address</label>
					<input id="pass" type="text" className="input"  />
				</div>

                <div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" />
				</div>
			
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>

                <div className="hr"></div>

                <div className="foot-lnk">
                    <label for="tab-1"><Link to="/merchant/login">Already Member?</Link></label>
                </div>
            </form>

            </div>
	        </div>
        </div>

		</>

   
    )
}