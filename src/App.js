import React from "react";
import "./App.css";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Image from './components/Image';
import Explanation from './components/Explanation';
import ExtraStuff from './components/extraStuff';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
