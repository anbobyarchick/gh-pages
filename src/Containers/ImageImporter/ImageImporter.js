import React from 'react';
import defaultDisplay from '../../assets/website-designs/watermarkSignature.png';
import { goodNaturePromotional  as promotionalImage} from '../../assets/website-designs/website-designs-index/website-designs-index';
import {digitalIndex} from '../../assets/assetsIndex/assetIndex';
import illustrationsArray from '../../assets/artwork/illustrations/illustrationsIndex';
import sketchbookIndex from '../../assets/artwork/SketchbookOne/sketchbookIndex';

let galleryPaths = [];

const artStyle = {
        // justifyContent: 'space-around',
        // // objectFit: 'cover',
        // // maxWidth: '700px',
        // // // maxHeight: '600px',
        // minWidth: '450px',
        // minHeight: '200px',
}

const promotionalStyle = {
    margin: '5%',
    objectFit: 'scale-down'


}

const imageImporter = (props) => {
    const clicked = props.clicked;

    switch(props.galleryName) {
        case 'digital':
            galleryPaths = digitalIndex.map((path)=> 
                <img src={path.thumb} alt="thumbnail"  />
            )
           
            return(galleryPaths); 
        case 'illustration':
            
            galleryPaths = illustrationsArray.map((art)=>

            <img src={art.thumb} alt='thumbnail shrug' key={art.full} onClick={()=>clicked} />
            
            );
            return(galleryPaths);
        case 'sketchbook':
            galleryPaths = sketchbookIndex.map((art)=>

            <img src={art.thumb} alt='thumbnail shrug' key={art.full} onClick={clicked} />
            
            );
            return(galleryPaths);
        case 'promotional':
            galleryPaths = promotionalImage;
            return(galleryPaths);
            
        default:
            return(<img src={defaultDisplay}  alt='default shrug' />);
    }
}

export default imageImporter;

