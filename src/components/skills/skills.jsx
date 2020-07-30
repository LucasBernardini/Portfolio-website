import React from "react";
import sassl from "../../assets/logos/sass-logo.png";
import reactlogo from "../../assets/logos/react-logo.png";
import wp from "../../assets/logos/wp-logo.png";
import shopify from "../../assets/logos/shopify-logo.png";
import nodelogo from "../../assets/logos/node-logo.png";
import sql from "../../assets/logos/mysql-logo.png";
import firebaselogo from "../../assets/logos/firebase-logo.png";
import githublogo from "../../assets/logos/GitHub-Logo.png";
import ps from "../../assets/logos/ps.png";
import xd from "../../assets/logos/xd-logo.svg";
import glasses from "../../assets/logos/glasses-outline.svg";

import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__title">
        Skills &amp; <br /> Technologies
        <img className="skills__glass" src={glasses} alt="glasses"/>
      </div>
      <div className="skills__container">
        <div className="skills__container--divider">
          <div className="skills__container--text">
            <h2 className="skills__sub">Front-end</h2>
            <p className="skills__text">HTML</p>
            <p className="skills__text">CSS // SASS</p>
            <p className="skills__text">Javascript // React</p>
            <p className="skills__text">Wordpress</p>
            <p className="skills__text">Shopify</p>
          </div>
          <div className="skills__container--images">
            <img className="skills__image" src={reactlogo} alt="react" />
            <img className="skills__image" src={sassl} alt="sass" /> <br/>
            <img className="skills__image" src={wp} alt="wordpress" />
            <img className="skills__image" src={shopify} alt="shopify" />
          </div>
        </div>
        <div className="skills__container--divider">
          <div className="skills__container--text">
            <h2 className="skills__sub">Back-end // Databases</h2>
            <p className="skills__text">Javascript // Node</p>
            <p className="skills__text"> MySQL</p>
            <p className="skills__text">Firebase</p>
          </div>
          <div className="skills__container--images">
            <img className="skills__image" src={nodelogo} alt="node" />
            <img className="skills__image" src={sql} alt="mySQL" /> <br/>
            <img className="skills__image" src={firebaselogo} alt="firebase" />
          </div>
        </div>
        <div className="skills__container--divider">
          <div className="skills__container--text">
            <h2 className="skills__sub">Other Technologies</h2>
            <p className="skills__text">Adobe XD</p>
            <p className="skills__text">Adobe Photoshop</p>
            <p className="skills__text">Git // Github</p>
            <p className="skills__text">Jira</p>
          </div>
          <div className="skills__container--images">
            <img className="skills__image" src={xd} alt="adobe XD" />
            <img className="skills__image" src={ps} alt="adobe photoshop" /> <br/>
            <img className="skills__image" src={githublogo} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
}
