import React from 'react';

// const lightboxStyle = {
//     zIndex: '500',
//     backgroundColor: 'white',
//     width: '70%',
//     boxShadow: '1px 1px 1px black',
//     padding: '16px',

// }

const lightbox = (props) => {
    if(props.showing){
    return(
        <div style={{
            transform: props.showing ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.showing ? '1':'0',
            zIndex: props.showing ? '500': '-1',
            backgroundColor: 'white',
            width: '70%',
            boxShadow: '1px 1px 1px black',
            padding: '16px',

        }} >
           {props.children}
        </div>
    )}
    return null;
}

export default lightbox;