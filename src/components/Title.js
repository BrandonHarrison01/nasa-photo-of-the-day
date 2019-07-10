import React from 'react'

function Title (props) {
    return(
        <div>
            <h3>{props.nasaData.title}</h3>
            <h3>{props.nasaData.date}</h3>
        </div>
    )
}

export default Title