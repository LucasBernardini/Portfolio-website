import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skills";
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
