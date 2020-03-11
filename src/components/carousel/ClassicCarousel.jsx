import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../img/carousel_1.jpg';
import carousel2 from '../../img/carousel_2.jpg';
import carousel3 from '../../img/carousel_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import {
  Link
} from "react-router-dom";


const ClassicCarousel = ({ name }) => {
    const [items, setItems] = useState([{
            id: "1",
            image: carousel1,
            title: "First slide label",
            titleStyle: {color: "#ffffff", top: 66, left: 120, fontSize: 24, fontWeight: 700},
            descStyle: {color: "#ffffff", top: 86, left: 60, fontSize: 20, fontWeight: 400},
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {   id: "2",
            image: carousel2,
            title: "Second slide label",
            titleStyle: {color: "#ffffff", top: 66, left: 120, fontSize: 24, fontWeight: 700},
            descStyle: {color: "#ffffff", top: 86, left: 60, fontSize: 20, fontWeight: 400},
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        } ,
        {   id: "3",
            image: carousel3,
            title: "Third slide label",
            titleStyle: {color: "#ffffff", top: 66, left: 120, fontSize: 24, fontWeight: 700},
            descStyle: {color: "#ffffff", top: 86, left: 60, fontSize: 20, fontWeight: 400},
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }      
    ]);

    
  const carouselItems = []
  for (const [index, item] of items.entries()) {
    carouselItems.push(
        <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.image} alt={item.title} />
            <Carousel.Caption>
                <h3 style={item.titleStyle}>{item.title}</h3>
                <h4 style={item.descStyle}>{item.description}</h4>
            </Carousel.Caption>
        </Carousel.Item>)
  }


    return (
        <div>
            <Carousel>
                {carouselItems}
            </Carousel>
            <Link className="carousel_edit_btn" to={{ pathname: `carousel-edition`, state: { items, isAdmin: true } }}>
                <FontAwesomeIcon icon={faPenSquare}  size="2x" />
            </Link>
        </div>
    )
  
}

export default ClassicCarousel;