import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skills";
import Projects from './components/projects/projects';
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
