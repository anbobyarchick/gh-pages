import React from 'react';
import ImageImporter from '../../Containers/ImageImporter/ImageImporter';

let galleryName, showLightbox, setLightboxImage = null;


const galleryStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    minWidth: '85%',
    justifyContent: 'space-around'
    
    
    // position: 'left center',
    // backgroundRepeat: 'no-repeat',
    // marginLeft: '5%',
    // marginRight: '5px',
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // minWidth:'85%',
    // // backgroundColor: '#38070f'

}



const galleryWindow = (props) => {
    return(
        <div style={galleryStyle}>
            {props.children}
        </div>
    )
}

export default galleryWindow;