import React, { useState} from "react";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";


export default function ClerkLogin(){


  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function clerkLogin(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/clerk/login",{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		})
            .then((r) =>{
                if(r.status === 200){
                    r.json().then((user)=>{
                        setIsLoggedIn(true);
                        // signup(user)
                        console.log(user)
                    })
                }
            })
    }


    if (isLoggedIn) {
        return <Navigate to="/clerk" />;
      }


    return(
        <div className="log">
<form className="login-form" onSubmit={clerkLogin}>
  <h4>Clerk Login</h4>

  <label for="username" className="label"> Email</label>
  <div className="form-input-material">
    <input type="text" name="username" id="username" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} autocomplete="off" className="form-control-material" required /> 
  </div>

  <label for="password" className="label">Password</label>
  <div className="form-input-material">
    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} autocomplete="off" className="form-control-material" required />
  </div>

  <button type="submit" className="btn btn-primary btn-ghost">Login</button>

  <br/>

  <div className="foot-lnk">
        <Link to="/password/reset">Forgot Password?</Link>
    </div>

</form>
        </div>
    )
}