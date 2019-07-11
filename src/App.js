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
  `;

  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=e23odHRz4buvCf4SphnZhnI7fkaojwyVaC19TKYF')
      .then(res => setNasaData(res.data))
      .catch(err => console.log(err))
  }, []);

  if(!nasaData) return <h2>loading...</h2>
  return (
    <div className="App">
      <h1>Nasa Photo of the Day!</h1>
      <Card>
        <Title nasaData={nasaData} />
        <NasaImage nasaData={nasaData} />
        <Description description={nasaData.explanation} />
      </Card>
    </div>
  );
}

export default App;
