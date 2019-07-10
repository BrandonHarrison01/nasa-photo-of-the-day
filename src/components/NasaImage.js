import React from 'react';

function NasaImage (props) {
    return(
        <div>
            {/* <img src={props.nasaData} alt='nasa of the day' /> */}
            <video width="320" height="240" autoPlay>
                <source src={props.url} />
            </video>
        </div>
    )
}

export default NasaImage