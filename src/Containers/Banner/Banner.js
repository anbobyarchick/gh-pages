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