import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Product from './Product'
import update from 'immutability-helper'

const styles = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative',
}

const Products = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 80, title: 'Drag me around' },
    b: { top: 180, left: 20, title: 'Drag me too' },
  })
  const [, drop] = useDrop({
    accept: ItemTypes.PRODUCT,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key]
        return (
          <Product
            key={key}
            id={key}
            left={left}
            top={top}
          >
            {title}
          </Product>
        )
      })}
    </div>
  )
}
export default Products;
