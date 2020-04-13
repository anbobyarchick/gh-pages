import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';
import Banner from '../../Containers/Banner/Banner'; 
import Portfolio from '../../Containers/Portfolio/Portfolio';
import {backgroundDesign} from '../../assets/website-designs/website-designs-index/website-designs-index';
import DisplaySpace from '../../hoc/DisplaySpace/DisplaySpace';

// This component is meant to set layout only
const farbackcolor = {
    backgroundImage: 'url('+backgroundDesign+')',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#2d1301',
    backgroundSize: 'cover',
    // backgroundPosition: 'right'
    backgroundOrigin: 'border-box'

}
const layout = (props) => (
    <Aux>
        
        <div style={farbackcolor}>
            <Banner />
            <DisplaySpace>
                <Portfolio />
            </DisplaySpace>
        </div>
       
    </Aux>
);

export default layout;