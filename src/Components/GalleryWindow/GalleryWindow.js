import React from 'react';

const galleryStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    minWidth: '85%',
    justifyContent: 'space-around'
}



const galleryWindow = (props) => {
    return(
        <div style={galleryStyle}>
            {props.children}
        </div>
    )
}

export default galleryWindow;