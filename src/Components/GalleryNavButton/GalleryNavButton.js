import React from 'react';







const GalleryNavButton = (props) => {


    const { galleryName, clicked, source , buttonStyle} = props;

 
            return(
                <div onClick={()=>clicked(galleryName)}>
                    <img src={source} style={buttonStyle} alt='idk'/>
                </div>
            );


  
    

}

export default GalleryNavButton;