import React from 'react';
import { useDrag } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

const Product = ({ id, left, top, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.PRODUCT },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  )
}

export default Product;