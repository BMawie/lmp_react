import React, { useEffect, useRef } from 'react';
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import ItemTypes from '../ItemTypes'
import CarouselEditPositions from './CarouselEditPositions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont } from '@fortawesome/free-solid-svg-icons'

const styleBox = {
    width: '100%',
    minHeight: 300,
    border: '1px solid black',
    position: 'relative',
  }
  
const CarouselEditSlide = props => {
    const item = props.item

    const handleChangeFile = (event) => {
        event.preventDefault()
        props.setItem(update(item, {$merge: {image: URL.createObjectURL(event.target.files[0]) }}))
    }
    const handleChangeTitle = (event) => {
        props.setItem(update(item, {$merge: {title: event.target.value }}))
    }
    const handleChangeTitleColor = (event) => {
        const copy = Object.assign({}, item.titleStyle);
        props.setItem(update(item, {$merge: {titleStyle: { top: copy.top, left: copy.left, color: event.target.value, fontSize: copy.fontSize, fontWeight: copy.fontWeight } }}))
    }
    const handleChangeTitleFontSize = (event) => {
        const copy = Object.assign({}, item.titleStyle);
        props.setItem(update(item, {$merge: {titleStyle: { top: copy.top, left: copy.left, color: copy.color, fontSize: parseInt(event.target.value), fontWeight: copy.fontWeight } }}))
    }
    const handleChangeTitleFontWeight = (event) => {
        const copy = Object.assign({}, item.titleStyle);
        props.setItem(update(item, {$merge: {titleStyle: { top: copy.top, left: copy.left, color: copy.color, fontSize: copy.fontSize, fontWeight: event.target.value } }}))
    }
    const handleChangeDescription = (event) => {
        props.setItem(update(item, {$merge: {description: event.target.value }}))
    }
    const handleChangeDescColor = (event) => {
        const copy = Object.assign({}, item.descStyle);
        props.setItem(update(item, {$merge: {descStyle: { top: copy.top, left: copy.left, color: event.target.value, fontSize: copy.fontSize, fontWeight: copy.fontWeight } }}))
    }
    const handleChangeDescFontSize = (event) => {
        const copy = Object.assign({}, item.descStyle);
        props.setItem(update(item, {$merge: {descStyle: { top: copy.top, left: copy.left, color: copy.color, fontSize: parseInt(event.target.value), fontWeight: copy.fontWeight } }}))
    }
    const handleChangeDescFontWeight = (event) => {
        const copy = Object.assign({}, item.descStyle);
        props.setItem(update(item, {$merge: {descStyle: { top: copy.top, left: copy.left, color: copy.color, fontSize: copy.fontSize, fontWeight: event.target.value } }}))
    }
    const handleSubmit = (event) => {
        console.log('Un essai a été envoyé : ' + this.state);
        event.preventDefault();
    }
    
    const [, drop] = useDrop({
        accept: ItemTypes.CAROUSEL,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            const left = Math.round(item.left + delta.x)
            const top = Math.round(item.top + delta.y)
            if (item.order === 'title') {
                moveTitle(item.id, left, top, item.color, item.fontSize, item.fontWeight)
            }
            if (item.order === 'desc') {
                moveDescription(item.id, left, top, item.color, item.fontSize, item.fontWeight)
            }
            return undefined
        }
    })
    const moveTitle = (id, left, top, color, fontSize, fontWeight) => {
        props.setItem(update(item, {$merge: {titleStyle: { top, left, color, fontSize, fontWeight } }}))
    }
    const moveDescription = (id, left, top, color, fontSize, fontWeight) => {
        props.setItem(update(item, {$merge: {descStyle: { top, left, color, fontSize, fontWeight } }}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input type="file" className="form-control-file" id="image" 
                            onChange={handleChangeFile} accept=".png,.gif,.jpg,.jpeg" />
                    </div>                    
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Titre</label>
                        
                    <div className="col-sm-1">
                        <div className="inline">
                            <button type="button" className="btn-transparent">
                                <FontAwesomeIcon icon={faFont} size="2x" className="wysiwyg" color={item.titleStyle.color} />
                            </button>
                            <input type="color" className="form-control absolute" id="color" 
                                value={item.titleStyle.color} onChange={handleChangeTitleColor} />
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <input type="number" className="form-control" id="fontSize" 
                            value={item.titleStyle.fontSize} onChange={handleChangeTitleFontSize} />
                    </div>
                    <div className="col-sm-2">
                        <select value={item.titleStyle.fontWeight} className="form-control" id="fontWeightTitle" 
                            onChange={handleChangeTitleFontWeight}>
                            <option value="300">Fin 300</option>
                            <option value="400">Normal 400</option>
                            <option value="600">Epais 600</option>
                            <option value="700">Gras 700</option>
                            <option value="800">Extra gras 800</option>
                        </select>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <input type="title" className="form-control" id="title" 
                            value={item.title} onChange={handleChangeTitle} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description</label>
                        
                    <div className="col-sm-1">
                        <div className="inline">
                            <button type="button" className="btn-transparent">
                                <FontAwesomeIcon icon={faFont} size="2x" className="wysiwyg" color={item.descStyle.color} />
                            </button>
                            <input type="color" className="form-control absolute" id="color" 
                                value={item.descStyle.color} onChange={handleChangeDescColor} />
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <input type="number" className="form-control" id="fontSizeDesc" 
                            value={item.descStyle.fontSize} onChange={handleChangeDescFontSize} />
                    </div>
                    <div className="col-sm-2">
                        <select value={item.descStyle.fontWeight} className="form-control" id="fontWeightDesc" 
                            onChange={handleChangeDescFontWeight}>
                            <option value="300">Fin 300</option>
                            <option value="400">Normal 400</option>
                            <option value="600">Epais 600</option>
                            <option value="700">Gras 700</option>
                            <option value="800">Extra gras 800</option>
                        </select>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-2"></div>

                    <div className="col-sm-10">
                        <input type="description" className="form-control" id="description" value={item.description} onChange={handleChangeDescription} />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

            <div ref={drop} style={styleBox}>
                <img className="d-block w-100" src={item.image} alt={item.title} />
                <CarouselEditPositions id={item.id} left={item.titleStyle.left} top={item.titleStyle.top} 
                    color={item.titleStyle.color} fontSize={item.titleStyle.fontSize} fontWeight={item.titleStyle.fontWeight} order='title'>
                    {item.title}
                </CarouselEditPositions>
                <CarouselEditPositions id={item.id} left={item.descStyle.left} top={item.descStyle.top} 
                    color={item.descStyle.color} fontSize={item.descStyle.fontSize} fontWeight={item.descStyle.fontWeight} order='desc'>
                    {item.description}
                </CarouselEditPositions>
            </div>
        </div>
    )
  
}

export default CarouselEditSlide;