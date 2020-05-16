import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';
import Banner from '../../Containers/Banner/Banner'; 
import Portfolio from '../../Containers/Portfolio/Portfolio';
import {featherPattern} from '../../assets/website-designs/website-designs-index/website-designs-index';
import DisplaySpace from '../../hoc/DisplaySpace/DisplaySpace';

// This component is meant to set layout only
const farbackcolor = {
    // backgroundImage: 'url('+featherPattern+')',
    // backgroundRepeat: 'repeat',
    backgroundColor: '494f79',
    // backgroundSize: 'tile',
    // // backgroundPosition: 'right'
    // backgroundOrigin: 'border-box'

}
const layout = (props) => (
    <Aux>
        
        <div style={farbackcolor}>
            
            <DisplaySpace>
                <Banner />
                <Portfolio />
            </DisplaySpace>
        </div>
       
    </Aux>
);

export default layout;