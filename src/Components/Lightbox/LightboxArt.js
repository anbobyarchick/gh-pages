import React from 'react';
const boxArt = {
    maxHeight: '95%',
    maxWidth: '95%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const lightboxArt = (props) => {
    const art=props.art;
    return(
            <img  style={boxArt} src={art} alt="detail shrug" />
    )

}

export default lightboxArt;