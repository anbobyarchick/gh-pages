import React from 'react';
const boxArt = {
    maxHeight: '95%',
    maxWidth: '95%',
    // objectPosition: 'center',
    position: 'fixed',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const lightboxArt = (props) => {
    const art=props.art;
    return(
        // <div>
            <img  style={boxArt} src={art} alt="detail shrug" />
        // </div>
    )

}

export default lightboxArt;