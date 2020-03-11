import React from 'react';

const ProductDetail = ({ product } ) => {  
    
    return (
        <div className="product padding-bottom">
            <div className="product_image">
                <img width="600" height="655" src={product.image} alt={product.name} title={product.name} />                
            </div>
            <div className="summary">
                <h1 className="product_title">{product.name}</h1>
                
                <p className="price">
                    <span className="amount del">{product.price}<span>€</span></span>
                    &nbsp;
                    <span className="amount ins">{product.sale}<span>€</span></span>
                </p>
                <div className="product-details content">
                    <p>{product.details}</p>
                    <p>{product.description}</p>
                    <p>&nbsp;</p>
                    <p>{product.delivery}</p>
                </div>
            </div>
            <div className="product-description clearfix ">
                <div className="tabs">
                    <h3>Description</h3>
                </div>
                <div className="content">	
                    <p>{product.description2}</p>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;