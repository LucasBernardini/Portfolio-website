import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
