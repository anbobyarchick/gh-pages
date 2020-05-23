import React from 'react';







const GalleryNavButton = (props) => {


    const { galleryName, clicked, buttonDark , buttonStyle, buttonBright, toggled} = props;
    
    
    if (toggled(galleryName)) {
        return (
            <div style={buttonStyle} onClick={()=>clicked(galleryName)}>
                <img src={buttonBright}  alt='idk'/>                
            </div>
        )}
        return(
            <div style={buttonStyle} onClick={()=>clicked(galleryName)}>
                    <img src={buttonDark}  alt='idk'/>                
            </div>
        );

  
    

}

export default GalleryNavButton;