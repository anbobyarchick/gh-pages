import React from 'react';

const lightboxArt = (props) => {
    const art=props.art;
    return(
        <div>
            <img src={art} alt="detail shrug" />
        </div>
    )

}

export default lightboxArt;