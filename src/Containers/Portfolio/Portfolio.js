import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';
import {digitalGalleryButton, illustrationsGalleryButton, sketchbookGalleryButton, digitalButtonOn, illustrationsButtonOn, sketchbookButtonOn } from '../../assets/website-designs/website-designs-index/website-designs-index';
import ButtonBox from '../../Components/ButtonBox/ButtonBox';

const buttonStyleDigital = {
    // // position: 'fixed',
    // top: '20%',
    // // right: '1%',
    // // backgroundColor: '#692d03',
    // // justifyContent: 'center',
    // maxWidth: '33%',
    // height: '15%',
    // objectFit: 'scale-down'

}
const buttonStyleIllustrations = {
    // // position: 'fixed',
    // top: '20%',
    // // right: '1%',
    // // backgroundColor: '#692d03',
    // // justifyContent: 'center',
    // height: '15%',
    // maxWidth: '33%',
    // objectFit: 'scale-down'

}    
const buttonStyleSketchbooks = {
    // // position: 'fixed',
    // top: '20%',
    // // right: '1%',
    // // backgroundColor: '#692d03',
    // // justifyContent: 'center',
    // height: '15%',
    // maxWidth: '33%',
    // objectFit: 'scale-down'


}    

class Portfolio extends Component {

    state = {
        currentGallery: 'promotional',
        showLightbox: false
    }
    
    lightboxOn = () => {
        this.setState({
            showLightbox: true
        });
    }

    lightboxOff = () => {
        this.setState({
            showLightbox: false
        });
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
                
            <ButtonBox>
                <GalleryNavButton 
                    buttonStyle = {buttonStyleDigital} 
                    buttonBright={digitalButtonOn} 
                    buttonDark={digitalGalleryButton} 
                    galleryName={'digital'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck} 
                   />

                <GalleryNavButton 
                    buttonStyle = {buttonStyleIllustrations} 
                    buttonBright={illustrationsButtonOn} 
                    buttonDark={illustrationsGalleryButton} 
                    galleryName={'illustration'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck}
                    />

                <GalleryNavButton 
                    buttonStyle = {buttonStyleSketchbooks} 
                    buttonBright={sketchbookButtonOn} 
                    buttonDark={sketchbookGalleryButton} 
                    galleryName={'sketchbook'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck}
                    />
                    </ButtonBox>
                <GalleryWindow galleryName={this.state.currentGallery}/>
            </Aux>
        )}

}

export default Portfolio;