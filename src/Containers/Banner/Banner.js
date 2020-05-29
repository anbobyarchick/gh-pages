import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';

import BannerArt from '../../assets/website-designs/banner_simple.png'

const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px',
    minWidth: '620px'
}
const bannerDesign ={
    objectFit: 'cover',
    minHeight: '100px',
    minWidth: '100%'
}

const banner = () => (
    <Aux>
        <div style={bannerStyle}>
            
             <img src={BannerArt} style={bannerDesign} alt='banner' ></img>
           

        

        </div>
    </Aux>

);

export default banner;