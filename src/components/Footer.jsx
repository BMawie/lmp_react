import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import {
  Link
} from "react-router-dom";


const Footer = ({ website }) => {

    return (
        <div className="container footer container-bg">
            <div className="row">
                <div className="col-sm">
                    <span className="nav-link">
                        { website.address }
                    </span>
                </div>
                { website.hasContacts && 
                    <div className="col-sm">
                        <Link className="nav-link" to="/contact">Nous Contacter</Link>
                    </div>
                }
                { website.hasDeals && 
                    <div className="col-sm">
                        <Link className="nav-link" to="/les-affaires">Les Affaires</Link>
                    </div>
                }
            </div>
            <div className="row">
                <div className="col-sm">
                    <span className="nav-link">
                        N° { website.phone }
                    </span>
                </div>
                { website.hasFacebook && 
                    <div className="col-sm">
                        <span>
                            <a href={ website.facebookUrl } 
                                className="nav-link" target="_blank" rel="noopener noreferrer">
                                Facebook <FontAwesomeIcon icon={faFacebookSquare} /> 
                            </a>
                        </span>
                    </div>
                }
                { website.hasBrands && 
                    <div className="col-sm">
                        <Link className="nav-link" to="/les-marques">Les Marques</Link>
                    </div>
                }
            </div>
        </div>
    )
  
}

export default Footer;