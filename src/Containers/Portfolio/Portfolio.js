import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';
import {digitalGalleryButton, illustrationsGalleryButton, sketchbookGalleryButton, digitalButtonOn, illustrationsButtonOn, sketchbookButtonOn } from '../../assets/website-designs/website-designs-index/website-designs-index';


const buttonStyleTop = {
    position: 'fixed',
    top: '30%',
    right: '1%',
    // backgroundColor: '#692d03',
    // justifyContent: 'center',
    maxWidth: '18%',
    height: '15%',
    objectFit: 'scale-down'

}
const buttonStyleMiddle = {
    position: 'fixed',
    top: '50%',
    right: '1%',
    // backgroundColor: '#692d03',
    // justifyContent: 'center',
    height: '15%',
    maxWidth: '18%',
    objectFit: 'scale-down'

}    
const buttonStyleBottom = {
    position: 'fixed',
    top: '70%',
    right: '1%',
    // backgroundColor: '#692d03',
    // justifyContent: 'center',
    height: '15%',
    maxWidth: '18%',
    objectFit: 'scale-down'


}    

class Portfolio extends Component {

    state = {
        currentGallery: 'promotional'
    }
    
    toggleArtwork = (gallery, clickedButton) => {
        
        this.setState({
            currentGallery: gallery        
        });
        console.log(this.state);

    }

    buttonToggleCheck = (gallery) => {
        if (gallery !== this.state.currentGallery) {
            return false;
        }
        return true;
    }


           

    render () {
        return (
            <Aux>
                <GalleryWindow galleryName={this.state.currentGallery}/>

                <GalleryNavButton 
                    buttonStyle = {buttonStyleTop} 
                    buttonBright={digitalButtonOn} 
                    buttonDark={digitalGalleryButton} 
                    galleryName={'digital'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck} 
                   />

                <GalleryNavButton 
                    buttonStyle = {buttonStyleMiddle} 
                    buttonBright={illustrationsButtonOn} 
                    buttonDark={illustrationsGalleryButton} 
                    galleryName={'illustration'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck}
                    />

                <GalleryNavButton 
                    buttonStyle = {buttonStyleBottom} 
                    buttonBright={sketchbookButtonOn} 
                    buttonDark={sketchbookGalleryButton} 
                    galleryName={'sketchbook'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck}
                    />

            </Aux>
        )}

}

export default Portfolio;