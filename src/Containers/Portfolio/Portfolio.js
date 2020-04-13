import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';
import {digitalGalleryButton, illustrationsGalleryButton, sketchbookGalleryButton} from '../../assets/website-designs/website-designs-index/website-designs-index';


const buttonStyleTop = {
    position: 'fixed',
    top: '30%',
    right: '1%',
    backgroundColor: '#692d03',
    justifyContent: 'center',
    maxWidth: '18%',
    height: '15%',
    objectFit: 'scale-down'

}
const buttonStyleMiddle = {
    position: 'fixed',
    top: '50%',
    right: '1%',
    backgroundColor: '#692d03',
    justifyContent: 'center',
    height: '15%',
    maxWidth: '18%',
    objectFit: 'scale-down'

}    
const buttonStyleBottom = {
    position: 'fixed',
    top: '70%',
    right: '1%',
    backgroundColor: '#692d03',
    justifyContent: 'center',
    height: '15%',
    maxWidth: '18%',
    objectFit: 'scale-down'


}    

class Portfolio extends Component {

    state = {
        currentGallery: 'promotional'
    }
    
    toggleArtwork = (artwork) => {
        
        this.setState({
            currentGallery: artwork
        });
        console.log('state gallery'+this.state.currentGallery)
    }
           

    render () {
        return (
            <Aux>
                <GalleryWindow galleryName={this.state.currentGallery}/>
                <GalleryNavButton buttonStyle = {buttonStyleTop} source={digitalGalleryButton} galleryName={'digital'} clicked={this.toggleArtwork} />
                <GalleryNavButton buttonStyle = {buttonStyleMiddle} source={illustrationsGalleryButton} galleryName={'illustration'} clicked={this.toggleArtwork}/>
                <GalleryNavButton buttonStyle = {buttonStyleBottom} source={sketchbookGalleryButton} galleryName={'sketchbook'} clicked={this.toggleArtwork}/>
            </Aux>
        )}

}

export default Portfolio;