import React from 'react';

const buttonBoxStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'center'
}

const buttonBox = (props) =>{
    const buttons = props.children;
    return (
        <div style={buttonBoxStyle}>
            {buttons}
        </div>
    )
}

export default buttonBox;