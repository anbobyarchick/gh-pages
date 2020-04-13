import React from 'react';







const GalleryNavButton = (props) => {


    const { galleryName, clicked, buttonDark , buttonStyle, buttonBright, toggled} = props;
    
    
    if (toggled(galleryName)) {
        return (
            <div onClick={()=>clicked(galleryName)}>
                <img src={buttonBright} style={buttonStyle} alt='idk'/>                
            </div>
        )}
        return(
            <div onClick={()=>clicked(galleryName)}>
                    <img src={buttonDark} style={buttonStyle} alt='idk'/>                
            </div>
        );

  
    

}

export default GalleryNavButton;