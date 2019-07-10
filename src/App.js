import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import NasaImage from './components/NasaImage';
import Title from './components/Title';
import Description from './components/Description';

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=e23odHRz4buvCf4SphnZhnI7fkaojwyVaC19TKYF')
      .then(res => setNasaData(res.data))
      .catch(err => console.log(err))
  }, []);

  console.log('THIS IS NASA DATA', nasaData)

  return (
    <div className="App">
      <h1>Nasa Photo of the Day!</h1>
      <Title nasaData={nasaData} />
      <NasaImage url={nasaData.url} />
      <Description description={nasaData.explanation} />
    </div>
  );
}

export default App;
