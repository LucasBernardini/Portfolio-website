import React from "react";
import lucas from "../../assets/lucas-animation.png";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about__container about__container--1">
        <h2 className="about__title">About Me</h2>
        <img className="about__image" src={lucas} alt="animated profile" />
      </div>
      <div className="about__container">
        <p className="about__text">
          I have a passion for developing websites and web applications using
          Javascript. The majority of my projects are built using React.js in
          conjunction with CSS/SASS. I am always learning and building on my
          existing tools, whether that is advanced knowledge of my current
          skills or new technologies. Becoming a developer has always been a
          goal of mine due to my passions for technology, creativity and problem
          solving. I have spent the beginning of my working life in the banking
          and finance industry. Pivoting to development and tech has been an
          amazing journey and I am looking forward to the future of the web
          development industry!
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
