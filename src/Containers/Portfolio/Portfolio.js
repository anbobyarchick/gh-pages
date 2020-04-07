import React, {Component, useState } from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow';
import GalleryNavButton from '../../Components/GalleryNavButton/GalleryNavButton';


// This component manages state!
// This component holds the gallery window and portfolio navigation space (3 buttons to switch
//  between portfolio sources)
// The width of the portfolio navigation space should match the width of the gallery window
// This Components position maintains a static left margin, min-width, max-width, uniform padding

// const portfolioStyle = {

//     maxWidth: '90%',
//     minWidth: '30%',
//     display: 'flex',
//     flexDirection: 'row',

// }


class Portfolio extends Component {

    state = {
        currentGallery: ''
    }
    
    gallerySwitch = (event) => {
        const newGallery = event.target.galleryName;
        this.setState({
            currentGallery: newGallery
        });
        console.log('STATE > GALLERY > '+this.state.currentGallery);
    }
           

    render () {
        return (
            <Aux>
                {/* GALLERY IS BEING SET HERE! */}
                <GalleryWindow galleryName={'sketchbook'}/>
                <GalleryNavButton galleryName={'digital'} clicker={this.gallerySwitch} />
                <GalleryNavButton galleryName={'illustrations'} clicker={this.gallerySwitch}/>
                <GalleryNavButton galleryName={'sketchbook'} clicker={this.gallerySwitch}/>
            </Aux>
        )}

}

export default Portfolio;