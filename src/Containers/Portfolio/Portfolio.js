import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';
import digital from '../../assets/website-designs/digital_button_design.png';
import illustrated from '../../assets/website-designs/illustration_button_design.png';
import sketch from '../../assets/website-designs/sketch_button_design.png';


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
                <GalleryNavButton buttonStyle = {buttonStyleTop} source={digital} galleryName={'digital'} clicked={this.toggleArtwork} />
                <GalleryNavButton buttonStyle = {buttonStyleMiddle} source={illustrated} galleryName={'illustration'} clicked={this.toggleArtwork}/>
                <GalleryNavButton buttonStyle = {buttonStyleBottom} source={sketch} galleryName={'sketchbook'} clicked={this.toggleArtwork}/>
            </Aux>
        )}

}

export default Portfolio;