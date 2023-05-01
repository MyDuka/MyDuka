import React, { useState} from "react";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";

export default function MerchantLogin({signIn}){

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
        fetch("https://myduka.onrender.com/merchant/login",{
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
                        const merchant_id = user.id
                        sessionStorage.setItem('merchant_id', merchant_id);
                        signIn(user)

                    })
                }else{
                    setInvalid(true)
                    setIsLoggedIn(false);

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
            <h4 className="login-label">Merchant Login</h4>

            
            <div className="form-input-material">
                <input 
                type="text" 
                name="email" 
                id="username" 
                placeholder="Username" 
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
                onChange={(e)=> setPassword(e.target.value)} 
                autoComplete="off" 
                className="login-input" />
            </div>

            <button type="submit" className="login-button">Login</button>

            
            <div className="foot-lnk">
                <p id="msg">{invalid? "Invalid email or password": null }</p>

                <div></div>

                <Link className="footer" to="/merchant/signup">Register</Link>
                
                <div></div>
                
                <Link className="footer" to="/password/reset">Forgot Password?</Link>
                </div>

        </form>
        
        </div>

    </div>
    )
}

