import React from 'react';

function NasaImage (props) {
    return(
        <div>
            <img src={props.nasaData} alt='nasa of the day' />
        </div>
    )
}

export default NasaImage