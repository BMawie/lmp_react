import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from '../ItemTypes'

const style = {
    position: 'absolute',
    border: '1px dashed gray',
    cursor: 'move',
    fontSize: 16,
    color: 'red',
    textTransform: 'uppercase',
    display: 'inline-block',
    padding: '.5em 0',
    fontWeight: 700
  }
  
const CarouselEditPositions = ({ id, left, top, color, fontSize, fontWeight, children, order }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, color, fontSize, fontWeight, order, type: ItemTypes.CAROUSEL },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    })
    if (isDragging) {
        return <div ref={drag} />
    }

    return (
        <div ref={drag} style={{ ...style, left, top, color, fontSize, fontWeight }}>
            {children}-{fontSize}
        </div>
    )
}
  
export default CarouselEditPositions;