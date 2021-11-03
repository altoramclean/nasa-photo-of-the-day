import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/Title';
import Img from './components/Image';
import explanation from './components/Explanation';
import ExtraStuff from './components/extraStuff';

function App() {

const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      setData(res.data);
    })
    .catch(error => {
      console.error(error);
    })

  }, [])
  console.log(data)





  return (
    <div className="App">
      <h1> Welcome to the NASA photo of the day!</h1>
    </div>
  );
}

export default App;
