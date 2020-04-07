import React from 'react';
import Aux from '../../hoc/AuxComponent/AuxComponent';
import Banner from '../../Containers/Banner/Banner'; 
import Portfolio from '../../Containers/Portfolio/Portfolio';

import DisplaySpace from '../../hoc/DisplaySpace/DisplaySpace';

// This component is meant to set layout only
const farbackcolor = {
    backgroundColor: '#2d1301'
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