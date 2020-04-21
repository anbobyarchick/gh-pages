// This Container manages the artwork being displayed in the gallery
// It limits artwork size and holds the details for the artwork within it by managing state

import React from 'react';
import sketchbookGallery from '../../assets/assetsIndex/assetsIndex';
import illustrationGallery from '../../assets/artwork/illustrations/illustrationsIndex';
import digitalGallery from '../../assets/artwork/digitalWork/digitalIndex';
import defaultDisplay from '../../assets/website-designs/watermarkSignature.png';
import { goodNaturePromotional  as promotionalImage} from '../../assets/website-designs/website-designs-index/website-designs-index';
import Frame from '../Frame/Frame';

let galleryName = null;
let galleryPaths = [];
let artwork = [];
let framedArt = [];

const artStyle = {

        justifyContent: 'space-around',
        objectFit: 'scale-down',
        maxWidth: '382px',
        maxHeight: '475px',
        minWidth: '138px',
        minHeight: '200px',
    
}

const promotionalStyle = {
    margin: '5%',
    objectFit: 'scale-down'


}
const imageImporter = (props) => {

    galleryName = props.gallery;

    switch(galleryName) {
        case 'digital':
            galleryPaths = digitalGallery;
            artwork = galleryPaths.map((path)=><img src={path} style={artStyle} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        case 'illustration':
            galleryPaths = illustrationGallery;
            artwork = galleryPaths.map((path)=><img src={path} style={artStyle} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        case 'sketchbook':
            galleryPaths = sketchbookGallery;
            artwork = galleryPaths.map((path)=><img src={path} style={artStyle} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);

        case 'promotional':
            galleryPaths = promotionalImage;
            return(<Frame art={(<img src={galleryPaths} style={promotionalStyle} alt='promotional' />)} />);
            
        default:
            return(<img src={defaultDisplay}  alt='default shrug' />);
    }
}

export default imageImporter;

