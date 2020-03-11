import React, { useState } from 'react';
import { useLocation} from "react-router";
import CarouselEditSlide from '../carousel/CarouselEditSlide'

const CarouselEditionView = props => {
    let location = useLocation();
    const [items, setItems] = useState(location.state.items);
    const [item, setItem] = useState(items[0]);

    
    return (
        <CarouselEditSlide item={item} setItem={setItem} />
    )
  
}

export default CarouselEditionView;