import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/Title';
import Img from './components/Image';
import Explanation from './components/Explanation';
import ExtraStuff from './components/extraStuff';

function App() {
const [nasa, setNasa] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=9AbzILPniiieYHA8MPMNrbmTk5y1jqh9t0svIYkq`)
    .then(res => {
      setNasa(res.data)
    })
    .catch(error => {
      console.error(error)
    })

  },[])
  console.log(nasa)





  return (
    <div className="App">
      <h1> Welcome to the NASA photo of the day!</h1>
    </div>
  );
}

export default App;
