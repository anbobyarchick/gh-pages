import React from 'react';
import defaultDisplay from '../../assets/website-designs/watermarkSignature.png';
import { goodNaturePromotional  as promotionalImage} from '../../assets/website-designs/website-designs-index/website-designs-index';
import Frame from '../Frame/Frame';
import {digitalIndex} from '../../assets/assetsIndex/assetIndex';
import illustrationsArray from '../../assets/artwork/illustrations/illustrationsIndex';
import sketchbookIndex from '../../assets/artwork/SketchbookOne/sketchbookIndex';

let galleryName = null;
let galleryPaths = [];
let artwork = [];
let framedArt = [];
let thumbs = [];

const artStyle = {

        justifyContent: 'space-around',
        objectFit: 'cover',
        // maxWidth: '700px',
        // // maxHeight: '600px',
        // minWidth: '138px',
        // minHeight: '200px',
    
}

const promotionalStyle = {
    margin: '5%',
    objectFit: 'scale-down'


}
const imageImporter = (props) => {

    galleryName = props.gallery;

    switch(galleryName) {
        case 'digital':
            galleryPaths = digitalIndex;
            artwork = galleryPaths.map((path)=><img src={path} style={artStyle} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        case 'illustration':
            galleryPaths = illustrationsArray;

            thumbs = galleryPaths.map(path => path.thumb);

            artwork = thumbs.map((path)=><img src={path} style={artStyle} alt='shrug' />);
            framedArt = artwork.map((art)=><Frame art={art} />);
            return(framedArt);
            
        case 'sketchbook':
            galleryPaths = sketchbookIndex;

            thumbs = galleryPaths.map(path => path.thumb);

            artwork = thumbs.map((path)=><img src={path} style={artStyle} alt='shrug' />);
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

