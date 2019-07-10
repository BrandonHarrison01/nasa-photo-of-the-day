import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import NasaImage from './components/NasaImage';

function App() {

  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      // .then(res => console.log(res))
      .then(res => setNasaData(res.data.message))
      .catch(err => console.log(err))
  }, []);

  console.log('THIS IS NASA DATA', nasaData)
  return (
    <div className="App">
      <h1>Nasa Photo of the Day!</h1>
      <NasaImage nasaData={nasaData} />
    </div>
  );
}

export default App;
