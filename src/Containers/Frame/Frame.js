import React from 'react';
import ImageImporter from '../ImageImporter/ImageImporter';

// let art = null;
// let full = null;
// let showLightbox = null;
// let setLightbox = null;

const frameStyle = {

    width: '800px',
    height: '150px',
    objectFit: 'contain',
    objectPosition: 'space-around',
    justifyContent: 'center'




}

const frame = (props) => {
    const fullArt = props.fullArt;
    const clicked = props.clicked;
    return(
        <div  onClick={() => clicked(fullArt)} >
           <img src={props.thumbnail} alt="frame shrug" style={frameStyle}/> 
        </div>
    )
}

export default frame;