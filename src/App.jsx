import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
