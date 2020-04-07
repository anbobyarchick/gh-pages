import React from 'react';
import digital from '../../assets/website-designs/digital_button_design.png';
import illustrated from '../../assets/website-designs/illustration_button_design.png';
import sketch from '../../assets/website-designs/sketch_button_design.png';
import promotional from '../../assets/website-designs/fragmented-rose-advertisement.png';

const buttonStyle = {
    position: 'relative',
    backgroundColor: '#692d03',
    justifyContent: 'center',
    maxWidth: '17%',
    marginLeft: '80%',
    maxHeight: '18%'
   
    // padding: '0px'
}

let clicker = null;
let gallery = null;
console.log('=====CHECKING CLICKER:'+clicker+' and GALLERY: '+gallery+' before GALLERYNAVBUTTON===============');
const galleryNavButton = (props) => {

    console.log('============THE '+props.galleryName+' GALLERY NAV BUTTON=============')

    gallery = props.galleryName;
    clicker = props.clicker;
    
    switch(gallery){
        case 'digital': 
            console.log('-------------digital switch hit--------------');
            gallery = digital;
            return(
                <div onClick={clicker}>
                    <img src={gallery} style={buttonStyle} alt='idk'></img>
                </div>
            );
           
        case 'illustrations': 
            console.log('-------------illustration switch hit--------------')
            gallery = illustrated;
            return(
                
                <div onClick={clicker} >
                    <img src={gallery} style={buttonStyle} alt='idk'></img>
                </div>
            );
            
        case 'sketchbook': 
        console.log('-------------sketchbook switch hit--------------')
            gallery = sketch;
            return(
                
                <div onClick={clicker} >
                    <img src={gallery} style={buttonStyle} alt='idk'></img>
                </div>
            );
        
        default: {
            console.log('-------------DEFAULT switch hit--------------')
            gallery = promotional;
            return(
                <div onClick={()=>clicker} >
                    <img src={gallery} style={buttonStyle} alt='idk'></img>
                </div>
            );
        }
    };

  
    

}

export default galleryNavButton;