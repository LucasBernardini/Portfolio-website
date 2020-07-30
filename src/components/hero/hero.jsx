import React from "react";
import headshot from '../../assets/headshot.jpg';
import "./hero.scss";


export default function Hero() {
  return (
    <div className="hero">
      <img className="hero__photo" src={headshot} alt="headshot" />
      <p className="hero__text">
        Hi, my name is Lucas. <br /> <br /> I am a full stack web developer from
        Toronto, Ontario. <br /> <br /> I build websites &amp; web applications
        to help businesses and individuals grow their online presence.
      </p>
    </div>
  );
}
