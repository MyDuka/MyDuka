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
		fetch("https://myduka.onrender.com/merchants", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                 username: username,
                 email: email, 
                password: password, 
            }),
		})
        .then((r) => {
            if (r.status === 201) {
              r.json().then((user) => {
                setIsRegistered(true)
                // signup(user)
                console.log(user)
            });
            }
          });
	}


    if(isRegistered){
       return <Navigate to="/merchant/login" />
    }





    return(

        <div className="bckgrd">

        <div>
            <Link className="logoIn" to="/">MyDuka</Link>
            {/* <h3 > <Link>Go back </Link> </h3> */}  
        </div>           

        <div className="log">

            <form className="login-form" onSubmit={merchantSignup} >
                <h4 className="login-label">Merchant Signup</h4>


                <div className="form-input-material">
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value)} 
                    autoComplete="off" 
                    className="login-input" required /> 
                </div>

                
                <div className="form-input-material">
                    <input 
                    type="text" 
                    name="email" 
                    id="username" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    autoComplete="off" 
                    className="login-input" /> 
                </div>

                <div className="form-input-material">
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    autoComplete="off" 
                    className="login-input"  />
                </div>

                <button type="submit" className="login-button">Sign Up</button>
                
                <div className="foot-lnk">
                    <Link className="footer" to="/merchant/login">Already Registered?</Link>
                </div>

            </form>

		</div>

        </div>

   
    )
}