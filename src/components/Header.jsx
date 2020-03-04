import React from 'react';
import logo from '../img/logo_LaMallePoste.png';
import {
  Link
} from "react-router-dom";

const Header = ({ website} ) => {  
    
    return (
        <nav className="header navbar navbar-expand-lg container container-bg">
            <a className="navbar-brand" href={website.url}>
                <img src={logo} width="1043" height="243" alt={website.name} className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarLinks">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/les-affaires">Les affaires</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/les-marques">Les marques</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )
};

export default Header;