import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';
import {digitalGalleryButton, illustrationsGalleryButton, sketchbookGalleryButton, digitalButtonOn, illustrationsButtonOn, sketchbookButtonOn } from '../../assets/website-designs/website-designs-index/website-designs-index';
import ButtonBox from '../../Components/ButtonBox/ButtonBox';
import Lightbox from '../../Components/Lightbox/Lightbox';
import ImageImporter from '../ImageImporter/ImageImporter';
import LightboxArt from '../../Components/Lightbox/LightboxArt';
import {digitalIndex} from '../../assets/assetsIndex/assetIndex';
import illustrationsArray from '../../assets/artwork/illustrations/illustrationsIndex';
import sketchbookIndex from '../../assets/artwork/SketchbookOne/sketchbookIndex';
import Frame from '../../Containers/Frame/Frame';

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

    viewFullArt = (art) => {
        console.log("before set state: fullArt = "+this.state.fullArt);
        this.setState({
            fullArt: art,
            showLightbox:true
        });
        console.log("after setting full art = "+this.state.fullArt);
    }
    

    render () {
        return (
            <Aux>

            <Lightbox showing={this.state.showLightbox} >
                <LightboxArt fullArt={this.state.fullArt} />
                <button onClick={this.closeLightbox} >Close View</button>
            </Lightbox>

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
            

                    <Frame  >
                        <ImageImporter galleryName={this.state.currentGallery} clicked={this.viewFullArt}/>
                    </Frame>

            </Aux>
        )}

}

export default Portfolio;