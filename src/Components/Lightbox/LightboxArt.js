import React from 'react';

const lightboxArt = (props) => {
    const fullArt = props.fullArt;
    console.log("MFfullArt");
    
    return(
        <div>
            <img src={fullArt} alt="detail shrug" />
        </div>
    )

}

export default lightboxArt;