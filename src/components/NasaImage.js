import React from 'react';

function NasaImage (props) {
    return(
        <div className='imageContainer'>
            {props.nasaData.media_type === 'image' ? 
                <img 
                    src={props.nasaData.url} 
                    alt='Nasa content of the day'
                /> :    
                <iframe 
                    className="player" 
                    title="Nasa Video"
                    scrolling='no'
                    width='99%'
                    height='600px'
                    src={props.nasaData.url}
                />
            }
        </div>
    )
}

export default NasaImage