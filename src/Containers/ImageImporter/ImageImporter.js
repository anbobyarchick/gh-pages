import React from 'react';
import defaultDisplay from '../../assets/website-designs/watermarkSignature.png';
import { goodNaturePromotional  as promotionalImage} from '../../assets/website-designs/website-designs-index/website-designs-index';
import digitalIndex from '../../assets/artwork/digitalWork/digitalIndex';
import illustrationsArray from '../../assets/artwork/illustrations/illustrationsIndex';
import sketchbookIndex from '../../assets/artwork/SketchbookOne/sketchbookIndex';
import Frame from '../Frame/Frame';

let galleryPaths = [];

const imageImporter = (props) => {
    const clicked = props.clicked;

    switch(props.galleryName) {
        case 'digital':
            return (
                digitalIndex.map((artObj)=>
                    <Frame 
                        key={artObj.keyId} 
                        thumbnail={artObj.thumb} 
                        fullArt={artObj.full} 
                        clicked={clicked} 
                    />
                ));
        case 'illustration':
           return (
                illustrationsArray.map((artObj)=>
                    <Frame 
                        key={artObj.keyId} 
                        thumbnail={artObj.thumb} 
                        fullArt={artObj.full} 
                        clicked={clicked} 
                    />
                ));
        case 'sketchbook':
            return(
                sketchbookIndex.map((artObj)=>
                    <Frame 
                        key={artObj.keyId} 
                        thumbnail={artObj.thumb} 
                        fullArt={artObj.full} 
                        clicked={clicked} 
                    />
            ));
        case 'promotional':
            galleryPaths = promotionalImage;
                return(galleryPaths);
        default:
            return(
                <img src={defaultDisplay}  alt='default shrug' />
                );
    }
}

export default imageImporter;

