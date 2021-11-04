import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaCard from './components/extraStuff.js';
import styled from 'styled-components';



const StyleHead = styled.h1`
font-size: 1.8em;
text-align: center;
color: #696969;
`;

const StyleBack = styled.div`
background-color: #B8860B;
border-radius: 40px;
`;


  
function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby')
      .then(res => {
        setNasaData(res.data);
      }).catch(err => console.error(err));
  }, [])

  return (
    <div className = 'App'> 
    <StyleBack>
    <StyleHead>
      <h1>
        Welcome to the Nasa Photo of the Day!<span role="img" aria-label='go!'>🚀🚀</span>
      </h1>
      </StyleHead>
      </StyleBack>
      { nasaData && <NasaCard data={nasaData} /> }
      </div>
    
  );
  
}

export default App;
