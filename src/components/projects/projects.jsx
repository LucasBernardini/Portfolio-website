import React from "react";
import "./projects.scss";
import ReactCardFlip from "react-card-flip";
import mac from "../../assets/logos/laptop-outline.svg";
import party from "../../assets/partyflix.png";
import billionaire from "../../assets/billionaire-photo.png";
import beyond from "../../assets/Beyond-body.png";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="projects" id="projects">
        <div className="projects__container">
          <h2 className="projects__title">Projects</h2>
          <img className="projects__title--image" src={mac} alt="computer" />
        </div>
        <div className="projects__container--work">
          <div className="projects__project">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="Horizontal"
            >
              <div className="projects__project--front">
                  <div>
                <h3 className="projects__name">PartyFlix</h3>
                <img className="projects__computer" src={party} alt="Party Flix"/>
                </div>
                <div>
                <button className="projects__button" onClick={this.handleClick}>
                  More Info
                </button>
                </div>
              </div>

              <div className="projects__project--back">
                  <div className="fix">
                <p><a target="_blank" href="https://www.youtube.com/watch?v=OkwUHPYF908" className="github">see demo</a></p> <br/>
                <p className="projects__info">
                  PartyFlix is an application concept created in 24 hours for
                  the BrainStation x Bell Canada 3D Hackathon. We created a
                  platform that will allow for users to stream their favourite
                  movies with family and friends while on video chat. The project was built by myself &amp; Oliver
                  Levy. These projects were judged and we came second.
                </p>
                </div>
                <div className="fix">
                <p><a className="github"  target="_blank" href="https://github.com/LucasBernardini/3D-Hackathon">see code</a></p>
                <button className="projects__button" onClick={this.handleClick}>
                  Back
                </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="projects__project">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="Horizontal"
            >
              <div className="projects__project--front">
                  <div>
                <h3 className="projects__name">Billionaire Club</h3>
                <img className="projects__computer" src={billionaire} alt="Billionaire Club"/>
                </div>
                <div>
                <button className="projects__button" onClick={this.handleClick}>
                  More Info
                </button>
                </div>
              </div>

              <div className="projects__project--back">
                  <div>
                 <p><a target="_blank" href="https://www.youtube.com/watch?v=ZejTjLzB2Vw" className="github">see demo</a> </p> <br/>
                 <p className="projects__info">
                  Billionaire Club was created in 7 hours as part of
                  BrainStations Spring 2020 Online Live Hackathon. This
                  application compares your income information to the income of
                  the richest people on Earth. You are also able to see
                  information on each of the richest individuals. The project
                  was built by myself &amp; Oliver Levy. The projects were
                  judged and we won first place.
                </p>
                </div>
                <div>
                 <p><a className="github" target="_blank" href="https://github.com/LucasBernardini/Billionaire-club" >see code</a> </p>
                <button className="projects__button" onClick={this.handleClick}>
                  Back
                </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="projects__project">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="Horizontal"
            >
              <div className="projects__project--front">
                  <div>
                <h3 className="projects__name">Beyond Body</h3>
                <img className="projects__computer" src={beyond} alt="Beyond Body"/>
                </div>
                <div>
                <button className="projects__button" onClick={this.handleClick}>
                  More Info
                </button>
                </div>
              </div>

              <div className="projects__project--back">
                  <div>
                <p><a target="_blank" href="https://www.youtube.com/watch?v=olcjPrl2gOI" className="github">see demo</a></p> <br/>
                <p className="projects__info">BeyondBody is an outlet for our users to express their
                  thoughts and feelings through journaling. COVID-19 has made
                  society less interactive leaving many individuals alone for
                  long periods of time. Journaling can be used for multiple
                  reasons, with the goal to clear someone's mind, promote
                  healthy habits and reflect back on the thoughts they have
                  written down.</p>
                </div>
                <div>
                <p><a className="github" target="_blank" href="https://github.com/LucasBernardini/BeyondBody">see code</a></p>
                <button className="projects__button" onClick={this.handleClick}>
                  Back
                </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="projects__project">
            <ReactCardFlip
              isFlipped={this.state.isFlipped}
              flipDirection="Horizontal"
            >
              <div className="projects__project--front">
                  <div>
                <h3 className="projects__name">More coming soon</h3>
                </div>
                <div>
                {/* <button className="projects__button" onClick={this.handleClick}>
                  More Info
                </button> */}
                </div>
              </div>

              <div className="projects__project--back">
                  <div>
                <p>Coming soon</p>
                <p>...</p>
                </div>
                <div>
                <button className="projects__button" onClick={this.handleClick}>
                  Back
                </button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}
