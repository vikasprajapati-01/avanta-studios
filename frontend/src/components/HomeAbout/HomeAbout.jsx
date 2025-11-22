import React from "react";

import Image1 from '../../assets/Img4.jpeg'

import AboutInfo from "../AboutInfo/AboutInfo";

import './HomeAbout.css';

function HomeAbout() {
    return (
        <section className="about-sec">
            <p>Welcome to Avanta Studios</p>
            <div className="autoBlur">
                <h1 className="about-title">Dive into the world of gaming innovation</h1>
            </div>

            <div className="about-img autoImgFull">
                <img src={Image1} alt="About-Image" />
            </div>

            <h4>The Presever, dive into the world of gods</h4>
            <h5>Avanta provides the players with the history of Gods</h5>

            <AboutInfo />
        </section>
    );
}

export default HomeAbout;