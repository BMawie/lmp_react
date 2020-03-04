import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation} from "react-router";
import ProductDetail from '../ProductDetail';


const ProductView = props => {
    const { match } = props;
    let {productId} = match.params;
    let location = useLocation();
    const [product, setProduct] = useState(location.state.item);
    console.log(product);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
      const fetchProduct = async () => {
        setLoading(true);
        setError(false);
        try {
          const result = await axios.get(`${API_BASE_URL}/${productId}`);
          setProduct(result.data);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      };
      // Call the API
    //   fetchProduct();
    }, [productId]);
  
    return (
      <div>
        
        {loading && (
          <div style={{ color: `green` }}>
            loading book detail for book ID: <strong>{productId}</strong>
          </div>
        )}
        {error && (
          <div style={{ color: `red` }}>
            some error occurred, while fetching api
          </div>
        )}
        {product && <ProductDetail product={product} />}
      </div>
    );
  };

export default ProductView;