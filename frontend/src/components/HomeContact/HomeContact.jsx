import React from "react";

import Image1 from '../../assets/Img4.jpeg';
import Image2 from '../../assets/Img2.jpeg';
import Image3 from '../../assets/Img3.jpeg';

import './HomeContact.css'

function HomeContact() {
    return (
        <section className="contact-sec">
            <p>Join Avanta</p>
            <div className="autoBlur">
                <h1>Join Us to get latest updates</h1>
            </div>

            <button>CONTACT US</button>

            <img src={Image1} alt="Contact Image" className="contact-img1" />
            <img src={Image2} alt="Contact Image" className="contact-img2" />
            <img src={Image3} alt="Contact Image" className="contact-img3" />
        </section>
    );
}

export default HomeContact