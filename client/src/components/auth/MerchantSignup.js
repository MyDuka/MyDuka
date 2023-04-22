import React, {useState} from "react";
import './Auth.css'
import { Link, Navigate } from "react-router-dom";

export default function MerchantSignup(){



    
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)

    // const data ={
    //     "username": username,
    //     "email": email,
    //     "password": password,
    // }


    function merchantSignup(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/merchant/signup",{
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({username, email, password,})
		})
        .then((r) => {
            if (r.status.created){
              return r.json().then((user)=>{
                console.log(user)
                setIsRegistered(true)
              })
            }
          })
        //   .then((user) => {
        //     console.log(user)
        //     setIsRegistered(true)
        //     // signup(user)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
	}


    if(isRegistered){
       return <Navigate to="/merchant/login" />
    }





    return(

<div className="bckgrd">

        {/* <Navbar/> */}

        <div>
            <Link to="/" className="logoIn">MyDuka</Link>
            {/* <h3 > <Link>Go back </Link> </h3> */}   
        </div>

 

        <div className="log">

            <form className="login-form" onSubmit={merchantSignup} >
                <h4>Merchant Signup</h4>

                <label for="username" className="label">Username</label>
                <div className="form-input-material">
                    <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} autoComplete="off" className="form-control-material"  /> 
                </div>

                <label for="username" className="label">Email</label>
                <div className="form-input-material">
                    <input type="text" name="email" id="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="off" className="form-control-material" /> 
                </div>

                <label for="password" className="label">Password</label>
                <div className="form-input-material">
                    <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" className="form-control-material"  />
                </div>

                <button type="submit" className="btn btn-primary btn-ghost">Sign up</button>

                <div className="foot-lnk">
                    <Link className="foot-lnk" to="/merchant/login">Already Registered?</Link>
                </div>

            </form>

		</div>
        </div>
   
    )
}