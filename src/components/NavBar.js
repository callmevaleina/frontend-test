import React from "react";
import "../styles/navbar.css"
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const userName = sessionStorage.getItem('username')
    const navigate = useNavigate();

    const logOut = () =>{
        sessionStorage.removeItem('username');
        navigate('/');
    }


    return (
        <nav className="navbar-container">
            <span>
            <i className="fa-solid fa-circle-user"></i>
                {userName}
            </span>
            <button className="button-logout" onClick={e => logOut()}><i className="fa-solid fa-right-from-bracket"></i></button>  
        </nav>
    );
};

export default NavBar;