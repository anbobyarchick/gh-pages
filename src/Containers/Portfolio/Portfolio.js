import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';
import {digitalGalleryButton, illustrationsGalleryButton, sketchbookGalleryButton, digitalButtonOn, illustrationsButtonOn, sketchbookButtonOn } from '../../assets/website-designs/website-designs-index/website-designs-index';
import ButtonBox from '../../Components/ButtonBox/ButtonBox';
import Lightbox from '../../Components/Lightbox/Lightbox';
import ImageImporter from '../ImageImporter/ImageImporter';
import LightboxArt from '../../Components/Lightbox/LightboxArt';


const buttonStyle = {
    minWidth: '30%',
    objectFit: 'scale-down',
    justifyContent: 'center',
    margin: '10px'
}    

class Portfolio extends Component {

    state = {
        currentGallery: 'promotional',
        showLightbox: false,
        fullArt: ""
    }

    toggleArtwork = (gallery, clickedButton) => {
        
        this.setState({
            currentGallery: gallery        
        });

    }

    buttonToggleCheck = (gallery) => {
        if (gallery !== this.state.currentGallery) {
            return false;
        }
        return true;
    }


    closeLightbox = () => {
        this.setState({
            showLightbox: false
        })
    }

    viewFullArt = (fullArt) => {
        
        this.setState({
            fullArt: fullArt,
            showLightbox:true
        });

    }


    render () {
        return (
            <Aux>

            <Lightbox 
                showing={this.state.showLightbox} 
                art={this.state.fullArt} 
                click={this.closeLightbox} >
                    <LightboxArt art={this.state.fullArt} />
            </Lightbox>

            <ButtonBox>
                <GalleryNavButton 
                    buttonStyle = {buttonStyle} 
                    buttonBright={digitalButtonOn} 
                    buttonDark={digitalGalleryButton} 
                    galleryName={'digital'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck} 
                   />

                <GalleryNavButton 
                    buttonStyle = {buttonStyle} 
                    buttonBright={illustrationsButtonOn} 
                    buttonDark={illustrationsGalleryButton} 
                    galleryName={'illustration'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck}
                    />

                <GalleryNavButton 
                    buttonStyle = {buttonStyle} 
                    buttonBright={sketchbookButtonOn} 
                    buttonDark={sketchbookGalleryButton} 
                    galleryName={'sketchbook'} 
                    clicked={this.toggleArtwork}
                    toggled={this.buttonToggleCheck}
                    />
            </ButtonBox>
            

                    <GalleryWindow >
                        <ImageImporter galleryName={this.state.currentGallery} clicked={this.viewFullArt}/>
                    </GalleryWindow>

            </Aux>
        )}

}

export default Portfolio;