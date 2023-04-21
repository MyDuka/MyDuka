import React from "react"; 
import { Link } from "react-router-dom";

export default function LandingpageNavbar(){

    return(
        <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    MyDuka
                </a>

                <div className="btn-group me">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                     </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/admin/login" >Admin</Link></li>
                        <li><Link className="dropdown-item"  to="/clerk/login">Clerk</Link></li>
                        <li><Link className="dropdown-item" to="/merchant/login" >Merchant</Link></li>
                    </ul>
                </div>



            </div>           
        </nav>
        </>
    )
}