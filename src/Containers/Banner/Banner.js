import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';

import BannerArt from '../../assets/website-designs/banner_simple.png'

// This component is the space which displays the website navigation drop-menu, logo, and potential images
// CSS GUIDE ### BANNER
// Remains at the top of the website at all times
// Logo is displayed in the center of the banner space not occupied by nav drop down
// Navigation dropdown is displayed top-right at all times
// As width shrinks the nav drop down always remains top right


const bannerStyle = {
    width: '100%',
    marginBottom: '10px',
    height: '10%',
    position: 'relative'
    // objectFit: 'scale-down'
}
const bannerDesign ={
    objectFit: 'scale-down',
    minHeight: '100px',
    maxWidth: '100%'
}

const banner = () => (
    <Aux>
        <div style={bannerStyle}>
            
             <img src={BannerArt} style={bannerDesign} alt='banner' ></img>
           

        

        </div>
    </Aux>

);

export default banner;