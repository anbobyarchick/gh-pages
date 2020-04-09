import React from 'react';
import GallerySwitch from '../../Containers/ImageImporter/ImageImporter';



const galleryStyle = {
    position: 'left center',

    marginLeft: '5px',
    marginRight: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth:'80%',
    backgroundColor: '#38070f'

}



const galleryWindow = (props) => {
    const gallery = props.galleryName;
    
    return(
        <div style={galleryStyle}>
            <GallerySwitch gallery={gallery} />
        </div>
    )

}

export default galleryWindow;