import React, { Component } from 'react';
import Konto from "./Components/Konto"

class App extends Component {

  render() {
    return (
      <div className = "container">
        <h1>Banana Bank</h1>
        <div class="text-center">
        <img src="https://source.unsplash.com/random/1100x300?money" className = "rounded" alt="bild"/>
        </div>
        <hr/>
        <Konto/>
      </div> 
    );
  }
}

export default App;
