import React, { useState} from "react";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";

export default function MerchantLogin(){

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [invalid,setInvalid] =useState(false)


    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     if (name === 'username') {
    //       setUsername(value);
    //     } else if (name === 'email') {
    //       setEmail(value);
    //   }


    function merchantLogin(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/merchant/login",{
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
                }else{
                    setInvalid(true)
                }
            })
    }


    if (isLoggedIn) {
        return <Navigate to="/merchant" />;
      }



    return(
<div className="bckgrd">


        <div>
            <Link className="logoIn" to="/">MyDuka</Link>
            {/* <h3 > <Link>Go back </Link> </h3> */}  
        </div>


        <div className="log">
        <form className="login-form" onSubmit={merchantLogin}>
            <h4>Merchant Login</h4>

            <label for="username" className="label">Email</label>
            <div className="form-input-material">
                <input type="text" name="email" id="username" placeholder="Username" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="off" className="form-control-material" /> 
            </div>

            <label for="password" className="label">Password</label>
            <div className="form-input-material">
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="off" className="form-control-material" />
            </div>

            <button type="submit" className="btn btn-primary btn-ghost">Login</button>

            <div className="hr"></div>

            <div className="foot-lnk">
                <p id="msg">{invalid? "Invalid email or password": null }</p>

                <div className="hr"></div>

                <Link className="footer" to="/merchant/signup">Register</Link>
                
                <div className="hr"></div>
                
                <Link className="footer" to="/password/reset">Forgot Password?</Link>
                </div>

        </form>
        
        </div>

    </div>
    )
}

