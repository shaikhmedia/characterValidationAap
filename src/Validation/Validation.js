import React from 'react'
 
// Validation component
const validation = (props) => {
    // Style for 'Text is too short'
    const styleRed = {
        backgroundColor: 'red',
        color: 'white'
    }
    // Define the validation message
    let validationMessage = <p className="validation" style={styleRed}>Text is too short</p>

    // Style for 'Text is long enough'
    const styleGreen = {
        backgroundColor: 'green',
        color: 'white'
    }

    // Change validatio status based on text length count
    if(props.chCount >= 5) {
        validationMessage = <p className="validation" style={styleGreen}>Text is long enough</p>
    }

    // Return JSX
    return (
       validationMessage 
    )
}

export default validation