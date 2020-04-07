import React from 'react';

let art=null;

const frameStyle = {

    justifyContent: 'center',
    objectFit: 'scale-down',
    maxWidth: '382px',
    maxHeight: '475px',
    minWidth: '138px',
    minHeight: '200px',
    padding: '2%',
    margin: '1%',
    backgroundColor: '#692d03'

}

const frame = (props) => {
    art = props.art;
    return(
        <div style={frameStyle} >
            {art}
        </div>
    )
}

export default frame;