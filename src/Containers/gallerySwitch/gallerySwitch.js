// This Container manages the artwork being displayed in the gallery
// It limits artwork size and holds the details for the artwork within it by managing state

import React from 'react';
import sketchbookGallery from '../../assets/assetsIndex/assetsIndex';
import illustrationGallery from '../../assets/artwork/illustrations/illustrationsIndex';
import digitalGallery from '../../assets/artwork/digitalWork/digitalIndex';
import promotion from '../../assets/website-designs/watermarkSignature.png'
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

        default:
            return(<img src={promotion} style={artStyle} alt='default shrug' />);
    }
}

export default imageImporter;

