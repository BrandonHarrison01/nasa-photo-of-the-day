import React from "react";
import "./App.css";

import NasaImage from './components/NasaImage';

function App() {
  return (
    <div className="App">
      <h1>Nasa Photo of the Day!</h1>
      <NasaImage />
    </div>
  );
}

export default App;
