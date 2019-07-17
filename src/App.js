import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import NasaImage from './components/NasaImage';
import Title from './components/Title';
import Description from './components/Description';

function App() {
  
  const Card = styled.div`
    border: 2px solid black;
    background-color: #444;
    width: 80%;
    margin: 0 auto 100px;
  `;

  const Heading = styled.h1`
    text-align: center;
    color: #bbb;
    margin: 60px 0 40px;
  `

  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=e23odHRz4buvCf4SphnZhnI7fkaojwyVaC19TKYF')
      .then(res => setNasaData(res.data))
      .catch(err => console.log(err))
  }, []);

  if(!nasaData) return <h3>loading...</h3>
  return (
    <div className="App">
      <Heading>Nasa Photo of the Day!</Heading>
      <Card>
        <Title nasaData={nasaData} />
        <NasaImage nasaData={nasaData} />
        <Description description={nasaData.explanation} />
      </Card>
    </div>
  );
}

export default App;
