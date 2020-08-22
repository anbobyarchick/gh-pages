import React from 'react';
import defaultDisplay from '../../assets/website-designs/watermarkSignature.png';
import promotionalImage from '../../assets/website-designs/GN_Promotional_Logo.png';
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
            
                return(<img src={promotionalImage}  alt='default shrug' />);
        default:
            return(
                <img src={defaultDisplay}  alt='default shrug' />
                );
    }
}

export default imageImporter;

