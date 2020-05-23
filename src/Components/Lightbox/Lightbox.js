import React from 'react';

const lightboxStyle = {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
 

}

const lightbox = (props) => {
    if(props.showing){
    return(
        <div style={lightboxStyle} >
           {props.children}
        </div>
    )}
    return null;
}

export default lightbox;