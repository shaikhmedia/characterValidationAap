import React from 'react'

const character = (props) => {
    return (
        <div className="char" onClick={props.delete}>
            {props.char}
        </div>
    )
}

export default character;