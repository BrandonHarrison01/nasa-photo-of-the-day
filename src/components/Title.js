import React from 'react'

function Title (props) {
    return(
        <div>
            <h2>{props.nasaData.title}</h2>
            <h3>{props.nasaData.date}</h3>
        </div>
    )
}

export default Title