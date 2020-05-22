import React from 'react';
import ImageImporter from '../ImageImporter/ImageImporter';

// let art = null;
// let full = null;
// let showLightbox = null;
// let setLightbox = null;

const frameStyle = {

    justifyContent: 'center',
    objectFit: 'cover',
    maxWidth: '382px',
    maxHeight: '475px',
    minWidth: '450px',
    minHeight: '200px',
    padding: '2%',
    margin: '1%',
    // backgroundColor: '#300f16'

}

const frame = (props) => {

    return(
        <div style={frameStyle} onClick={props.clicked}>
           {props.children}
        </div>)
}

export default frame;