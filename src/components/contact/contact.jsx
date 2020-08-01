import React from 'react'
import ig from '../../assets/logos/contact/logo-instagram.svg';
import github1 from "../../assets/logos/contact/logo-github.svg";
import linkedin from "../../assets/logos/contact/logo-linkedin.svg";
import './contact.scss';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact__container">
                <h2 className="contact__heading">Contact</h2>
            </div>
            <div className="contact__container">
            <div className="contact__container--1">
                <h2 className="contact__sub">Social</h2>
                <div>
                <img className="contact__icon" src={ig} alt="instagram"/>
                <img className="contact__icon" src={github1} alt="github"/>
                <img className="contact__icon" src={linkedin} alt="linkedin"/>
                </div>
            </div>
            <div className="contact__container--1" >
                <h2 className="contact__sub">Contact</h2>
                <p className="contact__text">lucas.bernardini97@gmail.com</p>
                <p className="contact__text">416 · 573 · 1523</p>
            </div>
            </div>
            <div className="contact__container--2 contact__container">
                <p className="contact__text--bot">Do you need some development work done? feel free to reach out to me on any of the methods provided above!</p>
            </div>
        </div>
    )
}
