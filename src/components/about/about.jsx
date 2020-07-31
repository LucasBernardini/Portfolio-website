import React from "react";
import lucas from '../../assets/lucas-animation.png';
import "./about.scss";

export default function About() {
  return (
    <div className="about">
        <div className="about__container about__container--1">
      <h2 className="about__title" >About Me</h2>
      <img className="about__image" src={lucas} alt="animated profile"/>
      </div>
      <div className="about__container">
      <p className="about__text">
        I originally come from a background in banking and finance. I attended
        York University and achieved a Bachelors of Commerce degree, then I went
        to work for Bank of Montreal in various roles. I was never satisfied
        with the work I was doing and felt very limited. Once realizing this, I
        then began to look for industries where I am able to constantly learn,
        have more creative freedom and implement technologies that are
        revolutionizing society's future. This is when I stumbled upon web
        development. I have completed BrainStations 12 week web development
        bootcamp where I learned to use and implement various technologies such
        as HTML, CSS/SASS, Javascript - React, Node, and MySQL.
        <br />
        <br />
        Im am currently available for hire and/or employment opportunities. If
        you would like to get in contact with me please check out the contact
        section of my website.
        <br />
        <br />
        Thanks for stopping by!
      </p>
      </div>
    </div>
  );
}
