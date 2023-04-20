import React, {useState} from "react";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";

export default function MerchantSignup(){



    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)


    function merchantSignup(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/merchant/signup", {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, username, password }),
		})
        .then((r) => {
            if (r.status.created) {
              r.json().then((user) => {
                setIsRegistered(true)
                // signup(user)
            });
            }
          });
	}


    if(isRegistered){
       return <Navigate to="/merchant/login" />
    }





    return(
        <div className="log">

<form className="login-form" onSubmit={merchantSignup} >
  <h4>Merchant Signup</h4>

  <label for="username" className="label">Username</label>
  <div className="form-input-material">
    <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} autocomplete="off" className="form-control-material" required /> 
  </div>

  <label for="username" className="label">Email</label>
  <div className="form-input-material">
    <input type="text" name="email" id="username" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} autocomplete="off" className="form-control-material" required /> 
  </div>

  <label for="password" className="label">Password</label>
  <div className="form-input-material">
    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword} autocomplete="off" className="form-control-material" required />
  </div>

  <button type="submit" className="btn btn-primary btn-ghost">Login</button>

  <div className="foot-lnk">
        <Link to="/merchant/login">Already Registered?</Link>
    </div>

</form>

		</div>

   
    )
}