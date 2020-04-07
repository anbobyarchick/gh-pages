import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';

import BannerDesign from '../../assets/website-designs/website_banner_design.png'

// This component is the space which displays the website navigation drop-menu, logo, and potential images
// CSS GUIDE ### BANNER
// Remains at the top of the website at all times
// Logo is displayed in the center of the banner space not occupied by nav drop down
// Navigation dropdown is displayed top-right at all times
// As width shrinks the nav drop down always remains top right


const bannerStyle = {
    width: '100%',
    marginBottom: '10px',
    height: '20%',
    position: 'relative',
    objectFit: 'scale-down'
}
const bannerDesign ={
    objectFit: 'cover',
    minHeight: '200px',
    width: '100%'
}

const banner = () => (
    <Aux>
        <div style={bannerStyle}>
            
             <img src={BannerDesign} style={bannerDesign} alt='banner' ></img>
           

        

        </div>
    </Aux>

);

export default banner;