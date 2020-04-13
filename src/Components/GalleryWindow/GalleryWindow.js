import React from 'react';
import ImageImporter from '../../Containers/ImageImporter/ImageImporter';
import backgroundDesign from '../../assets/website-designs/vines_background.png';



const galleryStyle = {
    position: 'left center',
    backgroundRepeat: 'no-repeat',
    marginLeft: '5%',
    marginRight: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth:'80%',
    // backgroundColor: '#38070f'

}



const galleryWindow = (props) => {
    const gallery = props.galleryName;
    
    return(
        <div style={galleryStyle}>
            <ImageImporter gallery={gallery} />
        </div>
    )

}

export default galleryWindow;