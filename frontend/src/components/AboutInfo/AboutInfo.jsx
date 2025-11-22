import React from "react";

import Image1 from '../../assets/Img1.jpeg'
import Image2 from '../../assets/Img2.jpeg'
import Image3 from '../../assets/Img3.jpeg'
import Image4 from '../../assets/Img4.jpeg'

import './AboutInfo.css'

function AboutInfo() {
    return (
        <section className="about-info">
            <h3>Into the Avanta Studios</h3>
            <p>Welcome to <span className="text-[var(--primary-300)]">Matsya Avtar</span>, where ancient mythology comes alive in an epic adventure inspired by the legends of Vishnu</p>

            <div className="info-cards">
                <div className="info-card autoDisplay">
                    <h1>Our History</h1>
                    <p>Our startup was launched in 2025 with a vision to revive and share Indian mythology through gaming</p>

                    {/* <video src="" autoPlay loop muted playsInline></video> */}
                    <img src={Image1} alt="History" />

                    {/* <button>Check Out</button> */}
                </div>

                <div className="info-card autoDisplay">
                    <h1>Our Vision</h1>
                    <p>Our vision is to become the leading storyteller of Indian mythology in the gaming world, inspiring curiosity and pride in our cultural heritage</p>

                    {/* <video src="" autoPlay loop muted playsInline></video> */}
                    <img src={Image2} alt="Vision" />

                    {/* <button>Check Out</button> */}
                </div>
                <div className="info-card autoDisplay">
                    <h1>Our Mission</h1>
                    <p>Our vision is to become the leading storyteller of Indian mythology in the gaming world, inspiring curiosity and pride in our cultural heritage</p>

                    {/* <video src="" autoPlay loop muted playsInline></video> */}
                    <img src={Image3} alt="Vision" />

                    {/* <button>Check Out</button> */}
                </div>

                <div className="info-card autoDisplay">
                    <h1>Our Project</h1>
                    <p>Our vision is to become the leading storyteller of Indian mythology in the gaming world, inspiring curiosity and pride in our cultural heritage</p>

                    {/* <video src="" autoPlay loop muted playsInline></video> */}
                    <img src={Image4} alt="Vision" />

                    {/* <button>Check Out</button> */}
                </div>
{/* 
                <div className="info-card">
                    <img src={Image1} alt="History" />
                </div>

                <div className="info-card">
                    <h1>More games coming soon</h1>
                </div> */}
            </div>
        </section>
    )
}

export default AboutInfo