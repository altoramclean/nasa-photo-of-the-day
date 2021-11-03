import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaCard from './components/extraStuff.js';

  
function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby')
      .then(res => {
        setNasaData(res.data);
      }).catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      <h1>
        Welcome to the Nasa Photo of the Day!<span role="img" aria-label='go!'>🚀</span>
      </h1>
      { nasaData && <NasaCard data={nasaData} /> }
    </div>
  );
}
export default App;
