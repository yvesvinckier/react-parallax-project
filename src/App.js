import React, { Component } from 'react';
import { LandingPage, PenPage } from "./pages";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingPage /> */}
        <PenPage />
      </div>
    );
  }
}

export default App;
