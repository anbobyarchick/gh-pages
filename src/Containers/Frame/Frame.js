import React from 'react';

let art=null;

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
    art = props.art;
    return(
        <img src={art} style={frameStyle} alt='shrug' />
    )
}

export default frame;