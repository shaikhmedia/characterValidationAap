import React from 'react'
 
const validation = (props) => {
    const styleRed = {
        backgroundColor: 'red',
        color: 'white'
    }
    let validationMessage = <p className="validation" style={styleRed}>Text is too short</p>

    const styleGreen = {
        backgroundColor: 'green',
        color: 'white'
    }

    if(props.chCount >= 5) {
        validationMessage = <p className="validation" style={styleGreen}>Text is long enough</p>
    }

    return (
       validationMessage 
    )
}

export default validation