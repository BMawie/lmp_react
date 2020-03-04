import React from 'react';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

const style1 = {
    backgroundImage: `url(${image1})`
};
const style2 = {
    backgroundImage: `url(${image2})`
};
const style3 = {
    backgroundImage: `url(${image3})`
};

const Brands = ({ name }) => {

    return (
        <div className="container brands">
            <div className="row">
                <div className="col-sm brand block_first">
                    <div style={ style1 } className="background">
                        <a href="http://fr.longchamp.com" 
                            className="nav-link" target="_blank" rel="noopener noreferrer">
                            <h2>Longchamp</h2>
                            <h6>Aller sur le site ></h6>
                        </a>
                    </div>
                </div>
                <div className="col-sm brand block_middle">
                    <div style={ style2 } className="background">
                        <a href="http://fr.lancaster.com" 
                            className="nav-link" target="_blank" rel="noopener noreferrer">
                            <h2>Lancaster</h2>
                            <h6>Aller sur le site ></h6>
                        </a>
                    </div>
                </div>
                <div className="col-sm brand block_last">
                    <div style={ style3 } className="background">
                        <a href="http://samsonite.fr/home/" 
                            className="nav-link" target="_blank" rel="noopener noreferrer">
                            <h2>Samsonite</h2>
                            <h6>Aller sur le site ></h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default Brands;