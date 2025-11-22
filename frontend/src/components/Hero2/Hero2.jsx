import React from "react";

import Video from "../../assets/Intro.mp4"

import './Hero2.css';

function Hero2() {
    return (
        <>
            <section className="hero2 autoBlur">
                <div className="vid-sec">
                    <video loop autoPlay muted playsInline className="hero-vid">\
                        <source src={Video} type="video/mp4" />
                    </video>

                    <div className="hero-info">
                        <h1>The Preserver</h1>
                        <p>Enter into the realm of preservation</p>
                        <button>Watch Trailer</button>
                    </div>

                    <h1 className="gaming-text">Avanta Studios</h1>
                </div>
            </section>
        </>
    );
}

export default Hero2;