import React from 'react'
import styled from 'styled-components';

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`;

function Title (props) {
    return(
        <CardHeader>
            <h2>{props.nasaData.title}</h2>
            <h3>{props.nasaData.date}</h3>
        </CardHeader>
    )
}

export default Title