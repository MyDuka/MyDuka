import React, { useState} from "react";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";




export default function AdminLogin({signIn}){



    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [invalid,setInvalid] =useState(false);


    function adminLogin(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/admin/login",{
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
                        signIn(user)
                        console.log(user)
                        const admin_id = user.id
                        sessionStorage.setItem('admin_id', admin_id);
                    })
                }else{
                    setInvalid(true)
                }
            })
    }


    if (isLoggedIn) {
        return <Navigate to="/admin/dashboard" />;
      }









    return(
            <div className="bckgrd">

                <div>
                    <Link className="logoIn" to="/">MyDuka</Link>
                    {/* <h3 > <Link>Go back </Link> </h3> */}  
                </div>

                <div className="log">

                    <form className="login-form" onSubmit={adminLogin}>
                    
                    <h4 className="login-label">Admin Login</h4>
                    {/* <label for="username" className="input-label">Enter Email</label> */}
                    <div className="form-input-material">
                        <input type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} autoComplete="off" 
                            className="login-input" />
                    </div>

                    {/* <label for="password" className="input-label">Input Password</label> */}
                    <div className="form-input-material">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} autoComplete="off" 
                            className="login-input" />
                    </div>
                    <button 
                        type="submit" 
                        className="login-button"
                        >
                        Login
                    </button>

                        {/* <div className="hr"></div> */}
                        <div className="foot-lnk">
                        <p id="msg">{invalid? "Invalid email or password": null }</p>
                            <Link className="footer" to="/password/reset">Forgot Password?</Link>
                        </div>
                    </form>
  
        </div>

        </div>
    )
}